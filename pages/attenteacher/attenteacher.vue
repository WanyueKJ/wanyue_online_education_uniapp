<template>
	<view>
		<view class="top-line"></view>
		<scroll-view :refresher-threshold="45" :refresher-enabled="true" :refresher-triggered="refresherTriggered"
		 @refresherrefresh="refresherrefresh" 
		 scroll-y :style="{height:scrollH+'rpx'}">
			<view v-for="(item,index) in course_info" @click="viewTeacherInfo(item.id)">
				<view class="famous-item">
					<image @click="viewTeacherInfo(item.id)" class="ft-avatar" :src="item.avatar" mode="aspectFill"></image>
					<image class="dav" src="../../static/dav.png"></image>
					<view class="t-data-wrap">
						<view  class="t-title">
							<template v-if="item.identitys.length >0">
								<view v-for="(item2,index2) in item.identitys">
									{{item.user_nickname}}<text class="colour font-sm" :style="'background-color:' + item2.colour">{{item2.name}}</text>
								</view>
							</template>
							<template v-else>
								<view>
									{{item.user_nickname}}
								</view>
							</template>
						</view>
					<image src="../../static/arrow2.png" class="jiantou" mode="aspectFill"></image>
					</view>
				</view>
				<view class="itemline"></view>
			</view>
		</scroll-view>
		<template v-if="kongkong == true">
			<view :class="{xiangziwrap : (kongkong == true)}">
				<image class="xiangzi" src="../../static/images/xiangzi.png" mode="aspectFill"></image>
				<text class="xiangzi_txt">空空如也</text>
			</view>
		</template>
	</view>
</template>


<script>
	const app = getApp();
	export default {
		data() {
			return {
				refresherTriggered: false,
				scrollH: 0,
				course_info: [],
				kongkong: false
			}
		},
		onShow() {
			this.getteacher();
		},
		onReady() {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.scrollH = res.windowHeight * 750 / res.windowWidth;
				}
			});
		},
		onLoad() {
			this.getteacher();
		},
		methods: {
			refresherrefresh() {
				console.log('自定义下拉刷新被触发');
				this.refresherTriggered = true;
				 this.getteacher();
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000);
			},
			getteacher() {
				setTimeout(() => {
					uni.request({
						url: getApp().globalData.site_url + 'User.GetFollow',
						method: 'GET',
						data: {
							'uid': app.globalData.userinfo.id,
							'token': app.globalData.userinfo.token,
							'p': 1
						},
						success: res => {
							if (res.data.data.code == 700) {
								uni.navigateTo({
									url: '../login/login',
								});
								return;
							}
							if (res.data.data.code == 0) {
								this.course_info = res.data.data.info;
								this.kongkong = false;
								if (this.course_info.length == 0) {
									this.kongkong = true;
								}
							} else {
								this.kongkong = true;
							}

						}

					});
				}, 0);
			},
			// 查看教师详情
			viewTeacherInfo(touid) {
				//跳转教师详情页并传入基本信息
				uni.navigateTo({
					url: '../teacherinfo/teacherinfo?touid=' + touid,
				});

			},
		}
	}
</script>

<style>
	.top-line{
		background-color: #F5F5F5;
		width: 100%;
		height: 1rpx;
	}
	.jiantou{
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		right: 40rpx;
		margin-top: 20rpx;
	}
	/deep/.uni-scroll-view ::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none;
		width: 0;
		height: 0;
		color: transparent;
		background: transparent;
	}

	/deep/::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		color: transparent;
		background: transparent;
	}

	page {
		width: 100%;
		height: 100%;
		/* overflow: hidden; */
		background-color: #FFFFFF;
	}

	.dav {
		position: absolute;
		width: 30rpx;
		height: 30rpx;
		margin-top: 60rpx;
		left: 80rpx;
	}

	.coushu {
		display: block;
		position: absolute;
		right: 100rpx;
		left: 200rpx;
		height: 100rpx;
	}

	.itemline {
		position: absolute;
		left: 20rpx;
		right: 20rpx;
		height: 2rpx;
		background-color: #F5F5F5;
		margin-top: -30rpx;
	}

	.colour {
		color: #FFFFFF;
		width: 100rpx;
		height: 30rpx;

		display: inline-block;
		width: 110rpx;
		height: 32rpx;
		line-height: 32rpx;
		text-align: center;
		margin-left: 10rpx;
		background-color: #07C160;
		color: #FFFFFF;
		border-radius: 6rpx;
		font-size: 20rpx;
	}

	.famous-all-wrap {
		border-top: 3rpx solid #F5F5F5;
		/* padding: 15rpx 23rpx 0; */
	}

	.famous-item {
		height: 84rpx;
		margin-bottom: 50rpx;
		margin-top: 10rpx;
		margin-left: 20rpx;
	}

	.ft-avatar {
		height: 100%;
		width: 90rpx;
		float: left;
		border-radius: 50%;
	}

	.t-data-wrap {
		display: flex;
		flex-direction: row;
		height: 40rpx;
		width: 85%;
		float: left;
		font-size: 28rpx;
		color: #000000;
	}

	.t-title {
		margin-left: 20rpx;
	}

	.t-zhicheng-wrap {
		width: 64%;
		float: left;
		padding-left: 8rpx;
	}


	.Yguanzhu {
		position: absolute;
		right: 40rpx;
		font-size: smaller;
		color: #888888;
	}

	.guanzhu {
		position: absolute;
		right: 40rpx;
		font-size: smaller;
		color: #07C160;
	}

	.xiangziwrap {
		position: absolute;
		left: calc(50% - 80px);
		top: calc(50% - 100px);
		width: 300rpx;
		height: 100rpx;
	}

	.xiangzi {
		margin-left: 100rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.xiangzi_txt {
		width: 100%;
		display: block;
		text-align: center;
		font-size: 18rpx;
		color: #C7C7C7;
	}
</style>
