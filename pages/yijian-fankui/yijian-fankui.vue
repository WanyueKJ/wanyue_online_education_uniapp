<template>
	<view>
		
		<view class="yijian-wrap">
			<textarea class="yijian-txt" v-model="yijian" placeholder="请输入您的反馈内容(最多500字)" placeholder-style="padding-top: 10rpx; font-size: 26rpx; color:#969696;" />
			<view @click="photo" class="img-wrap">
				<image :class="{gai : (isUpload == true)}" class="yijian-img" :src="imgPath" mode=""></image>
				<text class="jiahao-txt iconfont icon-jiahao"></text>
			</view>
			
			<view :enabled="false" :class="{ opatity: enabled}" class="submit-wrap" @click="subyijian">
				提交
			</view>	
		</view>
		
		
	</view>
</template>

<script>
	
	const app = getApp();
	
	export default {
		data() {
			return {
				imgPath: '', //意见图片路径
				isUpload: false, //是否上传
				yijian: ''
			}
		},
		computed:{
			enabled: function(){
				if(this.yijian == ''){
					return true;
				}
				return false;
			},
			
		},
		methods: {
			//上传
			photo(){
				let gData = app.globalData;
				let that = this;
				
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], //从相机/相册选择
				    success: function (res) {
						
						//上传图片到服务器并返回图片地址(这里不用七牛)
						 let tempFilePaths = res.tempFilePaths;
						 let that2 = that;	 
						 uni.uploadFile({
							  url : gData.site_url + 'User.UploadImg',
							  filePath: tempFilePaths[0],
							  name: 'file',
							  formData: {
							   'uid': gData.userinfo.id,
							   'token': gData.userinfo.token,
							  },
							  success: function (uploadFileRes) {
								that2.imgPath = "https://" + JSON.parse(uploadFileRes.data).path;
								that2.isUpload = true;
							  },
							  fail:function(){
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
			subyijian(){
				if(this.yijian == '') {
					return;
				}
				let gData = app.globalData;
				uni.request({
					url:  gData.site_url + 'Feedback.Add',
					method: 'GET',
					data: {
						// uid token 
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'thumb': this.imgPath,
					    'content': this.yijian,
					},
					success: res => {
						console.log(res);
						uni.showToast({
							icon: 'none',
							title: res.data.data.msg
						});
						
						if(parseInt(res.data.data.code) === 0) {
							setTimeout(function(){
								uni.reLaunch({
									url: '../my/my',
								})
							}, 2000);
						}
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
	.yijian-wrap {
		width: 92%;
		height: 400rpx;
		margin: 0 auto;
	}
	
	.yijian-txt {
		width: 100%;
		height: 100%;
		background-color: #F2F6FC;
	}
	
	/* 相册 */
	.img-wrap {
		margin-top: 45rpx;
		width: 150rpx;
		height: 150rpx;
		line-height: 150rpx;
		text-align: center;
		background-color: #F2F6FC;
		position: relative;
	}
	
	.yijian-img {
		width: 100%;
		height: 100%;
		background-color: red;
		position: absolute;
		left: -9999rpx;
		top: -9999rpx;
	}
	
	.gai {
		left: 0;
		top: 0;
	}
	
	.jiahao-txt {
		font-size: 60rpx;
		color: #969696;
	}
	
	/* 提交 */
	.submit-wrap {
		height: 80rpx;
		line-height: 80rpx;
		width: 90%;
		color: #FFFFFF;
		font-size: 30rpx;
		text-align: center;
		border-radius: 37rpx;
		position: fixed;
		left: calc(4.8%);
		bottom: 50rpx;
		background: linear-gradient(to right, #7BD68E, #65CCB9);	
	}
	
	.opatity {
		opacity: 0.5; 
	}
	
	
</style>
