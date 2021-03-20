<template>
	<view class="lianxi-all-wrap">
		
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="back" left-icon="back" :border="false" title="联系我们" statusBar>
		
		</uni-nav-bar>
		<!-- #endif -->
		
		<text class="lianxi-content">联系我们获取相关最新活动版本~</text>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			}
			
		}
	}
</script>

<style>
	
	.lianxi-all-wrap {
		width: 92%;
		margin: 0 auto;
		padding-top: 8rpx;
		border-top: 2rpx solid #F5F5F5;
	}
	
	.lianxi-content {
		font-size: 26rpx;
	}

</style>
