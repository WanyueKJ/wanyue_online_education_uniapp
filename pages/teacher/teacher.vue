<!-- 讲师主页 -->
<template>
	<view>
		
		<!-- 头部包装 -->
		<view class="tea-nav-wrap">
			<uni-nav-bar class="tea-nav-bar" :border="false" leftIcon="back" color="#FFFFFF" background-color="#141414" @clickLeft="back"></uni-nav-bar>
			
			<!-- 头部 -->
			<view class="flex align-center avatar-wrap">
				<image src="/static/demo/user4-128x128.jpg"
				 style="width: 120rpx; height: 120rpx;" class="rounded-circle teacher-avatar-wrap"></image>
				 <view class="pl-3 flex flex-column flex-1 title-wrap">
				 	<view class="name-id-wrap">
						<text class="tea-name">李二狗</text>
						<text class="tea-pos">教学总监</text>
						<view class="tea-guanzhu-wrap">
							<view class="tea-guanzhu-wrap-r">
								<text class="iconfont icon-jiahao"></text>
								<text>关注</text>
							</view>
						</view>
					</view>
					<view class="xue-wrap">
						<view class="xueyuan">学员<text>888</text></view>
						
					</view>
				 </view>
			</view>
			
		</view>
		
		
		<!-- 简历课程部分 -->
		<view class="jianli-course-wrap">
			<!-- tab标签 -->
			<uni-nav-bar class="border-bottom tea-nav-tab" :border="false" :statusBar="true" @clickRight="openAddInput">
				<view class="flex align-center justify-center font-weight-bold course-tab">
					<view class="mx-5" @click="changeTab(index)" v-for="(item, index) in tabBars" :key="index"
					:class="tabIndex === index ? 'text-main font-lg' : 'font-md text-light-muted'">
						{{item.name}}
					</view>
				</view>
				
			</uni-nav-bar>
			
			<swiper :current="tabIndex" class="swiper-box" :style="{height:scrollH+'px'}" @change="onChangeTab">
				<!-- 简历 -->
			    <swiper-item>
			        <scroll-view scroll-y :style="'height:' + scrollH+'px;'">
						<view class="jianli-info">
							<text>毕业院校</text>
							<text>暂未填写</text>
						</view>
						<view class="jianli-info">
							<text>教学经历</text>
							<text>暂未填写</text>
						</view>
						<view class="jianli-info">
							<text>教学特点</text>
							<text>暂未填写</text>
						</view>
			        </scroll-view>
			    </swiper-item>
				
				<!-- 课程 -->
				<swiper-item>
				    <scroll-view scroll-y :style="'height:' + scrollH+'px;'">
						
						<view class="live-list" v-for="(item, index) in live_demo"  :key="index">
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
						
				    </scroll-view>
				</swiper-item>	
				
			</swiper>
			
		</view>
		
		
		
		
		
	</view>
</template>

<script>
	
	const demo = [
		{	
			course_id: 1,
			live_img: "/static/demo/photo4.jpg",
			title:"高二上学期语文知识内容讲解, 重点知识串讲, 考前冲刺练习",
			live_status: "正在直播",
			teacher_name: "李老师",
			price: "88.00"
		},
		{	
			course_id: 2,
			live_img: "/static/demo/photo3.jpg",
			title:"高三数学精品冲刺课程",
			live_status: "正在直播",
			teacher_name: "王老师",
			price: "868.00"
		},
		{
			course_id: 3,
			live_img: "/static/demo/photo2.png",
			title:"高二上学期语文知识内容讲解, 重点知识串讲, 考前冲刺练习",
			live_status: "2020-11-30",
			teacher_name: "张二狗老师",
			price: "免费"
		}
	];
	
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components:{
			uniNavBar
		},	
		data() {
			return {
				scrollH: 500,
				tabIndex:0,
				tabBars:[{
					name:"简历"
				},{
					name: "课程"
				}],
				live_demo: [
					
				]
				
				
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:(res)=>{
					this.scrollH = res.windowHeight - res.statusBarHeight - 44;
				}
			})
			this.live_demo = demo;
		},
		methods: {
			back(){
				uni.navigateBack();
			},
			//切换选项卡
			changeTab(index){
				this.tabIndex = index
			},
			//滑动
			onChangeTab(e){
				//切换当前索引
				this.tabIndex = e.detail.current
			},
			
		}
	}
</script>

<style>
	@import url("/static/css/course_list.css");
	
	/* 导航包装 */
	.tea-nav-wrap {
		height: 260rpx;
		padding-top: 40rpx;
		background-color: #141414;
	}
	
	/* 头部部分 */
	.teacher-avatar-wrap {
		border: 2rpx solid #FFFFFF;
	}
	
	.avatar-wrap {
		height: 48%;
		padding-left: 60rpx;
		padding-bottom: 40rpx;
	}
	
	.title-wrap {
		height: 120rpx;
	}
	
	.name-id-wrap {
		height: 70%;
	}
	
	.name-id-wrap text {
		color: #FFFFFF;
	}
	
	/* 教师名区域 */
	.tea-name {
		font-size: 40rpx;
	}
	
	.tea-pos {
		display: inline-block;
		width: 120rpx;
		height: 38rpx;
		line-height: 38rpx;
		text-align: center;
		margin-left: 20rpx;
		border-radius: 10rpx;
		font-size: 20rpx;
		background-color: #FF5F19;
	}
	
	.tea-guanzhu-wrap {
		display: inline-block;
		width: 50%;
		text-align: right;
	}
	
	.tea-guanzhu-wrap-r {
		display: inline-block;
		margin-right: 30rpx;
		font-size: 20rpx;
	}
	
	.tea-guanzhu-wrap-r text {
		color: #38DAA6;
		margin-left: 10rpx;
	}
	
	.xueyuan {
		color: #969696;
		font-size: 20rpx;
	}
	
	.jianli-info {
		height: 100rpx;
		margin-bottom: 40rpx;
		padding-left: 30rpx;
	}
	
	.jianli-info text {
		display: block;
	}
	
	.jianli-info text:first-child {
		font-size: 28rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
	}
	
	.jianli-info text:nth-child(2) {
		color: #C7C7C7;
		font-size: 26rpx;
	}
	
	.tea-nav-tab {
		border-bottom: 10rpx solid #FAFAFA;
	}
	
	
</style>
