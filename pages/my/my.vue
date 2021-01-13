<template>
	<view>
		<view class="top">

		</view>

		<!-- 头部 -->
		<view class="p-3 border-bottom avatar-wrap">

			<!-- 老师名字ID区域	 -->
			<view @click="editmeans(userInfo.id)" class="title-wrap">
				<image :src="userInfo.avatar" style="width: 120rpx; height: 120rpx;" class="rounded-circle title-avatar">
				</image>
				<view class="name-id-wrap">
					<text>{{userInfo.user_nickname}}</text>
					<text class="id-wrap">ID:{{userInfo.id}}</text>
					<text class="iconfont icon-jinrujiantou"></text>
				</view>
			</view>

			<!-- 关注老师 -->
			<view class="guan-wrap">
				<view class="guan-info-wrap">
					<view class="guanzhu">
						关注讲师
					</view>
					<text>{{userInfo.follows}}</text>
				</view>
				<!-- 讲师主页按钮 -->
				<view @click="showTeacherInfo(userInfo.id)" v-if="isTeacherInfo == '1'" class="teacher-info-btn">
					讲师主页
				</view>
			</view>
		</view>

		<template>

			<view class="p-3">
				<view class="my-item" @click="mycourse">
					<image class="userinfo-icon-img" src="../../static/my/buy.png" mode="aspectFill"></image>
					<view class="userinfo-title-txt">已购买</view>
					<uni-icons :size="20" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
				</view>
				<view class="itemline"></view>
				<view class="my-item" @click="yijian">
					<image class="userinfo-icon-img" src="../../static/my/yijian.png" mode="aspectFill"></image>
					<view class="userinfo-title-txt">意见反馈</view>
					<uni-icons :size="20" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
				</view>
				<view class="itemline"></view>
				<view class="my-item" @click="aboutwe">
					<image class="userinfo-icon-img" src="../../static/my/about.png" mode="aspectFill"></image>
					<view class="userinfo-title-txt">关于我们</view>
					<uni-icons :size="20" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
				</view>
				<view class="itemline"></view>
				<view class="my-item" @click="shezhiList">
					<image class="userinfo-icon-img" src="../../static/my/set.png" mode="aspectFill"></image>
					<view class="userinfo-title-txt">设置</view>
					<uni-icons :size="20" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
				</view>
				<view class="itemline"></view>
			</view>
		</template>

		<!-- 公共tab -->
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import uniIcons from '@/components/uni-ui/uni-icons/uni-icons.vue';
	const app = getApp();

	export default {
		components: {
			uniListItem,
			uniIcons
		},
		data() {
			return {
				userInfo: {},
				isTeacherInfo: ''
			}
		},
		onShow: function() {
			let gData = app.globalData;
			uni.request({
				url: gData.site_url + 'User.GetBaseInfo',
				method: 'GET',
				data: {
					'uid': gData.userinfo.id,
					'token': gData.userinfo.token
				},
				success: res => {
					console.log(res);
					if (parseInt(res.data.data.code) !== 0) {
						return;
					}
					this.userInfo = res.data.data.info[0];
					if (res.data.data.info[0].type == '1') {
						//讲师
						this.isTeacherInfo = '1'
					}
				},

			});
		},
		onLoad() {

			if (app.globalData.userinfo == '') {
				uni.navigateTo({
					url: '../login/login'
				})
				return;
			}

			let gData = app.globalData;
			uni.request({
				url: gData.site_url + 'User.GetBaseInfo',
				method: 'GET',
				data: {
					'uid': gData.userinfo.id,
					'token': gData.userinfo.token
				},
				success: res => {

					if (parseInt(res.data.data.code) !== 0) {
						return;
					}
					this.userInfo = res.data.data.info[0];
					if (res.data.data.info[0].type == '1') {
						//讲师
						this.isTeacherInfo = '1'
					}
				},

			});


		},
		methods: {
			showTeacherInfo(touid) {
				//跳转教师详情页并传入基本信息
				uni.navigateTo({
					url: '../teacherinfo/teacherinfo?touid=' + touid,
				});

			},
			teacherInfo() {
				uni.navigateTo({
					url: "/pages/teacher/teacher"
				})
			},
			// 编辑资料
			editmeans(uid) {

				uni.navigateTo({
					url: '../edit_user/edit_user?id=' + uid + '&avatar=' + this.userInfo.avatar +
						'&user_nickname=' + this.userInfo.user_nickname,
				});

			},
			mycourse() {
				uni.navigateTo({
					url: '../myclass/myclass',

				});
				// uni.navigateTo({
				// 	url: '../detail/detail',

				// });
			},
			// 设置内页
			shezhiList() {
				uni.navigateTo({
					url: '../setting/setting',
					fail: () => {
						uni.showToast({
							title: '网络错误'
						});
					},
				});

			},
			// 意见反馈
			yijian() {
				uni.navigateTo({
					url: '../yijian-fankui/yijian-fankui',
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					},
				});
			},
			// 关于我们
			aboutwe() {
				uni.navigateTo({
					url: '../about/about',
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
	.itemline{
		margin-left: 55rpx;
		margin-right: 5rpx;
		height: 2rpx;
		background-color: #CCCCCC;
	}
	.top {
		height: 80rpx;
		width: 100%;
		background-color: #1FDCA9;
	}

	.my-item {
		display: flex;
		flex-direction: row;
		height: 80rpx;
		margin-top: 20rpx;
	}

	.userinfo-title-txt {
		margin-left: 20rpx;
		color: #000000;
		margin-top: 10rpx;
	}

	.uni-icon-wrapper {
		position: absolute;
		right: 20rpx;
		margin-top: 10rpx;
	}

	.userinfo-icon-img {
		width: 40rpx;
		height: 40rpx;
		margin-top: 20rpx;
	}

	.title-wrap {
		display: block;
		width: 100%;
		height: 61%;
		margin: 0 auto;
	}

	.avatar-wrap {
		background-color: #1FDCA9;
		height: 180rpx;
		padding-top: 80rpx;
	}

	.title-avatar {
		float: left;
	}

	.name-id-wrap {
		width: 79%;
		height: 100%;
		float: left;
		background-color: #1FDCA9;
		position: relative;
		color: #FFFFFF;
		margin-left: 20rpx;
	}

	.name-id-wrap text:first-child {
		display: block;
		font-size: 32rpx;
		font-weight: bold;
	}

	.name-id-wrap text:nth-child(2) {
		display: block;
		margin-top: 10rpx;
	}

	.name-id-wrap text:nth-child(3) {
		position: absolute;
		right: 0rpx;
		top: 30%;
		color: #FFFFFF;
	}

	.id-wrap {
		font-size: 20rpx;
	}

	/* 关注教师 */
	.guan-wrap {
		width: 100%;
		height: 60rpx;
		padding-top: 10rpx;
		padding-left: 20%;
		color: #FFFFFF;
	}

	.guanzhu {
		float: left;
		margin-right: 16rpx;
		font-size: 20rpx
	}

	.guan-info-wrap {
		width: 58%;
		font-size: 20rpx;
		display: inline-block;
	}

	.teacher-info-btn {
		display: inline-block;
		width: 130rpx;
		height: 36rpx;
		line-height: 36rpx;
		text-align: center;
		background-color: transparent;
		color: #FFFFFF;
		border: 2rpx solid #FFFFFF;
		border-radius: 40rpx 40rpx;
		font-size: 20rpx;
	}

	/* 个人中心下半部分文字标题 */
	.user-bottom-icon-left {
		display: inline-block;
		width: 7%;
	}

	.user-bottom-title {
		display: inline-block;
		width: 18%;
	}

	.user-bottom-icon {
		display: inline-block;
		text-align: right;
		width: 69%;
	}

	.my-item {
		color: #1FDCA9;
	}
</style>
