<template>
	<view>
		<view class="line"></view>
		<!-- <uni-nav-bar @clickLeft="backSearch" left-icon="back" title="相关老师"></uni-nav-bar> -->
		<view class="search-teacher-info">
			<view @click="viewTeacherInfo(item.id)" class="search-teacher-item" v-for="(item, index) in teacherList" :key="item.id">
				<view class="row">
					<image class="teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
					<text class="teachername">{{item.user_nickname}}</text>
					<image mode="aspectFit" class="back_image" src="../../static/navi_backImg@2xxx.png"></image>
				</view>
				<view class="line"></view>
			</view>
		</view>
		<template v-if="kongkong == true">
			<view :class="{xiangziwrap : (kongkong == true)}">
				<image class="xiangzi" src="../../static/images/xiangzi.png" mode="aspectFill"></image>
				<text class="xiangzi_txt">空空如也~</text>
			</view>
		</template>
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
				teacherKeyword: '',
				kongkong:true
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
							this.kongkong = true;
							return;
						}
						let info = res.data.data.info;
						this.teacherList = info;
						if (this.teacherList.length > 0){
							this.kongkong = false;
						}
						app.globalData.page = '';
						app.globalData.data = '';
					}
				});	
				
			},
			// 查看教师详情
			viewTeacherInfo(touid) {
				if (getApp().globalData.userinfo == ''){
					uni.navigateTo({
						url: '../login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return;
				}
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
				uni.navigateBack({
					delta: 1
				});
			}
			
		}
	}
</script>

<style>
	@import url("/static/css/search/search.css");
	@import url("/static/css/course_list.css");	
	.line{
		width: 100%;
		height: 1rpx;
		background-color: #F5F5F5;
	}
.xiangziwrap {
	margin-top: calc(50% - 60px);
	position: relative;
	left: calc(50% - 80px);
	/* top: calc(50%); */
	width: 300rpx;
	height: 100rpx;
}

.xiangzi {
	margin-left: 100rpx;
	width: 100rpx;
	height: 100rpx;
}

.xiangzi_txt {
	width: 100%;
	display: block;
	text-align: center;
	font-size: 18rpx;
	color: #C7C7C7;
}
</style>
