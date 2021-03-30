<template>
	<view class="page">
		<view class="video-wrap3">
			<image :src="newsInfo.thumb" class="video-wrap">
			</image>
		</view>

		<view class="cdetail-all-wrap">
			<view class="content-title">{{newsInfo.name}}</view>
			<view class="content-time">{{newsInfo.addtime}}</view>
			<view class="line"></view>
			<view class="content-wrap">
				<rich-text class="content" :nodes="newsInfo.content"></rich-text>
			</view>

		</view>
	</view>
</template>

<script>
	import imtAudio from '@/components/imt-audio/imt-audio.vue';
	const app = getApp();

	export default {
		components: {
			imtAudio
		},
		data() {
			return {
				newsInfo: {},
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
				end: ''

			}
		},
		onLoad(option) {
			if(option.news_id != undefined) {
				this.getNewsInfo(option.news_id);
			}

		},
		methods: {
			getNewsInfo(nid) {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Course.GetNewsDetail',
					method: 'GET',
					data: {
						// uid token courseid
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'newsid': nid
					},

					success: res => {
						console.log(res);
						if (res.data.data.code == 700) {
							uni.navigateTo({
								url: '../login/login',
								success: res => {},
								fail: () => {},
								complete: () => {}});
							return;
						}

						let info = res.data.data.info;

						this.newsInfo = info;

					},
				});


			}

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
		height: 450rpx;
	}

	.audio {
		width: 92%;
		height: 40rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
	}

	.cdetail-all-wrap {
		width: 92%;
		padding-left: 10rpx;
		/* margin-top: 20rpx; */
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
		margin-left: 20rpx !important;
	}

</style>
