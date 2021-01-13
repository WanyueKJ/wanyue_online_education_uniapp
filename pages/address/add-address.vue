<template>
	<view class="app">
		<!-- #ifdef MP-WEIXIN -->
		<uni-nav-bar :border="false" title="新建地址" statusBar>

			<view slot="left" @click="cancle" style="position: absolute; left: 10rpx;">
				<text style="color: #000000;">取消</text>
			</view>
			<view @click="sure" slot="right" style="position: absolute; right: 30rpx;">
				<text style="color: #64D3AD;">确定</text>
			</view>

		</uni-nav-bar>
		<!-- #endif -->

		<!-- #ifndef MP-WEIXIN -->
		<uni-nav-bar title="新建地址" :border="false">
			<view slot="left" @click="cancle" style="position: absolute; left: 20rpx;">
				<text style="color: #000000;">取消</text>
			</view>
			<view @click="sure" slot="right" style="position: absolute; right: 30rpx;">
				<text style="color: #64D3AD;">确定</text>
			</view>
		</uni-nav-bar>
		<!-- #endif -->
		<view class="addressview">
			<view class="addresstext">
				<view class="title">为了保证快递能及时送达，建议填写家庭住址或家长的工作单位地址</view>
			</view>

			<view class="inputlist">
				<view class="section">
					<text class="sectiontitle">收货人</text>
					<input value="name" v-model="name" class="input" placeholder="请输入收货人姓名" />
				</view>
				<view class="line"></view>
				<view class="section">
					<text class="sectiontitle">手机号码</text>
					<input value="number" v-model="number" class="input" placeholder="请输入手机号码" />
				</view>
				<view class="line"></view>
				<view class="section">
					<text class="sectiontitle">所在地区</text>
					<view class="city">
						<AddressPicker style="font-size: medium; color: #000000;" @change="change" :level="3">{{please}} </AddressPicker>
					</view>
					<image class="image" src="../../static/arrow2.png"></image>
				</view>
				<view class="line"></view>
				<view class="section">
					<text class="sectiontitle2">详细地址</text>
					<textarea value='detailaddress' v-model="detailaddress" class="textarea" placeholder="请输入详细地址"></textarea>
				</view>
				<view class="line2"></view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import AddressPicker from "@/pages/address/AddressPicker.vue";
	const app = getApp();

	export default {
		components: {
			uniNavBar,
			AddressPicker
		},
		data() {
			return {
				addresslist: [],
				name: '',
				number: '',
				province: '',
				city: '',
				arae: '',
				detailaddress: '',
				please: '请选择地区',
				isupdate: false,
				addrid: ''
			}
		},
		onLoad: function(option) {
			this.isupdate = option.isupdate;

			if (this.isupdate == 1) {
				var list = JSON.parse(decodeURIComponent(option.item));
				this.name = list.name;
				this.number = list.mobile;
				this.province = list.province;
				this.city = list.city ;
				this.area = list.area;
				this.please = list.province + list.city + list.area;
				this.detailaddress = list.addr;
				this.addrid = list.id;
			}
		},
		methods: {
			change(result) {
				console.log(JSON.stringify(result.data));
				this.planLocate = '';
				result.data.forEach((item, index) => {

					if (index == 0) {
						this.province = item.name;
					} else if (index == 1) {
						this.city = item.name;
					} else if (index == 2) {
						this.area = item.name;
					}
					this.planLocate += item.name
				});
				this.please = this.planLocate;
			},

			cancle() {
				uni.navigateBack({
					delta: 1
				});
			},
			sure() {
				//Addr.UpAddr
				// Addr.SetAddr
				console.log(this.name);
				console.log(this.number);
				console.log(this.province);
				console.log(this.city);
				console.log(this.area);
				console.log(this.detailaddress);

				if (this.isupdate != 1) {
					let gData = app.globalData;
					uni.request({
						url: gData.site_url + 'Addr.SetAddr',
						method: 'POST',
						data: {
							'uid': gData.userinfo.id,
							'token': gData.userinfo.token,
							"name": this.name,
							"mobile": this.number,
							"province": this.province,
							"city": this.city,
							"area": this.area,
							"addr": this.detailaddress,
						},
						success: res => {
							if (res.data.data.code == 0) {
								uni.showToast({
									title: res.data.data.msg,
									icon: 'success'
								});
								var that = this;
								setTimeout(function() {
									that.cancle();
								}, 1000);

							} else {
								uni.showToast({
									title: res.data.data.msg,
									icon: 'none'
								});
							}
							console.log(res);

						},
					});
				} else {
					let gData = app.globalData;
					uni.request({
						url: gData.site_url + 'Addr.UpAddr',
						method: 'POST',
						data: {
							'addrid': this.addrid,
							'uid': gData.userinfo.id,
							'token': gData.userinfo.token,
							"name": this.name,
							"mobile": this.number,
							"province": this.province,
							"city": this.city,
							"area": this.area,
							"addr": this.detailaddress,
						},
						success: res => {
							if (res.data.data.code == 0) {
								uni.showToast({
									title: res.data.data.msg,
									icon: 'success'
								});
								var that = this;
								setTimeout(function() {
									that.cancle();
								}, 1000);

							} else {
								uni.showToast({
									title: res.data.data.msg,
									icon: 'none'
								});
							}
							console.log(res);

						},
					});
				}
			},

		}
	}
</script>

<style>
	.image {
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		right: 10rpx;
		margin-top: 30rpx;
	}

	.city {
		display: flex;
		flex-direction: row;
		font-size: small;
		position: absolute;

		/* right: 100rpx; */
		left: 140rpx;
		height: 80rpx;
		padding-top: 15rpx;

	}

	.input {
		color: #000000;
		width: 60%;
		height: 80rpx;
	}

	.sectiontitle {
		height: 100rpx;
		padding-top: 20rpx;
		width: 140rpx;
	}

	.sectiontitle2 {
		height: 100rpx;
		width: 140rpx;
	}

	.textarea {
		color: #000000;
		height: 140rpx;
		margin-left: 20rpx;
	}

	.section {
		padding-top: 10rpx;
		height: 100rpx;
		color: #888888;
		display: flex;
		flex-direction: row;

	}

	.line2 {
		margin-top: 60rpx;
		width: 100%;
		height: 0.5rpx;
		background-color: #DBDBDB;
	}

	.line {
		width: 100%;
		height: 0.5rpx;
		background-color: #DBDBDB;
	}

	.addressview {

		position: absolute;
		left: 20rpx;
		right: 20rpx;
		top: 200rpx;
	}

	.addresstext {
		display: flex;
		flex-direction: column;
	}

	.title {
		color: #888888;
		font-size: medium;
	}
</style>
