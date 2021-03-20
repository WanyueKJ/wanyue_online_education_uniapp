<template>
	<view>
		<view v-if="isCar != 'isCar'" class="liveinfo-wrap">
			<view v-if="ismaterial == 1">
				<view v-if="hasdefaddress == true" @click="pushaddress">
					<view class="address2">
						<image src="../../static/buy_ads.png" class="add"></image>
						<view class="hasaddress" style="display: flex; flex-direction: column;">
							<view class="title_name">{{addressdic.name + ' ' +addressdic.mobile}}</view>
							<view class="des2">{{addressdic.province + ' '+ addressdic.city +' ' + addressdic.area + ' '+ addressdic.addr}}</view>
						</view>
						<image src="../../static/arrow2.png" class="add2"></image>
					</view>
					<view class="lineaddress"></view>
				</view>
				<view v-else @click="pushaddress">
					<view class="address2">
						<image src="../../static/buy_add_ads.png" class="add"></image>
						<view class="title">添加收货地址</view>
						<view class="des">(课程教辅材料将邮寄到此地址)</view>
						<image src="../../static/arrow2.png" class="add2"></image>
					</view>
					<view class="lineaddress"></view>
				</view>
			</view>
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
								<template v-if="item.lesson.length == 0">
									尚未添加内容
								</template>
								<template v-else>
									{{item.lesson}}
								</template>
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
				<view class="allmoney">{{'¥' + allmoney}}</view>
				<view class="buy" @click="fufei">立即付费</view>
			</view>
		</view>
		<view v-else class="liveinfo-wrap">
			<view v-if="ismaterial == 1">
				<view v-if="hasdefaddress == true" @click="pushaddress">
					<view class="address2">
						<image src="../../static/buy_ads.png" class="add"></image>
						<view class="hasaddress" style="display: flex; flex-direction: column;">
							<view class="title_name">{{addressdic.name + ' ' +addressdic.mobile}}</view>
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
						<view class="des">(课程教辅材料将邮寄到此地址)</view>
						<image src="../../static/arrow2.png" class="add2"></image>
					</view>
					<view class="lineaddress"></view>
				</view>
			</view>
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
								<template v-if="item.lesson.length == 0">
									尚未添加内容
								</template>
								<template v-else>
									{{item.lesson}}
								</template>
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
			<view v-if="showjifen == true" class="jifentop"></view>
			<view v-if="showjifen == true" class="jifen">
				<image class="integral" mode="aspectFit" src="../../static/img_integral.png"></image>
				<view class="jinfentitle">{{'可用积分抵用' + deduct_money + '元'}}</view>
				<image @click="jifensel_unsel" class="car_sele" :src="jifen_sel == true ? jifen_image_sel:jifen_image_unsel"></image>
			</view>
			<view class="line"></view>
			<view class="carView">
				<view class="allsi">应付：</view>
				<view class="allmoney">{{'¥' + allmoney}}</view>
				<view class="buy" @click="fufei">立即付费</view>
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
				<image :src="item.thumb" class="payicin" mode="aspectFit"></image>
				<view class="paysubtitle">{{item.name}}</view>
				<image v-show="payselected == index" class="showyes" src="../../static/payselect.png"></image>
				<view class="subpayline"></view>
			</view>
			<!-- #ifdef H5 -->
			<view class="paytitle2" @click="buy('h5',0)">立即支付</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="paytitle2" @click="buy('wx',3)">立即支付</view>
			<!-- #endif -->
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
				showjifen: false,
				payinfo: [],
				payselected: 0,
				deduct_integral: 0,
				deduct_money: 0,
				jifen_sel: true,
				jifen_image_unsel: "../../static/car_1.png",
				jifen_image_sel: "../../static/car_2.png",
				addressID: '0',
				method: 0
			}
		},
		onReady: function() {},
		onShow() {
			uni.getStorage({
				key: 'userinfo',
				success: function(res) {
					getApp().globalData.userinfo = res.data;
				},
			});		
			this.getaddress();
		},
		
		onLoad(option) {
			uni.getStorage({
				key: 'openid',
				success: function(res) {
					getApp().globalData.openid = res.data;
					console.log(res.data);
				}
			});

			this.isCar = option.isCar;
			if (this.isCar != 'isCar') {
				this.method = 0;
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
				this.method = 1;
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
			// console.log(json);
			let gData = getApp().globalData;
			uni.request({
				url: gData.site_url + 'Cart.getDeduct',
				method: 'POST',
				data: {
					'uid': gData.userinfo.id,
					'token': gData.userinfo.token,
					'goods': json
				},
				success: res => {
					// console.log(res);
					if (res.data.data.code == 0) {
						let deduct_integral = parseFloat(res.data.data.info[0].deduct_integral);
						this.deduct_money = res.data.data.info[0].deduct_money;
						if (deduct_integral > 0) {
							this.showjifen = true;
							this.allmoney -= this.deduct_money;
						}
					}
				}
			});
		},
		methods: {
			jifensel_unsel() {
				this.jifen_sel = !this.jifen_sel;
				if (this.jifen_sel == true) {
					this.allmoney -= this.deduct_money;
				} else {
					this.allmoney += this.deduct_money;
				}
			},
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
			fufei() {
				// #ifdef MP-WEIXIN
				this.buy('wx', 3);
				// #endif
				// #ifdef H5
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
							this.showpayview = true;
						}
					}
				});
				// #endif
			},
			buy(type, payid) {
				// #ifdef H5
				if (this.payinfo[this.payselected].id == 1) {
					payid = 1;
					uni.showToast({
						title: '这是支付宝支付',
						icon: 'none'
					});
					return;
				}
				if (this.payinfo[this.payselected].id == 4) {
					payid = 4;
					uni.showToast({
						title: '这是微信支付',
						icon:'none'
					});
					return;
				}
				// #endif
				var that = this;
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
						newtiem['type'] = 1;
						newtiem['typeid'] = item.id;
					} else {
						newtiem['type'] = 0;
						newtiem['typeid'] = item.id;
					}
					goodsArray.push(newtiem);
				}
				var json = JSON.stringify(goodsArray);
				let gData = getApp().globalData;
				uni.request({
					url: gData.site_url + 'Cart.Buy',
					method: 'POST',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'goods': json,
						'payid': payid,
						'addrid': this.addressID,
						'openid': getApp().globalData.openid,
						'method': this.method
					},
					success: res => {
						console.log(JSON.parse(JSON.stringify(res.data.data.info[0])));
						if (res.data.data.code == 0) {
							if (this.allmoney == 0) {
								uni.showToast({
									title: '支付成功',
									icon: 'none'
								});
								uni.navigateBack({
									delta: 1
								});
								return;
							}
							this.showpayview = false;
							var ali = res.data.data.info[0].ali;
							var wx = res.data.data.info[0].wx;
							var h5 = res.data.data.info[0].h5;
							var small = res.data.data.info[0].small;
							var orderid = res.data.data.info[0].orderid;
							var money = res.data.data.info[0].money;
							
							//console.log(res.data.data.info[0]);
							// #ifdef H5
							if (this.payselected == 1){
								//H5微信支付
								// uni.navigateTo({
								// 	url: './pay_h5?h5url=' + encodeURIComponent(JSON.stringify(h5.mweb_url)),
								// 	success: res => {},
								// 	fail: () => {},
								// 	complete: () => {}
								// });
								// location.href = 
							}else if (this.payselected == 2){
								//H5支付宝支付
							}else{
								
							}
							
							// #endif
							// #ifdef MP-WEIXIN
							uni.requestPayment({
								provider: 'wxpay',
								timeStamp: String(small.timeStamp),
								nonceStr: small.nonceStr,
								package: small.package,
								signType: 'MD5',
								paySign: small.sign,
								success: function(res) {
									uni.showToast({
										title: '支付成功',
										icon: 'none'
									});
									uni.navigateBack({
										delta: 1
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
							// #endif
						} else {
							console.log(res);
							uni.showToast({
								title: res.data.data.msg,
								icon: 'none'
							});
						}
					},
				});
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
										this.addressID = item.id;
										console.log(this.addressdic);
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
	@import url("/static/css/course_list.css");

	page {
		background-color: #F5F5F5;
	}

	.car_sele {
		position: absolute;
		margin-top: 20rpx;
		right: 20rpx;
		width: 40rpx;
		height: 40rpx;
	}

	.jinfentitle {
		width: 400rpx;
		height: 100rpx;
		color: #323232;
		margin-left: 20rpx;
		margin-top: 15rpx;
	}

	.jifentop {
		text-align: center;
		position: fixed;
		bottom: 190rpx;
		width: 100%;
		height: 10rpx;
		background-color: #F5F5F5;
	}

	.jifen {
		display: flex;
		flex-direction: row;
		position: fixed;
		bottom: 100rpx;
		width: 100%;
		height: 80rpx;
		background-color: #FFFFFF;
	}

	.integral {
		margin-top: 20rpx;
		margin-left: 40rpx;
		width: 40rpx;
		height: 40rpx;
	}

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
		width: 50rpx;
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
		background-color: #F5F5F5;

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
		background-color: #F5F5F5;
	}

	.payview {
		text-align: center;
		position: fixed;
		bottom: 0rpx;
		width: 100%;
		height: auto;
		background-color: #F0F0F0;
		border-radius: 30rpx;
		z-index: 1003;
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
		top: 0rpx;
		left: 120rpx;

	}

	.address2 {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding-left: 20rpx;
		padding-right: 20rpx;
		height: 100rpx;
		background-color: #FFFFFF;
		/* margin-top: 20px; */
	}

	.add {
		margin-left: 10px;
		width: 40rpx;
		height: 40rpx;
		margin-top: 30rpx;
	}

	.add2 {
		position: absolute;
		right: 40rpx;
		width: 30rpx;
		height: 30rpx;
		margin-top: 37rpx;
	}

	.title_name {
		margin-top: 10rpx;
		margin-left: 10rpx;
		color: #000000;
		font-size: 27rpx;
	}

	.title {
		margin-left: 10rpx;
		color: #000000;
		font-size: 30rpx;
		height: 100rpx;
		line-height: 100rpx;
		/* background-color: #07C160; */
	}

	.des {
		margin-left: 10rpx;
		font-size: 25rpx;
		color: #7A7E83;
		height: 100rpx;
		line-height: 100rpx;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.des2 {
		margin-left: 10rpx;
		font-size: 25rpx;
		color: #7A7E83;
		margin-top: 2rpx;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin-right: 100rpx;
	}

	.lineaddress {
		background-color: #F5F5F5;
		width: 100%;
		height: 20rpx;
		margin-top: 0rpx;
	}

	.liveinfo-wrap {
		margin-top: 2rpx;
		padding-top: 10rpx;
		min-height: 1500rpx;
		background-color: #FFFFFF;
	}


	.shopdetail {
		display: flex;
		flex-direction: row;
		margin-left: 10rpx;
	}

	.course-title-icon {
		position: absolute;
		left: 0rpx;
		top: 2rpx;
		width: 60rpx;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		border-radius: 8rpx 0 8rpx 0;
		background-color: rgba(0, 0, 0, 0.6);
		font-size: 18rpx;
		color: #DBDBDB;
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
		background-color: #F5F5F5;
		height: 1rpx;
		width: 100%;
		bottom: 92rpx;
		position: fixed;
		z-index: 1002;
	}
</style>
