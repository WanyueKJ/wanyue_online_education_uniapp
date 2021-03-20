<template>
	<view>
		
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="back" left-icon="back" :border="false" title="购物车" statusBar>
		
		</uni-nav-bar>
		<!-- #endif -->
		
	<view class="top"  v-if="kongkong == false">
		<view class="top_shuliang">{{'课程数量' + ' ' + live_info.length}}</view>
		<view class="top_edit"  @click="edit">
			{{editname}}
		</view>
	</view>
	<view class="top-line"  v-if="kongkong == false">
	</view>
		<scroll-view class="liveinfo-wrap" scroll-y :style="'height:' + scrollH+'rpx;'">
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
								<template v-if="item.lesson.length == 0">
									尚未添加内容
								</template>
								<template v-else>
									{{item.lesson}}
								</template>
							</view>
							<view class="live-teacher-price">
								<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
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
									<view class="live-teacher-avatar-taocan">
										<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
									</view>
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
		</scroll-view>
		<view v-if="kongkong == false" class="line"></view>
		<view v-if="kongkong == false" class="carView">
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
				<view class="allmoney">{{'¥' +' ' + allmoney}}</view>
			</template>
			<view class="buy" :style="'background-color:'+finishcolor" @click="buy">{{finish}}</view>
		</view>
		<template v-if="kongkong == true">
			<view :class="{xiangziwrap : (kongkong == true)}">
				<image class="xiangzi" src="../../static/images/xiangzi.png" mode="aspectFill"></image>
				<text class="xiangzi_txt">购物车是空的</text>
			</view>
		</template>
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
				scrollH:0,
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
				finishArray: [],
				kongkong: true,
				isonshow:false
			}
		},
		onShow() {
			uni.getStorage({
				key: 'userinfo',
				success: function(res) {
					getApp().globalData.userinfo = res.data;
				},
			});		
			setTimeout(() => {
				this.getLiveCourseList();
			}, 500);
		},
		onReady() {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.scrollH = res.windowHeight * 750 / res.windowWidth - 180;
					// #ifdef MP-WEIXIN
					that.scrollH = res.windowHeight * 750 / res.windowWidth - 180;
					// #endif
				}
			});
		},
		onLoad() {
			this.isonshow = false;
			this.getLiveCourseList();
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
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
						// console.log('增加' + this.deleteAllID)
					} else {
						newitem.isdel = false;
						if (index == 0) {
							if (this.deleteAllID.indexOf(',') != -1) {
								var reg = new RegExp(newitem.cartid + ',');
								this.deleteAllID = this.deleteAllID.replace(reg, "");
							} else {
								var reg = new RegExp(newitem.cartid);
								this.deleteAllID = this.deleteAllID.replace(reg, "");
							}
						} else {
							if (this.deleteAllID.indexOf(',') != -1) {
								var reg = new RegExp(',' + newitem.cartid);
								this.deleteAllID = this.deleteAllID.replace(reg, "");
							} else {
								var reg = new RegExp(newitem.cartid);
								this.deleteAllID = this.deleteAllID.replace(reg, "");
							}
						}
						if (this.deleteAllID.length == 0) {
							this.finishcolor = '#DEE2E6';
						}
						// console.log('减少' + this.deleteAllID)
					}
					this.live_info[index] = newitem;
					this.$set(this.live_info, index, newitem);

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
						// console.log('取消全选');
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
						console.log(res);
						// if (res.data.data.code == 700) {
						// 	uni.navigateTo({
						// 		url: '../login/login',
						// 		success: res => {},
						// 		fail: () => {},
						// 		complete: () => {}
						// 	});
						// 	return;
						// }
						if (res.data.data.code == 0) {
							this.finishArray = [];
							let a = 0;
							this.live_info = res.data.data.info[0].list;
							this.kongkong = false;
							if (this.live_info.length == 0) {
								this.kongkong = true;
							}
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
						} else {
							this.kongkong = true;
						}


					},
				});
			},
		}
	}
</script>

<style>
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
	.top-line{
		width: 100%;
		background-color: #F5F5F5;
		height: 10rpx;
	}
	
	.top{
		width: 100%;
		background-color: #FFFFFF;
		height: 80rpx;
		display: flex;
		flex-direction: row;
	}
	.top_shuliang{
		margin-left: 40rpx;
		height: 80rpx;
		line-height: 80rpx;
		color: #323232;
	}
	.top_edit{
		color: #323232;
		position: absolute;
		right: 40rpx;
		height: 80rpx;
		line-height: 80rpx;
	}
	page {
		background-color: #FFFFFF;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.edit {
		color: #64D3AD;
	}

	.liveinfo-wrap {
		margin-top: 2rpx;
		padding-top: 2rpx;
		background-color: #FFFFFF;
	}

	.live-list {
		margin-top: 10rpx;
		width: 100%;
		height: 190rpx;
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
		font-weight: bold;
		overflow: hidden;
		height: 70rpx;
		line-height: 1.2em;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.live-list-img-wrap {
		position: relative;
		width: 200rpx;
		height: 160rpx;
		float: left;
		margin-right: 6rpx;
	}

	.live-list-img {
		width: 200rpx;
		height: 160rpx;
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
		width: 60rpx;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		border-radius: 8rpx 0 8rpx 0;
		background-color: rgba(0, 0, 0, 0.6);
		font-size: 18rpx;
		color: #DBDBDB;
	}


	.live-list-info {
		float: left;
		margin-left: 20rpx;
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
		padding-top: 5rpx;
		color: #969696;
		height: 40rpx;
	}

	.living-status {
		padding-top: 10rpx;
		color: #64D3AD;
	}

	/* 价格 */
	.live-teacher-price {
		display: flex;
		/* height: 80rpx; */
		margin-top: 5rpx;
	}

	.price-wrap {
		display: flex;
		color: #64D3AD;
		position: absolute;
		right: 0px;
		padding-right: 50rpx;
	}
.live-teacher-avatar-taocan{
	width: 40rpx;
	height: 40rpx;
	border-radius: 50%;
	margin-top: 0rpx;
	padding: 5rpx;
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
		bottom: 0rpx;
		background-color: #FFFFFF;
		height: 90rpx;
		position: fixed;
		width: 100%;
	}

	.alltitle {
		color: #DDDDDD;
		margin-left: 30rpx;
		font-size: medium;
		height: 90rpx;
		line-height: 90rpx;
	}

	.allsi {
		margin-left: 70rpx;
		font-size: medium;
		color: #000000;
		height: 90rpx;
		line-height: 90rpx;
	}

	.allmoney {
		margin-left: 10rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: medium;
		color: #FF1B20;
	}

	.checkbottom {
		width: 40rpx;
		height: 40rpx;
		margin-top: 25rpx;
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
		background-color: #F5F5F5;
		height: 1rpx;
		width: 100%;
		bottom: 91rpx;
		position: fixed;
		z-index: 1005;
	}

	.xiangziwrap {
		position: absolute;
		left: calc(50% - 80px);
		top: calc(50% - 100px);
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
</style>
