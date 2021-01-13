<template>
	<view class="pingjia-all-wrap">
		
		<view class="teacher-wrap">
			<text class="course-title">{{courseData.title}}</text>
			<view class="teacher-avatar-name">
				<image class="avatar-img" :src="courseData.avatar" mode="aspectFill"></image>
				<text class="teacher-name">{{courseData.nickname}}</text>
			</view>	
		</view>
		
		<!-- 粗线 -->
		<view class="bold-xian"></view>
		
		<!-- 评价内容区 -->
		<view class="pingjia-content-wrap">
			<!-- 评价星星 -->
			<view class="pingjia-xing-wrap">
				<text class="pingjia-title">总体评价</text>
				<view class="xing-wrap">
					<text @click="checkxing(index)" :class="{checkxing : (item.check == true)}" v-for="(item, index) in xingarr" :key="index" class="pingjia-xing iconfont icon-pingfenxingxing"></text>						
				</view>
				<text class="xing-txt">{{xingtxt}}</text>
			</view>
				
			<!-- 内容区 -->	
			<view class="pinglun-content">
				<textarea v-model="content" class="pinglun-textarea" maxlength="-1" value="" placeholder="老师水平怎么样? 教学效果好不好? 说说你的感受吧" />
			</view>
		</view>
		
		
		<!-- 按钮区域 -->
		<view @click="submitpingjia" class="pingjia-btn-wrap">
			<text>发表评价</text>
		</view>
		
			
	</view>
</template>

<script>
	const app = getApp();
	
	export default {
		data() {
			return {
				xingarr: [
					{
						'check': false,
						'txt': '极不满意',
					},
					{
						'check': false,
						'txt': '不满意',
					},
					{
						'check': false,
						'txt': '一般',
					},
					{
						'check': false,
						'txt': '满意',
					},
					{
						'check': false,
						'txt': '非常满意',
					}
				],
				xingtxt: '',
				content: '', //评价内容
				courseData: {
					'avatar' : '',
					'courseid' : '',
					'nickname' : '',
					'title' : ''
				}
			}
		},
		onLoad(option) {
			// 头像 姓名 课程名 课程id
			this.courseData = option;
		},
		methods: {
			checkxing(index){
				if(this.xingarr[index].check === false) {
					for (let idx in this.xingarr) {
						if(idx > index) {
							continue;
						}
						this.xingarr[idx].check = true;
					    this.xingtxt = this.xingarr[idx].txt;
					}
					
				} else {
					for (let idx in this.xingarr) {
						if(idx <= index) {
							continue;
						}
						this.xingarr[idx].check = false;
						this.xingtxt = this.xingarr[index].txt;	
					}
				}
				
			},
			// 发表评价
			submitpingjia() {
				
				// 星星数量
				let xingNum = 0;
				for (let index in this.xingarr) {
					if(this.xingarr[index].check === false) {
						continue;
					}
					xingNum++;
				}
				console.log(xingNum);
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Comment.Add',
					method: 'GET',
					data: {
						// uid token courseid star content
						'uid' : gData.userinfo.id,
						'token' : gData.userinfo.token,
						'courseid' : this.courseData.courseid,
						'star' : xingNum,
						'content' : this.content,
					},
					success: res => {
						uni.showToast({
							icon: 'none',
							title: res.data.data.msg
						});
						if(parseInt(res.data.data.code) !== 0) {
							return;
						}
						
						setTimeout(function(){
							
							uni.navigateBack({
								delta: 1
							});
						}, 2000);
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					},
				});
				
			}
			
		}
	}
</script>

<style>
	
	.pingjia-all-wrap {
		padding-top: 10rpx;
		border-top: 4rpx solid #F8F8F8;
	}
	
	/* 老师信息区 */
	.teacher-wrap {
		width: 92%;
		margin: 0 auto;
	}
	
	.course-title {
		font-size: 28rpx;
		color: #000000;
	}
	
	.teacher-avatar-name {
		height: 60rpx;
		display: flex;
		align-items: center;
	}
	
	.avatar-img {
		width: 30rpx;
		height: 30rpx;
		border-radius: 50%;
	}
	
	.teacher-name {
		font-size: 20rpx;
		color: #000000;
		display: inline-block;
		margin-left: 10rpx;
	}
	
	.bold-xian {
		border-bottom: 12rpx solid #F8F8F8;
		margin-bottom: 12rpx;
	}
	
	/* 评价内容区 */
	.pingjia-content-wrap {
		width: 92%;		
		margin: 0 auto;
	}
	
	.pingjia-xing-wrap {
		height: 60rpx;
		line-height: 60rpx;
	}
	
	.pingjia-title {
		float: left;
		font-size: 28rpx;
		margin-right: 40rpx;
	}
	
	.xing-wrap {
		float: left;
		width: 60%;
	}
	
	.pingjia-xing {
		color: #E1E1E1;
		margin-right: 18rpx;
	}
	
	.checkxing {
		color: #FFAC4B;
	}
	
	.xing-txt {
		display: inline-block;
		width: 17%;
		text-align: right;
		color: #FFAC4B;
	}
	
	.pinglun-content {
		display: inline-block;
	    width: 100%;
		min-height: 800rpx;
		margin-top: 40rpx;
	}
	
	.pinglun-textarea {
		width: 100% !important;
		height: 800rpx;
		font-size: 28rpx;
	}
	
	/* 评价按钮 */
	.pingjia-btn-wrap {
		height: 70rpx;
		line-height: 70rpx;
		width: 90%;
		font-size: 24rpx;
		letter-spacing: 2rpx;
		border-radius: 10rpx;
		color: #FFFFFF;
		text-align: center;
		margin: 0 auto;
		position: fixed;
		left:0;
		right:0;
		bottom: 24rpx;
		background-color: #38DAA6;
	}
	
	
</style>
