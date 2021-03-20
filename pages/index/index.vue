<template>
	<!-- 外层包装 -->
	<view class="index-all-wrap">
		<!-- #ifdef MP-WEIXIN -->

		<uni-nav-bar statusBar :border="false">
			<view slot="left" @click="checkGrade">
				<view class="check_class">
					<text>{{currentGradeClass}}</text>
					<text class="iconfont icon-show_more"></text>
				</view>
			</view>
			<view @click="search" slot="right" style="position: relative; right: -30rpx;">
				<text class="iconfont icon-faxianchaxun"></text>
			</view>

		</uni-nav-bar>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<uni-nav-bar :border="false">
			<view slot="left" @click="checkGrade">
				<view class="check_class">
					<text>{{currentGradeClass}}</text>
					<text class="iconfont icon-show_more"></text>
				</view>
			</view>
			<view @click="search" slot="right" style="position: relative; right: -30rpx;">
				<text class="iconfont icon-faxianchaxun"></text>
			</view>
		</uni-nav-bar>
		<!-- #endif -->
	
		
		<!-- 轮播图 -->
		<view class="index-banner-wrap">
			<swiper class="index-banner swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			 :duration="duration">
				<swiper-item @click="bannerTo(item)" v-for="(item, index) in bannerList" :key="item.id">
					<image class="index-banner-img" :src="item.image" mode="aspectFill"></image>
				</swiper-item>
			</swiper>

		</view>

		<!-- 课程选项卡 -->
		<view class="index-course-wrap">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view @click="getCourseByClass(item.id, item.name)" class="course-item scroll-view-item_H" v-for="(item, index) in course_class"
				 :key="item.id">
					<image :src="item.thumb" mode="aspectFit"></image>
					<text>{{item.name}}</text>
				</view>
			</scroll-view>
		</view>
		
		<!-- 新闻资讯 -->
		<view @click="openNews" class="news-wrap">
			<image class="news-wrap-title-img" src="../../static/images/news_he.png" mode="aspectFit"></image>
			<text class="news-shu">|</text>
			
			<swiper class="swiper-wrap" :vertical="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item  v-for="(item, index) in news" :key="index" class="swiper-item">
					<text class="news-title">{{item.name}}</text>
				</swiper-item>
			</swiper>
			<text class="news-arow iconfont icon-jinrujiantou"></text>
		</view>
		
		<!-- 课程列表区 -->
		<view class="course-list-wrap">
			<!-- 直播课堂 -->
			<view class="course-list-wrap">
				<view class="live-title-wrap">
					<!-- 标题 更多 -->
					<text class="live-title">直播课堂</text>
					<text @click="livemore" class="live-more">
						更多
						<text class="iconfont icon-jinrujiantou c-more-icon"></text>
					</text>
				</view>

				<!-- 直播课列表 -->
				<view class="course-wrap">
					<view @click="viewLiveInfo(item.id,item.paytype)" class="live-list" v-for="(item, index) in live_info" :key="index">
						<view class="live-list-img-wrap">
							<image class="live-list-img" :src="item.thumb" mode="aspectFill"></image>
							<text class="course-title-icon">直播</text>

						</view>
						<view class="live-list-info">
							<view class="live-c-title">{{item.name}}</view>
							<view class="live-status living-status" v-if="item.islive == 1">
								{{item.lesson}}
							</view>
							<view class="live-status" v-else>
								{{item.lesson}}
							</view>
							<view class="live-teacher-price">
								<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
								<text class="teacher-name">{{item.user_nickname}}</text>
								<view class="price-wrap">
									<text v-if="item.paytype == 0" class="free">免费</text>
									<text v-if="item.paytype == 2" class="pass">密码</text>
									<text v-if="item.paytype ==1" class="numPrice">
										{{'¥' + item.payval}}
									</text>
								</view>
							</view>
						</view>
					</view>
					<view class="listline"></view>
				</view>
			</view>
		</view>
		<view class="course-list-wrap">
			<!-- 精选内容 -->
			<view class="la-wrap">
				<view class="live-title-wrap">
					<!-- 标题 更多 -->
					<text class="live-title">精选内容</text>
					<text @click="contentmore" class="content-more">更多&nbsp;<text class="iconfont icon-jinrujiantou c-more-icon"></text></text>
				</view>
			</view>

			<view class="course-wrap">
				<view @click="viewContentInfo(item.id,item.paytype)" class="live-list" v-for="(item, index) in list_info" :key="index">
					<view class="live-list-img-wrap">
						<image class="live-list-img" :src="item.thumb" mode="aspectFill"></image>
						<text class="course-title-icon">内容</text>
					</view>
					<view class="live-list-info">
						<view class="live-c-title">{{item.name}}</view>
						<view class="live-status-tuwen">
							{{item.lesson}}
						</view>
						<view class="live-teacher-price">
							<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
							<text class="teacher-name">{{item.user_nickname}}</text>
							<view class="price-wrap">
								<text v-if="item.paytype == 0" class="free">免费</text>
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
	</view>

	</view>


</template>

<script>
	// 引入模板
	import swiperTabHead from "@/components/common/swiper-tab-head.vue";
	import loadMore from '@/components/common/load-more.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';

	const app = getApp();

	export default {
		components: {
			swiperTabHead,
			loadMore,
			uniPopup,
			uniNavBar
		},
		data() {
			return {
				news: {},
				//顶部选项卡
				tabIndex: 0,
				swiperheight: 0, //高度
				bannerList: {},
				// 轮播图数据 
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				live_demo: [],
				currentGradeClass: "",
				currentGradeClassId: "",
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				course_class: {},
				packs: {},
				course: {},
				live_info: {}, //直播课堂列表
				list_info: {}, //内容列表
				nums: '',
			}
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap() {
			this.navigateTo({
				url: '../add-input/add-input'
			})
		},
		onShow: function() {
			// this.getnums();
		},
		onLoad() {
			// this.getnums();
			//当前年级
			let gcName = app.globalData.grade_class.name;
			if (gcName == '') {
				uni.navigateTo({
					url: '../check_class/check_class',
				});
			}
			this.currentGradeClass = gcName;
			this.currentGradeClassId = app.globalData.grade_class.id;

			this.$store.commit('changeLoginStatus', 123);
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height;
				}
			})
			//获取首页内容
			this.getData();
			this.getNews();
		},
		methods: {
			getNews() {
				let that = this;
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Course.getNews',
					method: 'GET',
					data: {
					},	
					success: res => {
						console.log(res);
						let data = res.data.data;
						if(data.code == 0 && data.info.length > 0) {
							that.news = res.data.data.info;
						}
						
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误',
						});
						return;
					},
				});
				
			},
			openNews() {
				uni.navigateTo({
					url: '../news/news',
				});
			},
			// 根据分类查看课程列表
			getCourseByClass(courseCid, courseCname) {
				uni.navigateTo({
					url: '../course_class_list/course_class_list?course_cid=' + courseCid + '&course_cname=' + courseCname,
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					},
				});

			},
			//获取数据
			getData() {

				//获取分类
				uni.request({
					url: app.globalData.site_url + 'Home.GetIndex',
					data: {
						'gradeid': app.globalData.grade_class.id
					},
					success: (res) => {
						// live是直播, list是内容
						let data = res.data.data;
						this.course_class = data.info[0].courseclass;
						if (parseInt(res.data.data.code) !== 0) {
							return;
						}
						//填充banner和分类图标
						this.bannerList = data.info[0].silide;
						//填充直播和内容
						this.live_info = data.info[0].live;
						this.list_info = data.info[0].list;
						this.packs = data.info[0].packs;
						this.course = data.info[0].course;

					}
				});

			},
			//点击切换导航
			tabtap(index) {
				this.tabIndex = index;
			},
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			//官方滚动方法
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop;
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop;
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			},
			bannerTo(item) {
				//此方法只能在真机端运行
				// plus.runtime.openURL(url);
				uni.navigateTo({
					url: '../about/banner?url=' + encodeURIComponent(JSON.stringify(item.url)) + '&title=' + item.title,
				});
			},
			checkGrade() {
				uni.navigateTo({
					url: "../check_class/check_class",
				});
			},
			search() {
				uni.navigateTo({
					url: "../search/search"
				})
			},
			shopcar() {
				
			},
			// 查看大班课(语音、PPT、视频直播)内容详情
			viewLiveInfo(liveCourseId, liveCoursetype) {


				if (app.globalData.userinfo == '') {
					uni.navigateTo({
						url: '../login/login'
					})
					return;
				}

				uni.navigateTo({
					url: '../../packageB/pages/live_course_info/live_course_info?courseid=' + liveCourseId + '&paytype=' + liveCoursetype,
				});
			},
			viewContentInfo(contentCourseId, contentCoursetype) {

				if (app.globalData.userinfo == '') {
					uni.navigateTo({
						url: '../login/login'
					})
					return;
				}
				uni.navigateTo({
					url: '../../packageB/pages/content-info/content-info?courseid=' + contentCourseId + '&paytype=' + contentCoursetype,
				});
			},

			// 更多大班课
			livemore() {
				uni.navigateTo({
					url: '../live-more/live-more',
				});
			},
			// 更多内容
			contentmore() {
				uni.navigateTo({
					url: '../content-more/content-more',
				});
			},

		}
	}
</script>

<style>
	@import url("/static/css/index.css");
	@import url("/static/css/course_list.css");

	.s-all-wrap {
		position: relative;
	}

	.search-all-wrap {
		margin-top: 0rpx;
		width: 90%;
		height: 65rpx;
		line-height: 65rpx;
	}

	.search-wrap {
		width: 100%;
		height: 100%;
		line-height: 65rpx;
		border-radius: 30rpx;
		margin-left: 20rpx;
		ding-left: 20rpx;
		background-color: #F5F5F5;
		float: left;
	}

	.search-wrap text,
	.search-wrap input {
		float: left;
		background-color: #F5F5F5;
		height: 100%;
		padding: 0;
	}

	.search-wrap text {
		margin-right: 20rpx;
		color: #C7C7C7;
	}

	.search-wrap input {
		width: 70%;
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
	
	/* 新闻资讯 */
	.news-wrap {
		width: 97%;
		height: 80rpx;
		margin: 10rpx auto 0;
		padding-left: 3%;
		line-height: 80rpx;
		border-radius: 34rpx;
		background-color: #F6F6F6;
		display: flex;
		align-items: center;
	}
	
	.news-wrap-title-img {
		float: left;
		width: 120rpx;
		height: 100%;
	}
	
	.news-shu {
		float: left;
		margin: 0 20rpx;
		color: #CCCCCC;
	}
	
	.news-title {
		float: left;
		width: 70%;
		color: #333333;
		font-size: 26rpx;
		display: inline-block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.news-arow {
		color: #CCCCCC;
		font-size: 28rpx;
		position: absolute !important;
		right: 45rpx !important;
	}
	
	
	.swiper-wrap {
		width: 68%;
		height: 70rpx;
		line-height: 70rpx;
	}
	
	.c-more-icon {
		position: relative;
		top: 5rpx;
	}
	
	.live-more {
		right: 29rpx !important;
	}
	
	.content-more {
		right: 29rpx !important;
	}
	
	.course-list-wrap .course-wrap {
		width: 100% !important;
		padding-bottom: 0 !important;
	}
	
	.course-list-wrap {
		margin-bottom:  60rpx;
	}
	
	.price-wrap {
		padding-right: 16rpx !important;
	}
		
	
</style>
