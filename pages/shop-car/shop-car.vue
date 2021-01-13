<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<uni-nav-bar @clickLeft="backCourseList" left-icon="back" :border="false" title="购物车" statusBar>
			<view slot="right" @click="edit" class="edit">
				{{editname}}
			</view>
		</uni-nav-bar>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<uni-nav-bar @clickLeft="backCourseList" left-icon="back" :border="false" title="购物车">
			<view slot="right" @click="edit" class="edit">
				{{editname}}
			</view>
		</uni-nav-bar>
		<!-- #endif -->

		<view class="liveinfo-wrap">
			<!-- 直播课列表 -->
			<view class="live-list" v-for="(item, index) in live_info" :key="index">

				<template v-if="isedit == 0">
					<template v-if="item.isselect == true">
						<view class="check">
							<image class="checkimage" src="../../static/car_yes.png" @click="selectshop(item, index)" mode="aspectFill"></image>
						</view>
					</template>
					<template v-else>
						<view class="check">
							<image class="checkimage" src="../../static/car_no.png" @click="selectshop(item, index)" mode="aspectFill"></image>
						</view>
					</template>
				</template>
				<template v-else>
					<template v-if="item.isdel == true">
						<view class="check">
							<image class="checkimage" src="../../static/car_yes.png" @click="selectshop(item, index)" mode="aspectFill"></image>
						</view>
					</template>
					<template v-else>
						<view class="check">
							<image class="checkimage" src="../../static/car_no.png" @click="selectshop(item, index)" mode="aspectFill"></image>
						</view>
					</template>
				</template>
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
									<text class="teacher-name">{{item.user_nickname}}</text>
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
				<template v-if="isedit == 0">
					<view class="checkbottom">
						<template v-if="selectedallstatus == true">
							<image class="checkimage" src="../../static/car_yes.png" @click="selectallshop(selectedallstatus)" mode="aspectFill"></image>
						</template>
						<template v-else>
							<image class="checkimage" src="../../static/car_no.png" @click="selectallshop(selectedallstatus)" mode="aspectFill"></image>
						</template>
					</view>
				</template>
				<template v-else>
					<view class="checkbottom">
						<template v-if="selectedalleditstatus == true">
							<image class="checkimage" src="../../static/car_yes.png" @click="selectallshop(selectedalleditstatus)" mode="aspectFill"></image>
						</template>
						<template v-else>
							<image class="checkimage" src="../../static/car_no.png" @click="selectallshop(selectedalleditstatus)" mode="aspectFill"></image>
						</template>
					</view>
				</template>
				<view class="alltitle">全选</view>
				<template v-if="isshowmoney == true">
					<view class="allsi">总计：</view>
					<view class="allmoney">{{allmoney}}</view>
				</template>
				<view class="buy" :style="'background-color:'+finishcolor" @click="buy">{{finish}}</view>
			</view>
		</view>
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
				live_info: {},
				checkstatus: {},
				allmoney: 0,
				selectedallstatus: false,
				selectedalleditstatus: false,
				editname: '编辑',
				isedit: 0,
				finish: '下单',
				isshowmoney: true,
				finishcolor: '#FF623E',
				deleteAllID: '',
				finishArray: []
			}
		},
		onLoad() {
			this.getLiveCourseList();

		},
		methods: {
			edit() {
				if (this.isedit == 1) {
					this.isshowmoney = true;
					this.isedit = 0;
					this.editname = '编辑';
					this.finish = '下单';
					this.getLiveCourseList();
				} else {
					this.selectedalleditstatus = false;
					this.isshowmoney = false;
					this.isedit = 1;
					this.editname = '取消';
					this.finish = '删除';
					this.finishcolor = '#DEE2E6';

				}

			},
			backCourseList() {
				uni.navigateBack({
					delta: 1
				});
			},
			buy() {
				//删除
				if (this.isedit == 1) {
					if (this.deleteAllID.length == 0) {
						return;
					}
					let gData = app.globalData;
					uni.request({
						url: gData.site_url + 'Cart.Del',
						method: 'GET',
						data: {
							'uid': gData.userinfo.id,
							'token': gData.userinfo.token,
							'cartid': this.deleteAllID,
						},
						success: res => {
							console.log(res);
							uni.showToast({
								title: res.data.data.msg
							});
							this.getLiveCourseList();
						},
					});

				} else {
					if (this.finishArray.length == 0) {
						return;
					}
					uni.navigateTo({
						url: '../pay/pay?info=' + encodeURIComponent(JSON.stringify(this.finishArray)) + '&money=' + this.allmoney +
							'&isCar=' + 'isCar',
					});
				}
			},
			selectshop(item, index) {
				//删除
				var newitem = item;
				
				if (this.isedit == 1) {
					if (item.isdel == false) {
						this.finishcolor = '#FF623E';
						newitem.isdel = true;
						if (this.deleteAllID.length == 0) {
							this.deleteAllID = newitem.cartid;
						} else {
							this.deleteAllID += ',' + newitem.cartid;
						}
						console.log('增加'+this.deleteAllID)
					} else {
						newitem.isdel = false;
						if(index == 0){
							if (this.deleteAllID.indexOf(',') != -1) {
								var reg = new RegExp(newitem.cartid + ',');
								this.deleteAllID = this.deleteAllID.replace(reg,"");
								}else{
							var reg = new RegExp(newitem.cartid);
							this.deleteAllID = this.deleteAllID.replace(reg,"");
							}
						}else{
						if (this.deleteAllID.indexOf(',') != -1) {
							var reg = new RegExp(',' + newitem.cartid);
							this.deleteAllID = this.deleteAllID.replace(reg,"");
						} else {
							var reg = new RegExp(newitem.cartid);
							this.deleteAllID = this.deleteAllID.replace(reg,"");
						}
						}
						if(this.deleteAllID.length == 0){
							this.finishcolor = '#DEE2E6';
						}
						console.log('减少'+this.deleteAllID)
					}
					this.live_info[index] = newitem;
					this.$set( this.live_info , index , newitem);

				} else {
					var s;
					if (item.isselect == false) {
						s = 1;
					} else {
						s = 0;
					}
					let gData = app.globalData;
					uni.request({
						url: gData.site_url + 'Cart.Update',
						method: 'GET',
						data: {
							'uid': gData.userinfo.id,
							'token': gData.userinfo.token,
							'cartid': item.cartid,
							'isselect': s
						},
						success: res => {
							// console.log(res);
							this.getLiveCourseList();
						},
					});
				}
				// Vue.set(this.live_info, index, this.live_info[index]);
			},
			selectallshop(status) {
				//删除
				if (this.isedit == 1) {
					this.deleteAllID = '';
					if (this.selectedalleditstatus == true) {
						this.selectedalleditstatus = false;
						this.finishcolor = '#DEE2E6';
						for (let i = 0; i < this.live_info.length; i++) {
							var item = this.live_info[i];
							item.isdel = false;
							this.live_info[i] = item;
						}
					} else {
						this.selectedalleditstatus = true;
						this.finishcolor = '#FF623E';
						for (let i = 0; i < this.live_info.length; i++) {
							var item = this.live_info[i];
							item.isdel = true;
							this.live_info[i] = item;
							if (i == 0) {
								this.deleteAllID = item.cartid;
							} else {
								this.deleteAllID += "," + item.cartid;
							}
						}
					}


				} else {
					if (this.selectedallstatus == true) {
						var allID = '';
						for (let i = 0; i < this.live_info.length; i++) {
							var item = this.live_info[i];
							if (i == 0) {
								allID = item.cartid;
							} else {
								allID += "," + item.cartid;
							}
						}
						console.log('取消全选');
						console.log(allID);
						let gData = app.globalData;
						uni.request({
							url: gData.site_url + 'Cart.Update',
							method: 'GET',
							data: {
								'uid': gData.userinfo.id,
								'token': gData.userinfo.token,
								'cartid': allID,
								'isselect': 0
							},
							success: res => {
								console.log(res);
								this.getLiveCourseList();

							},
						});
					} else {

						var allID = '';
						for (let i = 0; i < this.live_info.length; i++) {
							var item = this.live_info[i];
							if (i == 0) {
								allID = item.cartid;
							} else {
								allID += "," + item.cartid;
							}
						}
						console.log('全选');
						console.log(allID);
						let gData = app.globalData;
						uni.request({
							url: gData.site_url + 'Cart.Update',
							method: 'GET',
							data: {
								'uid': gData.userinfo.id,
								'token': gData.userinfo.token,
								'cartid': allID,
								'isselect': 1
							},
							success: res => {
								console.log(res);
								this.getLiveCourseList();
							},
						});
					}
				}
			},

			getLiveCourseList() {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Cart.GetList',
					method: 'GET',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
					},
					success: res => {
						this.finishArray = [];
						let a = 0;
						this.live_info = res.data.data.info[0].list;
						let money = 0.0;
						this.allmoney = 0.0;
						for (let i = 0; i < this.live_info.length; i++) {
							var item = this.live_info[i];
							if (item.isselect == 1) {
								a += 1;
								if (item.sort == undefined) {
									money += parseFloat(item.price);
								} else {
									money += parseFloat(item.payval);
								}
								this.finishArray.push(item);
							}
							item['isdel'] = false;
							this.live_info[i] = item;
						}
						
						if (a == 0) {
							this.finishcolor = '#DEE2E6';
						} else {
							this.finishcolor = '#FF623E';
						}
						if (a == this.live_info.length) {
							this.selectedallstatus = true;
						} else {
							this.selectedallstatus = false;
						}

						money = money.toFixed(2);
						this.allmoney = money;



					},
				});
			},
		}
	}
</script>

<style>
	/* 大班课/内容列表公共样式 */
	/* @import url("/static/css/course_list.css"); */

	/* 大班课单独样式 */
	.edit {
		color: #64D3AD;
	}

	.liveinfo-wrap {
		padding-top: 2rpx;
		min-height: 1500rpx;
		background-color: #FFFFFF;
	}

	.live-list {
		width: 100%;
		height: 190rpx;
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

	.check {
		width: 60rpx;
		height: 60rpx;
		/* color: #ED1C24; */
		margin-top: 60rpx;
		margin-left: 10rpx;



	}

	.checkimage {
		width: 40rpx;
		height: 40rpx;
		margin-left: 10rpx;
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
		margin-top: 20rpx;
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
