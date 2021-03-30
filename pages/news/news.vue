<template>
	<view>
		
		<!-- #ifndef H5 -->
		<uni-nav-bar :border="false" @clickLeft="back" left-icon="back" title="新闻">
			
		</uni-nav-bar>
		<!-- #endif -->
		
		<view class="liveinfo-wrap news-wrap">
			<!-- 新闻列表 -->
			<view @click="viewNewsInfo(item.id)" class="live-list" v-for="(item, index) in news_info"  :key="index">
				<view class="live-list-img-wrap">
					<image class="live-list-img" :src="item.thumb" mode="aspectFill"></image>
				</view>
				
				<view class="live-list-info">
					
					<view class="live-c-title">{{item.name}}</view>
					<view class="live-teacher-price">
						<text class="view-nums-title">访问量:</text>
						<text class="view-nums">{{item.views}}</text>
						<view class="price-wrap">
							<text class="add-time">{{item.addtime}}</text>
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
		components: {
			uniNavBar
		},
		data() {
			return {
				news_info: {},
			}
		},
		onLoad() {
			let gData = app.globalData;
			uni.request({
				url: gData.site_url + 'Course.getNews',
				method: 'GET',
				data: {
				},
				success: res => {
					let data = res.data.data;
					if(data.code == 0 && data.info.length > 0) {
						this.news_info = res.data.data.info;
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
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			viewNewsInfo(nid) {
				if(app.globalData.userinfo == '') {
					uni.navigateTo({
						url: '../login/login',
					});
					return;
				} else {
					uni.navigateTo({
						url: '../news_detail/news_detail?news_id=' + nid,
					});
				}
				
			}
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
		background-color: #FFFFFF;
	}
	
	.live-c-title {
		line-height: 35rpx;
		height: 40%;
		margin-top: 20rpx;
	}
	
	.live-teacher-price {
		margin-top: 40rpx;
	}
	
	.price-wrap {
		margin-left: 55% !important;
	}
	
	.view-nums-title {
		color: #969696;
		font-size: 24rpx;
		margin-top: 22rpx;
	}
	
	.view-nums {
		margin-top: 22rpx;
		color: #969696;
		font-size: 24rpx;
	}
	
	.teacher-name {
		color: #969696;
	}
	
	.add-time {
		font-size: 24rpx;
		color: #969696;
		margin-top: 15rpx;
	}
	
	
</style>
