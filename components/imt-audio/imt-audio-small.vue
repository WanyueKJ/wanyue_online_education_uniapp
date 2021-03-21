<template>
	<view class="imt-audio">
		<view class="audio-control-wrapper" :style="{color}">
			<!-- <view class="audio-control audio-control-prev" v-if="control" :style="{borderColor:color}" @click="prev">&#xe601;</view> -->
			<view class="audio-control audio-control-switch" :class="{audioLoading:loading}" :style="{borderColor:color}" @click="audio.paused?play():audio.pause()">{{loading?'&#xe600;':(paused?'&#xe865;':'&#xe612;')}}</view>
			<!-- <view class="audio-control audio-control-next" v-if="control" :style="{borderColor:color}" @click="next">&#xe601;</view> -->
		</view>
		<view class="audio-wrapper">
			<view class="audio-number">{{format(current)}}</view>
			<slider class="audio-slider" :activeColor="color" block-size="16" :value="current" :max="duration" @changing="seek=true,current=$event.detail.value"
			 @change="audio.seek($event.detail.value)"></slider>
			<view class="audio-number">{{format(duration)}}</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				audio: uni.createInnerAudioContext(),
				current: 0, //当前进度(s)
				duration: 0, //总时长(s)
				paused: true, //是否处于暂停状态
				loading: false, //是否处于读取状态
				seek: false //是否处于拖动状态
			}
		},
		props: {
			src: String, //音频链接
			autoplay: Boolean, //是否自动播放
			continue: Boolean, //播放完成后是否继续播放下一首，需定义@next事件
			control: {
				type: Boolean,
				default: true
			}, //是否需要上一曲/下一曲按钮
			color: {
				type: String,
				default: '#38DAA6'
			} //主色调
		},
		methods: {
			//返回prev事件
			prev() {
				this.$emit('prev')
			},
			//返回next事件
			next() {
				this.$emit('next')
			},
			//格式化时长
			format(num) {
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(
					Math.floor(num % 60)).length) + Math.floor(num % 60)
			},
			pause(){
				this.audio.pause()
			},
			//点击播放按钮
			play() {
				this.audio.play()
				this.loading = true
			}
		},
		created() {
			if (this.src) {
				this.audio.src = this.src;
				// this.autoplay && this.play();
			}
			this.audio.play()
			this.audio.volume = 0
			setTimeout(() => {
				this.audio.pause()
				this.audio.volume = 0.5
			}, 500)
			this.audio.obeyMuteSwitch = false
			this.audio.onCanplay((res) => {
				this.audio.duration;
				setTimeout(() => {
					console.log('获取音频长度');
					console.log(this.audio.duration); // 401.475918
					this.duration = this.audio.duration
				}, 1000)
			});
			//音频进度更新事件
			this.audio.onTimeUpdate(() => {
				if (!this.seek) {
					this.current = this.audio.currentTime
				}
				if (!this.duration) {
					this.duration = this.audio.duration
				}
			})
			//音频播放事件
			this.audio.onPlay(() => {
				this.$emit("audiopaused"); //控制父页面视频暂停
				this.paused = false
				this.loading = false
			})
			//音频暂停事件
			this.audio.onPause(() => {
				this.paused = true
			})
			//音频结束事件
			this.audio.onEnded(() => {
				if (this.continue) {
					this.next()
				} else {
					this.paused = true
					this.current = 0
				}
			})
			//音频完成更改进度事件
			this.audio.onSeeked(() => {
				this.seek = false
			})
		},
		beforeDestroy() {
			this.audio.destroy()
		},
		watch: {
			src(src, old) {
				this.audio.src = src
				this.current = 0
				this.duration = 0
				if (old || this.autoplay) {
					// this.play()
				}
			}
		}
	}
</script>
<style scoped>
	@font-face {
		font-family: 'icon';
		src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot');
		src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff') format('woff'),
			url('//at.alicdn.com/t/font_1104838_fxzimc34xw.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1104838_fxzimc34xw.svg#iconfont') format('svg');
	}

	/* 改变滚动球起始位置 */
	/deep/ uni-slider .uni-slider-thumb {
		left: 0%;
	}

	.imt-audio {
		padding-top: 5px;
		padding-bottom: 5px;
		/* padding: 30upx 0; */
		background: #fff;
		/* border-radius: 20upx; */
		display: flex;
		align-items: center;
		background-color: #FAFAFA;
		/* background-color: #007AFF; */
	}

	.audio-control-wrapper {
		/* margin-top: 10px; */
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "icon" !important;
		float: left;
		width: 15%;
	}

	.audio-wrapper {
		display: flex;
		align-items: center;
		width: 85%;
		float: left;
	}

	.audio-number {
		width: 60px;
		font-size: 12px;
		line-height: 1;
		color: #333;
		text-align: center;
	}

	.audio-slider {
		flex: 1;
		margin: 0;
	}

	.audio-control-wrapper .audio-control {
		font-size: 10px !important;
		line-height: 1;
		border: 2px solid;
		border-radius: 50%;
		padding: 8px;
	}

	.audio-control-next {
		transform: rotate(180deg);
	}

	.audio-control-switch {
		font-size: 20px;
		margin: 0 50px;
	}

	.audioLoading {
		animation: loading 2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes loading {
		to {
			transform: rotate(360deg);
		}
	}
</style>
