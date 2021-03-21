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
		onLoad(option) {
			uni.setNavigationBarTitle({
				title:option.title
			})
			 console.log(option);
			this.url = JSON.parse(decodeURIComponent(option.url));
			 console.log(this.url);
		}
	}
</script>

<style>
	
</style>
