<template>
	<view class="page">
		<view class="list" v-for="(item,index) in addresslist">
			<view class="row">
				<view @click="selecteddefault(item.id)">
					<view class="name">
						<view class="title1">{{item.name + '  '+item.mobile}}</view>
						<image v-if="item.isdef == 1" class="def" src="../../static/addressnormal.png"></image>
					</view>
					<view class="title2">{{item.province + ' ' + item.city + ' ' + item.area + ' '+ item.addr}}</view>
					<view class="line1"></view>
				</view>
				<view class="caozuo">
					<view class="edit" @click="editaddress(item)">编辑</view>
					<view class="delete" @click="deleteaddress(item.id)">删除</view>
				</view>
			</view>
			<view class="line2"></view>
		</view>
		<view class="newaddress" @click="add">新建地址</view>
	</view>
</template>

<script>
	const app = getApp();

	export default {
		data() {
			return {
				addresslist: []
			}
		},
		onShow() {
			var that = this;
			setTimeout(function() {
				that.getaddress();
			}, 500);
			console.log('onshow');
		},
		onLoad: function() {
			this.getaddress();

		},
		methods: {
			selecteddefault(itemid) {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Addr.SetDefault',
					method: 'GET',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'addrid': itemid
					},
					success: res => {
						uni.showToast({
							title: res.data.data.msg,
							icon: 'none'
						});
						var that = this;
						setTimeout(function() {
							uni.navigateBack({
								delta: 1
							});
						}, 1000);

					},
				});

			},
			editaddress(item) {

				uni.navigateTo({
					url: '../address/add-address?item=' + encodeURIComponent(JSON.stringify(item)) + '&isupdate=' + '1',
				});
			},
			deleteaddress(itemid) {

				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Addr.DelAddr',
					method: 'GET',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'addrid': itemid
					},
					success: res => {
						uni.showToast({
							title: res.data.data.msg,
							icon: 'none'
						});
						this.getaddress();
					},
				});
			},
			add() {
				uni.navigateTo({
					url: '../address/add-address',
				});
			},
			getaddress() {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Addr.GetList',
					method: 'GET',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
					},
					success: res => {
						this.addresslist = res.data.data.info;
						console.log(this.addresslist);

					},
				});
			}

		}


	}
</script>

<style>
	.page{
		display: flex;
		flex-direction: column;
	}
	.list{
	
	}
	.name {
		display: flex;
		flex-direction: row;
	}

	.def {
		position: absolute;
		right: 5rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.row {
		/* position: absolute; */
		margin-left: 20rpx;
		height: 180rpx;
		padding-top: 20rpx;
	}

	.newaddress {
		color: #FFFFFF;
		text-align: center;
		position: fixed;
		bottom: 20rpx;
		left: 60rpx;
		right: 60rpx;
		height: 60rpx;
		font-size: medium;
		padding-top: 10rpx;
		background-color: #38DAA6;
	}

	.title1 {
		color: #000000;
		font-size: medium;
	}

	.title2 {
		margin-top: 10rpx;
		color: #C9C9C9;
		font-size: small;
	}

	.line1 {
		margin-top: 10rpx;
		width: 100%;
		height: 1rpx;
		background-color: #F0F0F0;
	}

	.line2 {
		margin-top: 10rpx;
		width: 100%;
		height: 10rpx;
		background-color: #F0F0F0;
	}

	.caozuo {}

	.edit {
		margin-top: 5rpx;
		padding-top: 3rpx;
		text-align: center;
		font-size: smaller;
		margin-top: 10rpx;
		position: absolute;
		right: 100rpx;
		color: #000000;
		background-color: #C9C9C9;
		width: 60rpx;
		height: 40rpx;

	}

	.delete {
		margin-top: 5rpx;
		padding-top: 3rpx;
		text-align: center;
		font-size: smaller;
		margin-top: 10rpx;
		position: absolute;
		right: 30rpx;
		color: #000000;
		background-color: #C9C9C9;
		width: 60rpx;
		height: 40rpx;
	}
</style>
