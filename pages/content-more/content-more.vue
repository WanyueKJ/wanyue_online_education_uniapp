<template>
	<view class="conetentinfo-wrap">
		
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="backCourseList" left-icon="back" :border="false" title="精选内容" statusBar>
		
		</uni-nav-bar>
		<!-- #endif -->
		
		<!-- 内容列表 -->
		<view class="course-wrap">
			<view @click="viewContentInfo(item.id,item.paytype)" class="live-list" v-for="(item, index) in list_info"  :key="index">
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
							<text v-if="item.paytype == 1" class="numPrice">
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
				list_info: {}
			}
		},
		onLoad(){
			this.getContentCourseList();
		},
		methods: {
			backCourseList(){
				uni.navigateBack({
					delta: 1
				});
			},
			getContentCourseList(){
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Course.GetList',
					method: 'GET',
					data: {
						'gradeid' : gData.grade_class.id,
						'type' : 0,
						'p' : 1
					},
					success: res => {
						if(parseInt(res.data.data.code) !== 0) {
							return;
						}

						this.list_info = res.data.data.info;
						
					},
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
			
		}
	}
</script>

<style>
	/* 大班课内容列表公共样式 */
	@import url("/static/css/course_list.css");

	.conetentinfo-wrap {
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
