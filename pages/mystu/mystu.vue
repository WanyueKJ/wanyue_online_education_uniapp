<template>
	<view class="mystu-all-wrap">
		
		<view class="m-student-wrap">
			<view class="search-student-info">
				<view class="search-student-item" v-for="(item, index) in studentList" :key="item.id">
					<image class="student-avatar" :src="item.avatar" mode=""></image>
					<text class="student-name">{{item.user_nickname}}</text>
				</view>
			</view>
		</view>
		
		<!-- 空空如也 -->
		<view class="xiangziwrapold" :class="{xiangziwrap : (kongkong == 'show')}">
			<image class="xiangzi" src="../../static/images/xiangzi.png" mode=""></image>
			<text class="xiangzi_txt">空空如也</text>
		</view>
		
	</view>
</template>

<script>
	
	const app = getApp();
	
	export default {
		data() {
			return {
				studentList: {},
				kongkong: ''
			}
		},
		onLoad(option) {
			console.log(option);
			let gData = app.globalData;
			uni.request({
				url: gData.site_url + 'User.GetFans',
				data: {
					// uid touid p
					'uid' : gData.userinfo.id,
					'touid' : option.touid,
					'p' : 0
				},
				success: res => {
					console.log(res);
					if(res.data.ret != 200) {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
						return;
					}
					
					if(res.data.data.info.length < 1) {
						// 空空如也
						this.kongkong = 'show';
						return;
					}
					
					this.studentList = res.data.data.info;
				},
				
			});
		},
		methods: {
			
		}
	}
</script>

<style>
	
	.mystu-all-wrap {
		position: relative;
	}
	
	.m-student-wrap {
		border-top: 6rpx solid #F5F5F5;
	}
	
	/* 老师搜索结果 */
	.search-student-info {
		width: 95%;
		padding-left: 7%;
		margin: 0 auto 50rpx;
	}
	
	.s-more-view {
		float: right;	
		margin-top: 10rpx;
		margin-right: 40rpx;
		font-size: 12rpx;
	}
	
	/* 教师头像 */
	.search-student-item {
		width: 100%;	
		height: 100rpx;
		display: flex;
		align-items: center;
	}
	
	.student-avatar {
		width: 90rpx;
		height: 90rpx;
		margin-right: 30rpx;
		border-radius: 50%;
	}
	
	.student-inner-arow {
		margin-left: 60%;	
	}
	
	.xiangziwrapold {
		display: none;	
	}
	
	.xiangziwrap {
		display: block !important;
		width: 24%;
		height: 130rpx;
		margin: calc(50%) auto;
	}
		
	.xiangzi {
		width: 100%;
		height: 100%;
	}
	
	.xiangzi_txt {
		width: 100%;
		display: block;
		text-align: center;
		font-size: 26rpx;
		color: #C7C7C7;
	}
	
	
</style>
