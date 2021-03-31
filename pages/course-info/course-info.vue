<!-- 课程详情页面 -->

<template>
	<view>
		<!-- 图片 -->
		<video style="width: 100%;" src="http://qiniu.shandongwuyu.com/android_10083_20201111_114029_9075978.mp4" controls>
			您的设备不支持该视频播放
		</video>


		<!-- 标题介绍价格 包含课程 -->
		<view class="course-md-wrap">
			<view class="course-info-title">这里是我的课程标题, 标题内容这样的你知道吗? 哈哈哈哈哈哈哈。</view>
			<view class="course-info-introduce">这里是一个简单介绍, 字数不会太多。</view>
			<view class="course-info-article">
				<view>
					<text>￥</text>
					<text>2888.00</text>
				</view>
				<view class="course-number">
					<text>3</text>
					<text>课程</text>
				</view>
				<view class="course-users-num">
					<text>4567</text>
					<text>人学习</text>
				</view>
			</view>

			<!-- 包含课程 -->
			<view>
				<text class="course-contain-title">包含课程</text>
				<view class="live-list" v-for="(item, index) in live_demo" :key="index">
					<image class="live-list-img" :src="item.live_img" mode=""></image>
					<view class="live-list-info">
						<view class="live-c-title">{{item.title}}</view>
						<view class="live-status">{{item.live_status}}</view>
						<view class="live-teacher-price">
							<image class="live-teacher-avatar" src="" mode=""></image>
							<text class="teacher-name">{{item.teacher_name}}</text>
							<view class="price-wrap">
								<text>￥</text>
								<text class="live-price">{{item.price}}</text>
							</view>
						</view>
					</view>
				</view>

			</view>

		</view>


		<!-- 下半部分购买按钮 (没有购物车)-->
			<!-- 跳出弹窗 -->
		<button class="buy-btn" @click="open">立即购买</button>
		
		<!-- 弹窗 -->
		<uni-popup ref="popup" type="bottom">
			<view class="buy-popup-wrap">
				
				<view class="current-course-wrap">
					<text class="current-course-title">当前课程</text>
					<view class="popup-course-wrap">
						<view class="popup-title-price-wrap">
							<text class="popup-course-title">这里是我的课程标题, 标题内容这样的你知道吗?</text>
							<text class="popup-course-price">￥88.00</text>
						</view>
						<view class="popup-course-hour">
							共55课时
						</view>
						<view class="teacher-name">
							老师: 李二狗
						</view>
					</view>
				</view>
				
			</view>
			
			
			<view class="btn-wrap">
				<button class="define-submit" @click="define">确定</button>
			</view>
		</uni-popup>


	</view>
</template>

<script>
	
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	
	const demo = [{
			course_id: 1,
			live_img: "",
			title: "高二上学期语文知识内容讲解, 重点知识串讲, 考前冲刺练习",
			live_status: "正在直播",
			teacher_name: "李老师",
			price: "88.00"
		},
		{
			course_id: 2,
			live_img: "",
			title: "高三数学精品冲刺课程",
			live_status: "正在直播",
			teacher_name: "王老师",
			price: "868.00"
		}

	];

	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				live_demo: [

				]
			}
		},
		onLoad() {
			this.live_demo = demo;
		},
		methods: {
			open(){
				this.$refs.popup.open();
			},
			close(){
				this.$refs.popup.close();
			}
		}
	}
</script>

<style>
	@import url("/static/css/course_list.css");

	.course-info-img {
		width: 100%;
	}

	/* 中间包装 */
	.course-md-wrap {
		padding: 0 20rpx;
		margin-bottom: 80rpx;
	}

	.course-info-title {
		font-weight: bold;
		font-size: 32rpx;
		margin-bottom: 20rpx;
	}

	.course-info-introduce {
		color: #969696;
		font-size: 20rpx;
		margin-bottom: 20rpx;
	}

	.course-info-article {
		margin-bottom: 38rpx;
	}

	.course-info-article::after {
		display: block;
		clear: both;
		height: 0;
		content: "";
		visibility: hidden;
		overflow: hidden;
	}

	.course-info-article view {
		float: left;
	}

	.course-number {
		margin-left: 138rpx;
		color: #969696;
		font-size: 20rpx;
	}

	.course-users-num {
		margin-left: 211rpx;
		color: #969696;
		font-size: 20rpx;
	}

	/* 课程包含 */
	.course-contain-title {
		font-size: 32rpx;
		font-weight: bold;
	}

	/* 购买按钮 */
	.buy-btn {
		width: 90%;
		background-color: #FF623E;
		color: #FFFFFF;
	}
	
	/*********** 购买弹窗 **********/
	.buy-popup-wrap {
		min-height: 400rpx;
		margin: 0 auto;
		padding-top: 30rpx;
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		background-color: #FFFFFF;
	}
	
	.current-course-wrap {
		width: 92%;
		height: 190rpx;
		margin: 0 auto;
	}
	
	.current-course-title {
		color: #969696;
		font-size: 24rpx;
	}
	
	/* 课程内容 */
	.popup-course-wrap {
		width: 93%;
		height: 180rpx;
		padding: 20rpx;
		margin-top: 20rpx;
		border: 4rpx solid #F8F8F8;
		border-radius: 15rpx;
	}
	
	.popup-course-hour {
		color: #969696;
		font-size: 20rpx;
	}
	
	.popup-title-price-wrap::after {
		display: block;
		clear: both;
		height: 0;
		content: "";
		visibility: hidden;
		overflow: hidden;
	}
	.popup-title-price-wrap text {
		float: left;
	}
	
	.popup-course-title {
		width: 69%;
	}
	
	.popup-course-price {
		text-align: right;
		width: 30%;
		color: #FF1B20;
	}
	
	.btn-wrap {
		background-color: #FFFFFF;
		padding-bottom: 20rpx;
	}
	
	.define-submit {
		width: 93%;
		border-radius: 40rpx;
		background-color: #FF623E;
		color: #FFFFFF;
	}
	
</style>
