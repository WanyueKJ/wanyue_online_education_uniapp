<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<uni-nav-bar @clickLeft="backCourseList" left-icon="back" :border="false" title="内容详情" statusBar>

			<view slot="right" @click="openpinglun">
				<image class="pinglun-icon" src="../../static/images/pinglun.png" mode=""></image>
			</view>

		</uni-nav-bar>
		<!-- #endif -->

		<!-- #ifndef MP-WEIXIN -->
		<uni-nav-bar @clickLeft="backCourseList" left-icon="back" :border="false" title="内容详情">

			<view slot="right" @click="openpinglun">
				<image class="pinglun-icon" src="../../static/images/pinglun.png" mode=""></image>
			</view>

		</uni-nav-bar>
		<!-- #endif -->

		<!-- 直播背景 -->
		<view class="live_course_bg_wrap">
			<image class="live_course_img" :src="live_course_bg" mode="aspectFill"></image>
		</view>

		<view class="course-bottom">
			<!-- tab标签 -->
			<view class="flex align-center justify-center font-weight-bold course-info-tab">
				<view class="mx-5 c-info-tabbar" @click="changeTab(index)" v-for="(item, index) in tabBars" :key="index" :class="tabIndex === index ? 'text-main font-lg' : 'font-md text-light-muted'">
					{{item.name}}
				</view>


			</view>

			<swiper :current="tabIndex" class="swiper-box" :style="{height:scrollH+'px'}" @change="onChangeTab">
				<!-- 简历 -->
				<swiper-item class="course-info-item">
					<scroll-view scroll-y :style="'height:' + scrollH+'px;'">
						<!-- 标题标签区域 -->
						<view>
							<text>{{liveInfo.name}}</text>
							<text class="course_tag">{{sorttype}}</text>
						</view>

						<!-- 价格时间学习人数信息 -->
						<view class="price-time-stunum">
							<text class="rmb_icon" v-if="liveInfo.payval != '免费'">￥</text>
							<text :class="{mianfei : (liveInfo.payval == '免费')}" class="price-wrap">{{liveInfo.payval}}</text>
							<text class="time-wrap">{{liveInfo.add_time}}</text>
							<text class="stunum-wrap">{{liveInfo.views}}人在学</text>
						</view>

						<!-- 讲师介绍 -->
						<view class="about-teacher-wrap">
							<text class="about-title ateacher-title">讲师介绍</text>
							<view class="ateacher-list">

								<view @click="viewTeacherInfo(teacherInfo.id)" class="ateacher-item">
									<image class="ateacher-img" :src="teacherInfo.avatar" mode=""></image>
									<view class="ateacher-info">
										<text class="at-info-item at-info-name">{{teacherInfo.user_nickname}}</text>
										<text class="at-info-item">主讲老师</text>
									</view>
									<text class="teacher-arow">></text>
								</view>

								<view @click="viewTeacherInfo(fudaoTeacher.id)" :class="{hideclass: (hidefudao == '1')}" class="ateacher-item ateacher-fudao-item">
									<image class="ateacher-img" :src="fudaoTeacher.avatar" mode=""></image>
									<view class="ateacher-info">
										<text class="at-info-item at-info-name">{{fudaoTeacher.user_nickname}}</text>
										<text class="at-info-item">辅导老师</text>
									</view>
									<text class="teacher-arow">></text>
								</view>

							</view>
						</view>

						<!-- 内容介绍 -->
						<view class="about-live-wrap">
							<text class="about-title alive-title">内容介绍</text>
							<view class="alive-info">
								<rich-text :nodes="liveInfo.info"></rich-text>
							</view>
						</view>

					</scroll-view>
				</swiper-item>

				<!-- 评价 -->
				<swiper-item class="course-info-item">
					<scroll-view scroll-y :style="'height:' + scrollH+'px;'">
						<view v-if="kongkong != ''">
							<view class="pingjia-title">全部评价</view>
							<view class="pingjia-all-star">
								<text v-for="(item, index) in stararr" v-if="index < Math.floor(parseInt(com_data.star))" :key="index" class="pingjia-star iconfont icon-pingfenxingxing checkstar"></text>
								<text class="score checkstar">{{com_data.star}}</text>
							</view>

							<!-- 评论列表区域 -->
						<!-- 评论列表区域 -->
							<view class="com-list-wrap">
								<view v-for="(item, index) in com_data.list" class="com-item-wrap">
									<view class="com-user-star">
										<image class="com-user-avatar" :src="item.avatar" mode="aspectFill"></image>
										<view class="new1">
											<text class="com-user-nickname">{{item.user_nickname}}</text>
											<view class="list-star-wrap star-wrap">
												<text v-for="(it, idx) in stararr" v-if="idx < Math.floor(parseInt(item.star))" :key="idx" class="pingjia-star iconfont icon-pingfenxingxing checkstar"></text>
											</view>
										</view>
										<view class="com-time">{{item.add_time}}</view>
									</view>
									
									<view class="com-content">{{item.content}}</view>
									<view class="pingjialine"></view>
								</view>
							</view>
						</view>

						<view v-else>
							<view class="kong-wrap">
								<view class="kong-info">
									<image class="kong-ping-img" src="/static/images/xiangzi.png" mode="aspectFill"></image>
									<view class="kong-ping-txt">还未收到评价</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>

			<template v-if="paytype == 0">
				<view @click="enterContent()" class="inlive-btn">
					查看详情
				</view>
			</template>
			<template v-else-if="paytype == 2">
				<view @click="enterpasslive" class="inlive-btn">
					输入密码
				</view>
			</template>
			<template v-if="paytype == 1">
				<view @click="enterpaylive">
					<template v-if="liveInfo.ifbuy == 0">
						<view class="carline"></view>
						<view class="carView">
							<view class="car" @click="shopcar">
								<view class="gouwunums">
									<image class="gowucheimage" src="../../static/gouwuche.png" mode="aspectFit">
										<template v-if="nums != 0">
											<view class="gouwunums">
												<view class="carnums">
													<view class="carnumstitle">{{nums}}</view>
												</view>
											</view>
										</template>
									</image>
								</view>
								<view class="cartitle">购物车</view>
							</view>
							<template v-if="liveInfo.iscart == 0">
								<view class="joincar" @tap="doAddCar">加入购物车</view>
							</template>
							<template v-else>
								<view class="joincar2">已加入购物车</view>
							</template>
							<view class="buy" @tap="buy">立即购买</view>
						</view>
					</template>
				</view>
			</template>
		</view>
		<view :hidden="userpasswordkHidden" class="popup_content">
			<view class="popup_title">输入密码</view>
			<view class="popup_textarea_item">
				<input type="text" class="popup_textarea" value="" v-model="passwordcontent" placeholder="输入密码" />
				<view @click="submitPassword" class="buttons">
					<text class="popup_button">确定</text>
				</view>
			</view>
		</view>
		<view class="popup_overlay" :hidden="userpasswordkHidden" @click="hideDiv()"></view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';

	const app = getApp();

	export default {
		components: {
			uniNavBar,

		},
		data() {
			return {
				scrollH: 500,
				tabIndex: 0,
				tabBars: [{
					name: "介绍"
				}, {
					name: "评价"
				}],
				live_course_bg: '', //直播背景图片
				liveInfo: {},
				hidefudao: '',
				teacherInfo: {
					'id': '',
					'avatar': '',
					'user_nickname': ''
				},
				fudaoTeacher: {
					'id': '',
					'avatar': '',
					'user_nickname': ''
				},
				paytype: '',
				userpasswordkHidden: true, // 默认隐藏
				feedbackpassword: '', // 输入密码
				passwordcontent: '',
				getcourseid: '',
				nums: '',
				courseid: '', //内容id
				stararr: [1, 2, 3, 4, 5],
				com_data: {}, //评论数据
				kongkong: '', //空空如也
				webview: '',
				INFO: [],
				sorttype: '图文',
				sort: '0',
				type: '0'
			}
		},
		onReady: function() {

			// let uid = app.globalData.userinfo.id;
			// let token = app.globalData.userinfo.token;
			// this.webview = getApp().globalData.site_h5url + 'appapi/course/info?uid=' + uid + '&token=' + token + '&courseid=' +
			// 	this.getcourseid;
			// console.log(this.webview);
			this.getnums();
		},
		onShow: function() {
			//获取评价内容
			this.getPingjia(this.courseid);
			this.getnums();
			this.getContentInfo(this.getcourseid);
		},

		onLoad(option) {
			this.getContentInfo(option.courseid);
			this.getcourseid = option.courseid;
			//this.paytype = option.paytype;
			console.log("courseid = " + option.courseid);
			this.courseid = option.courseid;
			//获取评价内容
			this.getPingjia(option.courseid);

		},
		methods: {
			getnums() {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Cart.GetNums',
					method: 'POST',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
					},
					success: res => {
						this.nums = res.data.data.info[0].nums;
						// console.log(res);
					},
				});
			},
			// 打开评论页面
			openpinglun() {
				uni.navigateTo({
					url: '../pinglun/pinglun?courseid=' + this.courseid + '&title=' + this.liveInfo.name +
						'&avatar=' + this.teacherInfo.avatar + '&nickname=' + this.teacherInfo.user_nickname,
				});
			},
			// 获取评价内容 
			getPingjia(courseid) {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Comment.GetList',
					method: 'GET',
					data: {
						// uid token courseid p
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'courseid': courseid,
						'p': 1
					},
					success: res => {
						// console.log(res);
						if (res.data.data.code != '0') {
							return;
						}
						let com_data = res.data.data.info[0];
						// console.log(com_data);
						if ((com_data.list != undefined) && (com_data.list.length > 0)) {
							this.kongkong = 1;
						}
						this.com_data = com_data;
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					},
				});
			},
			//切换选项卡
			changeTab(index) {
				this.tabIndex = index
			},
			//滑动
			onChangeTab(e) {
				//切换当前索引
				this.tabIndex = e.detail.current
			},
			backCourseList() {
				uni.navigateBack({
					delta: 1
				});
			},
			enterpasslive() {
				// 显示输入弹出框
				this.userpasswordkHidden = false;

			},
			//提交密码 passwordcontent
			submitPassword() {
				uni.showLoading({
					title: '......',
					icon: 'none',
				});

				console.log("提交密码 getcourseid =" + this.getcourseid);
				var passwordcontent = this.passwordcontent;
				this.userpasswordkHidden = true;
				let gData = app.globalData;

				uni.request({
					url: gData.site_url + 'Course.CheckPass',
					method: 'POST',
					data: {
						"pass": passwordcontent,
						"courseid": this.getcourseid,
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token
					},
					success: res => {
						uni.hideLoading();
						console.log(res);
						uni.showToast({
							title: res.data.data.msg,
							icon: 'none',
						})
						if (res.data.data.code == 0) {
							console.log("enterlive");
							this.enterContent();
						} else {

						}
					},
					fail: () => {
						uni.hideLoading();
					},
					complete: () => {}
				});


			},
			// 获取内容详情
			getContentInfo(courseid) {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Course.GetDetail',
					method: 'GET',
					data: {
						// uid token courseid
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'courseid': courseid
					},
					success: res => {

						///// 类别，0内容1课程2直播3摄像头直播
						//type /// 形式，1图文2视频3音频    4ppt直播 5视频直播6音频直播7授课直播（白板）


						this.sort = res.data.data.info[0].sort;
						this.type = res.data.data.info[0].type;
						if (this.sort == 0) {
							if (this.type == 1) {
								this.sorttype = '图文';
							} else if (this.type == 2) {
								this.sorttype = '视频';
							} else if (this.type == 3) {
								this.sorttype = '音频';
							} else if (this.type == 4) {
								this.sorttype = 'ppt';
							}

						}
						this.INFO = res.data.data.info;
						let info = res.data.data.info[0];
						this.live_course_bg = info.thumb ? info.thumb : '';
						this.liveInfo = info;
						this.teacherInfo = info.userinfo;
						this.paytype = res.data.data.info[0].paytype;
						console.log(this.liveInfo);
						if (info.tutor.length < 1) {
							this.hidefudao = '1';
							return;
						}
						console.log(this.liveInfo);

						this.fudaoTeacher.id = info.tutor[0].id;
						this.fudaoTeacher.avatar = info.tutor[0].avatar;
						this.fudaoTeacher.user_nickname = info.tutor[0].user_nickname;
					},
				});
			},
			enterpaylive() {
				if (this.liveInfo.ifbuy == 1) {
					this.enterlive();
				}
			},
			// 查看内容详情
			enterContent() {
				
					uni.navigateTo({
						url: '../content-detail/content-detail?info=' + encodeURIComponent(JSON.stringify(this.liveInfo)) + '&type=' +
							this.liveInfo.type + '&thumb=' + this.live_course_bg + '&addtime=' + this.liveInfo.add_time,
					});
		

			},
			// 查看教师详情
			viewTeacherInfo(touid) {
				//跳转教师详情页并传入基本信息
				uni.navigateTo({
					url: '../teacherinfo/teacherinfo?touid=' + touid,
				});

			},
			//加入购物车
			doAddCar() {
				let gData = app.globalData;
				var that = this;
				uni.request({
					url: gData.site_url + 'Cart.Add',
					method: 'POST',
					data: {
						"type": "0",
						"typeid": this.getcourseid,
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
					},
					success: res => {
						console.log(res);
						this.getContentInfo(this.getcourseid);
						this.getnums();
						uni.showToast({
							title: res.data.data.msg
						})

					},
				});
			},
			shopcar() {
				console.log('前往购物车');
				uni.navigateTo({
					url: '../shop-car/shop-car',
				});
			},
			//立即购买
			buy() {
				console.log(this.liveInfo);
				uni.navigateTo({
					url: '../pay/pay?info=' + encodeURIComponent(JSON.stringify(this.INFO)),
				});
			}

		}
	}
</script>

<style>
	/* 课程详情页公共样式 */
	@import url("/static/css/course_info/course_info.css");
	@import url("/static/common/css/pingjia.css");

	.popup_overlay {
		position: fixed;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 1001;
		-moz-opacity: 0.8;
		opacity: .80;
		filter: alpha(opacity=88);
	}

	.popup_content {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 520rpx;
		height: 250rpx;
		margin-left: -270rpx;
		margin-top: -270rpx;
		border: 10px solid white;
		background-color: white;
		z-index: 1002;
		overflow: auto;
	}

	.popup_title {
		width: 480rpx;
		text-align: center;
		font-size: 32rpx;
	}

	.popup_textarea_item {
		padding-top: 5rpx;
		height: 80rpx;
		width: 440rpx;
		background-color: #F1F1F1;
		margin-top: 20rpx;
		margin-left: 20rpx;
		padding-top: 25rpx;
	}

	.popup_textarea {
		width: 410rpx;
		font-size: 26rpx;
		margin-left: 20rpx;
	}

	.popup_button {
		color: #000000;
	}

	.buttons {
		text-align: center;
		font-size: 32rpx;
		margin-top: 40rpx;
	}

	.carView {
		position: fixed;
		bottom: 0upx;
		display: flex;

		flex-direction: row;

		background-color: #FFFFFF;
		height: 110upx;

		width: 100%;

	}

	.car {
		width: 30%;
		align-items: center;
		text-align: center;
		display: flex;
		flex-direction: column;
		padding-top: 20upx;
	}

	.cartitle {
		color: #333333;
		font-size: small;

	}

	.gouwunums {
		display: flex;
		flex-direction: row;

	}

	.gowucheimage {
		display: flex;
		width: 70upx;
		height: 50upx;
		display: flex;
		flex-direction: row;
		/* padding-left: 10upx; */
		flex-flow: column;
	}

	.carnums {
		margin-left: -30upx;
		margin-top: -15upx;
		width: 40upx;
		height: 40upx;
		font-size: small;
		color: #FFFFFF;
		text-align: center;
		background-color: #FF3333;
		border-radius: 20upx;
	}

	.carnumstitle {}

	.joincar {
		text-align: center;
		width: 40%;
		color: #FFFFFF;
		background-color: #FFAC4B;
		font-size: larger;
		padding-top: 25upx;
	}

	.joincar2 {
		text-align: center;
		width: 40%;
		color: #FFFFFF;
		background-color: #CCCCCC;
		font-size: larger;
		padding-top: 25upx;
	}

	.buy {
		padding-top: 25upx;
		text-align: center;
		font-size: larger;
		width: 40%;
		color: #FFFFFF;
		background-color: #FF623E;
	}
</style>
