<template>
	<view>
		
	<web-view :src="url"></web-view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				url:''
				
			}
		},
		onLoad() {
			this.url = getApp().globalData.site_h5url + 'appapi/page/detail?id=3';

		}
	}
</script>

<style>
</style>
