<template>
	<view>
		
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="back" left-icon="back" :border="false" title="我的积分" onlive>
		</uni-nav-bar>
		<!-- #endif -->	
		
		<view class="page">
			<image class="bg" src="../../static/images/mingshimingke.png" mode="aspectFill"></image>
			<view class="top_message">
				<view>积分余额</view>
				<view>{{left_money}}</view>
			</view>
			<view class="mingxi">
				<view class="jifenmingxi">积分明细</view>
			</view>
			<view class="line"></view>

			<!-- <view class="meddim_message">
			<view class="sub_1">
				<view class="sub_title">输入要提取的积分数</view>
				<input @input="inputing" class="input" placeholder="0" />
			</view>
			<view class="line"></view>
			<view class="sub_1">
				<view class="sub_title">可到账金额</view>
				<view class="money">{{'¥' + '  '+ money}}</view>
			</view>

		</view>
		<view @click="account" class="bottom_message">
			<view class="sub_bottom">请选择提现账户</view>
			<image class="sub_image" src="../../static/arrow2.png"></image>
		</view>
		<view @click="submit" class="submit">立即提现</view> -->

		</view>

		<scroll-view class="list" :style="{height : scrollH + 'px'}" scroll-y="true">
			<view v-for="(item,index) in list" class="item1">
				<view class="sub_item">
					<view class="item_title">{{item.title}}</view>
					<template v-if="item.type == 1">
						<view class="integral1">{{'+' + item.integral}}</view>
					</template>
					<template v-else>
						<view class="integral2">{{'-' + item.integral}}</view>
					</template>
				</view>
				<view class="time">{{item.add_time}}</view>
				<view class="item_line"></view>
			</view>

		</scroll-view>
		<template v-if="kongkong == true">
		<view :class="{xiangziwrap : (kongkong == true)}">
			<image class="xiangzi" src="../../static/images/xiangzi.png" mode="aspectFill"></image>
			<text class="xiangzi_txt">暂无积分明细</text>
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
				money: 0,
				left_money: 0,
				count: 0,
				scrollH: 0,
				list: [],
				kongkong:false

			}
		},
		onLoad(option) {
			if(option.money != undefined) {
				this.left_money = option.money;
			}
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight;
				}
			});
			var that = this;
			setTimeout(() => {
				uni.request({
					url: app.globalData.site_url + 'Integral.getList',
					method: 'GET',
					data: {

						'uid': app.globalData.userinfo.id,
						'token': app.globalData.userinfo.token
					},
					success: res => {
						if (res.data.data.code == 700) {
							uni.navigateTo({
								url: '../login/login'
							})
							return;
						}
						that.list = res.data.data.info;
						if (that.list.length == 0) {
							that.kongkong = true;
						} else {
							that.kongkong = false;
						}
					}
				});
			}, 0);


		},
		methods: {
			
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			account() {

			},
			submit() {

			},
			inputing(event) {
				this.count = event.detail.value;
			}
		}
	}
</script>

<style>
	.item_line {
		margin-top: 10rpx;
		height: 2rpx;
		width: 100%;
		background-color: #F5F5F5;
	}

	.integral1 {
		position: absolute;
		right: 20rpx;
		color: #64D3AD;
	}

	.integral2 {
		position: absolute;
		right: 20rpx;
		color: #FF3939;
	}

	.time {
		color: #646464;
		font-size: smaller;
		margin-left: 20rpx;
	}

	.item_title {
		height: 60rpx;
		color: #646464;
		font-size: small;
		margin-left: 20rpx;
	}

	.sub_item {
		display: flex;
		flex-direction: row;
	}

	.item1 {
		height: 120rpx;

	}

	.line {
		margin-top: 310rpx;
		position: absolute;
		height: 2rpx;
		width: 94%;
		left: 3%;
		background-color: #F5F5F5;
	}

	.list {
		margin-top: 80rpx;
		background-color: #FFFFFF;
		/* position: absolute; */
		/* margin-top: 280rpx; */
	}

	.mingxi {
		position: absolute;
		margin-top: 240rpx;
		width: 100%;
		height: 80rpx;
		background-color: #FFFFFF;
	}

	.jifenmingxi {
		margin-top: 20rpx;
		margin-left: 20rpx;

	}
/deep/.uni-scroll-view ::-webkit-scrollbar {
		 /* 隐藏滚动条，但依旧具备可以滚动的功能 */
		 display: none;
		 width: 0;
		 height: 0;
		 color: transparent;
		 background: transparent;
		}
		/deep/::-webkit-scrollbar {
		 display: none;
		 width: 0;
		 height: 0;
		 color: transparent;
		 background: transparent;
		}
	.xiangziwrap {
		position: absolute;
		left: calc(50% - 80px);
		top: calc(50%);
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

	.submit {
		position: absolute;
		margin-top: 620rpx;
		background-color: #64D3AD;
		color: #FFFFFF;
		width: 70%;
		left: calc(15%);
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 30rpx;
	}

	.sub_image {
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		right: 10rpx;
		margin-top: 30rpx;
	}

	.sub_bottom {
		position: absolute;
		margin-left: 20rpx;
		height: 100rpx;
		color: #646464;
		line-height: 100rpx;
	}

	.bottom_message {
		position: absolute;
		height: 100rpx;
		margin-top: 450rpx;
		width: 90%;
		left: calc(5%);
		background-color: #FFFFFF;
		border-radius: 8rpx;
	}

	.money {
		height: 100%;
		margin-left: 40rpx;
		width: 50%;
		font-size: large;
		color: #FF3939;
		padding-top: 20rpx;
		font-weight: bold;
	}

	.input {
		/* position: absolute; */
		height: 100%;
		margin-left: 30rpx;
		width: 50%;
		font-size: large;
		color: #646464;

	}



	.sub_title {
		margin-left: 20rpx;
		height: 100rpx;
		padding-top: 30rpx;
		color: #646464;
	}

	.sub_1 {
		height: 100rpx;
		display: flex;
		flex-direction: row;

	}

	.meddim_message {
		position: absolute;
		margin-top: 240rpx;
		height: 200rpx;
		width: 90%;
		left: calc(5%);
		background-color: #FFFFFF;
		border-radius: 8rpx;
	}

	.top_message {
		position: absolute;
		color: #FFFFFF;
		width: 90%;
		left: calc(5%);
		margin-top: 60rpx;
		text-align: center;
		font-size: small;
	}

	.page {
		position: relative;
		width: 100%;
		height: 240rpx;
		background-color: #EBEEF5;
	}

	.bg {
		margin-top: 20rpx;
		position: absolute;
		width: 90%;
		left: calc(5%);
		height: 200rpx;
		border-radius: 8rpx;
	}
</style>
