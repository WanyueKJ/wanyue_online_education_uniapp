<template>
	<view class="flex align-center px-5 py-3">
		
		<view class="flex-1 flex align-center justify-center"
		 v-for="(item,index) in providerList" :key="index">
			<view :class="item.icon + ' ' + item.bgColor" class="iconfont icon-qq1 font-lg text-white bg-primary flex align-center justify-center rounded-circle" style="width: 100rpx;height: 100rpx;">
			
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				providerList:[]
			}
		},
		mounted() {
			uni.getProvider({
			    service: 'oauth',
			    success: (result) => {
			        this.providerList = result.provider.map((value) => {
			            let providerName = '';
						let icon = '';
						let bgColor = '';
			            switch (value) {
			                case 'weixin':
			                    providerName = '微信登录'
								icon = 'icon-weixin'
								bgColor = 'bg-success'
			                    break;
			                case 'qq':
			                    providerName = 'QQ登录'
								icon = 'icon-qq1'
								bgColor = 'bg-primary'
			                    break;
			                case 'sinaweibo':
			                    providerName = '新浪微博登录'
								icon = 'icon-tubiaozhizuo-'
								bgColor = 'bg-red'
			                    break;
			               
			            }
			            return {
			                name: providerName,
			                id: value,
							icon: icon,
							bgColor: bgColor
			            }
			        });
			
			    },
			    fail: (error) => {
			        console.log('获取登录通道失败', error);
			    }
			});
			
		}
		
	}
</script>

<style>
</style>
