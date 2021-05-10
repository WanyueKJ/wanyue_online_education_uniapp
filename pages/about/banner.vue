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
			if(option != undefined) {
				uni.setNavigationBarTitle({
					title:option.title
				})
				this.url = JSON.parse(decodeURIComponent(option.url));
			}

		}
	}
</script>

<style>
	
</style>
