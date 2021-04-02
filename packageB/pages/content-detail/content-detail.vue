<template>
	<view class="page">

		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="backCourseList" left-icon="back" :border="false" title="内容详情" statusBar>

		</uni-nav-bar>
		<!-- #endif -->

		<template v-if="type == 2">
			<view class="video-wrap">
				<video id="myVideo" class="video-wrap" :src="url" :poster="thumb" controls="true" autoplay="true" muted="false"
					   :danmu-list="danmuList" enable-danmu @fullscreenchange="fullchange"
					   playbackRate @loadedmetadata="loadvideo">
					<!-- 倍速播放 h5支持较差 -->
					<cover-view class="video-control">
						<cover-view class="multi rate" @tap="showSwitchRate">x {{ currentRate }}</cover-view>
					</cover-view>
					<cover-view class="multi-list rate" :class="{ active: rateShow }">
						<cover-view
								v-for="(item, index) in ['0.5', '0.8', '1.0', '1.25', '1.5']"
								:key="index"
								class="multi-item rate"
								:data-rate="item"
								@tap="switchRate"
								:class="{ active: item == currentRate }">
							{{ item }}
						</cover-view>
					</cover-view>

				</video>
			</view>
		</template>
		<template v-else-if="type == 3">
			<view class="video-wrap3">
				<image :src="thumb" class="video-wrap">
				</image>
				<imt-audio autoplay class="imtaudio" :src="url"></imt-audio>
			</view>
		</template>
		<template v-else></template>
		<view class="cdetail-all-wrap">
			<view class="content-title">{{name}}</view>
			<view class="content-des">{{des}}</view>
			<view class="content-time">{{adddtime}}</view>
			<view class="content-wrap">
				<rich-text class="content" :nodes="content"></rich-text>
			</view>

		</view>
	</view>
</template>

<script>
	import imtAudio from '@/components/imt-audio/imt-audio.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	const app = getApp();

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
				playCurrent: 0,
				danmuList: [], //跑马灯弹幕列表
				videoDuration: 0, //视频时长
				rateShow: false, // 倍速浮层
				currentRate: 1.0, // 默认倍速
				fullScreen: false, //是否全屏
				switch_btn: {
					bj_color: '#FFFFFF',
					checked_bj_color: '#38E1AB'
				},
			}
		},
		onReady() {

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

			if (this.type != 1) {
				this.url = this.decypt(this.live_info.url);
				this.videoContext = uni.createVideoContext('myVideo');
				this.getHorseLamp();
				this.buttonimage = '../../static/voice2.png';
			}

		},
		methods: {

			// 显示倍速浮层
			showSwitchRate(rate) {
				let that = this;
				that.rateShow = true;
			},
			// 切换倍速
			switchRate(e) {
				let that = this;
				let rate = Number(e.currentTarget.dataset.rate);
				that.currentRate = rate;
				that.rateShow = false;
				this.videoContext.playbackRate(rate);
			},
			//视频加载完成事件 仅小程序h5支持
			loadvideo(e){
				this.videoDuration = e.detail.duration; //视频时长
				this.getHorseLamp();
			},
			// 获取跑马灯(用户手机号/微信登录用户名)
			getHorseLamp(){
				let user_login = app.globalData.userinfo.user_login;
				let that = this;
				let videoDuration = parseInt(that.videoDuration);
				//原生端初始化时无法获取视频时长, 只能写死
				for (let i = 2; i < videoDuration; i+=18) {
					let danmu = {
						text: user_login,
						color: '#ED1C24',
						time: i
					};
					that.danmuList.push(danmu);
				}

			},
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
			// 拖动进度条
			sliderChange(data) {
				this.videoContext.seek(data.detail.value);
			},

			//拖动中
			sliderChanging(data) {
				this.currentTime = data.detail.value;
				this.start = this.calcTimer(data.detail.value);
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

	@import url("../../../common/beisu.css");

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
		position: relative;
	}

	.controls-title {
		color: #F7F7F7;
		position: absolute;
		bottom: 40rpx;
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


	.switch-wrap {
		position: absolute;
		top: 90rpx;
	}


</style>
