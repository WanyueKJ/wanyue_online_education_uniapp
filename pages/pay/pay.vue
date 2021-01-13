<template>
	<view>
		<view v-if="isCar != 'isCar'" class="liveinfo-wrap">
			<view v-if="ismaterial == 1">
				<view v-if="hasdefaddress == true" @click="pushaddress">
					<view class="address2">
						<image src="../../static/buy_ads.png" class="add"></image>
						<view class="hasaddress" style="display: flex; flex-direction: column;">
							<view class="title">{{addressdic.name + ' ' +addressdic.mobile}}</view>
							<view class="des2">{{addressdic.addr}}</view>
						</view>
						<image src="../../static/arrow2.png" class="add2"></image>
					</view>
					<view class="lineaddress"></view>
				</view>
				<view v-else @click="pushaddress">
					<view class="address2">
						<image src="../../static/buy_add_ads.png" class="add"></image>
						<view class="title">添加收货地址</view>
						<view class="des">（课程教辅材料将邮寄到此地址）</view>
						<image src="../../static/arrow2.png" class="add2"></image>
					</view>
					<view class="lineaddress"></view>
				</view>
			</view>
			<!-- 直播课列表 -->
			<view class="live-list" v-for="(item,index) in live_info">
				<view class="shopdetail">
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
					<template v-if="item.sort != undefined">
						<view class="live-list-info">
							<view class="live-c-title">{{item.name}}</view>
							<view class="live-status living-status" v-if="item.islive == 1">
								{{item.lesson}}
							</view>
							<view class="live-status" v-else>
								{{item.lesson}}
							</view>
							<view class="live-teacher-price">
								<!-- <view class="live-teacher-price" v-for="(item,index) in item.userinfo" :key="index"> -->
								<image class="live-teacher-avatar" :src="item.userinfo.avatar" mode="aspectFill"></image>
								<text class="teacher-name">{{item.userinfo.user_nickname}}</text>
								<!-- </view> -->
								<view class="price-wrap">
									<text v-if="item.paytype == 0" class="free">免费</text>
									<text v-if="item.paytype == 2" class="pass">密码</text>
									<text v-if="item.paytype ==1" class="numPrice">
										{{'¥' + item.payval}}
									</text>
								</view>
							</view>
						</view>
					</template>
					<template v-else>
						<view class="live-list-info">
							<view class="live-c-title">{{item.name}}</view>
							<view class="live-status">
								{{item.nums + '课程'}}
							</view>
							<view class="live-teacher-price">
								<view class="live-teacher-price" v-for="(item,index) in item.courses" :key="index">
									<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
									<!-- <text class="teacher-name">{{item.user_nickname}}</text> -->
								</view>
								<view class="price-wrap">
									<text class="numPrice">
										{{'¥' + item.price}}
									</text>
								</view>
							</view>
						</view>
					</template>
				</view>
			</view>
			<view class="line"></view>
			<view class="carView">
				<view class="allsi">应付：</view>
				<view class="allmoney">{{allmoney}}</view>
				<view class="buy" @click="buynow">立即付费</view>
			</view>
		</view>
		<view v-else class="liveinfo-wrap">
			<view v-if="ismaterial == 1">
				<view v-if="hasdefaddress == true" @click="pushaddress">
					<view class="address2">
						<image src="../../static/buy_ads.png" class="add"></image>
						<view class="hasaddress" style="display: flex; flex-direction: column;">
							<view class="title">{{addressdic.name + ' ' +addressdic.mobile}}</view>
							<view class="des2">{{addressdic.addr}}</view>
						</view>
						<image src="../../static/arrow2.png" class="add2"></image>
					</view>
					<view class="lineaddress"></view>
				</view>
				<view v-else @click="pushaddress">
					<view class="address2">
						<image src="../../static/buy_add_ads.png" class="add"></image>
						<view class="title">添加收货地址</view>
						<view class="des">（课程教辅材料将邮寄到此地址）</view>
						<image src="../../static/arrow2.png" class="add2"></image>
					</view>
					<view class="lineaddress"></view>
				</view>
			</view>

			<!-- 直播课列表 -->
			<view class="live-list" v-for="(item, index) in carinfo" :key="index">
				<view class="shopdetail">
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
					<template v-if="item.sort != undefined">
						<view class="live-list-info">
							<view class="live-c-title">{{item.name}}</view>
							<view class="live-status living-status" v-if="item.islive == 1">
								{{item.lesson}}
							</view>
							<view class="live-status" v-else>
								{{item.lesson}}
							</view>
							<view class="live-teacher-price">
								<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
								<text class="teacher-name">{{item.user_nickname}}</text>

								<view class="price-wrap">
									<text v-if="item.paytype == 0" class="free">免费</text>
									<text v-if="item.paytype == 2" class="pass">密码</text>
									<text v-if="item.paytype ==1" class="numPrice">
										{{'¥' + item.payval}}
									</text>
								</view>
							</view>
						</view>
					</template>
					<template v-else>
						<view class="live-list-info">
							<view class="live-c-title">{{item.name}}</view>
							<view class="live-status">
								{{item.nums + '课程'}}
							</view>

							<view class="live-teacher-price">
								<view class="live-teacher-price" v-for="(item,index) in item.teacher" :key="index">
									<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
								</view>
								<view class="price-wrap">
									<text class="numPrice">
										{{'¥' + item.price}}
									</text>
								</view>
							</view>
						</view>

					</template>

				</view>
			</view>
			<view class="line"></view>
			<view class="carView">
				<view class="allsi">应付：</view>
				<view class="allmoney">{{allmoney}}</view>
				<view class="buy" @click="buy">立即付费</view>
			</view>
		</view>
		<view v-if="showpayview == true" class="payview">
			<view class="cancle1">
				<view class="paytitle">支付方式</view>
				<view class="cancle" @click="cancle">关闭</view>
			</view>

			<view class="payline"></view>
			<view class="space"></view>
			<view v-for="(item,index) in payinfo" class="payinfo" @click="selectedpayway(index)">
				<image :src="item.thumb" class="payicin"></image>
				<view class="paysubtitle">{{item.name}}</view>
				<image v-show="payselected == index" class="showyes" src="../../static/payselect.png"></image>
				<view class="subpayline"></view>
			</view>
			<view class="paytitle2" @click="buy">立即支付</view>

		</view>
	</view>
</template>

<script>
	const app = getApp();

	export default {
		data() {
			return {
				live_info: {},
				checkstatus: {},
				allmoney: 0,
				ismaterial: 0,
				hasdefaddress: false,
				isCar: '0',
				carinfo: [],
				addressdic: {},
				showpayview: false,
				payinfo: [],
				payselected: 0
			}
		},
		onReady: function() {


		},
		onShow() {
			this.getaddress();
		},
		onLoad(option) {
			console.log(option);
			this.isCar = option.isCar;

			if (this.isCar != 'isCar') {
				this.live_info = JSON.parse(decodeURIComponent(option.info));

				if (this.live_info[0].sort == undefined) {
					this.allmoney = this.live_info[0].price;
				} else {
					this.allmoney = this.live_info[0].payval;
				}
				for (let i = 0; i < this.live_info.length; i++) {
					var item = this.live_info[i];
					if (item.ismaterial == 1) {
						this.ismaterial = 1;
					}
				}
			} else {
				this.carinfo = JSON.parse(decodeURIComponent(option.info));
				this.allmoney = option.money;
				for (let i = 0; i < this.carinfo.length; i++) {
					var item = this.carinfo[i];
					if (item.ismaterial == 1) {
						this.ismaterial = 1;
					}

				}
			}
			this.getaddress();
		},
		methods: {
			pushaddress() {
				uni.navigateTo({
					url: '../address/address',
				});
			},
			cancle() {
				this.showpayview = false;

			},
			selectedpayway(index) {
				this.payselected = index;
				
			},
			buynow() {

				this.showpayview = true;
				let gData = getApp().globalData;
				uni.request({
					url: gData.site_url + 'Cart.GetPayList',
					method: 'POST',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
					},
					success: res => {
						console.log(res);
						if (res.data.data.code == 0) {
							this.payinfo = res.data.data.info;
						}
					}
				});
			},
			buy() {
				var payarray = [];
				var goodsArray = [];
				if (this.isCar != 'isCar') {
					payarray = this.live_info;
				} else {
					payarray = this.carinfo;
				}

				for (let i = 0; i < payarray.length; i++) {
					var item = payarray[i];
					var newtiem = {};
					if (item.sort == undefined) {
						newtiem['type'] = "1";
						newtiem['typeid'] = item.id;
					} else {
						newtiem['type'] = "0";
						newtiem['typeid'] = item.id;
					}

					goodsArray.push(newtiem);
				}
				var json = JSON.stringify(goodsArray);

				if (this.payselected == 0) {


				} else {



					let gData = getApp().globalData;
					uni.request({
						url: gData.site_url + 'Cart.Buy',
						method: 'POST',
						data: {
							'uid': gData.userinfo.id,
							'token': gData.userinfo.token,
							'goods': json,
							'payid': 2,
							'addrid': '',
							'method': this.isCar
						},
						success: res => {
							console.log(res);
							if (res.data.data.code == 0) {

	
					
				
					
					
					
								var wx = res.data.data.info[0].wx;
								uni.requestPayment({
									provider: 'wxpay',
									prepayId: wx.prepayid,
									timeStamp: String(Date.now()),
									nonceStr: wx.noncestr,
									package: wx.package,
									signType: 'MD5',
									partnerid: "1591448701",
									paySign: wx.sign,
									success: function(res) {
										uni.showToast({
											title: '支付成功',
											icon: 'none'
										});

										console.log('success:' + JSON.stringify(res));
									},
									fail: function(err) {
										uni.showToast({
											title: '支付失败',
											icon: 'none'
										});
										console.log('fail:' + JSON.stringify(err));
									}
								});
							} else {
								uni.showToast({
									title: res.data.data.msg,
									icon: 'none'
								});
							}

						},
					});
				}
			},
			getaddress() {
				if (this.ismaterial == 1) {
					console.log('GetList');
					let gData = app.globalData;
					uni.request({
						url: gData.site_url + 'Addr.GetList',
						method: 'GET',
						data: {
							'uid': gData.userinfo.id,
							'token': gData.userinfo.token,
						},
						success: res => {
							var addresslist = res.data.data.info;

							console.log(addresslist);
							if (addresslist.length > 0) {

								this.hasdefaddress = true;
								for (let i = 0; i < addresslist.length; i++) {
									var item = addresslist[i];
									if (item.isdef == 1) {
										this.addressdic = item;

									}
								}
							} else {
								this.hasdefaddress = false;
							}

						},
					});
				}
			}
		}
	}
</script>

<style>
	.cancle1 {
		display: flex;
		flex-direction: row;
	}

	.cancle {
		position: absolute;
		right: 30rpx;
		color: #6D6D72;
		margin-top: 15rpx;
	}

	.paytitle {
		text-align: center;
		width: 100%;
		height: 40rpx;
		margin-top: 20rpx;
	}

	.showyes {
		position: absolute;
		right: 40rpx;
		width: 40rpx;
		height: 40rpx;
		margin-top: 30rpx;
	}

	.payinfo {
		display: flex;
		flex-direction: column;
		height: 100rpx;
		background-color: #FFFFFF;

	}

	.paytitle2 {
		color: #1FDCA9;
		padding-top: 40rpx;
		height: 100rpx;
		background-color: #FFFFFF;
	}

	.subpayline {
		position: absolute;
		width: 100%;
		height: 2rpx;
		margin-top: 100rpx;
		background-color: #CCCCCC;

	}

	.space {
		width: 100%;
		/* height: 10rpx; */
	}

	.paysubtitle {
		text-align: left;
		margin-left: 100rpx;
		width: 150rpx;
		margin-top: 30rpx;
	}

	.payicin {
		position: absolute;
		width: 50rpx;
		height: 50rpx;
		margin-top: 30rpx;
		margin-left: 40rpx;
	}



	.payline {
		width: 100%;
		height: 1rpx;
		margin-top: 20rpx;
		background-color: #CCCCCC;
	}

	.payview {
		text-align: center;
		position: absolute;
		bottom: 0rpx;
		width: 100%;
		height: 400rpx;
		background-color: #F0F0F0;
		border-radius: 30rpx;

	}

	.address {
		width: 100%;
		height: 140rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hasaddress {
		position: absolute;
		top: 40rpx;
		left: 120rpx;

	}

	.address2 {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding-left: 20rpx;
		padding-right: 20rpx;
		height: 100rpx;
		margin-top: 20px;

	}

	.add {
		margin-left: 10px;
		width: 40rpx;
		height: 40rpx;
		margin-top: 5rpx;
	}

	.add2 {
		position: absolute;
		right: 40rpx;
		width: 30rpx;
		height: 30rpx;

	}

	.title {
		margin-left: 10rpx;
		color: #000000;
		font-size: medium;
	}

	.des {
		margin-left: 10rpx;
		font-size: small;
		color: #7A7E83;
		margin-top: 2rpx;
	}

	.des2 {
		margin-left: 20rpx;
		font-size: small;
		color: #7A7E83;
		margin-top: 2rpx;
	}

	.lineaddress {
		background-color: #E7EBED;
		width: 100%;
		height: 30rpx;
		margin-top: 0rpx;
	}

	/* 大班课/内容列表公共样式 */
	/* @import url("/static/css/course_list.css"); */

	/* 大班课单独样式 */
	.liveinfo-wrap {
		margin-top: 20rpx;
		padding-top: 10rpx;
		min-height: 1500rpx;
		background-color: #FFFFFF;
	}

	.live-list {
		width: 100%;
		height: 190rpx;
		margin-top: 30rpx;
		/* 		margin: 30rpx auto;
 */
		/* padding-top: 20rpx; */
		/* box-shadow: 0rpx 0rpx 4rpx 2rpx rgba(0, 0, 0, 0.1); */
		/* border-radius: 8rpx; */
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
	}

	.shopdetail {
		display: flex;
		flex-direction: row;
		margin-left: 10rpx;
	}

	.live-c-title {
		line-height: 35rpx;
		font-weight: bold;
		/* height: 80rpx; */
	}

	.live-list-img-wrap {
		position: relative;
		width: 180rpx;
		height: 160rpx;
		float: left;
		margin-right: 6rpx;
	}

	.live-list-img {
		width: 100%;
		height: 100%;
		border-radius: 8rpx;
	}

	.course-title-icon {
		position: absolute;
		left: 0rpx;
		top: 2rpx;
		width: 80rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		border-radius: 16rpx 0 16rpx 0;
		background-color: rgba(0, 0, 0, 0.6);
		font-size: small;
		color: #DBDBDB;
	}


	.live-list-info {
		float: left;
		width: 65%;
		height: 140rpx;
		/* margin-left: 220rpx; */
	}

	.live-teacher-avatar {
		width: 35rpx;
		height: 35rpx;
		border-radius: 50%;

	}

	.live-status {
		font-size: 20rpx;
		padding-top: 10rpx;
		color: #969696;
	}

	.living-status {
		padding-top: 10rpx;
		color: #64D3AD;
	}

	/* 价格 */
	.live-teacher-price {
		display: flex;

	}

	.price-wrap {
		display: flex;
		color: #64D3AD;
		position: absolute;
		right: 0px;
		padding-right: 50rpx;
	}

	.free {
		color: #64D3AD;
	}

	.numPrice {
		color: #FF1B20;

	}

	.pass {
		color: #4385FF;
	}

	.teacher-name {

		margin-left: 15rpx;
		font-size: 20rpx;
		color: #323232;
		width: auto;
	}

	.carView {
		display: flex;
		flex-direction: row;
		bottom: 0upx;
		background-color: #FFFFFF;
		height: 90upx;
		position: fixed;
		width: 100%;
	}

	.alltitle {
		color: #DDDDDD;
		margin-left: 30rpx;
		margin-top: 10rpx;
		font-size: medium;
	}

	.allsi {
		margin-left: 70rpx;
		margin-top: 10rpx;
		font-size: medium;
		color: #000000;
	}

	.allmoney {
		margin-left: 10rpx;
		margin-top: 10rpx;
		font-size: medium;
		color: #FF1B20;
	}

	.checkbottom {
		width: 40rpx;
		height: 40rpx;
		margin-top: 20rpx;
		margin-left: 10rpx;
	}

	.buy {
		padding-top: 20rpx;
		height: 80rpx;
		text-align: center;
		font-size: larger;
		width: 180rpx;
		color: #FFFFFF;
		background-color: #FF623E;
		position: absolute;
		right: 0;
	}

	.line {
		background-color: #F0F0F0;
		height: 1rpx;
		width: 100%;
		bottom: 91rpx;
		position: fixed;
	}
</style>
