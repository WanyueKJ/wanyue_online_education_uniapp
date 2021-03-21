<template>
	<view>
		
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="back" left-icon="back" :border="false" title="海报分享" statusBar>
		
		</uni-nav-bar>
		<!-- #endif -->
		
		<view class="baoguo">
			<canvas class="new_page" id='haibao_canvas' canvas-id="haibao_canvas">
				<!-- <image class="new_image" src="../../static/poster_bg.png"></image> -->
				<image class="new_thumb" :src="thumb" mode="aspectFill"></image>
				<view class="message">
					<view class="page_name">{{name}}</view>
					<view class="page_num">{{num}}</view>
					<view class="page_price">{{price}}</view>
					<view class="page_line"></view>
					<view class="person">
						<view class="code"></view>
						<view class="sub_preson">
							<view class="myname">{{myname}}</view>
							<view class="sub_myname">邀请您来万岳教育在线系统学习</view>
						</view>
					</view>
				</view>
				<view class="title">万岳教育在线系统</view>
			</canvas>
		</view>
	
		<view class="extension_poster-add" @click="addPoster">保存海报</view>
		<!-- <view class="base_image">
			<image class="base_image" src="../../static/wwwwwwww.png" mode="aspectFill"></image>
		</view> -->
		
		<!-- <image v-show="showbaseimage2 == true" class="base_image" :src="wechat_image" mode="aspectFill"></image> -->
	</view>
</template>

<script>
	
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				Base64: '',
				code: '',
				myname: '',
				thumb: '',
				price: '',
				codeimageurl: '',
				name: '',
				num: '',
				data64_image: '',
				showbaseimage: false,
				showbaseimage2: false,
				wechat_image: ''
			}
		},
		onReady() {


		},
		onLoad(option) {
			console.log(option);
			this.name = option.name;
			this.thumb = option.thumb;
			this.price = option.price;
			this.num = option.num;
			this.myname = getApp().globalData.userinfo.user_nickname;
			//	this.codeimageurl = getApp().globalData.site_h5url + '/appapi/share/index?code=' + this.code;
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			addtoalbum() {

			},
			addPoster() {
				var context = uni.createCanvasContext('haibao_canvas', this);
	          var that = this;
				context.draw(false,
				
					 uni.canvasToTempFilePath({
						x: 0,
						y: 0,
						width: 400,
						height: 600,
						destWidth: 400,
						destHeight: 600,
						canvasId: 'haibao_canvas',
						success: res => {
							// console.log(res.tempFilePath);
							// #ifdef H5

							this.showbaseimage = true;
							that.data64_image = res.tempFilePath;
							console.log('这是H5');
							// #endif


							// #ifdef MP-WEIXIN
							this.showbaseimage2 = true;
							this.wechat_image = res.tempFilePath;
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,

								success: (res) => {
									console.log(res);
									uni.showToast({
										title: '保存成功',
										icon: 'none'
									});
								},
								fail(res) {
									uni.showToast({
										title: '保存失败',
										icon: 'none'
									});
									console.log(res);
								},
								complete(res) {
									console.log(res);
								}
							});
							// #endif
						},
						fail: err => {
							console.log('失败');
							console.log(err);
						}
					}));
			}
		},
	}
</script>

<style>
	.base_image {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #007AFF;
	}

	.code {
		margin-left: 20rpx;
		margin-top: 40rpx;
		width: 140rpx;
		height: 140rpx;
		/* background-color: #007AFF; */
	}

	.sub_myname {
		margin-left: 30rpx;
		font-size: 20rpx;
		font-weight: bold;
	}

	.myname {
		margin-left: 30rpx;
		margin-top: 30rpx;
		font-weight: bold;
	}

	.sub_person {
		margin-left: 40rpx;
		margin-top: 20rpx;
		background-color: #07C160;
	}

	.person {
		display: flex;
		flex-direction: row;
	}

	.page_name {
		font-weight: bold;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.page_num {
		color: #8F8F94;
		font-size: smaller;
		margin-left: 20rpx;
		margin-top: 80rpx;
	}

	.page_price {
		position: absolute;
		right: 20rpx;
		color: #DC2929;
		margin-top: -40rpx;
		font-weight: bold;
	}

	.page_line {
		margin-top: 20rpx;
		height: 2rpx;
		background-color: #F5F5F5;
		color: #8F8F94;
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.baoguo {
		width: 100%;
		height: 100%;
		/* margin:0 auto; */
	}

	.new_page {
		position: relative;
		width: 400px;
		height: 560px;
		margin-left: calc(8%);
	}

	.new_image {
		position: absolute;
		/* left: calc(10%); */
		width: 80%;
		height: 1050rpx;
		margin-top: 40rpx;
		border-radius: 8rpx;
	}

	.new_thumb {
		position: absolute;
		width: 60%;
		margin-left: calc(10%);
		height: 450rpx;
		margin-top: 50rpx;
		border-radius: 8rpx;
	}

	.message {
		width: 60%;
		margin-left: calc(10%);
		margin-top: 460rpx;
		position: absolute;
		background-color: #FFFFFF;
		height: 400rpx;
		border-radius: 8rpx;

	}

	page {
		background-color: #F5F5F5;
	}

	.extension_poster-add {
		width: 80%;
		margin: 0 auto;
		text-align: center;
		margin-top: 20rpx;
		background: #38DAA6;
		color: #fff;
		height: 40px;
		border-radius: 50px;
		font-size: 16px;
		line-height: 40px;
	}

	.title {
		position: absolute;
		text-align: center;
		margin-top: 960rpx;
		color: #FFFFFF;
		font-size: small;
		font-weight: bold;
		width: 60%;
		margin-left: calc(10%);
	}
</style>
