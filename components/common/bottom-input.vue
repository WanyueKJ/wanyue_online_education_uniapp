<template>
	<!-- 底部操作条 -->
	<view class="input-msg-wrap fixed-bottom flex align-center bg-white">
		
		<view class="input-info-wrap">
			<input type="text" v-model="content" value="" class="msg-input" placeholder="我来说几句 ~" placeholder-style="color:#C8C8C8;" @confirm="submit"/>
			<view class="wen-btn-wrap">
				<view @click="question" class="duihao-wrap">
					<image v-if="isQue == true" class="duihao-img" src="../../static/images/duihao.png" mode="aspectFit"></image>
				</view>
				<text>提问</text>
			</view>
		</view>
		
		</text>
	</view>
	
</template>

<script>
	export default {
		data(){
			return {
				content: "",
				isQue: false,
			}
		},
		methods:{
			submit(){
				// 是否为空
				if(this.content  === ''){
					return uni.showToast({
						title:'消息不能为空',
						icon:'none'
					});
				}
				this.$emit('submit',this.content);
				//清空输入框
				this.content = '';	
			},
			question(){
				this.isQue = !this.isQue;
				this.$emit('question', this.isQue);
			}
		}
	}
</script>

<style>
	.input-msg-wrap {		height: 110rpx;		background-color: #FFFFFF;		position: fixed !important; 	}		.input-info-wrap {		width: 85%;		margin: 0 auto;		height: 70rpx;		line-height: 70rpx;		display: flex;		flex-direction: row;	}		.msg-input {		height: 100%;		width: 75%;		padding-left: 15rpx;		display: flex;		flex-direction: row;		text-align: left;		background-color: #F5F5F5;		border-radius: 50rpx 0 0 50rpx;		font-size: 26rpx;	}		.wen-btn-wrap {		width: 24%;		height: 100%;		display: flex;		align-items: center;		flex-direction: row;		line-height: 70rpx;		border-radius: 0 50rpx 50rpx 0;		background-color: #F5F5F5;	}		.wen-btn-wrap text {		color: #646464;	}		.wen-btn {		width: 40rpx;		height: 40rpx;		background-color: #000000;	}		.duihao-wrap {		width: 25rpx;		height: 25rpx;		line-height: 25rpx;		display: flex;		align-items: center;		border: 2rpx solid #B4B4B4;		margin-left: 30rpx;		margin-right: 10rpx;		font-size: 26rpx;	}		.duihao-img {		width: 100%;		height: 100%;		position: relative;	}
</style>
