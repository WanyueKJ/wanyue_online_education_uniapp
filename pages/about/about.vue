<template>
	<view>
		
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="back" left-icon="back" :border="false" title="关于我们" onlive>
		</uni-nav-bar>
		<!-- #endif -->	
		
		<view class="flex flex-column pb-2">
			<text style="padding-left: 20rpx;" class="font text-light-muted">关于我们</text>
		</view>
		
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	
	export default {
		components:{
			uniListItem,
			uniNavBar
		},
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
