<template>
	<view class="page">
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="back" left-icon="back" :border="false" title="海报推广" statusBar>
		
		</uni-nav-bar>
		<!-- #endif -->
		
		<img class="haibao_image" :src="poster_url" mode="aspectFit"></img>
	
		<view class="extension_poster-add" @click="addPoster">{{savetitle}}</view>
		
		

	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	
	const app = getApp();
	
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				poster_url: '',
				courseid: '',
				savetitle: '保存海报',
				sharetitle: ''
			}
		},
		onReady() {

			// #ifdef H5
			this.savetitle = "长按海报保存到相册";
			// #endif

		},
		onShareTimeline: function() {

		},
		onShareAppMessage: function(res) {


		},
		onLoad(option) {
			this.myname = app.globalData.userinfo.user_nickname;
			this.myavatar = app.globalData.userinfo.avatar;
			var type = option.type;
			var Agent = '';
			if (type == 1) {
				uni.setNavigationBarTitle({
					title: '海报分享'
				});
				this.sharetitle = "海报分享";
				//课程
				Agent = app.globalData.site_url + 'App.Agent.GetShareImage';
			} else if (type == 2) {
				uni.setNavigationBarTitle({
					title: '海报分享'
				});
				this.sharetitle = "海报分享";
				//套餐
				Agent = app.globalData.site_url + 'App.Agent.GetShareImage';
			} else {
				uni.setNavigationBarTitle({
					title: '海报推广'
				});
				this.sharetitle = "海报推广";
				//推广
				Agent = app.globalData.site_url + 'App.Agent.GetPopuImage';
			}
			var that = this;
			setTimeout(() => {
				uni.request({
					url: Agent,
					method: 'POST',
					data: {
						'courseid': option.courseid,
						'type': option.type,
						'uid': app.globalData.userinfo.id,
						'token': app.globalData.userinfo.token
					},
					success: res => {
						console.log(res);
						if (res.data.data.code == 700) {
							uni.navigateTo({
								url: '../login/login'
							})
							return;
						};
						this.poster_url = res.data.data.info.poster_url;
						console.log(this.poster_url);
					}
				});
			}, 0);
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			addPoster() {
				// #ifndef H5
				uni.showLoading({
					title: '下载中...',
					mask: false
				});
				uni.downloadFile({
					url: this.poster_url,
					success: (res) => {
						uni.hideLoading();
						if (res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: (res) => {
									uni.showToast({
										title: '保存成功',
										icon: 'success'
									});
								},
								fail(res) {
									uni.showToast({
										title: '保存失败,请重试',
										icon: 'none'
									});
								}
							});
						} else {
							uni.hideLoading();
							uni.showToast({
								title: '下载失败',
								icon: 'none'
							});
						}
					},
					fail: (res) => {
						uni.hideLoading();
						uni.showToast({
							title: '下载失败',
							icon: 'none'
						});
					}
				});
				// #endif
			}
		},
	}
</script>

<style>
	.page {
		width: 100%;
		height: 100%;
	}

	page {
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
		overflow: hidden;
	}

	.haibao_image {
		margin-top: 20rpx;
		position: absolute;
		left: calc(10%);
		right: 20rpx;
		height: 80%;
		width: 80%;
		/* border-radius: 16rpx; */
	}

	.extension_poster-add {
		position: absolute;
		bottom: 30rpx;
		width: 80%;
		left: calc(10%);
		margin: 0 auto;
		text-align: center;
		margin-top: 20rpx;
		background: #38DAA6;
		color: #fff;
		height: 40px;
		border-radius: 50px;
		font-size: 16px;
		line-height: 40px;
	}
</style>
