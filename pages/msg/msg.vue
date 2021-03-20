<template>
	<view>
		
		<!-- #ifndef H5 -->
		<uni-nav-bar :border="false" title="消息" onlive>
		</uni-nav-bar>
		<!-- #endif -->	
		
		<template>
			<view class="msg-lt-wrap">
				<text class="msg-lt-title">消息</text>
			</view>
			
			<!-- 系统通知 -->
			<view class="msg-md-main">
				<image src="../../static/images/system.png" mode="aspectFill" class="msg-img"></image>
				<view class="msg-md-wrap">
					<text class="msg-title">系统通知</text>
					<text class="msg-info">暂无系统消息</text>
				</view>
				
			</view>
			<!-- 课程动态 -->
			<view class="msg-md-main">
				<image src="../../static/images/class.png" mode="aspectFill" class="msg-img"></image>
				<view class="msg-md-wrap">
					<text class="msg-title">课程动态</text>
					<text class="msg-info">暂无相关动态</text>
				</view>
				
			</view>
			
		</template>
	
		
		
	</view>
</template>

<script>
	const demo = [];
	
	import noThing from '@/components/common/no-thing.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	const app = getApp();
	
	export default {
		components:{
			noThing,
			uniPopup,
			uniNavBar
		},
		data() {
			return {
				list:[]
			}
		},
		//页面加载
		onLoad() {
			if(app.globalData.userinfo == '') {
				uni.navigateTo({
					url:'../login/login'
				})
				return;
			}
			this.list = demo;
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.refresh()
		},
		methods: {
			
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			//下拉刷新
			refresh(){
				setTimeout(()=>{
					this.list = demo;
					//停止下拉刷新
					uni.stopPullDownRefresh();
				},2000);
			},
			// 弹出层选项点击事件
			popupEvent(e){
				switch(e){
					case 'friend':
					uni.navigateTo({
						url: '../search/search?type=user',
					});
						break;
					case 'clear':
						break;
				}
				// 关闭弹出层 
				this.$refs.popup.close();
			}
		}
	}
</script>

<style>
	
	page {
		overflow: hidden;
	}
	
	.msg-lt-wrap {
		margin-bottom: 40rpx;
		padding-left: 30rpx;
	}
	.msg-lt-title {
		font-size: 34rpx;
		font-weight: bold;
	}
	
	/* 主内容部分 */
	.msg-md-main::after {
		display:block;
		clear:both;
		height:0;
		content: "";
		visibility: hidden;
		overflow:hidden;
	}
	
	.msg-md-main {
		margin-bottom: 40rpx;
		padding-left: 30rpx;
	}
	/* 图片 */
	.msg-img {
		width: 104rpx;
		height: 104rpx;
		float: left;
		border-radius: 20rpx;
	}
	
	.msg-md-wrap {
		float: left;	
		margin-left: 38rpx;
	}
	
	.msg-md-wrap text {
		display: block;
	}
	
	.msg-title {
		font-size: 30rpx;
		font-weight: bold;
	}
	
	.msg-info {
		color: #969696;
	}
	
	
</style>
