<template>
	<view class="page">
		
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="backCourseList" left-icon="back" :border="false" title="内容详情" statusBar>
		
		</uni-nav-bar>
		<!-- #endif -->
		
		<template v-if="type == 2">
			<view class="video-wrap">
				<video id="myVideo" class="video-wrap" :src="url" :poster="thumb" controls="true" autoplay="true" muted="false"></video>
			</view>
			
			
		</template>
		<template v-else-if="type == 3">
			<view class="video-wrap3">
				<image :src="thumb" class="video-wrap">
				</image>
				
				<imt-audio autoplay class="imtaudio" :src="url"></imt-audio>
				<!-- <image :src="buttonimage" class="button" @click="pause"></image> -->
			</view>
		</template>
		<template v-else></template>
		<view class="cdetail-all-wrap">
			<view class="content-title">{{name}}</view>
			<view class="content-des">{{des}}</view>
			<view class="content-time">{{adddtime}}</view>
			<view class="line"></view>
			<view class="content-wrap">
				<rich-text class="content" :nodes="content"></rich-text>
			</view>

		</view>
	</view>
</template>

<script>
	import imtAudio from '@/components/imt-audio/imt-audio.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	
	export default {
		components: {
			imtAudio,
			uniNavBar,
		},
		data() {
			return {
				live_info: {},
				name: '',
				adddtime: '',
				content: '',
				des: '',
				url: '',
				type: '',
				thumb: '',
				duration: '',
				currentTime: 0,
				videoContext: '',
				buttonimage: '',
				status: 1,
				start: '',
				end: '',
				playCurrent: 0

			}
		},
		onLoad(option) {

			this.type = option.type;
			this.live_info = JSON.parse(decodeURIComponent(option.info));
			this.name = this.live_info.name;
			
			this.content = this.live_info.content;
			this.des = this.live_info.des;
			this.thumb = option.thumb;
			this.adddtime = this.live_info.add_time;
			if (!this.adddtime){
				this.adddtime = option.addtime;
			}
			if (this.type == 1) {

			} else {
				this.url = this.decypt(this.live_info.url);
				// console.log(this.url);
				if (this.type == 2) {
					this.videoContext = uni.createVideoContext('myVideo');
					this.buttonimage = '../../static/voice2.png';
				}
			}

		},
		methods: {
			
			decypt(code) {
				var newcode = '';
				var str = '1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp&';
				for (var i = 0; i < code.length; i++) {
					var codeIteam = code[i];
					for (var j = 0; j < str.length; j++) {
						var stringIteam = str[j];
						if (codeIteam == stringIteam) {
							if (j == 0) {
								newcode += str[str.length - 1];
							} else {
								newcode += str[j - 1];
							}
						}
					}
				}
				return newcode;
			},
			backCourseList() {
				uni.navigateBack({
					delta: 1
				});
			},
			pause() {
				if (this.status == 0) {
					this.status = 1;
					this.videoContext.play();
					this.buttonimage = '../../static/voice2.png';
				} else {
					this.status = 0;
					this.videoContext.pause();
					this.buttonimage = '../../static/voice.png';
				}
			},
			timeupdate(event) {
				if (event.detail.detail) {
					this.currentTime = event.detail.detail.currentTime;
					this.duration = event.detail.detail.duration;
					this.start = this.calcTimer(this.currentTime);
					this.end = this.calcTimer(this.duration);
				} else {
					this.currentTime = event.detail.currentTime;
					this.duration = event.detail.duration;
					this.start = this.calcTimer(event.detail.currentTime);
					this.end = this.calcTimer(event.detail.duration);
				}
			},

			// 拖动进度条
			sliderChange(data) {
				this.videoContext.seek(data.detail.value);
			},

			//拖动中
			sliderChanging(data) {
				this.currentTime = data.detail.value;
				this.start = this.calcTimer(data.detail.value);
			},

			loadedmetadata(data) {
				this.duration = data.detail.duration;
				this.start = this.calcTimer(data.detail.duration);
				console.log('音频加载完成');
			},
			calcTimer(timer) {
				if (timer === 0 || typeof timer !== 'number') {
					return '00:00'
				}
				let mm = Math.floor(timer / 60)
				let ss = Math.floor(timer % 60)
				if (mm < 10) {
					mm = '0' + mm
				}
				if (ss < 10) {
					ss = '0' + ss
				}
				return mm + ':' + ss
			},
		}
	}
</script>

<style>
	.page {
		width: 100%;
	}

	.button {
		margin-top: 20rpx;
		width: 80rpx;
		height: 80rpx;

	}

	.mm {
		padding-left: 20rpx;
	}

	.ss {
		padding-right: 20rpx;
	}

	.hidden {
		position: fixed;
		z-index: -1;
		width: 1upx;
		height: 1upx;
	}

	.slider-box {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		color: #999;
	}

	.slider {
		padding-left: 20rpx;
		padding-right: 20rpx;
		width: 100%;
	}


	.live-all-wrap {
		background-color: #F4F5F6;
	}

	.video-wrap {
		text-align: center;
		width: 100%;
		height: 400rpx;
		background-color: #000000;
	}

	.video-wrap3 {
		text-align: center;
		width: 100%;
		height: 550rpx;
	}

	.audio {
		width: 92%;
		height: 40rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
	}

	.cdetail-all-wrap {
		width: 94%;
		margin: 0 auto;
	}

	.line {
		background-color: #F5F5F5;
		height: 1rpx;
		position: absolute;
		left: 20rpx;
		right: 20rpx;
		margin-top: -20rpx;
		
	}
	.content-title {
		height: 40rpx;
		font-weight: bold;
		margin-left: 20rpx;
	}
	.content-des {
		margin-top: 20rpx;
		margin-left: 20rpx;
		color: #969696;
		font-size: 20rpx;
	}
	.content-time {
		margin-left: 20rpx;
		font-size: 20rpx;
		color: #969696;
		margin-top: 10rpx;
		margin-bottom: 40rpx;
	}
	
	.content-wrap {
		margin: 0 auto;
		overflow: hidden;
		width: 92%;
	}
	
	
</style>
