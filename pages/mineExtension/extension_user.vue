<template>
	<view>
		
		<block v-for="(item,index) in list" :key="index">
			<view class="extension_user-li">
				<image class="extension_user-li-avatar" :src="item.avatar"></image>
				<text class="extension_user-li-name">{{item.user_nickname}}</text>
			</view>
		</block>
		
		<view class="extension_user-content" v-if="list==''">
			<image class="extension_user-content-img" src="@/static/images/xiangzi.png"></image>
			<view class="extension_user-content-text">未获得推广用户</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				
			}
		},
		onLoad() {
			let gData = getApp().globalData;
			uni.request({
				url: gData.site_url + 'Agent.GetAgentList',
				method: 'GET',
				data: {
					'uid': gData.userinfo.id,
					'token': gData.userinfo.token
				},
				success: res => {
					if (res.data.data.code == 700) {
						uni.navigateTo({
							url: '../login/login'
						})
						return;
					}
					if (parseInt(res.data.data.code) !== 0) {
						return;
					}
					this.list = res.data.data.info;

				},
			
			});
		},
		methods: {
			
		}
	}
</script>

<style>
	.extension_user-li-name{
		position: relative;
		left: 15px;
		bottom: 15px;
	}
	.extension_user-li-avatar{
		width: 40px;
		height: 40px;
		border-radius: 50px;
	}
	.extension_user-li{
		width: 90%;
		margin: 0 auto;
		border-bottom: 1px solid #F5F5F5;
		padding: 10px 0 10px 0;
	}
	.extension_user-content-text{
		color: #C7C7C7;
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	.extension_user-content{
		text-align: center;
		margin-top: 50%;
	}
	.extension_user-content-img{
		width: 164rpx;
		height: 132rpx;
	}
</style>
