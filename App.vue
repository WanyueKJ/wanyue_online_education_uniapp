<script>
	export default {
		globalData: {  
			wechatuserinfo:'',
			userinfo: '',
			site_url: "https://demo.sdwanyue.com/api/?s=",
			site_h5url: "https://demo.sdwanyue.com/",
			// #ifdef MP-WEIXIN
			socket_url: "wss://demo.sdwanyue.com:19967",
			// #endif
			// #ifndef MP-WEIXIN
			socket_url: "https://demo.sdwanyue.com:19967",
			// #endif
			sign_key: "400d069a791d51ada8af3e6c2979bcd7",
			grade_class: {
				'id' : "",
				'name' : ""
			},
	
			login_jump : {
				'page' : '',
				'keyword' : '',
				'data' : {}
			}, //登录后跳转的页面及数据 
		},  
		onLaunch: function() {
			console.log('App Launch');
			// 检测更新
			this.utilJs.update();
			//检查网络
			this.utilJs.onNetWork();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";
	/* 自定义图标库 */
	@import "./common/icon.css";
	/* 动画库 */
	@import url("./common/animate.css");
	/* 自定义样式库 */
	 @import url("./common/free.css");
		/* 全局样式 */
	@import url("./common/common.css");	
	 
	 /* 去掉弹出层默认白色背景, 页面样式中设置无效 */
	.uni-transition .uni-popup__wrapper-box{
		background: none !important;
	}
	/* 防止小程序右上角按钮遮住导航右侧按钮 */
	.uni-navbar {
		margin-top: 52rpx !important;
	}
	
</style>
