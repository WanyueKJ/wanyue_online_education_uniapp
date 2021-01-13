<template>
	<view>
		<uni-nav-bar @clickLeft="backSearch" left-icon="back" left-text="" right-text="" title="相关老师"></uni-nav-bar>
		<view class="m-teacher-wrap">
			<view class="search-teacher-info">
				<view @click="viewTeacherInfo(item.id)" class="search-teacher-item" v-for="(item, index) in teacherList" :key="item.id">
					<image class="teacher-avatar" :src="item.avatar" mode=""></image>
					<text class="teacher-name">{{item.user_nickname}}</text>
					<text class="teacher-inner-arow">></text>
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
				teacherList: {},
				teacherKeyword: ''
			}
		},
		onLoad(option) {
			
			this.teacherKeyword = option.keyword;
			let gData = app.globalData;
			if((gData.login_jump.data != undefined) && 
			gData.login_jump.data.length > 0) {
				this.teacherList = gData.login_jump.data;
			} else {
				//获取搜索的老师列表
				this.getSearchTeacher(option.keyword);
			}
			
		},
		methods: {
			
			getSearchTeacher(keyword) {
				uni.request({
					url: app.globalData.site_url + "Teacher.Search",
					method: 'GET',
					data: {
						'keyword' : keyword
					},
					success: res => {
						if(parseInt(res.data.data.code) !== 0) {
							return;
						}
						
						let info = res.data.data.info;
						this.teacherList = info;
						
						app.globalData.page = '';
						app.globalData.data = '';
					}
				});	
				
			},
			// 查看教师详情
			viewTeacherInfo(touid) {
				//获取老师基本信息, 判断登录
				this.getTeacherInfo(touid);
				
				//跳转教师详情页并传入基本信息
				uni.navigateTo({
					url: '../teacherinfo/teacherinfo?touid=' + touid,
				});
				
			},
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
							});
							//登录成功后跳转回本页
							app.globalData.login_jump.page = '../moreteacher/moreteacher';
							app.globalData.login_jump.data = this.teacherList;
						}
						
						if(parseInt(res.data.data.code) !== 0) {
							return;
						}
						
						let info = res.data.data.info[0];
						this.teacherInfo = info;
						
					},
				});
				
			},
			backSearch() {
				uni.navigateTo({
					url: '../search/search?keyword=' + this.teacherKeyword,
				});
			}
			
		}
	}
</script>

<style>
	
	.m-teacher-wrap {
		border-top: 6rpx solid #F5F5F5;
	}
	
	/* 老师搜索结果 */
	.search-teacher-info {
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
	.search-teacher-item {
		width: 100%;	
		height: 100rpx;
		display: flex;
		align-items: center;
	}
	
	.teacher-avatar {
		width: 90rpx;
		height: 90rpx;
		margin-right: 30rpx;
		border-radius: 50%;
	}
	
	.teacher-inner-arow {
		margin-left: 60%;	
	}
	

</style>
