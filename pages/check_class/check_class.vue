<!-- 选择年级 -->
<template>
	<view>
		
		<uni-nav-bar left-icon="closeempty" @clickLeft="back" :border="false"></uni-nav-bar>
		
		<view class="check-class-wrap">
	
			<view class="check-title">
				选择你想看的学习阶段
			</view>
			
			<view class="check-title-two">
				<text>随时可以更改, 请放心选择</text>
			</view>
			
			<view class="border-bottom"></view>
			
			<!-- 年级 -->
			<view class="check-nianji">
				<!-- 学级 -->
				<view class="school" v-for="(item, index) in gradeArr" :key="item.id">
					<view class="one-vertical">
						<text>{{item.name}}</text>
					</view>
					<view class="two-vertical">
						<button @click="checkGrade(im.id, im.name)" v-for="(im, idx) in item.list" :key="im.id"
						:class="currentIndex === im.id ? 'bg-click' : ''">
							{{im.name}}
						</button>
					</view>	
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'; 
	const app = getApp();
	
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				currentIndex: 0,
				gradeArr: ''
			}
		},
		onLoad(option) {
			//获取学级分类
			// 取缓存
			uni.request({
				url: app.globalData.site_url + "Course.GetGrade",
				data: {},
				success:(res)=> {
					console.log(res);
					let data = res.data.data;
					if(parseInt(data.code) !== 0) {
						return;
					}
					this.gradeArr = data.info;
					let currentGradeClass = app.globalData.grade_class.id;
					if(currentGradeClass == '') {
						this.currentIndex = data.info[0].list[0].id;
					} else {
						this.currentIndex = currentGradeClass;
					}
					
				}
			});
			
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			checkGrade(id, name) {
				// 切换选择年级
				this.currentIndex = id
				app.globalData.grade_class.id = id; 
				app.globalData.grade_class.name = name;
				
				uni.reLaunch({
					url: "../index/index"
				});
			}
		}
	}
</script>

<style>
	
	.check-class-wrap {
		width: 90%;
		margin: 0 auto;
	}
	
	.check-title {
		font-size: 45rpx;
		font-weight: bold;
		text-align: center;
	}
	
	.check-title-two {
		font-size: 28rpx;
		color: #969696;
		text-align: center;
		margin-top: 15rpx;
		margin-bottom: 30rpx;
	}
	
	.border-bottom {
		margin: 50rpx 0;
	}
	
	/********** 年级 **********/
	.school {
		margin-bottom: 55rpx;
	}
	
	.school::after {
		display: block;
		clear: both;
		height: 0;
		content: "";
		visibility: hidden;
		overflow: hidden;
	}
	
	.school > view {
		float: left;
		font-size: 28rpx;
	}
	
	.school > view button {
		text-align: center;
		height: 70rpx;
		line-height: 70rpx;
		margin-bottom: 28rpx;
		background-color: #F5F5F5;
		border: none;
		border-radius: 40rpx;
		font-size: 28rpx;
		color: #969696;
	}
	
	button::after{
		border: none;
	}
	
	.school > .one-vertical button {
		background-color: #FFFFFF;
		border-radius: 0;
		font-weight: bold;
	}
	
	.school > view.one-vertical {
		text-align: center;
		color: #000000;
		width: 180rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
	
	.school .two-vertical {
		/* margin-right: 50rpx; */
		width: 480rpx;
	}
	
	.school .two-vertical button {
		width: 188rpx;
		float: left;
		margin-right: 50rpx;
	}
	
	.bg-click {
		background-color: #38E1AB !important;
		color: #FFFFFF !important;
	}
	
	
	
</style>
