<template>
	<view>
		
		<view class="teacher-top-wrap">
			<view class="teacher-top">
				<image @click="backPre" class="t-back-img" src="../../static/images/back1.png" mode=""></image>
					
				<!-- 头像 人名 关注区域 -->
				<view class="teacher-top-info">
					<view class="ttop-info-avatar-wrap">
						<image class="ttop-info-avatar" :src="teacherInfo.avatar" mode=""></image>
					</view>
					<view class="ttop-info-right">
						<view class="teacher-name-msg">
							<text class="teacher-username">{{teacherInfo.user_nickname}}</text>
							<text @click="focus(teacherInfo.id)" :class="guanzhu_class" class="teacher-guan">{{guanzhutext}}</text>
						</view>
						<view @click="viewstu(teacherInfo.id)" class="teacher-stunum-wrap">
							<text class="t-stu">学员</text>
							<text class="t-stu-num">{{teacherInfo.fans}}</text>
						</view>
						
					</view>
					
				</view>
				
			</view>
		</view>
		
		<view class="teacher-bottom">	
			<!-- tab标签 -->
			<view class="flex align-center justify-center font-weight-bold teacher-info-tab">
				<view class="mx-5" @click="changeTab(index)" v-for="(item, index) in tabBars" :key="index"
				:class="tabIndex === index ? 'text-main font-lg' : 'font-md text-light-muted'">
					{{item.name}}
				</view>
			</view>	
			
			<swiper :current="tabIndex" class="swiper-box" :style="{height:scrollH+'px'}" @change="onChangeTab">
				<!-- 简历 -->
			    <swiper-item class="teacher-info-item">
			        <scroll-view scroll-y :style="'height:' + scrollH+'px;'"
					@scrolltolower="loadmoreEvent">
					 <view class="teacher-item-wrap">
						 <view class="finish-school ttinfo-item">
						 	<view class="ttinfo-title">毕业院校</view>
						 	<view class="ttinfo-content">{{teacherInfo.school}}</view>
						 </view>
						 <view class="edu-exp ttinfo-item">
						 	<view class="ttinfo-title">教学经历</view>
						 	<view class="ttinfo-content">{{teacherInfo.experience}}</view>
						 </view>
						 <view class="edu-trait ttinfo-item">
						 	<view class="ttinfo-title">教学特点</view>
						 	<view class="ttinfo-content">{{teacherInfo.feature}}</view>
						 </view>
					 </view>	
			        </scroll-view>
					
					<view v-if="is_edt_btn_show == true" @click="openeditcv(teacherInfo.id)" class="edit-cv-btn">编写简历</view>
			    </swiper-item>
				
				<!-- 课程 -->
				<swiper-item class="teacher-info-item">
				    <scroll-view scroll-y :style="'height:' + scrollH+'px;'">
						
						<view class="liveinfo-wrap">
							<!-- 直播课列表 -->
							<view @click="viewLiveInfo(item.id,item.sort)" class="live-list" v-for="(item, index) in courseList"  :key="index">
								<view class="live-list-img-wrap">
									<image class="live-list-img" :src="item.thumb" mode="aspectFill"></image>
									<template v-if="item.sort == undefined">
										<text class="course-title-icon">套餐</text>
									</template>
									<template v-else-if="item.sort == 0">
										<text class="course-title-icon">内容</text>
									</template>
									<template v-else-if="item.sort == 1">
										<text class="course-title-icon">课程</text>
									</template>
									<template v-else>
										<text class="course-title-icon">直播</text>
									</template>
								</view>
								
								<view class="live-list-info">
									
									<view class="live-c-title">{{item.name}}</view>
										<template v-if="item.sort == 0">
									<view class="live-status living-status" v-if="item.islive == 1">
										{{item.lesson}}
									</view>
									<view class="live-status-tuwen" v-else>
										{{item.lesson}}
									</view>
									</template>
									<template v-else>
									<view class="live-status living-status" v-if="item.islive == 1">
										{{item.lesson}}
									</view>
									<view class="live-status" v-else>
										{{item.lesson}}
									</view>
									</template>
									<view class="live-teacher-price">
										<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
										<text class="teacher-name">{{item.user_nickname}}</text>
										<view class="price-wrap">
											<text v-if="item.paytype == 0">免费</text>
											<text v-if="item.paytype == 2" class="pass">密码</text>
											<text v-if="item.paytype ==1" class="numPrice">
												 {{'¥' + item.payval}}
											</text>
										</view>
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
	
	
	const app = getApp();
	
	export default {
		components:{
		},
		data() {
			return {
				teacherInfo: {},
				scrollH: 600,
				tabIndex:0,
				tabBars:[{
					name:"简历"
				},{
					name: "课程"
				}],
				//关注列表
				list:[
					
				],
				courseList: {},
				hadguanzhu: false,
				guanzhutext: '',
				guanzhu_class: '',
				is_edt_btn_show: false
			}
		},
		onLoad(option) {
			// 开源版 没有教师的身份标识 认证那一套
			
			//获取老师基本信息
			if(option.keyword != undefined) {
				this.teacherKeyword = option.keyword;
			}
			this.getTeacherInfo(option.touid);
			// 获取老师课程信息
			this.getTeacherCourse(option.touid);
			
			let gData = app.globalData;
			if(option.touid == gData.userinfo.id) {
				this.is_edt_btn_show = true;
			}
			
		},
		methods: {
			backPre() {
				uni.navigateBack({
					delta:1 
				});
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
			// 获取老师基本信息
			getTeacherInfo(touid) {
				
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + "Teacher.GetHome",
					method: 'GET',
					data: {
						'uid' : gData.userinfo.id,
						'token' : gData.userinfo.token,
						'touid' : touid
					},
					success: res => {
						if(res.data.data.code == '700') {
							uni.navigateTo({
								url: "../login/login", 
							})
						}
						
						if(parseInt(res.data.data.code) !== 0) {
							return;
						}
						
						let info = res.data.data.info[0];
						this.teacherInfo = info;
						if(info.isattent == '1') {
							this.guanzhutext = '已关注';
							this.guanzhu_class = 't-had-guanzhu';
						} else {
							this.guanzhutext = "+" + ' ' + "关注";
							this.guanzhu_class = '';
						}
						
					},
				});
				
			},
			//关注/取消老师
			focus(touid){
				console.log(3333);
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'User.SetAttent',
					method: 'GET',
					data: {
						// uid token touid
						'uid' : gData.userinfo.id,
						'token' : gData.userinfo.token,
						'touid' : touid
					},
					success: res => {
						if(res.data.ret == 200) {
							uni.showToast({
								icon: 'none',
								title: res.data.data.msg
							});
							
							if(res.data.data.code == '1002') {
								// 不能关注自己	
								return;
							}
							
							if(res.data.data.info[0].isattent == '1') {
								
								this.guanzhutext = '已关注';
								this.guanzhu_class = 't-had-guanzhu';
							} else {
								this.guanzhutext = "+" + ' ' + "关注";
								this.guanzhu_class = '';
							}
							
						}
						
					},
					
				});
			},
			// 获取老师课程信息
			getTeacherCourse(touid) {
				
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + "Course.GetTeacherCourse",
					method: 'GET',
					data: {
						// uid token gradeid touid p
						'uid' : gData.userinfo.id,
						'token' : gData.userinfo.token,
						'gradeid' : gData.grade_class.id,
						'touid' : touid,
						'p' : 0
					},
					success: res => {
						
						if(res.data.data.code != 0) {
							return;
						}
						let info = res.data.data.info;
						this.courseList = info;
						
					},
					
				});
			},
			// 查看学员
			viewstu(touid){
				console.log(touid);
				uni.navigateTo({
					url: '../mystu/mystu?touid=' + touid,
				});
				
			},
			// 打开简历 
			openeditcv(touid) {
				uni.navigateTo({
					url: '../edit_cv/edit_cv?touid=' + touid,
				});	
			},
			viewLiveInfo(liveCourseId,sorttype){
					if(getApp().globalData.userinfo == '') {
						uni.navigateTo({
							url:'../login/login'
						})
						return;
					}
					//套餐
				if(sorttype == undefined){
					uni.navigateTo({
						url: '../taocaninfo/taocaninfo?courseid=' + liveCourseId
					});
				}
				//
				else if(sorttype == 0){
					uni.navigateTo({
						url: '../content-info/content-info?courseid=' + liveCourseId
					});
				}
				else if(sorttype == 1){
					uni.navigateTo({
						url: '../courseinfo/courseinfo?courseid=' + liveCourseId
					});
				}
				else
					uni.navigateTo({
						url: '../live_course_info/live_course_info?courseid=' + liveCourseId
					});
				},
		}
	}
</script>

<style>
	@import url("/common/common_course_list.css");
	@import url("/static/css/course_list.css");
	
	/* 大班课单独样式 */
	.liveinfo-wrap {
		padding-top: 2rpx;
		min-height: 1500rpx;
		background-color: #FAFAFA;
	}	
	
	.live-list {
		width: 90%;
		height: 190rpx;
		margin: 30rpx auto;
		padding-top: 20rpx;
		box-shadow: 0rpx 0rpx 4rpx 2rpx rgba(0, 0, 0, 0.1);
		border-radius: 8rpx;
		background-color: #FFFFFF;
	}
	
	.live-c-title {
		line-height: 35rpx;
		height: 40%;
	}
	
	.live-teacher-price {
		margin-top: 10rpx;
	}
	
	.price-wrap {
		margin-left: 55% !important;
	}
	.teacher-top-wrap {
		padding-top: 66rpx;
		width: 100%;
		height: 220rpx;
		background-color: #141414;
	}
	
	.t-back-img {
		width: 35rpx;
	    height: 35rpx;
		margin-left: 20rpx;
	}
	
	.teacher-top {
		height: 90%;
	}
	
	.teacher-top-info {
		height: 90%;
		margin-top: 20rpx;
		padding-left: 40rpx;
	}
	
	.ttop-info-avatar-wrap {
		float: left;
		width: 100rpx;
		height: 100rpx;
	}
	
	.ttop-info-avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.ttop-info-right {
		float: left;
		width: 80%;
		margin-left: 30rpx;
		height: 40%;
	}
		
	.teacher-name-msg {
		width: 100%;
		height: 70%;
		color: #FFFFFF;
		
	}
	
	.teacher-username {
		/* display: inline-block; */
		width: 300rpx;
		height: 100%;
		font-size: 36rpx;
		font-weight: bold;
		/* letter-spacing: 4rpx; */
	}
	
	.teacher-guan {
		position: absolute;
		right: 20rpx;
		top: 150rpx;
		font-size: small;
		color: #38DAA6;
	}
	
	/* 已关注 */
	.t-had-guanzhu {
		color: #646464;
	}
	
	.showline {
		display: inline-block;
	}
	
	/* 学员数量 */
	.teacher-stunum-wrap {
		display: inline-block;
		margin-top: 20rpx;
		color: #969696;
		font-size: 28rpx;
	}
	
	.t-stu-num {
		margin-left: 10rpx;
	}
	
	/* 滑动页 */
	.teacher-info-tab {
		height: 100rpx;
		border-bottom: 10rpx solid #FAFAFA;	
	}
	
	.teacher-item-wrap {
		width: 90%;
		margin: 0 auto;
	}
	
	.finish-school {
		margin-top: 20rpx;
	}
	
	.ttinfo-item {
		margin-bottom: 30rpx;
	}
	
	.ttinfo-title {
		height: 50rpx;
		font-weight: bold;
		font-size: medium;
	}
	
	.ttinfo-content {
		min-height: 50rpx;
		margin-top: 10rpx;
		color: #C7C7C7;
		font-size: small;
	}
	
	.edit-cv-btn {
		width: 85%;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		position: fixed;
		bottom: 0rpx;
		left: 50%;
	    -webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 10rpx;
		background-color: #38DAA6;
	}
	

</style>
