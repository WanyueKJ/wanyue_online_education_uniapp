<template>
	<view>

		<!-- #ifndef H5 -->
		<uni-nav-bar :border="false" @clickLeft="back" left-icon="back" title="编辑资料">

		</uni-nav-bar>
		<!-- #endif -->

		<!-- 资料区域 -->
		<view class="main">

			<view @click="photo" class="avatar-wrap">
				<image class="user-avatar" :src="avatarPath" mode="aspectFill"></image>
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
	import qiniuUploader from '../../qiniuUploader.js';
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
				avatar_name:''
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
			this.avatarPath = app.globalData.userinfo.avatar;
			this.user_nickname = app.globalData.userinfo.user_nickname;
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
						var path = tempFilePaths[0];
						uni.request({
							url: app.globalData.site_url + 'Upload.GetQiniuToken',
							method: 'POST',
							data: {
								'uid': app.globalData.userinfo.id,
								'token': app.globalData.userinfo.token
							},
							success: res2 => {
								uni.hideLoading();
								if (res2.data.data.code == 0) {
									var QiNiutoken = that.decypt(res2.data.data.info[0].token);
									var name = 'UNIAPPicon_edu_kaiyuan' + that.getTime() + 'icon.png';
									qiniuUploader.upload(path, res => {
										uni.showToast({
											title: '上传成功',
											icon: 'none'
										});
										that.avatarPath = res.imageURL;
										that.avatar_name = name;
									}, error => {
										uni.showToast({
											title: '上传失败，请重试',
											icon: 'none'
										});

									}, {
										region: 'ECN',
										domain: app.globalData.qiniuimageurl,
										key: name,
										uptoken: QiNiutoken,
									});
								}
							},
							fail() {
								uni.hideLoading();
								uni.showToast({
									title: '提交失败',
									icon: 'none'
								});
							},
						});
					},
				});
			},
			getTime() {
				let dateObj = new Date();
				let yy = dateObj.getFullYear();

				let mm = dateObj.getMonth() + 1;
				let dd = dateObj.getDate();
				let hh = dateObj.getHours();
				let mf = dateObj.getMinutes() < 10 ? '0' + dateObj.getMinutes() : dateObj.getMinutes();
				let ss = dateObj.getSeconds() < 10 ? '0' + dateObj.getSeconds() : dateObj.getSeconds();
				return yy + mm + dd + hh + mf + ss;
			},
			decypt(code) {
				var newcode = '';
				var str = '1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp&';
				for (var i = 0; i < code.length; i++) {
					var codeIteam = code[i];
					for (var j = 0; j < str.length; j++) {
						var stringIteam = str[j];
						if (codeIteam == stringIteam) {
							if (j == 0) {
								newcode += str[str.length - 1];
							} else {
								newcode += str[j - 1];
							}
						}
					}
				}
				return newcode;
			},
			getUserNickname(e) {
				this.user_nickname = e.detail.value;
			},
			// 保存资料
			saveEdit() {
				let gData = app.globalData;
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
						if (res.data.data.code == 0) {
							app.globalData.userinfo.user_nickname = res.data.data.info[0].user_nickname;
							app.globalData.userinfo.avatar = res.data.data.info[0].avatar;
							uni.setStorage({
								key: 'userinfo',
								data: app.globalData.userinfo,
								success: function(res) {

								}
							});
							setTimeout(() => {
								uni.navigateBack({
									delta: 1
								});
							}, 400);
						}
						uni.showToast({
							icon: 'none',
							title: res.data.data.msg
						});
						if (parseInt(res.data.data.code) !== 0) {
							return;
						}
					},
					fail: () => {
						uni.showToast({
							title: '网络错误',
							icon:'none'
						});
					},
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
