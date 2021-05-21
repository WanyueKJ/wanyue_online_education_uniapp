<template>
	<view>
		
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="back" left-icon="back" :border="false" title="" statusBar>
		
		</uni-nav-bar>
		<!-- #endif -->
		
		<view class="line"></view>
		<!-- #ifdef H5 -->
		<scroll-view  class="liveinfo-wrap" scroll-y :style="{height:scrollH+'rpx'}">
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<scroll-view :refresher-threshold="45" :refresher-enabled="true" :refresher-triggered="refresherTriggered"
		 @refresherrefresh="refresherrefresh" class="liveinfo-wrap" scroll-y :style="{height:scrollH+'rpx'}">
		<!-- #endif -->
			<!-- 直播课列表 -->
			<view @click="viewLiveInfo(item.id,item.sort)" class="live-list" v-for="(item, index) in course_info" :key="index">
				<view class="live-list-img-wrap">
					<image class="live-list-img" :src="item.thumb" mode="aspectFill"></image>
					<template v-if="item.sort == undefined">
						<text class="course-title-icon">套餐</text>
					</template>
					<template v-else-if="item.sort == 0">
						<text class="course-title-icon">内容</text>
					</template>
					<template v-else-if="item.sort == 1">
						<text class="course-title-icon">课程</text>
					</template>
					<template v-else>
						<text class="course-title-icon">直播</text>
					</template>
				</view>
				<view class="live-list-info">
					<view class="live-c-title">{{item.name}}</view>
					<template v-if="item.sort == 0">
						<view class="tuwen-image" v-if="item.lesson == '图文自学'">
							<image class="tuwen-image" src="../../static/tuwenzixue.png"></image>
						</view>
						<view class="tuwen-image" v-if="item.lesson == '视频自学'">
							<image class="tuwen-image" src="../../static/shipinzixue.png"></image>
						</view>
						<view class="tuwen-image" v-if="item.lesson == '音频自学'">
							<image class="tuwen-image" src="../../static/yinpinzixue.png"></image>
						</view>
					</template>
					<template v-else>
						<view class="row">
							<view class="live-status living-status" v-if="item.islive == 1">
								{{item.lesson}}
							</view>
							<view class="live-status" v-else>
								<template v-if="item.lesson.length == 0">
									尚未添加内容
								</template>
								<template v-else>
									{{item.lesson}}
								</template>
							</view>
							<image v-if="item.ismaterial == 1" class="jiaocai-image" src="../../static/hanjiaocai.png"></image>
							<view class="jiaocai-text" v-if="item.ismaterial == 1">含教材</view>
						</view>
					</template>
					<view class="live-teacher-price">
						<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
						<text class="teacher-name">{{item.user_nickname}}</text>
						<view class="price-wrap">
							<text v-if="item.paytype == 0">免费</text>
							<text v-if="item.paytype == 2" class="pass">密码</text>
							<text v-if="item.paytype ==1" class="numPrice">
								{{'¥' + item.payval}}
							</text>
						</view>
					</view>

				</view>
			</view>
		</scroll-view>
		<template v-if="kongkong == true">
			<view :class="{xiangziwrap : (kongkong == true)}">
				<image class="xiangzi" src="../../static/images/xiangzi.png" mode="aspectFill"></image>
				<text class="xiangzi_txt">暂无相关课程</text>
			</view>
		</template>
	</view>
</template>
<script>
	
	import loadmore from '../../components/common/load-more.vue'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	
	const app = getApp();
	export default {
		components: {
			loadmore,
			uniNavBar
		},
		data() {
			return {
				refresherTriggered: false,
				scrollH: 0,
				course_info: {},
				kongkong: true,
				classid: ''
			}
		},
		onShow() {
		uni.getStorage({
			key: 'userinfo',
			success: function(res) {
				app.globalData.userinfo = res.data;
			},
		});	
		},
		onReady() {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.scrollH = res.windowHeight * 750 / res.windowWidth;
				}
			});
		},
		onLoad(option) {
			let gData = app.globalData;
			this.classid = option.course_cid;
			uni.setNavigationBarTitle({
				title: option.course_cname
			})
			this.getlist();
		},
		methods: {
			checktoken(successFun) {
				if (app.globalData.userinfo.token == undefined) {
					successFun(0);
				} else {
				uni.request({
					url: app.globalData.site_url + 'User.Iftoken',
					method: 'POST',
					data: {
						'uid': app.globalData.userinfo.id,
						'token': app.globalData.userinfo.token
					},
					success: res => {
						if (res.data.data.code == 700) {
							uni.showModal({
								title: res.data.data.msg,
								content: '',
								showCancel: true,
								cancelText: '取消',
								confirmText: '去登录',
								confirmColor: '#38DAA6',
								success: res => {
									if (res.confirm) {
										uni.navigateTo({
											url: '../login/login',
											success: res => {},
											fail: () => {},
											complete: () => {}
										});
									}
								},
								fail: () => {
								},
								complete: () => {
								}
							});
						}
						successFun(res.data.data.code);
					},
					fail: () => {
					},
					complete: () => {}
				});
				}
				
			},
			refresherrefresh() {
				this.refresherTriggered = true;
				this.getlist();
				setTimeout(() => {
					this.refresherTriggered = false;
				}, 1000);
			},
			getlist() {
				let gData = app.globalData;
				setTimeout(() => {
					uni.request({
						url: gData.site_url + 'Course.GetClassCourse',
						method: 'GET',
						data: {
							'gradeid': gData.grade_class.id,
							'classid': this.classid,
							'p': 0
						},
						success: res => {
							let data = res.data.data;
							if (data.code == 0 && data.info.length > 0) {
								this.course_info = res.data.data.info;
								this.kongkong = false;
							} else {
								this.kongkong = true;
							}
						},
						fail: () => {
							this.kongkong = true;
							uni.showToast({
								icon: 'none',
								title: '网络错误',
							});
							return;
						},
					});
				}, 0);
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			viewLiveInfo(liveCourseId, sorttype) {
				this.checktoken((successFun) => {
						if (successFun != 0) {
							return;
						}
						//套餐
						if (sorttype == undefined) {

							uni.navigateTo({
								url: '../../packageB/pages/taocaninfo/taocaninfo?courseid=' + liveCourseId
							});
						}
						else if (sorttype == 0) {
							uni.navigateTo({
								url: '../../packageB/pages/content-info/content-info?courseid=' + liveCourseId
							});
						} else if (sorttype == 1) {
							uni.navigateTo({
								url: '../../packageB/pages/courseinfo/courseinfo?courseid=' + liveCourseId
							});
						} else
							uni.navigateTo({
								url: '../../packageB/pages/live_course_info/live_course_info?courseid=' + liveCourseId
							});
						});
			},
			
		}
	}
</script>

<style>
	/* 大班课/内容列表公共样式 */
	@import url("/static/css/course_list.css");

	page {
		background-color: #FFFFFF;
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

	.line {
		width: 100%;
		height: 1rpx;
		background-color: #F5F5F5;
		position: fixed;
	}

	/* 大班课单独样式 */
	.liveinfo-wrap {
		width: 96%;
		margin: 0 auto;
		/* min-height: 1500rpx; */
		background-color: #FFFFFF;
	}

	.xiangziwrap {
		position: absolute;
		left: calc(50% - 50px);
		top: calc(50% - 90px);
		width: 200rpx;
		height: 100rpx;
	}

	.xiangzi {
		margin-left: 50rpx;
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
