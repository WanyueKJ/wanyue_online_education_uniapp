<template>
	<view>
		<view class="extension-top">
			<image class="extension-top-bg" src="../../static/tuiguang.png"></image>
			<image class="extension-top-text" src="/static/images/extension_text.png"></image>
		</view>
		<view class="extension-mes">
			<view class="extension-mes-left" @click="jifen">
				<view>推广收益</view>
				<view class="extension-mes-left-num">
					<text class="extension-mes-left-nums">{{income}}</text>
					<text class="extension-mes-left-text">积分</text>
				</view>
			</view>
			<view class="extension-mes-right" @click="EXuser">
				<view>推广用户</view>
				<view class="extension-mes-right-num">
					<text class="extension-mes-right-nums">{{nums}}</text>
					<text class="extension-mes-right-text">人</text>
				</view>
			</view>
		</view>
		<view class="extension-code">
			<text class="extension-code-text">您的邀请码</text>
			<text class="extension-code-nums">{{code}}</text>
		</view>
		<view @click="extension" class="extension-push">我要推广</view>
		<!-- #ifdef H5 -->
		<!-- <view @click="extension_h5" class="extension-push">我要推广</view> -->
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<!-- <button @click="extension_wx" open-type="share" class="extension-push">我要推广</button> -->
		<!-- #endif -->
		<view class="extension-des">
			<view class="extension-des-title">推广人说明</view>
			<view class="extension-des-text" v-for="(item,index) in tips">
				<view class="for_renzheng">
					<view class="renzheng_class">{{ index + 1 +'.'+item}}</view>
					<template v-if="index == 0 && showrenzheng == true">
						<view v-if="showrenzheng == true" @click="renzheng" class="renzheng">去认证></view>
					</template>
				</view>
			</view>
		</view>
		<view class="extension-zhe" v-if="isHidden == 0">
			<view class="extension-zhe-content">
				<view class="extension-zhe-content-tips">
					推广方式
					<image @click="close" class="extension-zhe-content-tips-img" src="../../static/ming-pop/close.png"></image>
				</view>
				<view class="extension-zhe-content-type">
					<!-- <view class="extension-zhe-content-type-li" @click="qqshare">
						<image class="extension-zhe-content-type-li-img" src="../../static/fuzhilianjie.png"></image>
						<view class="extension-zhe-content-type-li-text">复制链接</view>
					</view> -->

					<!-- <view class="extension-zhe-content-type-li" @click="wechatshare">
						<image class="extension-zhe-content-type-li-img" src="/static/images/login_wx.png"></image>
						<view class="extension-zhe-content-type-li-text">微信好友</view>
					</view> -->
					<view class="extension-zhe-content-type-li" @click="haibaoshare">
						<image class="extension-zhe-content-type-li-img" src="../../static/tuiguang_haibao.png"></image>
						<view class="extension-zhe-content-type-li-text">海报推广</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noshow:false,
				isHidden: 1, //推广弹框
				income: 0,
				nums: 0,
				code: '',
				tips: [],
				showrenzheng: true
			}
		},
		onShareAppMessage() {
			return {
				title: '来吧',
				path: '/pages/login/login'
			}
		},
		onShow() {
			this.isHidden = 1;
			 // this.getagent();
		},
		onLoad() {
			 this.getagent();
		},
		methods: {
			getagent() {
				let gData = getApp().globalData;
				uni.request({
					url: gData.site_url + 'Agent.MyAgent',
					method: 'GET',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token
					},
					success: res => {
						if (parseInt(res.data.data.code) !== 0) {
							return;
						}
						this.code = res.data.data.info[0].code;
						this.income = res.data.data.info[0].income;
						this.nums = res.data.data.info[0].nums;
						console.log(JSON.parse(JSON.stringify(res.data.data.info[0])));
						this.tips = res.data.data.info[0].tips;
						var istips = parseInt(res.data.data.info[0].istips);
						if (istips == 1) {
							if (this.noshow == true){
								return;
							}
							uni.showModal({
								title: '提示',
								content: '您不是推广员，推广不能获得平台奖励收益。成为推广员可获得相应收益。',
								showCancel: false,
								cancelText: '',
								confirmText: '我知道了',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
						} else if (istips == 2) {
							this.showrenzheng = false;
							if (this.noshow == true){
								
								return;
							}
							uni.showModal({
								title: '提示',
								content: '您的认证资料审核中，请耐心等待～',
								showCancel: false,
								cancelText: '',
								confirmText: '我知道了',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
						} else if (istips == 3) {
							if (this.noshow == true){
								
								return;
							}
							uni.showModal({
								title: '提示',
								content: '您的认证资料审核失败，请重新认证！',
								showCancel: false,
								cancelText: '',
								confirmText: '我知道了',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
						} else{
							this.showrenzheng = false;
							if (this.noshow == true){
								return;
							}
							uni.getStorage({
							    key: 'istips',
							    success: function (res) {
									if (res.data == '1'){
										
										
									}else{
										
										uni.setStorage({
											key: 'istips',
											data: '1',
											success: function() {
											
											}
										});
										
										uni.showModal({
											title: '提示',
											content: '恭喜您已成为平台推广员！',
											showCancel: false,
											cancelText: '',
											confirmText: '我知道了',
											success: res => {},
											fail: () => {},
											complete: () => {}
										});
									}
							    }
							});
						
							
						}
					},
				});
			},
			renzheng() {
				this.noshow = true;
				uni.navigateTo({
					url: '../renzheng/renzheng',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			jifen() {
				this.noshow = true;
				//我的积分
				uni.navigateTo({
					url: '../jifen/jifen?money=' + this.income,
				});
			},
			haibaoshare() {
				this.noshow = true;
				uni.navigateTo({
					url: '../mineExtension/extension_poster?type=' + 3,
				});
			},
			//关闭推广
			close() {
				this.isHidden = 1;
			},
			//微信小程序点击推广
			extension_wx() {
				var _this = this;

			},
			extension() {
				this.isHidden = 0;
			},
			//h5点击推广
			extension_h5() {

			},
			EXuser() {
				uni.navigateTo({
					url: '../mineExtension/extension_user',

				});
			}
		}
	}
</script>

<style>
	.for_renzheng {
		display: flex;
		flex-direction: row;
	}

	.renzheng {
		font-size: 20rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #38DAA6;

	}

	.renzheng_class {
		font-size: 20rpx;
		height: 30rpx;
		line-height: 30rpx;
	}

	.extension-zhe-content-type-li-img {
		width: 80rpx;
		height: 80rpx;
	}

	.extension-zhe-content-type-li-text {
		font-size: 26rpx;
	}

	.extension-zhe-content-type-li {
		flex: 1;
		text-align: center;
	}

	.extension-zhe-content-type {
		display: flex;
		width: 100%;
		margin-top: 40rpx;
	}

	.extension-zhe-content-tips-img {
		float: right;
		width: 56rpx;
		height: 56rpx;
		position: absolute;
		right: 18rpx;
	}

	.extension-zhe-content-tips {
		text-align: center;
		margin-top: 20rpx;
		font-size: 30rpx;
	}

	.extension-zhe {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
	}

	.extension-zhe-content {
		position: absolute;
		background: #fff;
		width: 100%;
		height: 300rpx;
		bottom: 0;
		border-radius: 10rpx 10rpx 0 0;
		clear: both;
		overflow: hidden;
	}

	.extension-des-title {
		font-size: 22rpx;
	}

	.extension-des-text {
		color: #A6A6A6;
		font-size: 20rpx;
	}

	.extension-des {
		width: 92%;
		margin: 0 auto;
		margin-top: 40rpx;
		position: relative;
		bottom: 74rpx;
	}

	.extension-push {
		width: 92%;
		margin: 0 auto;
		height: 80rpx;
		text-align: center;
		background: #38DAA6;
		line-height: 80rpx;
		font-size: 30rpx;
		color: #fff;
		border-radius: 10rpx;
		margin-top: 40rpx;
		position: relative;
		bottom: 74rpx;
		border: 0;
		padding: 0;
	}

	.extension-code-nums {
		float: right;
		margin-right: 20rpx;
		font-weight: bold;
	}

	.extension-code-text {
		margin-left: 20rpx;
		color: #969696;
	}

	.extension-code {
		padding: 30rpx 0 30rpx 0;
		width: 92%;
		margin: 0 auto;
		background-color: #fff;
		box-shadow: 6rpx 6rpx 20rpx 4rpx rgba(204, 204, 204, 0.1);
		position: relative;
		bottom: 74rpx;
	}

	.extension-top {
		width: 100%;
		height: 424rpx;
		position: relative;
	}

	.extension-top-bg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.extension-top-text {
		display: inline-block;
		position: absolute;
		top: 20%;
		width: 74%;
		margin: 0 auto;
		height: 38%;
		left: 13%;
	}

	.extension-mes {
		width: 92%;
		clear: both;
		overflow: hidden;
		margin: 0 auto;
		background: #fff;
		box-shadow: 0rpx 3rpx 4rpx 6rpx rgba(204, 204, 204, 0.1);
		position: relative;
		bottom: 120rpx;
		border-radius: 14rpx;
		padding-bottom: 30rpx;
	}

	.extension-mes-left {
		flaot: left;
		width: 40%;
		text-align: center;
		margin-top: 30rpx;
		display: inline-block;
	}

	.extension-mes-left-num {
		margin-top: 20rpx;
	}

	.extension-mes-left-nums {
		font-size: 34rpx;
	}

	.extension-mes-left-text {
		font-size: 22rpx;
		margin-left: 4rpx;
	}

	.extension-mes-right {
		display: inline-block;
		float: right;
		width: 40%;
		text-align: center;
		margin-top: 30rpx;
	}

	.extension-mes-right-num {
		margin-top: 20rpx;
		color: #38DAA6;
	}

	.extension-mes-right-nums {
		font-size: 34rpx;
	}

	.extension-mes-right-text {
		font-size: 22rpx;
		margin-left: 4rpx;
	}
</style>
