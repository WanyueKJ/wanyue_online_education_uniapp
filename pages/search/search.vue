<template>
	<view>
		<!-- #ifndef H5 -->
		<view class="line"></view>
		<!-- #endif -->
		
		<scroll-view class="s-all-wrap" scroll-y :style="'height:' + scrollH+'rpx;'">
			<view class="search-all-wrap">
				<view class="search-wrap">
					<image class="search_home" src="../../static/search_home.png"></image>
					<input @focus="focus" v-model="sdata" class="uni-input" @input="onInput" confirm-type="search" placeholder="搜索课程, 老师"
					 placeholder-style="color:#C7C7C7;" />
				</view>
				<text @click="resetSearch" class="reset-search">取消</text>
			</view>
			<view class="search-history" :class="{showsearch : (isShowHis == true)}">
				<template v-if="teacherList">
					<template v-if="teacherList.length > 0">
						<view class="teacher">
							<view class="search-title-wrap">
								<text class="s-teacher-title">相关老师</text>
								<text @click="viewmoreteacher" class="s-more-view">查看更多></text>
							</view>
							<view class="search-teacher-info">
								<view @click="viewTeacherInfo(item.id)" class="search-teacher-item" v-for="(item, index) in teacherList" :key="item.id">
									<view class="row">
										<image class="teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
										<image class="dav" src="../../static/dav.png"></image>
										<text class="teachername">{{item.user_nickname}}</text>
										<image mode="aspectFit" class="back_image" src="../../static/navi_backImg@2xxx.png"></image>
									</view>
									<view class="line"></view>
								</view>
							</view>
						</view>
					</template>
				</template>

				<template v-if="courseList">
					<template v-if="courseList.length >0">
						<view class="course">
							<view class="search-title-wrap">
								<text class="s-course-title">相关课程</text>
							</view>
							<view class="search-course-info">
								<view @click="viewLiveInfo(item.id,item.sort)" class="live-list" v-for="(item, index) in courseList" :key="index">
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
											<view class="live-status living-status" v-if="item.islive == 1">
												{{item.lesson}}
											</view>
											<view class="live-status-tuwen" v-else>
												{{item.lesson}}
											</view>
										</template>
										<template v-else>
											<view class="live-status living-status" v-if="item.islive == 1">
												{{item.lesson}}
											</view>
											<view class="live-status" v-else>
												{{item.lesson}}
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
							</view>
						</view>
					</template>
				</template>
			</view>
			<template v-if="kongkong == true">
				<view :class="{xiangziwrap : (kongkong == true)}">
					<image class="xiangzi" src="../../static/images/xiangzi.png" mode="aspectFill"></image>
					<text class="xiangzi_txt">空空如也</text>
				</view>
			</template>
		</scroll-view>
	</view>
</template>
<script>
	import commonList from '@/components/common/common-list.vue';
	import userList from '@/components/user-list/user-list.vue';
	const app = getApp();
	export default {
		components: {
			commonList,
			userList
		},
		data() {
			return {
				scrollH: 0,
				list: [],
				// 搜索结果
				searchList: [],
				type: "post",
				teacherList: {},
				courseList: {},
				isShowHis: false,
				kongkong: false,
				searchText: "",
				searchKeyword: '',
				teacherInfo: {},
				sdata: '',
				system_top: 10
			}
		},
		//监听点击导航搜索按钮
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.searchEvent();
			}
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
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					// #ifdef MP-WEIXIN
					that.system_top = parseInt(res.safeArea.top) + 5;
					// #endif
				}
			});
			if ((option.keyword != 'undefined') && (option.keyword != '')) {
				this.sdata = option.keyword;
				this.searchKeyword = option.keyword;
				this.getHomeSearch(this.sdata);
			}
			// :style="'height:' + system_top + 'rpx'"
		},
		methods: {
			focus() {
				this.checktoken((successFun) => {
					if (successFun != 0) {
						return;
					}
				});
			},
			checktoken(successFun) {
				if (getApp().globalData.userinfo.token == undefined || getApp().globalData.userinfo == '') {
					successFun(0);
				} else {
					uni.request({
						url: getApp().globalData.site_url + 'User.Iftoken',
						method: 'POST',
						data: {
							'uid': getApp().globalData.userinfo.id,
							'token': getApp().globalData.userinfo.token
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
			clickTabSearchHistory(text) {
				this.searchText = text;
				this.searchEvent();
			},
			//搜索事件
			searchEvent() {
				//收起键盘
				// 处于loading状态
				uni.showLoading({
					title: '加载中...',
					mask: false
				})
				//请求搜索
				setTimeout(() => {
					switch (this.type) {
						case 'post':
							this.searchList = demo1;
							break;
						case 'topic':
							this.searchList = demo2;
							break;
						case 'user':
							this.searchList = demo3;
							break;
					}
					// 隐藏loading
					uni.hideLoading();
				}, 3000);
			},
			// 查看教师详情
			viewTeacherInfo(touid) {
				if (getApp().globalData.userinfo == ''){
					uni.navigateTo({
						url: '../login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return;
				}
				this.checktoken((successFun) => {
					if (successFun != 0) {
						return;
					}					
					//跳转教师详情页并传入基本信息
					uni.navigateTo({
						url: '../teacherinfo/teacherinfo?touid=' + touid,
					});
				});
			},
			viewLiveInfo(liveCourseId, sorttype) {
				if (getApp().globalData.userinfo == ''){
					uni.navigateTo({
						url: '../login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return;
				}
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
			resetSearch() {
				uni.navigateBack({
					delta: 1
				});
				// this.sdata = '';
				// this.searchKeyword = '';
				// this.teacherList = {};
				// this.courseList = {};
				// this.isShowHis = false;
				// this.getHomeSearch(this.searchKeyword);
				// uni.navigateBack({
				// 	delta: 1
				// });
				// this.getHomeSearch(this.searchKeyword);
			},
			onInput(e) {
				if (e.detail.value == '' || e.detail.value == null) {
					this.teacherList = {};
					this.courseList = {};
					this.isShowHis = false;
				}
				this.searchKeyword = e.detail.value;
				// 搜索方法
				this.getHomeSearch(this.searchKeyword);
			},
			getHomeSearch(keyword) {
				
				// 只返回大班课和内容
				
				uni.request({
					url: app.globalData.site_url + "Home.Search",
					method: 'GET',
					data: {
						'gradeid': app.globalData.grade_class.id,
						'keyword': keyword
					},
					success: res => {
						if (parseInt(res.data.data.code) !== 0) {
							this.kongkong = true;
							return;
						}
						let data = res.data.data.info[0];
						if (parseInt(res.data.data.code) == 0) {
							if ((data.teacher.length == 0) && (data.course.length == 0)) {
								this.isShowHis = false;
								//空空如也图标
								this.kongkong = true;
								return;
							} else {
								this.kongkong = false;
							}
						} else {
							this.kongkong = true;
						}
						// 老师最多只显示3个, 超过则在查看更多中显示
						this.teacherList = data.teacher;
						this.courseList = data.course;
						this.isShowHis = true;

					},

				});

			},
			viewmoreteacher() {
				if (getApp().globalData.userinfo == '') {
					uni.navigateTo({
						url: '../login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return;
				}
				console.log(this.searchKeyword);
				// 跳转更多老师页面
				uni.navigateTo({
					url: "../moreteacher/moreteacher?keyword=" + this.searchKeyword,
				})
			}
		}
	}
</script>
<style>
	@import url("/static/css/search/search.css");
	@import url("/static/css/course_list.css");

	.dav {
		position: absolute;
		width: 30rpx;
		height: 30rpx;
		margin-top: 60rpx;
		left: 95rpx;
	}

	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.line {
		width: 100%;
		height: 1rpx;
		background-color: #F5F5F5;
		position: relative;
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
