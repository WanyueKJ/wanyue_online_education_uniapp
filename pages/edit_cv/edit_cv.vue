
<!-- 编写简历 -->
<template>
	<view class="cv-all-wrap">
		<uni-nav-bar statusBar title="编写简历" :border="false" leftIcon="back" @clickLeft="back" @clickRight="subCv">
			<view class="sub-btn" @click="subCv" slot="right">提交</view>
		</uni-nav-bar>

		<!-- 主题内容区域 -->
		<view>
			<view class="jianli-item yuanxiao">
				<text>毕业院校</text>
				<input class="school" v-model="school" type="text" placeholder="请填写你的最高学历及毕业学校"
				 placeholder-class="place_zhan">
			</view>
			<view class="jianli-item">
				<text>教学经历</text>
				<textarea class="jiaoxue" v-model="experience" value="" placeholder="请填写你的教育工作相关经历, 最多100字"
				 placeholder-class="place_zhan" />
			</view>
			<view class="jianli-item">
				<text>教学特点</text>
				<textarea class="tedian" v-model="feature" value="" placeholder="请填写你的教学特点或个人风格, 最多200字"
				placeholder-class="place_zhan" />
			</view>

		</view>

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
				touid: '',
				school: '',
				experience: '',
				feature: '',
			}
		},
		onLoad(option) {
			this.touid = option.touid;
		},
		methods: {
			// 提交简历
			subCv(){
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'User.UpUserInfo',
					method: 'GET',
					data: {
						'uid' : gData.userinfo.id,
						'token' : gData.userinfo.token,
						'fields' : JSON.stringify({
							'school' : this.school,
							'experience' : this.experience,
							'feature' : this.feature,
					   }),
					},
					success: res => {
						uni.showToast({
							icon: 'none',
							title: res.data.data.msg,
						});
						if(parseInt(res.data.data.code) != 0) {
							return;
						}
						uni.navigateBack({
							delta: 1
						});
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					},
				});
			}
		}
	}
</script>

<style>

	/* 占位符样式 */
	.place_zhan {
		color:#C8C8C8;
		font-size:26rpx;
		padding-left:20rpx;
	}

	.cv-all-wrap {
		width: 90%;
		margin: 0 auto;
	}

	.sub-btn {
		color: #38DAA6;
	}

	.school {
		height: 72rpx;
	}

	.jianli-item {
		margin-top: 35rpx;
	}

	.jianli-item > text {
		display: inline-block;
		margin-bottom: 10rpx;
	}

	.jianli-item > input,
	.jianli-item > textarea {
		width: 100%;
		background-color: #FAFAFA;
	}

	/* 多行文本框 */
	.jiaoxue {
		height: 200rpx;
	}

	.tedian {
		height: 400rpx;
	}


</style>
