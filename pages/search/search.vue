<template>
	<view class="s-all-wrap">
		<view class="search-all-wrap">
		
			<view class="search-wrap">
				<text class="iconfont icon-faxianchaxun"></text>
				<input v-model="sdata" class="uni-input" @input="onInput" confirm-type="search" placeholder="搜索课程, 老师" placeholder-style="color:#C7C7C7;" />
			</view>
			<text @click="resetSearch" class="reset-search">取消</text>
		</view>
		
		<!-- 搜索历史 -->
		<view class="search-history" :class="{showsearch : (isShowHis == true)}">
			<view class="teacher">
				<view class="search-title-wrap">
					<text class="s-teacher-title">相关老师</text>
					<text @click="viewmoreteacher" class="s-more-view">查看更多></text>
				</view>
				<view class="search-teacher-info">
					<view @click="viewTeacherInfo(item.id)" class="search-teacher-item" v-for="(item, index) in teacherList" :key="item.id">
						<image class="teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
						<text class="teacher-name">{{item.user_nickname}}</text>
						<text class="teacher-inner-arow">></text>
					</view>
				</view>
			</view>
			<view class="course">
				<view class="search-title-wrap">
					<text class="s-course-title">相关课程</text>
				</view>
				<view class="search-course-info">
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
			</view>
			
		</view>
		
		
		<!-- 空空如也 -->
		<view class="xiangziwrapold" :class="{xiangziwrap : (kongkong == 'show')}">
			<image class="xiangzi" src="../../static/images/xiangzi.png" mode="aspectFill"></image>
			<text class="xiangzi_txt">空空如也</text>
		</view>
			
		
	</view>
</template>

<script>
	
	
	
	const app = getApp();
	
	export default {
	
		data() {
			return {
				searchText:"",
				list:[],
				// 搜索结果
				searchList:[],
				type: "post",
				teacherList: {},
				courseList: {},
				isShowHis: false,
				kongkong: '',
				searchKeyword: '',
				teacherInfo: {},
				sdata: ''
			}
		},
		//监听点击导航搜索按钮
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				this.searchEvent();
			}
		},
		onLoad(option) {
			if((option.keyword != 'undefined') && (option.keyword != '')){
				this.sdata = option.keyword;
				this.searchKeyword = option.keyword;
				this.getHomeSearch(this.sdata);
			}	
			
		},
		methods: {
			clickTabSearchHistory(text){
				this.searchText = text;
				this.searchEvent();
			},
			//搜索事件
			searchEvent(){
				//收起键盘
				uni.hideKeyboard();
				// 处于loading状态
				uni.showLoading({
					title:'加载中...',
					mask:false
				})
				//请求搜索
				setTimeout(()=>{
					switch (this.type){
						case 'post':
						this.searchList = demo1;
							break;
						case 'topic':
						this.searchList = demo2;
							break;
						case 'user':
						this.searchList = demo3;
							break;
					}
					
					// 隐藏loading
					uni.hideLoading();
					
				},3000);
				
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
							app.globalData.login_jump.page = '../search/search';
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
			
			resetSearch() {
				uni.reLaunch({
					url:"../index/index"
				})
			},
			onInput(e){
				if(e.detail.value == '' || e.detail.value == null) {
					this.teacherList = {};
					this.courseList = {};
					this.isShowHis = false;
					//空空如也图标
					this.kongkong = 'show';
					return;
				}
				this.searchKeyword = e.detail.value;
				// 搜索方法
				this.getHomeSearch(this.searchKeyword);
				
			},
			getHomeSearch(keyword){
				
				uni.request({
					url: app.globalData.site_url + "Home.Search",
					method: 'GET',
					data: {
						'gradeid': app.globalData.grade_class.id,
						'keyword': keyword
					},
					success: res => {
						if(parseInt(res.data.data.code) !== 0) {
							return;
						}
						let data = res.data.data.info[0];
						if((data.teacher.length == 0) && (data.course.length == 0)) {
							this.isShowHis = false;
							//空空如也图标
							this.kongkong = 'show';
							return;
						}
						// 老师最多只显示3个, 超过则在查看更多中显示
						this.teacherList = data.teacher;
						this.courseList = data.course;
						this.isShowHis = true;
						
					},
					
				});
				
			},
			viewmoreteacher() {
				console.log(this.searchKeyword);
				// 跳转更多老师页面
				uni.navigateTo({
					url: "../moreteacher/moreteacher?keyword=" + this.searchKeyword,
				})
				
			}
		}
	}
</script>

<style>
	@import url("/static/css/search/search.css");
	@import url("/static/css/course_list.css");
</style>
