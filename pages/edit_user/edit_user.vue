<template>
	<view>
		<uni-nav-bar :border="false" @clickLeft="back" left-icon="back" title="编辑资料">
			<!-- #ifdef MP-WEIXIN -->
			<!-- <view class="save-btn2" @click="saveEdit" slot="right">保存</view> -->
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<!-- <view class="save-btn" @click="saveEdit" slot="right">保存</view> -->
			<!-- #endif -->
		</uni-nav-bar>

		<!-- 资料区域 -->
		<view class="main">

			<view @click="photo" class="avatar-wrap">
				<image class="user-avatar" :src="avatarPath" mode=""></image>
				<text class="tishi">点击更换头像</text>
			</view>
			<view>
				<input @input="getUserNickname" class="nickname-wrap" type="text" :value="user_nickname" />
			</view>
		</view>
		
		<button class="pass-login-btn" @click="saveEdit">保存</button>
	</view>



</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	const app = getApp();

	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				userInfo: {},
				avatarPath: '', //头像路径
				user_nickname: '', //昵称
			}
		},
		onLoad(option) {

			if (app.globalData.userinfo == '') {
				uni.navigateTo({
					url: '../login/login'
				})
				return;
			}

			//id 头像 昵称
			this.avatarPath = option.avatar;
			this.user_nickname = option.user_nickname;
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 上传图片
			photo() {
				let gData = app.globalData;
				let that = this;

				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相机/相册选择
					success: function(res) {


						//上传图片到服务器并返回图片地址(这里不用七牛)
						let tempFilePaths = res.tempFilePaths;
						let that2 = that;
						uni.uploadFile({
							url: gData.site_url + 'User.UploadImg',
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'uid': gData.userinfo.id,
								'token': gData.userinfo.token,
							},
							success: function(uploadFileRes) {
								that2.avatarPath = "https://" + JSON.parse(uploadFileRes.data).path;
							},
							fail: function() {
								uni.showToast({
									'icon': 'none',
									'title': '上传失败'
								});
								return;
							}
						});

					},

				});

			},
			getUserNickname(e) {
				this.user_nickname = e.detail.value;
			},
			// 保存资料
			saveEdit() {
				let gData = app.globalData;
				console.log(this.user_nickname);
				//更新用户资料到
				uni.request({
					url: gData.site_url + 'User.UpUserInfo',
					method: 'POST',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'fields': JSON.stringify({
							'user_nickname': this.user_nickname,
							'avatar': this.avatarPath
						})
					},
					success: res => {
						console.log(res);
						uni.showToast({
							icon: 'none',
							title: res.data.data.msg
						});
						uni.navigateBack({

						});
						if (parseInt(res.data.data.code) !== 0) {
							return;
						}
					},
					fail: () => {},

				});

			},


		}
	}
</script>


<style>
	.pass-login-btn {
		width: 80%;
		font-size: 30rpx;
		color: #646464;
		background-color: #65CCB9;
	}

	.main {
		width: 90%;
		margin: calc(20%) auto;
		text-align: center;
	}

	.save-btn {
		color: #3BDCA8;

	}

	.save-btn2 {
		color: #3BDCA8;
		margin-top: 70rpx;

	}

	.avatar-wrap {
		width: 180rpx;
		height: 200rpx;
		display: inline-block;
		margin-bottom: 80rpx;
	}

	.user-avatar {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}

	.tishi {
		display: block;
		font-size: 18rpx;
		color: #969696;
	}

	.nickname-wrap {
		border-bottom: 2rpx solid #969696;
		width: 50%;
		height: 60rpx;
		margin: 0 auto;
	}
</style>
