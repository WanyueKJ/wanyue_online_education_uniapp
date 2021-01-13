<!-- 我的课程列表公共tab页面 -->

<template>
	<view class="course-list-wrap animated fast fadeIn">
		<view class="course-list-img">
			<image src="../../static/demo/4abc5542ad6246eea86c4449d9956748.jpeg" mode=""></image>
		</view>
		<view class="course-list-main">
			<view>
				<view class="clm-title">{{item.title}}</view>
				<!-- 课时 学习状态 -->
				<view class="clm-classhour">
					<text>{{item.classhour}}课时</text>
					<text class="vertical-line">|</text>
					<text>{{item.study_status}}</text>
				</view>
				<!-- 老师名 付费状态 -->
				<view class="clm-teacher-status">
					<image src="../../static/demo/avatar2.png" mode=""></image>
					<text>{{item.teacher}}</text>
					<text class="course-pay-status">{{item.pay_status}}</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	// 绑定外部参数
	export default {
		props:{
			item: Object
		}
	}
	
</script>

<style>
	
	.course-list-wrap {
		margin: 40rpx 0 50rpx 0;
		padding: 0 20rpx;
	}
	
	/* 清除浮动 */
	.course-list-wrap::after {
		display:block;
		clear:both;
		height:0;
		content: "";
		visibility: hidden;
		overflow:hidden;
	}
	
	.course-list-img {
		width: 28%;
		height: 220rpx;
		border-radius: 10rpx;
		float: left;
		margin-right: 26rpx;
	}
	
	.course-list-img image {
		width: 100%;
		height: 100%;
	}
	
	.course-list-main {
		width: 68%;
		float: left;
	}
	
	/* 内容标题 */
	.clm-title {
		margin-bottom: 10rpx;	
		font-weight: bold;
	}
	
	.clm-classhour {
		color: #969696;
		font-size: 20rpx;
		margin-bottom: 10rpx;
	}
	
	/* 竖线 */
	.vertical-line {
		display: inline-block;
		margin: 0 10rpx;
	}
	
	.clm-teacher-status {
		font-size: 20rpx;
		display: flex;
		align-items: center;
	}
	.clm-teacher-status image{
		width: 40rpx;
		height: 40rpx;
		border-radius: 100%;
		margin-right: 10rpx;
	}
	
	.course-pay-status {
		display: inline-block;
		width: 68%;
		text-align: right;
	}
	
</style>
