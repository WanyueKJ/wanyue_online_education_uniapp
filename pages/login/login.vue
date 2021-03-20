<template>
	<view class="login-all-wrap">
		<!-- #ifndef H5 -->
		<uni-status-bar></uni-status-bar>
		<image class="back-image" src="../../static/login_exit@2x.png" @click="back"></image>
		<!-- #endif -->
		<view class="top-wrap">
			<button class="captcha-login-btn" @click="chanloginType('captcha')" :class="{currentLogin : (loginType == 'captcha')}">验证码登录</button>
			<button class="pass-login-btn" @click="chanloginType('pass')" :class="{currentLogin : (loginType == 'pass')}">密码登录</button>
		</view>
		<view class="text-center" style="padding-bottom: 70rpx;
		font-size: 55rpx;"></view>
		<view class="px-2 login-input-wrap">
			<template v-if="!status">
				<view class="mb-2">
					<input @input="username_input" type="number" placeholder-style="color:#C9C9C9" v-model="username" placeholder="请输入您的手机号"
					 class="border-bottom p-2" />
				</view>
				<view class="verify-code-wrap mb-2 flex align-stretch">
					<template v-if="isForgetShow == true">
						<input @input="password_input" type="password" placeholder-style="color:#C9C9C9" v-model="password" :placeholder="placeholder"
						 class="border-bottom p-2 flex-1" />
					</template>
					<template v-else>
						<input @input="password_input" type="number" placeholder-style="color:#C9C9C9" v-model="password" :placeholder="placeholder"
						 class="border-bottom p-2 flex-1" />
					</template>
					<view class="border-bottom flex align-center justify-center font text-light-muted" @click="getSmsCode" style="width: 150rpx;"
					 :style="canshowcode == true?  'color: #45DCAC;': 'color: #C9C9C9;'">
						{{get_captcha_txt}}
					</view>
				</view>
			</template>
		</view>
		<view class="newstate">
			<template v-if="agree == false">
				<image @click="agreeme" class="agree" src="../../static/jinyan_nor.png" mode="aspectFit"></image>
			</template>
			<template v-else>
				<image @click="agreeme" class="agree" src="../../static/jinyan_sel.png" mode="aspectFit"></image>
			</template>
			<view class="flex align-center justify-center login-botttom-text font-sm">
				我已阅读并同意<text @click="" class="xieyi font-sm">《用户服务协议》</text>和<text @click="" class="xieyi font-sm">《隐私保护政策》</text>
			</view>
		</view>
		<view class="login-btn-wrap py-2 px-2">
			<button enabled="enabled" class="login-btn bg-main text-white" style="border-radius: 50rpx; border: 0;" type="primary"
			 :class="{ opatity: enabled}" @click="submit">
				登录
			</button>
			<view @click="register" class="reg-btn">注册账号</view>
			<navigator v-show="isForgetShow" class="forget-pass" url="/pages/forget_pass/forget_pass">{{foretPass}}</navigator>
			<view style="height: 30rpx;"></view>

		</view>
		<view class="flex align-center justify-center pt-1 pb-3 login-icon-all-wrap">
			<!-- #ifndef H5 -->
			<!-- #ifdef MP-WEIXIN -->
			<template v-if="agree == true">
				<button @click="wechatlogin" open-type="getUserInfo" style="background-color: #FFFFFF;">
					<view :class="{loginThreeShow : (login_by_wx == true)}" class="loginThreeHide uni-tag-text--primary font-sm">
						<image class="login-icon" src="../../static/images/login_wx.png" mode=""></image>
						<text class="login-icon-text font-sm">微信登录</text>
					</view>
				</button>
			</template>
			<template v-else>
				<button @click="wechatlogin" style="background-color: #FFFFFF;">
					<view :class="{loginThreeShow : (login_by_wx == true)}" class="loginThreeHide uni-tag-text--primary font-sm">
						<image class="login-icon" src="../../static/images/login_wx.png" mode=""></image>
						<text class="login-icon-text font-sm">微信登录</text>
					</view>
				</button>
			</template>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<view :class="{loginThreeShow : (login_by_wx == true)}" class="loginThreeHide uni-tag-text--primary font-sm" @tap="wechatlogin"
			 open-type='getUserInfo'>
				<image class="login-icon" src="../../static/images/login_wx.png" mode=""></image>
				<text class="login-icon-text font-sm">微信登录</text>
			</view>
			<!-- #endif -->
			<view :class="{loginThreeShow : (login_by_qq == true)}" class="loginThreeHide uni-tag-text--primary font-sm" @tap="qqlogin">
				<image class="login-icon" src="../../static/images/login_qq.png" mode=""></image>
				<text class="login-icon-text font-sm">QQ登录</text>
			</view>
			<!-- #endif -->
		</view>
		<view class="flex align-center justify-center">
		</view>
	</view>
</template>
<script>
	import uniStatusBar from '@/components/uni-ui/uni-status-bar/uni-status-bar.vue';
	import otherLogin from '@/components/common/other-login.vue';
	import md5_js from "@/static/js/md5.js";

	const app = getApp();

	export default {
		components: {
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				agree: false,
				iswechat: 1,
				status: "",
				login_by_wx: false,
				login_by_qq: false,
				username: "",
				usernameFlag: "",
				password: "",
				phone: "",
				code: "",
				codeTime: 0,
				loginType: "",
				placeholder: "请输入验证码",
				get_captcha_txt: "",
				foretPass: "",
				isForgetShow: false,
				smsType: 0, //获取验证码类型 0 登录 1 注册 2忘记密码
				sign: '', //加密后的签名串
				jumpPage: '',
				keyword: '',
				unionid: '',
				nickName: '',
				avatar: '',
				canshowcode: false
			}
		},
		onReady: function() {
			// #ifdef MP-WEIXIN
			this.iswechat = 0;
			this.login_by_wx = true;
			// #endif


			// #ifndef MP-WEIXIN
			// 获取登录方式开关
			uni.request({
				url: app.globalData.site_url + "Login.GetLoginType",
				data: {},
				success: (res) => {
					if (parseInt(res.data.data.code) != 0) {
						return;
					}
					if (res.data.data.info[0] != '') {
						this.login_by_qq = true;
					}
					if (res.data.data.info[1] != '') {
						this.login_by_wx = true;
					}

				}
			});

			// #endif

		},
		onLoad(option) {
			if (option.page != '') {
				this.jumpPage = option.page;
			}

			if (option.keyword != '') {
				this.keyword = option.keyword;
			}


			let {
				statusBarHeight
			} = uni.getSystemInfoSync();
			this.statusBarHeight = statusBarHeight;
			this.loginType = 'captcha';
			this.get_captcha_txt = "获取验证码";


		},
		computed: {
			enabled: function() {
				if (this.username.length == 11 && this.password.length > 5) {
					return false;
				}
				return true;
			},
		},
		methods: {
			username_input(event) {

				if (event.detail.value.length == 11) {
					this.canshowcode = true;
				} else {
					this.canshowcode = false;
				}
			},
			password_input(event) {

			},
			agreeme() {
				if (this.agree == true) {
					this.agree = false;
				} else {
					this.agree = true;
				}
			},
			gotoxieyi(item) {
				//4 
				//5
				if (item == '1') {
					uni.navigateTo({
						url: '../login/xieyi?type=4',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else {
					uni.navigateTo({
						url: '../login/xieyi?type=5',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}

			},
			qqlogin() {
				if (this.agree == false) {
					uni.showToast({
						title: '请阅读并同意相关协议',
						icon: 'none'
					});
					return;
				}

				var that = this;



				// #ifdef APP-PLUS
				uni.login({
					provider: 'qq',
					success: function(loginRes) {
						// console.log(loginRes);
						// 获取用户信息

						uni.getUserInfo({
							provider: 'qq',
							success: function(infoRes) {

								var nickName = infoRes.userInfo.nickName;
								var avatarUrl = infoRes.userInfo.avatarUrl;
								var unionid = infoRes.userInfo.unionid;

								that.thirdlogin(unionid, nickName, avatarUrl, 1, 2);

							}
						});
					}
				});
				// #endif



			},
			wechatlogin() {
				if (this.agree == false) {
					uni.showToast({
						title: '请阅读并同意相关协议',
						icon: 'none'
					});
					return;
				}
				// #ifdef MP-WEIXIN
				// 登录
				console.log('微信小程序登录');
				let gData = app.globalData;
				uni.showLoading({
					title: '',
					mask: true
				});
				var that = this;
				uni.login({
					success: res => {
						// 发送 res.code 到后台换取 openId, sessionKey, unionId
						uni.hideLoading();
						that.code = res.code;
						uni.getUserInfo({
							success: (info) => {
								var data = JSON.parse(info.rawData);
								this.nickName = data.nickName;
								this.avatar = data.avatarUrl;
								uni.request({
									url: gData.site_url + "App.Login.getUnionid",
									method: 'GET',
									data: {
										'code': that.code
									},
									success: function(res2) {
										var openid = res2.data.data.openid;
										console.log(res2);
										getApp().globalData.openid = openid;
										uni.setStorage({
											key: 'openid',
											data: openid,
											success: function() {
												console.log('openid存入成功');
											}
										});

										// #ifdef MP-WEIXIN
										that.thirdlogin(openid, that.nickName, that.avatar, 2, 3);
										// #endif			
									},
								});
							}
						});
						// wxa78ad20db2e78eb9
					}
				});
				// #endif

				// #ifdef APP-PLUS

				var that = this;

				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						// console.log(loginRes);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log(infoRes);
								var nickName = infoRes.userInfo.nickName;
								var avatarUrl = infoRes.userInfo.avatarUrl;
								var unionid = infoRes.userInfo.unionId;
								that.thirdlogin(unionid, nickName, avatarUrl, 2, 2);

							}
						});
					}
				});

				// #endif
			},
			thirdlogin(unionid, nickName, avatar, type, source) {
				uni.showLoading({
					title: '',
					mask: true
				});
				let sign = this.sort2url({
					'openid': unionid,
					'type': type
				});
				uni.request({
					url: app.globalData.site_url + "Login.LoginByThird",
					method: 'POST',
					data: {
						'openid': unionid,
						'source': source,
						'type': type,
						'nicename': nickName,
						'avatar': avatar,
						'sign': sign,
					},
					success: res => {
						console.log(res);
						uni.hideLoading();
						uni.showToast({
							icon: 'none',
							title: res.data.data.msg,
							duration: 2000
						});
						if (parseInt(res.data.data.code) !== 0) {
							return;
						}
						// 存入 全局变量
						app.globalData.userinfo = res.data.data.info[0];
						uni.setStorage({
							key: 'userinfo',
							data: res.data.data.info[0],
							success: function() {
								console.log('succes-存入成功');
							}
						});
						uni.setStorage({
							key: 'vipid',
							data: res.data.data.info[0].vipid,
							success: function() {}
						});
						let url = '../index/index';
						let gData = app.globalData;
						if (gData.login_jump.page != '') {
							url = gData.login_jump.page;
						}
						let pages = getCurrentPages(); // 当前页面
						let beforePage = pages[pages.length - 2]; // 上一页
						uni.navigateBack({
							success: function() {
								beforePage;
							},
						});
					}
				});
			},
			//注册
			register() {
				uni.navigateTo({
					url: "../reg/reg"
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			initForm() {
				this.username = '';
				this.password = '';
				this.phone = '';
				this.code = '';
				this.isForgetShow = false;
			},
			// 切换登录
			chanloginType(type) {
				if (type == 'captcha') {
					this.loginType = 'captcha';
					this.placeholder = '请输入验证码';
					this.get_captcha_txt = "获取验证码";
					this.foretPass = '';
					this.isForgetShow = false;
				} else if (type == 'pass') {
					this.loginType = 'pass';
					this.placeholder = "请输入密码";
					this.get_captcha_txt = '';
					this.foretPass = '忘记密码';
					this.isForgetShow = true;
				}
			},
			// 获取验证码
			getSmsCode() {
				if (this.username.length != 11) {

					return;
				}
				//防止重复获取 
				if ((this.usernameFlag == this.username) && this.codeTime > 0) {
					uni.showToast({
						icon: "none",
						title: "验证码5分钟有效, 请勿多次发送"
					})
					return;
				}
				if (!this.validate()) return;

				let sign = this.sort2url({
					'account': this.username,
				});

				//调用验证码接口
				uni.request({
					url: app.globalData.site_url + "Login.GetCode",
					data: {
						account: this.username,
						type: this.smsType, //0登录1注册2忘记密码
						sign: sign, //加密md5串
						// #ifdef MP-WEIXIN
						env: 'weixin'
						// #endif
						// #ifdef H5
						env: 'H5'
						// #endif
					},
					success: (res) => {
						console.log(res);
						uni.showToast({
							icon: 'none',
							title: res.data.data.msg
						})
						if (parseInt(res.data.data.code) !== 0) {
							return;
						}
						this.codeTime = 300;
						this.usernameFlag = this.username;
					}
				});

				let timer = setInterval(() => {
					if (this.codeTime >= 1) {
						this.codeTime--;
					} else {
						this.codeTime = 0;
						clearInterval(timer);
					}
				}, 1000)
			},
			//验证
			validate() {
				var mPattern = /^1[3456789][0-9]\d{8}$/;
				this.phone = this.username;
				if (!mPattern.test(this.phone)) {
					uni.showToast({
						title: '手机号格式不正确',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				//更多验证
				return true;
			},
			// 字典序排序
			sort2url(arr1) {
				var newkey = Object.keys(arr1).sort();
				var newObj = {};
				for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
					newObj[newkey[i]] = arr1[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
				}
				var text = "";
				for (var index in newObj) {
					text = text + index + "=" + newObj[index] + "&";
				}
				text = text.substr(0, text.length - 1);
				text += '&' + app.globalData.sign_key;
				return md5_js.hex_md5(text);
			},
			// 提交
			submit() {
				if (this.username.length == 0 || this.password.length == 0) {
					return;
				}
				if (this.agree == false) {
					uni.showToast({
						title: '请阅读并同意相关协议',
						icon: 'none'
					});
					return;
				}
				let url;
				let data;
				if (this.loginType == 'captcha') {
					// 表单验证
					if (!this.validate()) return;
					let sign = this.sort2url({
						'username': this.username,
					});

					url = app.globalData.site_url + "Login.LoginByCode";
					data = {
						username: this.username,
						code: this.password, //验证码
						source: 3, //0web，1android，2ios，3小程序
						sign: sign, //加密md5串
						// #ifdef MP-WEIXIN
						env: 'weixin'
						// #endif
					};
				} else {
					url = app.globalData.site_url + "Login.Login";
					data = {
						username: this.username,
						pass: this.password,
					};
				}
				let that = this;
				uni.showLoading({
					title: '',
					mask: true
				});
				// #ifdef MP-WEIXIN
				uni.login({
					success: res => {
						// 发送 res.code 到后台换取 openId, sessionKey, unionId
						uni.hideLoading();
						that.code = res.code;
						uni.request({
							url: getApp().globalData.site_url + "App.Login.getUnionid",
							method: 'GET',
							data: {
								'code': that.code
							},
							success: function(res2) {
								var openid = res2.data.data.openid;
								console.log(res2);
								getApp().globalData.openid = openid;
								//登录处理
								uni.request({
									url: url,
									data: data,
									success: (res) => {
										uni.hideLoading();
										uni.showToast({
											icon: 'none',
											title: res.data.data.msg,
											duration: 2000
										});
										if (parseInt(res.data.data.code) !== 0) {
											return;
										}
										console.log(res);
										// 存入 全局变量
										app.globalData.userinfo = res.data.data.info[0];
										uni.setStorage({
											key: 'userinfo',
											data: res.data.data.info[0],
											success: function() {}
										});
										uni.setStorage({
											key: 'vipid',
											data: res.data.data.info[0].vipid,
											success: function() {}
										});
										setTimeout(function() {
											let url = '../index/index';
											let gData = app.globalData;
											if (gData.login_jump.page != '') {
												url = gData.login_jump.page;
											}
											let pages = getCurrentPages(); // 当前页面
											let beforePage = pages[pages.length - 2]; // 上一页
											uni.navigateBack({
												success: function() {
													beforePage;
												}
											});
										}, 0);
									}
								});
								
								uni.setStorage({
									key: 'openid',
									data: openid,
									success: function() {
										console.log('openid存入成功');
									}
								});
							},
						});
					}
				});
				// #endif
				
				// #ifndef MP-WEIXIN
				//登录处理
				uni.request({
					url: url,
					data: data,
					success: (res) => {
						uni.hideLoading();
						uni.showToast({
							icon: 'none',
							title: res.data.data.msg,
							duration: 2000
						});
						if (parseInt(res.data.data.code) !== 0) {
							return;
						}
						console.log(res);
						// 存入 全局变量
						app.globalData.userinfo = res.data.data.info[0];
						uni.setStorage({
							key: 'userinfo',
							data: res.data.data.info[0],
							success: function() {}
						});
						uni.setStorage({
							key: 'vipid',
							data: res.data.data.info[0].vipid,
							success: function() {}
						});
						setTimeout(function() {
							let url = '../index/index';
							let gData = app.globalData;
							if (gData.login_jump.page != '') {
								url = gData.login_jump.page;
							}
							let pages = getCurrentPages(); // 当前页面
							let beforePage = pages[pages.length - 2]; // 上一页
							uni.navigateBack({
								success: function() {
									beforePage;
								}
							});
						}, 0);
					}
				});
				// #endif
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.back-image {
		width: 40rpx;
		height: 40rpx;
		margin-left: 20rpx;
		float: left;
		margin-top: 20rpx;
	}

	.reg-btn {
		position: absolute;
		left: 40rpx;
		margin-top: 30rpx;
		font-size: 26rpx;
		color: #45DCAC;
	}

	.login-botttom-text {
		color: #646464;
		margin-left: 10rpx;
		height: 40rpx;
		line-height: 40rpx;

	}

	.newstate {
		display: flex;
		flex-direction: row;
		margin-left: 20rpx;
		margin-top: 40rpx;
		height: 40rpx;

	}

	.agree {
		width: 30rpx;
		height: 30rpx;
		margin-top: 5rpx;
		margin-left: 10rpx;
	}

	.login-all-wrap {
		padding: 0 15rpx;
	}

	/*三方登录默认隐藏*/
	.loginThreeHide {
		display: none;
	}

	.loginThreeShow {
		display: inline-block;
	}

	.top-wrap button {
		display: inline-block;
		background-color: #FFFFFF;
		overflow: inherit;

	}

	button::after {
		border: none;
	}

	.captcha-login-btn,
	.pass-login-btn {
		/* #ifndef H5 */
		margin-top: 80rpx;
		/* #endif */
		font-size: 30rpx;
		color: #646464;
	}

	.currentLogin {
		font-weight: bold;
		font-size: 44rpx;
	}

	/* 输入框部分 */
	.login-input-wrap input {
		color: #000000;
	}

	.border-bottom {
		color: #C9C9C9;
	}

	.verify-code-wrap {
		margin-top: 60rpx;
	}

	/*登录按钮部分*/
	.login-btn-wrap {
		margin-top: 60rpx;
		height: 90rpx;
	}

	.login-btn-wrap button {
		font-size: 30rpx;
		height: 100%;
		line-height: 90rpx;
	}

	/* 登录按钮 输入内容时,去掉灰色效果 */
	.login-btn {
		background: linear-gradient(to right, #7BD68E, #65CCB9);
	}

	.opatity {
		opacity: 0.5;
	}

	/* 登录图标 */
	.login-icon-all-wrap {
		margin-top: 320rpx;
	}

	.login-icon {
		color: #60E28B;
		display: inline-block;
		width: 88rpx;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 80rpx;
	}

	.qq-login-icon {
		color: #63C6EF;
	}

	.uni-tag-text--primary {
		margin: 0 60rpx;
	}

	.uni-tag-text--primary text {
		display: block;
	}

	.login-icon-text {
		color: #646464 !important;
	}



	.xieyi {
		color: #45DCAC;
		font-size: small !important;
	}

	/* 忘记密码 */
	.forget-pass {
		font-size: 26rpx;
		color: #C9C9C9;
		text-align: right;
		margin-top: 30rpx;
	}
</style>
