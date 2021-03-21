<template>
	<!--  -->
	<view>
		<swiper class='swiper-box' indicator-dots="true" indicator-active-color="#64D3AD" indicator-color="#000000">
			<swiper-item class="swiper-box2">
				<view @click="selectemojy(item)" v-for="(item,index) in emojylist1" :key = "index" class="iconBg">
					<view class="iconBg2">
						<image class="icon" :src="item" mode="aspectFit"></image>
					</view>
				</view>
				<view class="bottom"></view>
			</swiper-item>
			<swiper-item class="swiper-box2">
				<view  @click="selectemojy(item)" v-for="(item,index) in emojylist2" :key = "index" class="iconBg">
					<view class="iconBg2">
						<image class="icon" :src="item" mode="aspectFit"></image>
					</view>
				</view>
				<view class="bottom"></view>
			</swiper-item>
			<swiper-item class="swiper-box2">
				<view @click="selectemojy(item)" v-for="(item,index) in emojylist3" :key = "index" class="iconBg">
					<view class="iconBg2">
						<image class="icon" :src="item" mode="aspectFit"></image>
					</view>
				</view>
				<view class="bottom"></view>
			</swiper-item>
			<swiper-item class="swiper-box2">
				<view @click="selectemojy(item)" v-for="(item,index) in emojylist4" :key = "index" class="iconBg">
					<view class="iconBg2">
						<image class="icon" :src="item" mode="aspectFit"></image>
					</view>
				</view>
				<view class="bottom"></view>
			</swiper-item>
			<swiper-item class="swiper-box2">
				<view @click="selectemojy(item)" v-for="(item,index) in emojylist5" :key = "index" class="iconBg">
					<view class="iconBg2">
						<image class="icon" :src="item" mode="aspectFit"></image>
					</view>
				</view>
				<view class="bottom"></view>
			</swiper-item>
		</swiper>
		<view class="send" @click="sendemojy">发送</view>
	</view>
</template>

<script>
	export default {
		props(){
			
		},
		data() {
			return {
				emojylist1: [],
				emojylist2: [],
				emojylist3: [],
				emojylist4: [],
				emojylist5: [],
				allemojylist: [],
				select_item:{}
			}
		},

		methods: {
			sendemojy(){
			this.$emit('new_sendemojy', this.select_item);
			},
			selectemojy(name) {
				console.log(name);
				var selected = '';
				var list = JSON.parse(JSON.stringify(this.allemojylist));

				for (let i = 0; i < list.length; i++) {
					var item = list[i];
					var pinyin = item.pinyin;
					if (pinyin == name) {
						selected = item.chinese;
						this.$emit('songemojy', item);
						this.select_item = item;
					}
				}
			},
		},

		created() {
			var imagename = '';
			

			var imagename = '';
			// #ifdef MP-WEIXIN
			var path = '../../packageB/static/mipmap-hdpi/';
			// #endif
			// #ifdef H5
			var path = '../../static/mipmap-hdpi/';
			// #endif
			
			var subarray = [];
			let index = 0;

			for (let i = 1; i < 22; i++) {
				if (i < 10) {
					imagename = 'face_00' + i;
				} else {
					if (i < 100) {
						imagename = 'face_0' + i;
					}
				}
				var item = path + imagename + '.png';
				this.emojylist1.push(item);
			}
			for (let i = 22; i < 43; i++) {
				imagename = 'face_0' + i;
				var item = path + imagename + '.png';
				this.emojylist2.push(item);
			}
			for (let i = 43; i < 64; i++) {
				imagename = 'face_0' + i;
				var item = path + imagename + '.png';
				this.emojylist3.push(item);
			}
			for (let i = 64; i < 85; i++) {
				imagename = 'face_0' + i;
				var item = path + imagename + '.png';
				this.emojylist4.push(item);
			}
			for (let i = 85; i < 104; i++) {
				if (i < 100) {
					imagename = 'face_0' + i;
				} else {
					imagename = 'face_' + i;
				}
				var item = path + imagename + '.png';
				this.emojylist5.push(item);
			}

			
			var emojiArray = ["[微笑]", "[色]", "[发呆]", "[抽烟]", "[抠鼻]", "[哭]", "[发怒]",
				"[呲牙]", "[睡]", "[害羞]", "[调皮]", "[晕]", "[衰]", "[闭嘴]",
				"[指点]", "[关注]", "[搞定]", "[胜利]", "[无奈]", "[打脸]", "[大笑]",
				"[哈欠]", "[害怕]", "[喜欢]", "[困]", "[疑问]", "[伤心]", "[鼓掌]",
				"[得意]", "[捂嘴]", "[惊恐]", "[思考]", "[吐血]", "[卖萌]", "[嘘]",
				"[生气]", "[尴尬]", "[笑哭]", "[口罩]", "[斜眼]", "[酷]", "[脸红]",
				"[大叫]", "[眼泪]", "[见钱]", "[嘟]", "[吓]", "[开心]", "[想哭]",
				"[郁闷]", "[互粉]", "[赞]", "[拜托]", "[唇]", "[粉]", "[666]",
				"[玫瑰]", "[黄瓜]", "[啤酒]", "[无语]", "[纠结]", "[吐舌]", "[差评]",
				"[飞吻]", "[再见]", "[拒绝]", "[耳机]", "[抱抱]", "[嘴]", "[露牙]",
				"[黄狗]", "[灰狗]", "[蓝狗]", "[狗]", "[脸黑]", "[吃瓜]", "[绿帽]",
				"[汗]", "[摸头]", "[阴险]", "[擦汗]", "[瞪眼]", "[疼]", "[鬼脸]",
				"[拇指]", "[亲]", "[大吐]", "[高兴]", "[敲打]", "[加油]", "[吐]",
				"[握手]", "[18禁]", "[菜刀]", "[威武]", "[给力]", "[爱心]", "[心碎]",
				"[便便]", "[礼物]", "[生日]", "[喝彩]", "[雷]"
			];
			for (let i = 1; i < 104; i++) {
				if (i < 10) {
					imagename = 'face_00' + i;
				} else {
					if (i < 100) {
						imagename = 'face_0' + i;
					} else {
						imagename = 'face_' + i;
					}
				}
				var citem = emojiArray[i - 1];
				var item = path + imagename + '.png';
				var obj = {};
				obj.chinese = citem;
				obj.pinyin = item;
				this.allemojylist.push(obj);
			}

			// console.log(JSON.parse(JSON.stringify(this.allemojylist)));


		}
	}
</script>

<style>
	.icon {
		width: 60rpx;
		height: 60rpx;
		margin-top: 10rpx;
		margin-left: 30rpx;
	}

	.iconBg {
		width: 14.2%;
		height: 80rpx;
	}

	.swiper-box2 {
		width: 100%;
		height: 240rpx;
		position: absolute;
		top: 0rpx;
		background-color: #E7EBED;
		display: flex;
		flex-wrap: wrap;
	}

	.swiper-box {
		width: 100%;
		height: 330rpx;
		position: absolute;
		top: 0rpx;
		background-color: #E7EBED;
		display: flex;
		flex-wrap: wrap;
		/* background-color: #007AFF; */
	}

	.bottom {
		height: 130rpx;
	}
	.send {
		position: absolute;
		right: 20rpx;
		bottom: 20rpx;
		width: 80rpx;
		height: 40rpx;
		border-radius: 50px;
		font-size: 12px;
		line-height: 40rpx;
		text-align: center;
		margin-top: 20rpx;
		background: #38DAA6;
		color: #FFFFFF;
	}
</style>
