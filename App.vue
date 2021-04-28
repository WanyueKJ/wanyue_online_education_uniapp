<script>
	export default {
		globalData: {  
			wechatuserinfo:'',
			userinfo: '',
			site_url: "https://demo.sdwanyue.com/api/?s=",
			site_h5url: "https://demo.sdwanyue.com/",
			qiniuimageurl:"",
			biaoqingurl:"https://demo.sdwanyue.com/UNIAPP/biaoqing/",
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
			emojiArray: ["[微笑]", "[色]", "[发呆]", "[抽烟]", "[抠鼻]", "[哭]", "[发怒]",
				"[呲牙]", "[睡]", "[害羞]", "[调皮]", "[晕]", "[衰]", "[闭嘴]",
				"[指点]", "[关注]", "[搞定]", "[胜利]", "[无奈]", "[打脸]", "[大笑]",
				"[哈欠]", "[害怕]", "[喜欢]", "[困]", "[疑问]", "[伤心]", "[鼓掌]",
				"[得意]", "[捂嘴]", "[惊恐]", "[思考]", "[吐血]", "[卖萌]", "[嘘]",
				"[生气]", "[尴尬]", "[笑哭]", "[口罩]", "[斜眼]", "[酷]", "[脸红]",
				"[大叫]", "[眼泪]", "[见钱]", "[嘟]", "[吓]", "[开心]", "[想哭]",
				"[郁闷]", "[互粉]", "[赞]", "[拜托]", "[唇]", "[粉]", "[666]",
				"[玫瑰]", "[黄瓜]", "[啤酒]", "[无语]", "[纠结]", "[吐舌]", "[差评]",
				"[飞吻]", "[再见]", "[拒绝]", "[耳机]", "[抱抱]", "[嘴]", "[露牙]",
				"[黄狗]", "[灰狗]", "[蓝狗]", "[狗]", "[脸黑]", "[吃瓜]", "[绿帽]",
				"[汗]", "[摸头]", "[阴险]", "[擦汗]", "[瞪眼]", "[疼]", "[鬼脸]",
				"[拇指]", "[亲]", "[大吐]", "[高兴]", "[敲打]", "[加油]", "[吐]",
				"[握手]", "[18禁]", "[菜刀]", "[威武]", "[给力]", "[爱心]", "[心碎]",
				"[便便]", "[礼物]", "[生日]", "[喝彩]", "[雷]"
			],
			pinyinArray: [
				"face_001.png", "face_002.png", "face_003.png", "face_004.png",
				"face_005.png", "face_006.png", "face_007.png", "face_008.png",
				"face_009.png", "face_010.png", "face_011.png", "face_012.png",
				"face_013.png", "face_014.png", "face_015.png", "face_016.png",
				"face_017.png", "face_018.png", "face_019.png", "face_020.png",
				"face_021.png", "face_022.png", "face_023.png", "face_024.png",
				"face_025.png", "face_026.png", "face_027.png", "face_028.png",
				"face_029.png", "face_030.png", "face_031.png", "face_032.png",
				"face_033.png", "face_034.png", "face_035.png", "face_036.png",
				"face_037.png", "face_038.png", "face_039.png", "face_040.png",
				"face_041.png", "face_042.png", "face_043.png", "face_044.png",
				"face_045.png", "face_046.png", "face_047.png", "face_048.png",
				"face_049.png", "face_050.png", "face_051.png", "face_052.png",
				"face_053.png", "face_054.png", "face_055.png", "face_056.png",
				"face_057.png", "face_058.png", "face_059.png", "face_060.png",
				"face_061.png", "face_062.png", "face_063.png", "face_064.png",
				"face_065.png", "face_066.png", "face_067.png", "face_068.png",
				"face_069.png", "face_070.png", "face_071.png", "face_072.png",
				"face_073.png", "face_074.png", "face_075.png", "face_076.png",
				"face_077.png", "face_078.png", "face_079.png", "face_080.png",
				"face_081.png", "face_082.png", "face_083.png", "face_084.png",
				"face_085.png", "face_086.png", "face_087.png", "face_088.png",
				"face_089.png", "face_090.png", "face_091.png", "face_092.png",
				"face_093.png", "face_094.png", "face_095.png", "face_096.png",
				"face_097.png", "face_098.png", "face_099.png", "face_100.png",
				"face_101.png", "face_102.png", "face_103.png", "face_104.png"
			],
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
	
</style>
