<template>
    <view class="uni-tab-bar">
        <scroll-view class="uni-swiper-tab" scroll-x>
            <block v-for="(tab,index) in tabBars" :key="tab.id" :style="scrollStyle">
                <view
                    class="swiper-tab-list"
                    :class="{'active' : tabIndex==index}"
                    @tap="tabtap(index)"
                    :style="scrollItemStyle"
                >
                    {{tab.classname}} {{tab.num?tab.num:""}}
                <view class="swiper-tab-line"></view>
                </view>
            </block>
        </scroll-view>
    </view>
</template>

<script>
	export default {
		props:{
			tabBars:Array,
			tabIndex:Number,
			scrollStyle:{
				type:String,
				default:""
			},
			scrollItemStyle:{
				type:String,
				default:""
			}
		},
		methods:{
			//点击切换导航
			tabtap(index){
				// this.tabIndex = index;
				this.$emit('tabtap',index)
			}
		}
	}
</script>　

<style scoped >
.uni-swiper-tab{
		border-bottom: 1upx solid #EEEEEE;
	}
	.swiper-tab-list{
		color: #969696;
		font-weight: bold;
	}
	.uni-tab-bar .active{
		color: #343434;
	}
	.active .swiper-tab-line{
		border-bottom: 6upx solid #FEDE33;
		width: 70upx;
		margin: auto;
		border-top: 6upx solid #FEDE33;
		border-radius: 20upx;
	}
</style>

