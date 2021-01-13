<template>
	
	<view>
		
	<!-- <uni-nav-bar @clickLeft="back" left-icon="back" :title="course_cname"></uni-nav-bar> -->

	<view class="liveinfo-wrap">
		<!-- 直播课列表 -->
		<view @click="viewLiveInfo(item.id,item.sort)" class="live-list" v-for="(item, index) in course_info"  :key="index">
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

<script>
	
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	const app = getApp();
	
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				course_info: {},
				course_cname: ''
			}
		},
		onLoad(option) {
			let gData = app.globalData;
			this.course_cname = option.course_cname;
			
			uni.setNavigationBarTitle({
				title:option.course_cname
			})
			
			setTimeout(() => {
			uni.request({
				url: gData.site_url + 'Course.GetClassCourse',
				method: 'GET',
				data: {
					'gradeid' : gData.grade_class.id,
					'classid' : option.course_cid,
					'p' : 1
				},
				success: res => {
					console.log(res);
					let data = res.data.data;
					if(data.code == 0 && data.info.length > 0) {
						this.course_info = res.data.data.info;
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
			}, 1000);
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			viewLiveInfo(liveCourseId,sorttype){
				if(getApp().globalData.userinfo == '') {
					uni.navigateTo({
						url:'../login/login'
					})
					return;
				}
				//套餐
			if(sorttype == undefined){
				uni.navigateTo({
					url: '../taocaninfo/taocaninfo?courseid=' + liveCourseId
				});
			}
			//
			else if(sorttype == 0){
				uni.navigateTo({
					url: '../content-info/content-info?courseid=' + liveCourseId
				});
			}
			else if(sorttype == 1){
				uni.navigateTo({
					url: '../courseinfo/courseinfo?courseid=' + liveCourseId
				});
			}
			else
				uni.navigateTo({
					url: '../live_course_info/live_course_info?courseid=' + liveCourseId
				});
			},
			
		}
	}
</script>

<style>
	
	/* 大班课/内容列表公共样式 */
	@import url("/static/css/course_list.css");
	
	/* 大班课单独样式 */
	.liveinfo-wrap {
		padding-top: 2rpx;
		min-height: 1500rpx;
		background-color: #FAFAFA;
	}	
	
	.live-list {
		width: 90%;
		height: 190rpx;
		margin: 30rpx auto;
		padding-top: 20rpx;
		box-shadow: 0rpx 0rpx 4rpx 2rpx rgba(0, 0, 0, 0.1);
		border-radius: 8rpx;
		background-color: #FFFFFF;
	}
	
	.live-c-title {
		line-height: 35rpx;
		height: 40%;
	}
	
	.live-teacher-price {
		margin-top: 10rpx;
	}
	
	.price-wrap {
		margin-left: 55% !important;
	}

</style>
