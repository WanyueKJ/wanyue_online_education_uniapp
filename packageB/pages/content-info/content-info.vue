<template>
	<view>
		
		<!-- #ifndef H5 -->
		<uni-nav-bar :border="false" @clickLeft="backCourseList" left-icon="back" title="内容详情">
			
		</uni-nav-bar>
		<!-- #endif -->
		
		<view class="live_course_bg_wrap">
			<image class="live_course_img" :src="live_course_bg" mode="aspectFill"></image>
		</view>
		<view class="course-bottom">
			<view class="flex align-center justify-center font-weight-bold course-info-tab">
				<view class="mx-5 c-info-tabbar" @click="changeTab(index)" v-for="(item, index) in tabBars" :key="index" :class="tabIndex === index ? 'text-main font-md' : 'font-md text-light-muted'">
					{{item.name}}
				</view>
			</view>
			<swiper :current="tabIndex" class="swiper-box" :style="{height:scrollH+'rpx'}" @change="onChangeTab">
				<swiper-item class="course-info-item">
					<scroll-view scroll-y :style="{height:scrollH+'rpx'}">
						<view class="row">
							<view class="page_title">{{liveInfo.name}}</view>
							<view v-if="sorttype == '图文自学'">
								<image class="course_tag_image" src="../../static/tuwenzixue.png" mode="aspectFit"></image>
							</view>
							<view v-if="sorttype == '视频自学'">
								<image class="course_tag_image" src="../../static/shipinzixue.png" mode="aspectFit"></image>
							</view>
							<view v-if="sorttype == '语音自学'">
								<image class="course_tag_image" src="../../static/yuyinzixue.png" mode="aspectFit"></image>
							</view>
						</view>
						<text class="page_des">{{liveInfo.des}}</text>
						<view class="price-time-stunum">
							<text v-if="isbuy == 1 && liveInfo.paytype == 1" style="color:#FF1B20;">已付费</text>
							<text v-if="isbuy == 1 && liveInfo.paytype == 2" style="color:#4385FF;">密码</text>
							<text v-if="liveInfo.paytype == 0" class="free">免费</text>
							<text v-if="isbuy == 0 && liveInfo.paytype == 2" style="color:#4385FF;">密码</text>
							<text v-if="isbuy == 0 && liveInfo.paytype ==1" class="price-wrap-new">
								{{'¥' + liveInfo.payval}}
							</text>
							<template v-if="liveInfo.add_time">
								<template v-if="liveInfo.add_time.length > 0">
									<text class="time-wrap">{{liveInfo.add_time}}</text>
								</template>
								<template v-else>
									<text class="time-wrap">尚未添加内容</text>
								</template>
							</template>
							<template v-else>
								<text class="time-wrap">尚未添加内容</text>
							</template>
							<text class="stunum-wrap">{{liveInfo.views}}人在学</text>
						</view>
						<view class="new_line"></view>
						<view class="about-teacher-wrap">
							<text class="about-title ateacher-title">讲师介绍</text>
							<view class="ateacher-list">
								<view @click="viewTeacherInfo(teacherInfo.id)" class="ateacher-item">
									<image class="ateacher-img" :src="teacherInfo.avatar" mode=""></image>
									<image class="dav" src="../../../static/dav.png"></image>
									<view class="ateacher-info">
										<text class="at-info-item at-info-name">{{teacherInfo.user_nickname}}</text>
										<text class="at-info-item">主讲老师</text>
									</view>
									<text class="teacher-arow iconfont icon-jinrujiantou"></text>
								</view>
								<view @click="viewTeacherInfo(fudaoTeacher.id)" :class="{hideclass: (hidefudao == '1')}" class="ateacher-item ateacher-fudao-item">
									<image class="ateacher-img" :src="fudaoTeacher.avatar" mode=""></image>
									<image class="dav-fudao" src="../../../static/dav.png"></image>
									<view class="ateacher-info">
										<text class="at-info-item at-info-name">{{fudaoTeacher.user_nickname}}</text>
										<text class="at-info-item">辅导老师</text>
									</view>
									<text class="teacher-arow iconfont icon-jinrujiantou"></text>
								</view>
							</view>
						</view>
						<view class="about-live-wrap">
							<text class="about-title alive-title">内容介绍</text>
							<view class="alive-info">
								<rich-text :nodes="liveInfo.info"></rich-text>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="course-info-item">
					<scroll-view :scroll-y="kongkong == true? false:true" :style="'height:' + scrollH+'rpx;'">
						<view class="xiepingjia">
							<view class="pingjia-all-star">
								<text v-for="(item, index) in stararr" v-if="index < Math.floor(parseInt(com_data.star))" :key="index" class="pingjia-star iconfont icon-pingfenxingxing checkstar"></text>
								<text class="score checkstar">{{com_data.star}}</text>
							</view>
							
								<view class="pingjia-title" @click="openpinglun">写评价</view>
							<!-- <view class="pingjia-title" @click="openpinglun">写评价</view> -->
						</view>
						<view v-if="kongkong == false">
							<view class="com-list-wrap">
								<view v-for="(item, index) in com_data.list" class="com-item-wrap">
									<view class="com-user-star">
										<image class="com-user-avatar" :src="item.avatar" mode="aspectFill"></image>
										<view class="new1">
											<view class="new2">
												<text class="com-user-nickname">{{item.user_nickname}}</text>
												<text class="com-user-des">{{item.des}}</text>
											</view>
											<view class="list-star-wrap star-wrap">
												<text v-for="(it, idx) in stararr" v-if="idx < Math.floor(parseInt(item.star))" :key="idx" class="pingjia-star iconfont icon-pingfenxingxing checkstar"></text>
											</view>
										</view>
										<view class="com-time">{{item.add_time}}</view>
									</view>
									<template v-if="item.content.length == 0">
										<view class="com-content-kong">{{item.content}}</view>
									</template>
									<template v-else>
										<view class="com-content">{{item.content}}</view>
									</template>
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
			<view class="share-view" @click="share">
				<image class="share-view-image" src="../../../static/juxing.png">
				</image>
				<view class="share-text">分享赚积分</view>
			</view>
			<template v-if="btn_status == 5">
				<view @click="huiyuan" class="inlive-btn">
					开通会员立享
				</view>
			</template>
			<template v-else>
					<template v-if="paytype == 0">
						<view @click="enterContent()" class="inlive-btn">
							查看详情
						</view>
					</template>
					<template v-else-if="paytype == 2">
						<template v-if="isbuy == 0">
							<view @click="enterpasslive" class="inlive-btn">
								输入密码获得
							</view>
						</template>
						<template v-else>
							<view @click="enterContent()" class="inlive-btn">
								查看详情
							</view>
						</template>
					</template>
					
					<template v-if="paytype == 1">
						<template v-if="isbuy == 0">
							<view @click="enterpaylive">
								<template v-if="liveInfo.isbuy == 0">
									<view class="carline"></view>
									<view class="carView">
										<view class="car" @click="shopcar">
											<view class="new_gouwuche">
												<image class="gowucheimage" src="../../static/gouwuche.png" mode="aspectFit">
												</image>
												<template v-if="nums != 0">
													<view class="gouwunums">
														<view class="carnums">{{nums}}</view>
													</view>
												</template>
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
						<template v-if="isbuy == 1">
							<view @click="enterContent()" class="inlive-btn">
								查看详情
							</view>
						</template>
					</template>
			</template>
		</view>
		<view :hidden="userpasswordkHidden" class="popup_content">
			<view class="popup_title">请输入密码</view>
			<view class="popup_textarea_item">
				<input type="password" class="popup_textarea" value="" v-model="passwordcontent" placeholder="请输入密码" />
			</view>
			<view class="buttons">
				<text @click="submitCancle" class="popup_button">取消</text>
				<text @click="submitPassword" class="popup_button2">确定</text>
			</view>
		</view>
		<view class="popup_overlay" :hidden="userpasswordkHidden" @click="hideDiv()"></view>
		<view class="extension-zhe" v-if="isHidden == 0">
			<view class="extension-zhe-content">
				<view class="extension-zhe-content-tips">
					分享方式
					<image @click="close" class="extension-zhe-content-tips-img" src="../../static/ming-pop/close.png"></image>
				</view>
				<view class="extension-zhe-content-type">
					<view class="extension-zhe-content-type-li" @click="haibaoshare">
						<image class="extension-zhe-content-type-li-img" src="../../static/tuiguang_haibao.png"></image>
						<view class="extension-zhe-content-type-li-text">海报分享</view>
					</view>
				</view>
			</view>
		</view>
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
				token_Expired: false,
				isbuy: 0,
				trialtype: 0,
				scrollH: 0,
				scrollallH: 0,
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
				kongkong: true, //空空如也
				webview: '',
				INFO: [],
				sorttype: '图文自学',
				sort: '0',
				type: 1,
				animationData: [],
				isHidden: 0,
				btn_status: 0
			}
		},
		onReady: function() {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.scrollH = res.windowHeight * 750 / res.windowWidth - 600;

					// // #ifdef MP-WEIXIN
					// that.scrollH = res.windowHeight * 750 / res.windowWidth - 750;
					// // #endif
				}
			});
			// let uid = app.globalData.userinfo.id;
			// let token = app.globalData.userinfo.token;
			// this.webview = getApp().globalData.site_h5url + 'appapi/course/info?uid=' + uid + '&token=' + token + '&courseid=' +
			// 	this.getcourseid;
			// console.log(this.webview);
			this.getnums();
			this.getContentInfo(this.courseid);
			this.getPingjia(this.courseid);
		},
		onShow: function() {
			
			//获取评价内容
			setTimeout(() => {
				this.getContentInfo(this.getcourseid);
				this.getPingjia(this.getcourseid);
				this.getnums();
			}, 0);
			this.isHidden = 1;
		},
		onShareTimeline: function() {

		},
		onShareAppMessage: function(res) {

		},
		onLoad(option) {
			this.courseid = option.courseid;
			this.getcourseid = option.courseid
		},
		methods: {
			huiyuan() {
				uni.showModal({
					title: '开通会员立享请下载app体验',
					content: '',
					showCancel: false,
					cancelText: '',
					confirmText: '确定',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			setLogin() {
				// 没有登录则弹窗登录
				if (app.globalData.userinfo == '') {
					uni.navigateTo({
						url: '../../../pages/login/login'
					});
					return false;
				}
				return true;

				// if(app.globalData.userinfo == '') {
				// 	uni.showModal({
				// 		title: '请先登录你的账号',
				// 		content: '',
				// 		showCancel: true,
				// 		cancelText: '取消',
				// 		confirmText: '立即登录',
				// 		confirmColor: '#38DAA6',
				// 		success: res => {
				// 			if (res.confirm) {
				// 				uni.navigateTo({
				// 					url: '../../../pages/login/login'
				// 				})
				// 			}
				// 		},
				// 		fail: () => {},
				// 		complete: () => {}
				// 	});
				// 	return false;
				// }
				// return true;
			},
			share() {

				this.isHidden = 0;
			},
			haibaoshare() {
				let isLogin = this.setLogin();
				if (!isLogin) {
					return;
				}
				uni.navigateTo({
					url: '../../../pages/mineExtension/extension_poster?courseid=' + this.getcourseid + '&type=1',
				});
			},
			//关闭推广
			close() {
				this.isHidden = 1;
			},
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
						if (res.data.data.code == 0) {
							this.nums = res.data.data.info[0].nums;
						}


					},
				});
			},
			// 打开评论页面
			openpinglun() {
				let isLogin = this.setLogin();
				if (!isLogin) {
					return;
				}
				uni.navigateTo({
					url: '../../../pages/pinglun/pinglun?courseid=' + this.courseid + '&title=' + this.liveInfo.name +
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
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'courseid': courseid,
						'p': 1
					},
					success: res => {
						if (res.data.data.code != '0') {
							return;
						}
						let com_data = res.data.data.info[0];
						if ((com_data.list != undefined) && (com_data.list.length > 0)) {
							this.kongkong = false;
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
				let isLogin = this.setLogin();
				if (!isLogin) {
					return;
				}
				if (this.isbuy == 0){
					// 显示输入弹出框
					this.userpasswordkHidden = false;
				}else{
					this.enterlive();
				}
			},
			//提交密码 passwordcontent
			submitPassword() {
				if (this.passwordcontent.length == 0) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return;
				}
				uni.showLoading({
					title: '......',
					icon: 'none',
				});
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
						this.passwordcontent = '';
						uni.showToast({
							title: res.data.data.msg,
							icon: 'none',
						})
						if (res.data.data.code == 0) {
							this.getContentInfo(this.getcourseid);
						} else {

						}
					},
					fail: () => {
						this.passwordcontent = '';
						uni.hideLoading();
					},
					complete: () => {}
				});
			},
			submitCancle() {
				this.passwordcontent = '';
				this.userpasswordkHidden = true;
			},
			// 获取内容详情
			getContentInfo(courseid) {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Course.GetDetail',
					method: 'GET',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'courseid': courseid
					},
					success: res => {
						if (res.data.data.code == 700) {
							this.token_Expired = true;
						} else {
							this.token_Expired = false;
						}
						///// 类别，0内容1课程2直播3摄像头直播
						//type /// 形式，1图文2视频3音频    4ppt直播 5视频直播6音频直播7授课直播（白板）
						console.log(JSON.parse(JSON.stringify(res)));
						this.trialtype = res.data.data.info[0].trialtype;
						this.btn_status = res.data.data.info[0].btn_status;
						this.isbuy = res.data.data.info[0].isbuy;
						this.sort = res.data.data.info[0].sort;
						this.type = parseInt(res.data.data.info[0].type);
						// if (this.sort == 0) {
						if (this.type == 1) {
							this.sorttype = '图文自学';
						} else if (this.type == 2) {
							this.sorttype = '视频自学';
						} else if (this.type == 3) {
							this.sorttype = '语音自学';
						}
						// }
						this.INFO = res.data.data.info;
						let info = res.data.data.info[0];
						this.live_course_bg = info.thumb ? info.thumb : '';
						this.liveInfo = info;
						this.teacherInfo = info.userinfo;
						this.paytype = res.data.data.info[0].paytype;
						if (info.tutor) {
							if (info.tutor.length < 1) {
								this.hidefudao = '1';
								return;
							}
						}
						this.fudaoTeacher.id = info.tutor[0].id;
						this.fudaoTeacher.avatar = info.tutor[0].avatar;
						this.fudaoTeacher.user_nickname = info.tutor[0].user_nickname;
					},
				});
			},
			enterpaylive() {
				if (this.liveInfo.isbuy == 1) {
					this.enterContent();
				}
			},
			// 查看内容详情
			enterContent() {
				let isLogin = this.setLogin();
				if (!isLogin) {
					return;
				}
				if (this.token_Expired) {
					uni.navigateTo({
						url: '../../../pages/login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return;
				}
				
			
				uni.request({
					url: getApp().globalData.site_url + 'App.Course.SetLesson',
					method: 'POST',
					data: {
						'uid': getApp().globalData.userinfo.id,
						'token': getApp().globalData.userinfo.token,
						'courseid': this.getcourseid,
						'lessonid': 0
					},
					success: res => {
						if (res.data.data.code == 700) {
							uni.navigateTo({
								url: '../../../pages/login/login',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
							return;
						}
						// sort unde 套餐 0 内容 1课程2直播
						//1图文2视频3音频 4ppt直播 5视频直播6音频直播 7授课直播（白板）
						if (res.data.data.code == 0) {
							
				
				if (this.trialtype == 2 && this.isbuy == 1){
					this.trialtype = 0;
				}
				uni.navigateTo({
					url: '../content-detail/content-detail?info=' + encodeURIComponent(JSON.stringify(this.liveInfo)) + '&type=' +
						this.liveInfo.type + '&thumb=' + this.live_course_bg + '&addtime=' + this.liveInfo.add_time + '&trialtype=' +
						this.trialtype,
				});
				} else {
							uni.showToast({
								title: res.data.data.msg,
								icon: 'none'
							});
						}
					}
				});
			},
			// 查看教师详情
			viewTeacherInfo(touid) {
				let isLogin = this.setLogin();
				if (!isLogin) {
					return;
				}
				if (this.token_Expired) {
					uni.navigateTo({
						url: '../../../pages/login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return;
				}
				//跳转教师详情页并传入基本信息
				uni.navigateTo({
					url: '../../../pages/teacherinfo/teacherinfo?touid=' + touid,
				});
			},
			//加入购物车
			doAddCar() {
				let isLogin = this.setLogin();
				if (!isLogin) {
					return;
				}
				if (this.btn_status == 5) {
					this.huiyuan();
					return;
				}
				if (this.token_Expired) {
					uni.navigateTo({
						url: '../../../pages/login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return;
				}
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

						this.getContentInfo(this.getcourseid);
						this.getnums();
						uni.showToast({
							title: res.data.data.msg
						})

					},
				});
			},
			shopcar() {
				let isLogin = this.setLogin();
				if (!isLogin) {
					return;
				}
				if (this.btn_status == 5) {
					this.huiyuan();
					return;
				}
				if (this.token_Expired) {
					uni.navigateTo({
						url: '../../../pages/login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return;
				}
				uni.navigateTo({
					url: '../../../pages/shop-car/shop-car',
				});
			},
			//立即购买
			buy() {
				let isLogin = this.setLogin();
				if (!isLogin) {
					return;
				}
				if (this.btn_status == 5) {
					this.huiyuan();
					return;
				}
				if (this.token_Expired) {
					uni.navigateTo({
						url: '../../../pages/login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return;
				}
				uni.navigateTo({
					url: '../../../pages/pay/pay?info=' + encodeURIComponent(JSON.stringify(this.INFO)),
				});
			}
		}
	}
</script>
<style>
	/* 课程详情页公共样式 */
	@import url("/static/css/course_info/course_info.css");
	@import url("/static/common/css/pingjia.css");

	/* page {
		width: 100%;
		height: 100%;
		overflow: hidden;
	} */

	.sub_jifen {
		position: absolute;
		right: 60rpx;
		/* #ifdef MP-WEIXIN */
		right: 30rpx;
		/* #endif */
		margin-top: -10rpx;
		color: #FFFFFF;
		text-align: center;
		padding-bottom: 5rpx;
		width: 80rpx;
		height: 30rpx;
		border-radius: 15rpx;
		font-size: 20rpx;
		background-color: #FF3939;
	}

	.popup_overlay {
		position: fixed;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 900;
		-moz-opacity: 0.8;
		opacity: .80;
		filter: alpha(opacity=88);
	}

	.popup_content {
		overflow: hidden;
		position: fixed;
		top: 50%;
		left: calc(50% - 120px);
		width: 400rpx;
		height: 200rpx;
		margin-top: -270rpx;
		border: 10px solid white;
		background-color: white;
		z-index: 901;
		overflow: auto;
		border-radius: 10rpx;
	}


	.popup_title {
		width: 100%;
		text-align: center;
		font-size: 32rpx;
	}

	.popup_textarea_item {
		padding-top: 10rpx;
		height: 50rpx;
		width: 100%;
		background-color: #F1F1F1;
		margin-top: 20rpx;
	}

	.popup_textarea {
		width: 100%;
		font-size: 26rpx;
		margin-left: 20rpx;
	}

	.popup_button {
		color: #000000;
		width: 50%;
		text-align: center;

	}

	.popup_button2 {
		color: #64D3AD;
		width: 50%;
		text-align: center;

	}

	.buttons {
		display: flex;
		flex-direction: row;
		width: 100%;
		font-size: 32rpx;
		margin-top: 10rpx;

	}

	.new_gouwuche {
		margin-top: 10rpx;
		position: relative;
		width: 80rpx;
		height: 80rpx;
	}

	.gouwunums {
		position: absolute;
		background-color: #DC2929;
		width: 26rpx;
		height: 26rpx;
		border-radius: 13rpx;
		margin-left: 40rpx;
		margin-top: 10rpx;
	}

	.gowucheimage {
		position: absolute;
		width: 70upx;
		height: 50upx;
		left: 0rpx;
		margin-top: 10rpx;
	}

	.carView {
		display: flex;
		flex-direction: row;
		bottom: 0upx;
		background-color: #FFFFFF;
		height: 110upx;
		position: fixed;
		width: 100%;
	}

	.carnums {
		width: 26rpx;
		height: 26rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 26rpx;
	}

	.car {
		width: 30%;
		align-items: center;
		text-align: center;
		display: flex;
		flex-direction: column;

	}

	.cartitle {
		color: #333333;
		font-size: small;
	}

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
