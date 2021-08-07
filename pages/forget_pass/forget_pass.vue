<!-- 忘记密码 -->
<template>
	<view class="login-all-wrap">
		<view class="top-wrap">
			<button class="currentLogin">找回密码</button>
		</view>
				
		<view class="text-center" style="padding-bottom: 70rpx;
		font-size: 55rpx;">
			
		</view>
		
		<view class="px-2 login-input-wrap">
			<template v-if="!status">
				<view class="mb-2">
					<input type="text" placeholder-style="color:#C9C9C9" v-model="username" placeholder="请输入您的手机号" class="border-bottom p-2"/>
				</view>
				<view class="verify-code-wrap mb-2 flex align-stretch">
					<input type="text" placeholder-style="color:#C9C9C9" v-model="code" :placeholder="placeholder" class="border-bottom p-2 flex-1"/>
					<view class="border-bottom flex align-center justify-center font text-light-muted" @click="getSmsCode" style="width: 150rpx;">
						{{get_captcha_txt}}
					</view>
				</view>
				
				<view class="chongzhi-wrap">
					<input type="text" placeholder-style="color:#C9C9C9" v-model="password" placeholder="请输入重置密码" class="border-bottom p-2 flex-1"/>
				</view>
				
			</template>
			
			
			
		</view>
		
		<view class="login-btn-wrap py-2 px-2">
			<button class="login-btn bg-main text-white" style="border-radius: 50rpx; border: 0;" 
			type="primary" :enabled="false" :class="{ opatity: enabled}"
			 @click="submit">
			确定
			</button>
			
			<navigator v-show="isForgetShow" class="forget-pass" url="/pages/forget_pass/forget_pass">{{foretPass}}</navigator>
			
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
		components:{
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				status:"",
				username: "",
				password: "",
				usernameFlag: "",
				phone:"",
				code:"",
				codeTime:0,
				loginType: "",
				placeholder: "请输入验证码",
				get_captcha_txt: "",
				foretPass: "",
				isForgetShow: false,
				signKey: "400d069a791d51ada8af3e6c2979bcd7", //固定的字符串, 和后端约定
				sign: '', //加密后的签名串
			}
		},
		onLoad() {
			let {statusBarHeight} = uni.getSystemInfoSync();
			this.statusBarHeight = statusBarHeight;
			
			this.loginType = 'captcha';
			this.get_captcha_txt = "获取验证码";
		},
		computed:{
			enabled: function(){
				if(this.username == '' || this.password == ''){
					return true;
				}
				return false;
			},
			
		
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			initForm(){
				this.username = '';
				this.password = '';
				this.phone = '';
				this.code = '';
				this.isForgetShow = false;
			},
			// 获取验证码
		getSmsCode(){
			//防止重复获取 
			if((this.usernameFlag == this.username) && this.codeTime > 0){
				uni.showToast({
					icon:"none",
					title: "验证码5分钟有效, 请勿多次发送"
				})
				return;
			}
			if(!this.validate()) return;
			
			let sign = this.sort2url({
				'account': this.username,
		    });
			
			//调用验证码接口
			uni.request({
			    url: app.globalData.site_url + "Login.GetCode", 
			    data: {
			        account: this.username,
					type: 2, //0登录1注册2忘记密码
					sign: sign, //加密md5串
					// #ifdef MP-WEIXIN
					env: 'weixin'	
					// #endif
			    },
			    success: (res) => {
					this.codeTime = 300;
					this.usernameFlag = this.username;
					uni.showToast({
						icon:'none',
						title: res.data.data.msg
					})
			    }
			});
			
			
			let timer = setInterval(()=>{
				if(this.codeTime >= 1){
					this.codeTime--;
				} else {
					this.codeTime = 0;
					clearInterval(timer);
				}
			},1000)
		},
			//验证
			validate(){
				var mPattern = /^1[3456789][0-9]\d{8}$/;
				if(!mPattern.test(this.username)){
					uni.showToast({
						icon: 'none',
						title: '手机号格式不正确'
					});
					return false;
				}
				//更多验证
				return true;
			},
			sort2url(arr1) {
			    Object.keys(arr1).sort(function(a, b) {
			           return (a.name + '').localeCompare(b.name + '');
			       })
				   
			       var text = "";
			       for (var index in arr1) {
			           text = text + index + "=" + arr1[index] + "&";
			       }
			       text = text.substr(0, text.length - 1);
				   text += '&' + this.signKey;
				   
			       return md5_js.hex_md5(text);
			},
			// 提交
			submit(){
				
				if(!this.validate()) return;
				
				let url = app.globalData.site_url + "Login.Forget";
				let data = {
					username: this.username,
					code: this.code,
					pass: this.password, 
					// #ifdef MP-WEIXIN
					env: 'weixin'	
					// #endif
				};		
				//登录处理
				uni.request({
				    url: url, 
				    data: data,
				    success: (res) => {
						
					uni.showToast({
						icon:'none',
						title: res.data.data.msg,
						duration: 2000,
					});
						if(parseInt(res.data.data.code) !== 0) {
							return;
						}

				    }
				});
				
			}
			
		}
	}
</script>


<style>
	
	.login-all-wrap {
		padding: 0 15rpx;
	}
	
	.reg-btn {
		float: right;
		margin-top: -45px;
		font-size: 30rpx;
		color: #646464;
	}
	
	.top-wrap button {
		display: inline-block;
		background-color: #FFFFFF;
		overflow: inherit;
	}
	
	button::after{ 
		border: none; 
	}
	
	.captcha-login-btn,
	.pass-login-btn {
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
		margin-top: 80rpx;
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
	
	.login-botttom-text {
		color: #646464;
	}
	
	.xieyi {
		color: #45DCAC;
		font-size: 20rpx !important;
	}
	
	/* 忘记密码 */
	.forget-pass {
		font-size: 26rpx;
		color: #C9C9C9;
		text-align: right;
		margin-top: 30rpx;
	}
	
	
</style>
