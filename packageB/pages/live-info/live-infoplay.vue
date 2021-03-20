<template>
	<view>
		<!-- #ifndef H5 -->
		<uni-nav-bar @clickLeft="backCourseList" left-icon="back" :border="false" title="直播详情" onlive>
		</uni-nav-bar>
		<!-- #endif -->	
		
		<view class="live-all-wrap">
			<template v-if="showsmallvideo == true">
				<view class="small-video">
					<!-- #ifdef MP-WEIXIN -->
					<view class="video-small-wrap">
						<live-player class="video-small-wrap" autoplay="true" id="player" src="wechatliveurl_small" mode="RTC"
						 bindstatechange="playerStateChange" object-fit="contain" />
					</view>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<view id="remoteContainer" ref="remotecontainer">
						<view id="subremoteContainer" class="video-small-wrap"></view>
					</view>
					<!-- #endif -->
					<view class="video-small-text">视频直播中</view>
				</view>
			</template>
			<!-- #ifdef H5 -->
			<template v-if="showShareScreen == true">
				<view class="video-share-wrap">
					<view id="remoteContainer" ref="remotecontainer">
						<view id="subremoteContainer" class="video-share-wrap"></view>
					</view>
				</view>
			</template>
			<!-- #endif -->
			<template v-if="livetype == 5 || livetype == 8">
				<view class="video-wrap" v-if="showShareScreen == false">
					<template v-if="phonetype == 1">
						<TestText ref="videoAdnroid" tel="xxxxxx" class="video-wrap"></TestText>
					</template>
					<template v-else-if="phonetype == 2">
						<dc-TestComponent ref="videoIos" appid="xxxxxx" class="video-wrap"></dc-TestComponent>
					</template>
					<template v-else-if="phonetype == 3">
						<!-- #ifdef H5 -->
						<view class="video-wrap" v-if="showBigScreen == true">
							<view id="remoteContainer" ref="remotecontainer">
								<view id="subremoteContainer" class="video-wrap"></view>
							</view>
						</view>
						<!-- #endif -->
					</template>
					<template v-else-if="phonetype == 4">
						<!-- #ifdef MP-WEIXIN -->
						<template v-if="video_zhezhao == true">
							<view class="video-wrap">
								<live-player class="video-wrap-wechat" autoplay="true" id="player" src="wechatliveurl" mode="RTC"
								 bindstatechange="playerStateChange" object-fit="contain" />
							</view>
						</template>
					<template v-else>
						<view class="video-wrap">
						</view>
					</template>
						<!-- #endif -->
					</template>
					<view class="nothing" v-if="zhibo_leave == true">
						<image v-if="show_nothing_image == true" class="nothing_image_H" src="../../static/zanshilikai.png" mode="aspectFit"></image>
						<view v-if="show_nothing_image == true" class="zanshilikai_txt_H">{{zhibo_leave_text}}</view>
						<view v-if="show_nothing_image == true" class="zanshilikai_txt_H_H">{{zhibo_leave_text_w}}</view>
						<view v-if="show_nothing_image2 == true" class="zanshilikai_txt2_H">直播已结束</view>
					</view>
				</view>
			</template>
			<template v-else-if="livetype == 2">
				<view class="video-wrap">
					<video show-mute-btn="true" class="video-wrap" :src="pull" :poster="thumb" controls="true" autoplay="true"></video>
				</view>
			</template>
			<template v-else-if="livetype == 3 || livetype == 6">
				<view class="video-wrap">
					<image :src="thumb" class="video-wrap36" mode="aspectFill">
					</image>
				</view>
				<view class="shadow">
					<imt-audio autoplay class="imtaudio" :src="pull"></imt-audio>
				</view>
			</template>
			<template v-else-if="livetype == 4 || livetype == 1">
				<template v-if="noppt == false">
					<swiper class="video-wrap swiper-no-swiping" :current="pptindex">
						<swiper-item v-for="(item,index) in ppts" :key="index" class="video-wrap" @touchmove.stop>
							<image @click="showBigView(index)" :src="item.thumb" mode="aspectFit" class="pptimage"></image>
							<view class="pptnum">{{showppt_index +'/'+ppts.length}}</view>
						</swiper-item>
					</swiper>
				</template>
				<template v-else>
					<view class="video-wrap">
						<view class="zanwu">暂无内容</view>
					</view>
				</template>
			</template>
			<template v-else>
				<view class="video-wrap">
				</view>
			</template>
			<view class="livestatus">
				<view class="dian" :style="'background-color :' + diancolor"></view>
				<view class="islive">{{islive}}</view>
				<view class="xian"></view>
				<view class="Usercount">{{Usercount + '人'}}</view>
			</view>
			<view style="background-color: #FFFFFF; height: 45px;" class="flex align-center justify-center font-weight-bold course-tab">
				<view class="mx-5" @click="changeXXK(index)" v-for="(item, index) in tabBars" :key="index" :class="tabIndex === index ? 'text-main font-md' : 'font-md text-light-muted'">
					{{item.name}}
				</view>
			</view>
			<swiper class="swiper-box" :current="tabIndex" @change="onChangeTab" :style="{height : scrollH + 'px'}" style="width: 100%;background-color: #F4F5F6;">
				<swiper-item>
					<scroll-view id = "scrollView" :scroll-top="scrollTop" :style="{height : scrollH - 65 + 'px'}" class="scroll1" scroll-y="true"
					 :scroll-into-view="scrollInto" scroll-with-animation style="position: absolute;left:0; top: 0; 
			        right: 0; bottom: 0;">
						<view class="zhinanview">
							<text class="zhinantext">听课指南</text>
							<text class="intr">{{intr}}</text>
						</view>
						<block v-for="(item,index) in list" :key="index">
							<view v-if="item.user_type == 1" :id="'chat' + index" class="messagebottom">
								<image :src="item.avatar" class="rounded" mode="aspectFill"></image>
								<view class="message">
									<view class="jiangshiview">
										<text class="user_nickname">{{item.user_nickname}}</text>
										<view class="jiangshi">讲师</view>
									</view>
									<view class="message_row2">
										<rich-text v-show="item.type == 0" class="textmessage2" :nodes="item.content"></rich-text>
										<text v-if="item.status == '1'" class="wen_text2">问</text>
										<text v-if="item.status == '2'" class="wen_text2">答</text>
										<view @click="open_voice(item.url,index)" v-show="item.type == 1" class="textmessage2_voice">
											<image :ref="('voice_' + index)" :src="voice_list[index]" class="voice"></image>
											<view class="voice_time">{{item.length + 's'}}</view>
										</view>
									</view>
								<view class="chat_space"></view>
								</view>
							</view>
						</block>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view id = "scrollView" :scroll-top="scrollTop" :style="{height : scrollH - 65 + 'px'}" class="scroll1" scroll-y="true" :scroll-into-view="scrollInto"
					 scroll-with-animation style="position: absolute;left:0; top:0; 
			        right: 0; bottom: 0; ">
						<block v-for="(item,index) in list" :key="index">
							<template v-if="item.uid === myID">
								<view :id="'chat' +index" class="messagebottom2">
									<image :src="item.avatar" class="rounded2" mode="aspectFill"></image>
									<view class="message">
										<text class="user_nickname2">{{item.user_nickname}}</text>
										<view class="message_row">
											<text v-if="item.status == '1'" class="wen_text">问</text>
											<text v-if="item.status == '2'" class="wen_text">答</text>
											<rich-text v-show="item.type == 0" class="textmessage" :nodes="item.content" space="nbsp"></rich-text>
											<view @click="open_voice(item.url,index)" v-show="item.type == 1" class="textmessage2_voice_my_my">
												<image :ref="('voice_' + index)" :src="voice_list[index]" class="voice_my"></image>
												<view class="voice_time">{{item.length + 's'}}</view>
											</view>
										</view>
									<view class="chat_space"></view>
									</view>
								
								</view>
							</template>
							<template v-else>
								<view :id="'chat' +index" class="messagebottom">
									<image :src="item.avatar" class="rounded" mode="aspectFill"></image>
									<view class="message">
										<template v-if="item.user_type == 1 || liveInfo.liveuid == item.uid">
											<view class="jiangshiview">
												<text class="user_nickname">{{item.user_nickname}}</text>
												<view class="jiangshi">讲师</view>
											</view>
										</template>
										<template v-else>
											<text class="user_nickname">{{item.user_nickname}}</text>
										</template>
										<view class="message_row2">
											<rich-text v-show="item.type == 0" class="textmessage2" :nodes="item.content"></rich-text>
											<view @click="open_voice(item.url,index)" v-show="item.type == 1" class="textmessage2_voice">
												<image :ref="('voice_' + index)" :src="voice_list[index]" class="voice"></image>
												<view class="voice_time">{{item.length + 's'}}</view>
											</view>
											<text v-if="item.status == '1'" class="wen_text2">问</text>
											<text v-if="item.status == '2'" class="wen_text2">答</text>
										</view>
									<view class="chat_space"></view>
									</view>
									
								</view>
							</template>
						</block>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view id = "scrollView" :scroll-top="scrollTop" :style="{height : scrollH + 'px'}" class="scroll1" scroll-y="true" :scroll-into-view="scrollInto"
					 scroll-with-animation style="position: absolute;left:0; top: 0; 
				    right: 0; bottom: 0; ">
						<block v-for="(item,index) in list" :key="index">
							<template v-if="item.uid === myID">
								<view v-if="item.status == '1'" :id="'chat' +index" class="messagebottom2">
									<image :src="item.avatar" class="rounded2" mode="aspectFill"></image>
									<view class="message">
										<text class="user_nickname2">{{item.user_nickname}}</text>
										<view class="message_row">
											<!-- <template v-if="item.type == 0"> -->
											<text v-if="item.status == '1'" class="wen_text">问</text>
											<text v-if="item.status == '2'" class="wen_text">答</text>
											<!-- </template> -->
											<rich-text class="textmessage" :nodes="item.content" v-show="item.type == 0"></rich-text>
											<view @click="open_voice(item.url,index)" v-show="item.type == 1" class="textmessage2_voice_my_my">
												<image :ref="('voice_' + index)" :src="voice_list[index]" class="voice_my"></image>
												<view class="voice_time">{{item.length + 's'}}</view>
											</view>
										
										</view>
									<view class="chat_space"></view>
									</view>
								</view>
							</template>
							<template v-else>
								<view v-if="item.status == '1' || item.status == '2'" :id="'chat' +index" class="messagebottom">
									<image :src="item.avatar" class="rounded" mode="aspectFill"></image>
									<view class="message">
										<template v-if="item.user_type == 1 || liveInfo.liveuid == item.uid">
											<view class="jiangshiview">
												<text class="user_nickname">{{item.user_nickname}}</text>
												<view class="jiangshi">讲师</view>
											</view>
										</template>
										<template v-else>
											<text class="user_nickname">{{item.user_nickname}}</text>
										</template>
										<view class="message_row2">
											<rich-text v-show="item.type == 0" class="textmessage2" :nodes="item.content"></rich-text>
											<view @click="open_voice(item.url,index)" v-show="item.type == 1" class="textmessage2_voice">
												<image :ref="('voice_' + index)" :src="voice_list[index]" class="voice"></image>
												<view class="voice_time">{{item.length + 's'}}</view>
											</view>
											<text v-if="item.status == '1'" class="wen_text2">问</text>
											<text v-if="item.status == '2'" class="wen_text2">答</text>
										</view>
									    <view class="chat_space"></view>
									</view>
								</view>
							</template>
						</block>
					</scroll-view>
				</swiper-item>
			</swiper>
			<template v-if="tabIndex != 2">
				<view class="inputbottom" :style="'bottom:' + inputbuttom +'px'">
					<view class="inputclass">
						<image class="sendemojy" @click="submitemojy" src="../../static/chat_face.png"></image>
						<!-- #ifdef MP-WEIXIN -->
						<image class="sendvoice" @click="sendvoice" :src="chat_voice"></image>
						<!-- #endif -->
						<view @touchstart.stop.prevent="startVoice" @touchmove.stop.prevent="moveVoice" @touchend.stop="endVoice"
						 @touchcancel.stop="cancelVoice" class="inputborder" v-if="isvoice == true" style="color: #969696;text-align: center; line-height: 80rpx;">{{voiceTitle}}</view>
						<view class="inputborder" v-if="isvoice == false">
							<input :disabled="isshut == false ? false:true" :adjust-position="false" ref="input1" hold-keyboard='true'
							 confirm-type="send" @keyup.enter='send' @confirm="send" v-model="content" class="input" :placeholder="shut_place" />
							<view class="wen-btn-wrap">
								<view @click="question" class="duihao-wrap">
									<image v-if="isQue == true" class="duihao-img" src="../../static/images/duihao.png" mode="aspectFill"></image>
									<image v-if="isQue == false" class="duihao-img" src="../../static/images/questionno.png" mode="aspectFill"></image>
								</view>
								<text class="tiwen">提问</text>
							</view>
						</view>
					</view>
				</view>
				<emojy v-show="showemojy == true" class='emojy' @songemojy='songemojy' @new_sendemojy='new_sendemojy'></emojy>
			</template>
			<swiper :current="show_big_ppt_index2" v-show="show_big_ppt == true" class="big_swiper" @change="big_change">
				<swiper-item v-for="(item,index) in ppts" :key="index" class="big_swiper_item">
					<image :src="item.thumb" mode="aspectFit" class="big_swiper_item_image"></image>
					<view class="row">
					</view>
				</swiper-item>
			</swiper>
			<view v-show="show_big_ppt == true" :style="'top:' + system_ppt_top +'px;'" class="big_pptnum">{{show_big_ppt_index +'/'+ppts.length}}</view>
			<view v-show="show_big_ppt == true" @click="big_ppt_back" class="ppt_big_back_big"></view>
			<image v-show="show_big_ppt == true" @click="big_ppt_back" :style="'top:' + system_ppt_top +'px;'" mode="aspectFit"
			 class="ppt_big_back" src="../../static/navi_backImg_white@3x.png"></image>
			<view class="voice_an" v-if="recording == true">
				<image v-if="voiceimagestatus == false" class="voice_an_image" src="../../static/RecordCancel@2x.png" mode="aspectFit"></image>
				<!-- <image  :animation="num==0?showpic:hidepic" v-if="voiceimagestatus == true" class="voice_an_image2" src="../../static/RecordingSignal001@2x.png" mode="aspectFit"></image>
				<image  :animation="num==1?showpic:hidepic" v-if="voiceimagestatus == true" class="voice_an_image2" src="../../static/RecordingSignal002@2x.png" mode="aspectFit"></image>
				<image  :animation="num==2?showpic:hidepic" v-if="voiceimagestatus == true" class="voice_an_image2" src="../../static/RecordingSignal003@2x.png" mode="aspectFit"></image>
				<image  :animation="num==3?showpic:hidepic" v-if="voiceimagestatus == true" class="voice_an_image2" src="../../static/RecordingSignal004@2x.png" mode="aspectFit"></image>
				<image  :animation="num==4?showpic:hidepic" v-if="voiceimagestatus == true" class="voice_an_image2" src="../../static/RecordingSignal005@2x.png" mode="aspectFit"></image> -->
				<image v-if="voiceimagestatus == true" class="voice_an_image2" src="../../static/RecordingSignal006@2x.png" mode="aspectFit"></image>
				<view class="text">{{voiceIconText}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	import qiniuUploader from '../../../qiniuUploader.js';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import imtAudio from '@/components/imt-audio/imt-audio.vue';
	import unisocket from './uniapp.socketio.js';
	import md5_js from "../../../static/js/md53.js";
	// #ifdef H5
	import AgoraRTCH5 from "./AgoraRTCSDK-3.0.1.js";
	// #endif
	// #ifdef MP-WEIXIN
	import AogoraWechat from "./Agora_Miniapp_SDK_for_WeChat.js";
	// #endif
	import Emojy from '@/components/emojy/emojy.vue';
	const app = getApp();
	var socket = '';
	var wechatAgora = '';
	let H5Client = '';
	export default {
		components: {
			uniNavBar,
			Emojy,
			imtAudio
		},
		data() {
			return {
				fromPPt: false,
				fromshare: false,
				ShareScreenUid: 999999999,
				Recorder: uni.getRecorderManager(),
				chat_audio: uni.createInnerAudioContext(),
				recording: false, //标识是否正在录音
				isStopVoice: false, //加锁 防止点击过快引起的当录音正在准备(还没有开始录音)的时候,却调用了stop方法但并不能阻止录音的问题
				voiceInterval: null,
				voiceTime: 0, //总共录音时长
				canSend: true, //是否可以发送
				PointY: 0, //坐标位置
				voiceIconText: "正在录音...",
				voiceimagestatus: true,
				voiceTitle: '按住说话',
				chat_voice: "../../static/chat_voice@3x.png",
				isvoice: false,
				show_big_ppt: false,
				scrollH: 0,
				system_ppt_top: 0,
				tabIndex: 0,
				tabBars: [{
					name: "讲师区"
				}, {
					name: "讨论区"
				}, {
					name: "问答区"
				}],
				scrollInto: "",
				scrollTop: 0,
				list: [],
				isConnectSocket: false, //是否连接socket
				liveInfo: {
					'liveuid': '',
					'courseid': '',
					'lessonid': ''
				},
				userInfo: {},
				isQue: false,
				//直播添加
				agoraappid: '',
				agoramRoomName: '',
				agorauid: '',
				phonetype: 0,
				wechatliveurl: '',
				res_url: '',
				wechatliveurl_small: '',
				myID: '',
				content: '',
				islive: '',
				Usercount: 0,
				diancolor: '#38DAA6',
				timer: '',
				livetype: '',
				intr: '',
				pull: '',
				thumb: '',
				duration: '',
				currentTime: 0,
				videoContext: '',
				buttonimage: '',
				status: 1,
				start: '',
				end: '',
				ppts: [],
				noppt: false,
				pptindex: 0,
				showppt_index: 0,
				show_big_ppt_index: 1,
				show_big_ppt_index2: 0,
				emojylist: [],
				showemojy: false,
				inputbuttom: 0,
				shut_place: "我来说几句~",
				isshut: false,
				shownothingVideo: false,
				zhibo_leave: false,
				zhibo_leave_text: '老师暂时离开',
				zhibo_leave_text_w: '精彩稍后继续',
				show_nothing_image: true,
				show_nothing_image2: false,
				input_adjust: false,
				video_zhezhao: true,
				voice_list: [],
				intervl: '',
				voice_index: -1,
				QiNiutoken: '',
				voice_url: '',
				voice_length: '',
				animation: [],
				showpic: '',
				hidepic: '',
				setInter1: '',
				num: 0,
				picmaxnum: 6,
				isaudioerror: false,
				showsmallvideo: false,
				showShareScreen: false,
				showBigScreen: true,
				livemode: 0
			}
		},
		onShow() {
		uni.getStorage({
			key: 'userinfo',
			success: function(res) {
				getApp().globalData.userinfo = res.data;
			},
		});		
		},
		onReady() {
			var that = this;
			that.system_ppt_top = 25;
			uni.getSystemInfo({
				success: function(res) {
					//-视频区域高度-直播间状态高度-聊天顶部高度-输入框高度-导航栏高度 - 状态栏高度
					that.scrollH = res.windowHeight  - 275 - 64 - 20 - parseInt(res.safeArea.top);
					// #ifdef H5
					that.scrollH = res.windowHeight  - 275 - parseInt(res.safeArea.top)-1;
					// #endif
					
					// #ifdef MP-WEIXIN
					let weinfo = uni.getMenuButtonBoundingClientRect();
					console.log(weinfo);
					console.log(res);
					that.system_ppt_top = parseInt(res.safeArea.top) + 10;
					// that.scrollH = res.windowHeight * 750 / res.windowWidth 
					// - 550 - 64 - 20 * 750 / res.windowWidth 
					// - (weinfo.top - 20) *
					// 	750 / res.windowWidth;
					that.scrollH = (res.windowHeight - 64 -(weinfo.top - 20)) - 275 - 1;
					// #endif
					that.liveLive(that.liveInfo.liveuid, that.liveInfo.courseid, that.liveInfo.lessonid);
				}
			});
			this.GetChat();
		},
		onUnload() {
			// #ifdef H5
			if (this.livetype == 5 || this.livetype == 8) {
				H5Client.leave();
			}
			// #endif
			this.chat_audio.stop();
			socket.disconnect();
			socket.close();
		},
		onLoad(option) {
			// #ifdef MP-WEIXIN
			console.log("运行在小程序");
			this.phonetype = 4;
			// #endif
			// #ifdef H5
			console.log("运行在H5");
			this.phonetype = 3;
			// #endif
			// #ifdef APP-PLUS
			if (uni.getSystemInfoSync().platform === 'android') {
				console.log("运行在android");
				this.phonetype = 1;
			} else if (uni.getSystemInfoSync().platform === 'ios') {
				this.phonetype = 2;
				console.log("运行在ios");
			}
			// #endif
			this.ppts = [];
			this.userInfo = app.globalData.userinfo;
			this.liveInfo.liveuid = option.liveuid;
			this.liveInfo.courseid = option.courseid;
			this.liveInfo.lessonid = option.lessonid;
			this.thumb = option.thumb;
			this.myID = app.globalData.userinfo.id;
			this.getqiniutoken();
			uni.onKeyboardHeightChange(res => {
				if (res.height > 0) {
					if (this.showemojy == true) {
						this.showemojy = false;
						this.inputbuttom = 170;
					} else {
						this.inputbuttom = res.height;
					}
				}
				if (res.height == 0) {
					if (this.showemojy == true) {
						this.inputbuttom = 170;
					} else {
						this.inputbuttom = 0;
					}
				}
			});
			//音频播放事件
			this.chat_audio.onPlay(() => {
				this.isaudioerror = false;
				console.log('开始播放');
			})
			this.chat_audio.onStop(() => {
				this.isaudioerror = false;
				this.voice_index = -1;
				console.log('播放结束-onStop');
				clearInterval(this.intervl);
				for (let i = 0; i < this.voice_list.length; i++) {
					this.voice_list[i] = '../../static/receiver_voice@3x.png';
					this.$set(this.voice_list, i, this.voice_list[i]);
				}
			})
			//音频结束事件
			this.chat_audio.onEnded(() => {
				this.isaudioerror = false;
				this.voice_index = -1;
				console.log('播放结束-onEnded');
				clearInterval(this.intervl);
				for (let i = 0; i < this.voice_list.length; i++) {
					this.voice_list[i] = '../../static/receiver_voice@3x.png';
					this.$set(this.voice_list, i, this.voice_list[i]);
				}
			})
			this.chat_audio.onError((res) => {
				this.chat_audio.stop();
				this.isaudioerror = true;
				clearInterval(this.intervl);
				console.log('播放错误');
				console.log(res.errMsg);
				console.log(res.errCode);
			});
			//录音开始事件
			this.Recorder.onStart(e => {
				this.beginVoice();
			});
			//录音结束事件
			this.Recorder.onStop(res => {
				clearInterval(this.voiceInterval);
				this.handleRecorder(res);
			});
		},
		methods: {
			getqiniutoken() {
				uni.request({
					url: getApp().globalData.site_url + 'Upload.GetQiniuToken',
					method: 'POST',
					data: {
						'uid': getApp().globalData.userinfo.id,
						'token': getApp().globalData.userinfo.token
					},
					success: res => {
						uni.hideLoading();
						if (res.data.data.code == 0) {
							this.QiNiutoken = this.decypt(res.data.data.info[0].token);

						}
					}
				});
			},
			stopPic() {
				clearInterval(this.setInter1);
			},
			changePic() { //轮播方法
				clearInterval(this.setInter1);
				var animation = uni.createAnimation({
					timingFunction: 'ease',
					duration: 4000,
					delay: 0,
				});
				this.animation = animation;
				this.setInter1 = setInterval(function() { //循环
					this.num++;
					if (this.num == this.picmaxnum) {
						this.num = 0;
					}
					//淡入
					animation.opacity(1).step({
						duration: 3000,
						delay: 1000
					}) //描述动画
					this.showpic = animation.export() //输出动画
					//淡出
					animation.opacity(0).step({
						duration: 3000,
						delay: 1000
					})
					this.hidepic = animation.export()
				}, 4000)
			},
			//准备开始录音
			startVoice(e) {
				if (this.isshut == true) {
					uni.showToast({
						title: '全体禁言中',
						icon: 'none'
					});
					return;
				}
				this.chat_audio.pause();
				clearInterval(this.intervl);
				for (let i = 0; i < this.voice_list.length; i++) {
					this.voice_list[i] = '../../static/receiver_voice@3x.png';
					this.$set(this.voice_list, i, this.voice_list[i]);
				}

				this.recording = true;
				this.isStopVoice = false;
				this.canSend = true;
				this.voiceIconText = "正在录音..."
				this.voiceimagestatus = true;
				this.PointY = e.touches[0].clientY;
				this.Recorder.start({
					format: 'mp3'
				});
			},
			//录音已经开始
			beginVoice() {
				if (this.isStopVoice) {
					this.Recorder.stop();
					return;
				}
				this.voiceTitle = '松开 结束'
				this.voiceInterval = setInterval(() => {
					this.voiceTime++;
				}, 1000)
			},
			//move 正在录音中
			moveVoice(e) {
				const PointY = e.touches[0].clientY
				const slideY = this.PointY - PointY;
				if (slideY > uni.upx2px(120)) {
					this.canSend = false;
					this.voiceIconText = '松开手指 取消发送 '
					this.voiceTitle = '手指上滑 取消发送 '
					this.voiceimagestatus = false;
					this.stopPic();
				} else if (slideY > uni.upx2px(60)) {
					this.canSend = false;
					this.voiceTitle = '手指上滑 取消发送 '
					this.voiceIconText = '手指上滑 取消发送 '
					this.voiceimagestatus = false;
					this.stopPic();
				} else {
					this.canSend = true;
					this.voiceIconText = '正在录音...'
					this.voiceTitle = '松开结束'
					this.voiceimagestatus = true;
					this.changePic();
				}
			},
			//结束录音
			endVoice() {
				this.stopPic();
				this.inputbuttom = 0;
				this.isStopVoice = true; //加锁 确保已经结束录音并不会录制
				this.Recorder.stop();
				this.voiceTitle = '按住 说话'
				this.recording = false;
			},
			//录音被打断
			cancelVoice(e) {
				this.stopPic();
				this.inputbuttom = 0;
				this.recording = false;
				this.voiceTime = 0;
				this.voiceTitle = '按住 说话';
				this.canSend = false;
				this.Recorder.stop();
			},
			//处理录音文件
			handleRecorder({
				tempFilePath,
				duration
			}) {
				if (this.canSend == false) {
					return;
				}
				let contentDuration;
				// #ifdef MP-WEIXIN
				console.log('录制时间');
				console.log(this.voiceTime);
				if (this.voiceTime < 2) {
					uni.showToast({
						title: '说话时间太短',
						icon: 'none'
					});
					this.voiceIconText = "说话时间太短";
					this.recording = false;
					this.inputbuttom = 0;
					this.recording = false;
					this.voiceTime = 0;
					this.voiceTitle = '按住 说话';
					this.canSend = false;
					this.Recorder.stop();
					return;
				}
				this.voiceTime = 0;
				contentDuration = duration / 1000;
				// #endif
				this.recording = false;
				var name = 'uni_voice_' + this.getTime() + '.wav';
				qiniuUploader.upload(tempFilePath, res => {
					if (res.fileUrl.indexOf("undefined") != -1) {
						console.log('上传成功，但url含 undefined');
						uni.showToast({
							title: '出现错误，请重新录制语音',
							icon: 'none'
						});
						return;
					}
					console.log('上传成功');
					console.log(res);
					this.voice_url = res.fileUrl;
					this.voice_length = Math.ceil(contentDuration);
					this.send();
				}, error => {
					console.log('上传失败');
					console.log(error);
				}, {
					region: 'ECN',
					domain: getApp().globalData.qiniuimageurl,
					key: name,
					uptoken: this.QiNiutoken,
				});
			},
			big_change(event) {
				this.show_big_ppt_index = parseInt(event.detail.current) + 1;
				this.show_big_ppt_index2 = parseInt(event.detail.current);
			},
			big_ppt_back() {
				this.show_big_ppt = false;
			},
			getTime() {
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
				return yy + mm + dd + hh + mf + ss;
			},
			backCourseList() {
				uni.showModal({
					title: '是否要退出直播间',
					content: '',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					confirmColor: '#38DAA6',
					success: res => {
						if (res.confirm) {
							socket.disconnect();
							socket.close();
							// #ifdef H5
							if (this.livetype == 5 || this.livetype == 8) {
								H5Client.leave();
							}
							// #endif
							setTimeout(() => {
								uni.hideLoading();
								uni.navigateBack({
									delta: 1
								});
							}, 0);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			open_voice(url, index) {
				this.chat_audio.pause();
				clearInterval(this.intervl);
				for (let i = 0; i < this.voice_list.length; i++) {
					this.voice_list[i] = '../../static/receiver_voice@3x.png';
					this.$set(this.voice_list, i, this.voice_list[i]);
				}
				if (this.voice_index == index) {
					this.voice_index = -1;
					console.log('手动停止');
					this.chat_audio.pause();
					clearInterval(this.intervl);
				} else {
					console.log(url);
					if (url.indexOf("undefined") != -1) {
						this.voice_index = -1;
						console.log('url出现错误，停止播放');
						this.chat_audio.pause();
						clearInterval(this.intervl);
						return;
					}
					this.chat_audio.src = url;
					this.chat_audio.play();
					this.voice_index = index;
					this.intervl = setInterval(() => {
						console.log('启动');
						this.voice_list[index] = '../../static/receiver_voice_play_1@3x.png';
						this.$set(this.voice_list, index, this.voice_list[index]);
						setTimeout(() => {
							this.voice_list[index] = '../../static/receiver_voice_play_2@3x.png';
							this.$set(this.voice_list, index, this.voice_list[index]);
						}, 200);
						setTimeout(() => {
							this.voice_list[index] = '../../static/receiver_voice_play_3@3x.png';
							this.$set(this.voice_list, index, this.voice_list[index]);
						}, 400);
					}, 600);
				}
				if (this.isaudioerror == true) {
					this.chat_audio.stop();
					clearInterval(this.intervl);
				}
			},
			addNodeListen() {
				socket = new unisocket((app.globalData.socket_url), {
					query: {},
					transports: ['websocket', 'polling'],
					timeout: 5000
				});
				socket.emit('conn', {
					uid: this.userInfo.id, //进入该房间的学生id 假如等于下面的房间id, 那即为老师进入房间
					roomnum: this.liveInfo.liveuid, //房间号,即老师id
					nickname: this.userInfo.user_nickname,
					stream: this.liveInfo.liveuid + '_' + this.liveInfo.courseid + '_' + this.liveInfo.lessonid, //老师id_课程id_课时id
					token: this.userInfo.token,
				});
				socket.on('error', (data) => {
					console.log('ws 失败 ' + data);
				});
				socket.on('conn', (data) => {
					console.log('ws 已连接 ' + data);
					if (data == 'no') {
						uni.showModal({
							title: '聊天服务器连接失败',
							content: '请尝试退出直播间重新进入',
							showCancel: false,
							cancelText: '',
							confirmText: '确定',
							confirmColor: '#38DAA6',
							success: res => {
								// uni.navigateBack({
								// 	delta: 1
								// });
							},
							fail: () => {},
							complete: () => {}
						});
						return;
					}
					this.isConnectSocket = true; //已连接
				});
				let that = this;
				socket.on('broadcastingListen', (data) => {
					console.log(data);
					for (let i = 0; i < data.length; i++) {
						let msgInfo = JSON.parse(data[i]).msg[0];
						//console.log(JSON.parse(JSON.stringify(msgInfo)));
						if (msgInfo._method_ == "changeMode") {
							if (msgInfo.action == 1) {
								console.log('切换到PPt');
								this.livetype = 4;
								this.fromPPt = true;
								this.fromshare = false;
								this.showsmallvideo = true;
								this.scrollH -= 75;
								// #ifdef MP-WEIXIN
								this.wechatliveurl_small = this.res_url;
								this.wechatliveurl = '';
								// #endif
								// #ifdef H5
								this.showBigScreen = false;
								this.showShareScreen = false;
								H5Client.leave();
								this.agoraH5(this.agoraappid, this.agoramRoomName);
								// #endif
							} else if (msgInfo.action == 0) {
								console.log('切换到直播');
								this.livetype = 5;
								if (this.fromshare == false && this.fromPPt == true) {
									this.scrollH += 75;
								}
								this.fromPPt = false;
								this.fromshare = false;
								this.showsmallvideo = false;
								// #ifdef MP-WEIXIN
								this.wechatliveurl_small = '';
								this.wechatliveurl = this.res_url;
								// #endif
								// #ifdef H5
								this.showBigScreen = true;
								this.showShareScreen = false;
								H5Client.leave();
								this.agoraH5(this.agoraappid, this.agoramRoomName);
								// #endif
							} else if (msgInfo.action == 2) {
								console.log('切换到屏幕共享');
								// #ifdef H5
								this.showBigScreen = false;
								this.showShareScreen = true;
								// #endif
								this.livetype = 8;
								//屏幕共享
								if (this.fromPPt == true) {
									this.scrollH += 75;
								}
								this.fromshare = true;
								this.showsmallvideo = false;
								// #ifdef MP-WEIXIN
								this.wechatliveurl_small = '';
								this.wechatliveurl = this.res_url;
								// #endif
								// #ifdef H5
								H5Client.leave();
								this.agoraH5(this.agoraappid, this.agoramRoomName);
								// #endif
							}
						}
						if (msgInfo._method_ == "Kick") {
							//踢出直播间
							if (msgInfo.action == 1) {
								if (msgInfo.touid == getApp().globalData.userinfo.id) {
									uni.showToast({
										title: '你已被讲师踢出房间',
										icon: 'none'
									});
									setTimeout(() => {
										uni.navigateBack({
											delta: 1
										});
									}, 500);
								}
							}
						}
						if (msgInfo._method_ == "StartEndLive") {
							this.zhibo_leave = true;
							this.video_zhezhao = true;
							this.show_nothing_image = false;
							this.show_nothing_image2 = true;
							this.zhibo_leave_text = "直播已结束";
							this.zhibo_leave_text_w = "";
						}
						if (msgInfo._method_ == "roomShutup") {
							//App.Course.SetLesson
							//1 禁言 0 解除
							if (msgInfo.action == 1) {
								this.shut_place = "全体禁言中";
								this.content = ""
								this.isshut = true;
							} else {
								this.shut_place = "我来说几句～";
								this.content = '';
								this.isshut = false;
							}
						}
						if (msgInfo._method_ == "Shutup") {
							if (msgInfo.touid == getApp().globalData.userinfo.id) {
								this.shut_place = "你已被禁言";
								this.isshut = true;
								uni.showToast({
									title: '你已被禁言',
									icon: 'none'
								});
							}
						}
						if (msgInfo._method_ == "SendMsg") {
							if (msgInfo.action == 0) {
								// if (msgInfo.ct.uid != getApp().globalData.userinfo.id) {
								this.Usercount += 1;
								console.log('用户进入');
								// }
							} else {
								var pinyinArray = getApp().globalData.pinyinArray;
								var emojiArray = getApp().globalData.emojiArray;
								var biaoqing_url = getApp().globalData.biaoqingurl;
								var content = msgInfo.content;
								if (msgInfo.type == 0) {
									for (let j = 0; j < 50; j++) {
										for (let i = 0; i < emojiArray.length; i++) {
											var path = getApp().globalData.biaoqingurl + pinyinArray[i];
											content = content.replace(emojiArray[i],
												'<img style="width: 25px; height: 25px; vertical-align: middle;" src ="' + path + '"/>'
											);
										}
									}
								}
								this.voice_list.push('../../static/receiver_voice@3x.png');
								msgInfo.content = content;
								this.list.push(msgInfo);
								this.pageToBottom();
							}
						}
						if (msgInfo._method_ == 'disconnect') {
							if (this.Usercount != 0) {
								this.Usercount -= 1;
							}
							console.log('用户离开');
						}
						if (msgInfo._method_ == 'setPPT') {
							if (msgInfo.action == 0) {
								var item = {
									'id': msgInfo.pptid,
									'thumb': msgInfo.thumb
								};
								this.noppt = false;
								this.ppts.push(item);
								console.log('添加ppt');
							} else if (msgInfo.action == 1) {
								console.log('ppt删除');
								var pptlist = this.ppts;
								for (let i = 0; i < pptlist.length; i++) {
									var item = pptlist[i];
									if (item.id == msgInfo.pptid) {
										this.ppts.splice(i, 1);
									}
								}
								if (this.ppts.length == 0) {
									this.noppt = true;
								}
							} else if (msgInfo.action == 2) {
								this.pptindex = parseInt(msgInfo.index);
								this.showppt_index = this.pptindex + 1;
								console.log('ppt切换索引');
							}
						}
					}
				});
			},
			showBigView(index) {
				this.show_big_ppt = true;
				this.show_big_ppt_index = index + 1;
				this.show_big_ppt_index2 = index;
			},
			songemojy(data) {
				this.content += data.chinese;
			},
			GetChat() {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Live.GetChat',
					method: 'POST',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'liveuid': this.liveInfo.liveuid,
						'courseid': this.liveInfo.courseid,
						'lessonid': this.liveInfo.lessonid,
						'lastid': '',
						'type': '0'
					},
					success: res => {
						var pinyinArray = getApp().globalData.pinyinArray;
						var emojiArray = getApp().globalData.emojiArray;
						this.list = res.data.data.info;
						for (let j = 0; j < this.list.length; j++) {
							var msg = this.list[j];
							var content = msg.content;
							if (msg.type == 0) {
								for (let j = 0; j < 50; j++) {
									for (let i = 0; i < emojiArray.length; i++) {
										var path = getApp().globalData.biaoqingurl + pinyinArray[i];
										content = content.replace(emojiArray[i],
											'<img style="width: 25px; height: 25px; vertical-align: middle;" src ="' + path + '"/>'
										);
									}
								}
							}
							this.voice_list.push('../../static/receiver_voice@3x.png');
							msg.content = content;
							this.list[j] = msg;
						}
						this.pageToBottom();
					},
				});
			},
			async changeXXK(index) {
				this.tabIndex = index;
				this.pageToBottom();
				return this.tabIndex;
			},
			onChangeTab(e) {
				this.tabIndex = e.detail.current;
				this.pageToBottom();
			},
			decypt(code) {
				var newcode = '';
				var str = '1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp&';
				for (var i = 0; i < code.length; i++) {
					var codeIteam = code[i];
					for (var j = 0; j < str.length; j++) {
						var stringIteam = str[j];
						if (codeIteam == stringIteam) {
							if (j == 0) {
								newcode += str[str.length - 1];
							} else {
								newcode += str[j - 1];
							}
						}
					}
				}
				return newcode;
			},
			agoraWechat(agoraappid, agorastream, uid) {
				this.video_zhezhao = true;
				var _that = this;
				//初始化
				wechatAgora = new AogoraWechat.Client();
				wechatAgora.setRole('audience');
				wechatAgora.init(this.decypt(agoraappid), () => {
						console.log('小程序初始化成功');
						//加入通道
						wechatAgora.join('', agorastream, uid, () => {
							console.log('加入通道成功');
							this.zhibo_leave = true;
						}, e => {
							console.log('加入通道失败');
							this.zhibo_leave = true;
						});
					},
					e => {
						this.zhibo_leave = true;
						console.log('小程序初始化失败');
					});
				//订阅远端流
				wechatAgora.on("stream-added", e => {
					wechatAgora.subscribe(e.uid, (res) => {
						this.zhibo_leave = false;
						this.video_zhezhao = true;
						console.log("订阅视频流成功：" + res);
						this.res_url = res;
						if (this.showsmallvideo == true) {
							this.wechatliveurl_small = res;
						} else {
							this.wechatliveurl = res;
						}
					}, (err) => {
						console.log("订阅视频流错误", err);
						this.video_zhezhao = false;
						this.zhibo_leave = true;
					});
				});
				wechatAgora.on("stream-removed", e => {
					this.video_zhezhao = false;
					this.zhibo_leave = true;
				});
				//重连机制
				wechatAgora.rejoin('', agorastream, uid, '', () => {
					console.log('重连加入通道成功');
				}, e => {
					console.log('重连加入通道失败');
				});
			},
			agoraH5(agoraappid, agorastream) {
				// #ifdef H5
				var _this = this;
				H5Client = AgoraRTCH5.createClient({
					mode: "live",
					codec: "vp8",
				});
				AgoraRTCH5.client = H5Client;
				H5Client.init(_this.decypt(agoraappid));
				H5Client.setClientRole('audience');
				H5Client.join("", agorastream, null, (uid) => {
					console.log('加入通道成功');
					_this.zhibo_leave = true;
				}, null);
				H5Client.on("stream-added", function(evt) {
					H5Client.subscribe(evt.stream, null);
					_this.zhibo_leave = false;
				});
				H5Client.on("stream-subscribed", function(evt) {
					console.log('获取到视频流');
					let stream = evt.stream;
					let streamId = String(stream.getId());
					let streamview = document.getElementById("subremoteContainer");
					streamview.id = streamId;
					document.getElementById("remoteContainer").appendChild(streamview);
					stream.play(streamId);
				});
				H5Client.on("stream-removed", function(evt) {
					//_this.zhibo_leave = true;
					//let stream = evt.stream;
					// let streamId = String(stream.getId());
					//	stream.close();
					// removeVideoStream(streamId);
				});
				H5Client.on("peer-leave", function(evt) {
					_this.zhibo_leave = true;
					let stream = evt.stream;
					let streamId = String(stream.getId());
					stream.close();
					removeVideoStream(streamId);
				});
				// #endif
			},
			// 进入直播
			liveLive(liveuid, courseid, lessonid) {
				var _this = this;
				let gData = app.globalData;
				_this.agorauid = gData.userinfo.id;
				uni.request({
					url: gData.site_url + 'Live.Enter',
					method: 'POST',
					data: {
						'liveuid': liveuid,
						'courseid': courseid,
						'lessonid': lessonid,
						'token': gData.userinfo.token,
						'uid': gData.userinfo.id,
					},
					success: res => {
						if (res.data.data.code == 700) {
							uni.navigateTo({
								url: '../../../pages/login/login',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
							return;
						}
						if (res.data.data.code == 0) {
							console.log(JSON.stringify(res));
							this.addNodeListen();
							this.pull = this.decypt(res.data.data.info[0].pull);
							this.ppts = res.data.data.info[0].ppts || [];
							if (this.ppts.length == 0) {
								this.noppt = true;
							} else {
								this.noppt = false;
							}
							if (parseInt(res.data.data.info[0].shutup_room) == 1) {
								this.shut_place = "全体禁言中";
								this.content = ""
								this.isshut = true;
							} else {
								this.shut_place = "我来说几句～";
								this.content = '';
								this.isshut = false;
							}
							this.pptindex = parseInt(res.data.data.info[0].pptindex);
							this.showppt_index = this.pptindex + 1;
							this.userInfo.user_type = res.data.data.info[0].user_type;
							let isLive = res.data.data.info[0].islive;
							if (isLive == 0) {
								this.shownothingVideo = true;
								this.islive = '未开始';
								this.diancolor = '#969696';
							} else if (isLive == 1) {
								this.shownothingVideo = false;
								this.islive = '直播中';
								this.diancolor = '#38DAA6';
							} else {
								this.islive = '已结束';
								this.zhibo_leave = true;
								this.show_nothing_image = false;
								this.show_nothing_image2 = true;
								this.zhibo_leave_text = '直播已结束';
								this.zhibo_leave_text_w = "";
								this.diancolor = '#969696';
							}
							this.intr = res.data.data.info[0].intr;
							//1图文2视频3音频 4ppt直播 5视频直播6音频直播 7授课直播（白板）
							this.livetype = res.data.data.info[0].livetype;
							this.livemode = parseInt(res.data.data.info[0].livemode);
							this.Usercount = parseInt(res.data.data.info[0].nums);
							this.agoraappid = res.data.data.info[0].sound_appid;
							this.agoramRoomName = res.data.data.info[0].stream;
							if (this.livetype == 3 || this.livetype == 6) {
								this.videoContext = uni.createVideoContext('myVideo');
								this.buttonimage = '../../static/voice2.png';
							}
							if (this.livetype == 5 || this.livetype == 8) {
								if (this.livemode == 0) {
									console.log('直播模式');
									this.livetype = 5;
									this.fromPPt = false;
									this.fromshare = false;
									this.showsmallvideo = false;
									// #ifdef H5
									this.showBigScreen = true;
									this.showShareScreen = false;
									// #endif
								} else if (this.livemode == 1) {
									console.log('PPt模式');
									this.livetype = 4;
									this.fromPPt = true;
									this.fromshare = false;
									this.showsmallvideo = true;
									this.scrollH -= 75;
									// #ifdef H5
									this.showBigScreen = false;
									this.showShareScreen = false;
									// #endif
								} else if (this.livemode == 2) {
									console.log('屏幕共享模式');
									this.livetype = 8;
									this.fromshare = true;
									this.showsmallvideo = false;
									// #ifdef H5
									this.showShareScreen = true;
									this.showBigScreen = false;
									// #endif
								}
								if (this.phonetype == 2) {
									setTimeout(() => {
										this.$nextTick(() => {
											this.$refs.videoIos.focus({
												'appid': this.agoraappid,
												'mRoomName': this.agoramRoomName,
												'uid': gData.userinfo.id
											});
										});
									}, 0);
								} else if (this.phonetype == 1) {
									setTimeout(() => {
										this.$nextTick(() => {
											this.$refs.videoAdnroid.clearTel(
												this.agoraappid + '声' + this.agoramRoomName + '网' + gData.userinfo.id
											);
										});
									}, 0);
								} else if (this.phonetype == 3) {
									this.agoraH5(this.agoraappid, this.agoramRoomName);
								} else if (this.phonetype == 4) {
									this.agoraWechat(this.agoraappid, this.agoramRoomName, gData.userinfo.id)
								}
							}
						} else {
							uni.showToast({
								title: res.data.data.msg,
								icon: 'none'
							});
						}
					},
				});
			},
			sendvoice() {
				if (this.isshut == true) {
					return;
				}
				if (this.isvoice == true) {
					this.isvoice = false;
					this.chat_voice = "../../static/chat_voice@3x.png";
				} else {
					this.isvoice = true;
					this.chat_voice = "../../static/chat_keyboard@3x.png";
				}
			},
			submitemojy() {
				if (this.isshut == true) {
					return;
				}
				if (this.showemojy == true) {
					this.showemojy = false;
					this.inputbuttom = 0;
				} else {
					uni.hideKeyboard();
					this.showemojy = true;
					this.inputbuttom = 170;
				}
			},
			//发送
			new_sendemojy(data) {
				if (this.isshut == true) {
					return;
				}
				this.send();
				this.showemojy = false;
				this.inputbuttom = 0;
			},
			send(event) {
				if (this.isshut == true) {
					uni.showToast({
						title: '全体禁言中',
						icon: 'none'
					});
					return;
				}
				uni.hideKeyboard();
				this.showemojy = false;
				if (this.voice_url.length > 1) {} else {
					if (this.content === '') {
						return uni.showToast({
							title: '消息不能为空',
							icon: 'none'
						});
					}
				}
				this.tabIndex = 1;
				let status = (this.isQue === true) ? "1" : "0";
				let gData = app.globalData;
				// 签名
				var dic = {
					'uid': this.userInfo.id,
					'liveuid': this.liveInfo.liveuid,
					'courseid': this.liveInfo.courseid,
					'lessonid': this.liveInfo.lessonid,
					'type': this.voice_url.length > 1 ? '1' : '0',
					'content': this.content,
					'url': this.voice_url,
					'user_type': this.userInfo.type,
				};
				let sign = this.sort2url(dic);
				//记录聊天信息
				uni.request({
					url: gData.site_url + 'Live.SetChat',
					method: 'POST',
					data: {
						'sign': sign,
						'uid': this.userInfo.id,
						'token': this.userInfo.token,
						'content': this.content,
						"length": this.voice_length,
						'status': status,
						'user_type': this.userInfo.type,
						'liveuid': this.liveInfo.liveuid,
						'courseid': this.liveInfo.courseid,
						'lessonid': this.liveInfo.lessonid,
						'type': this.voice_url.length > 1 ? '1' : '0',
						'url': this.voice_url
					},
					success: res => {
						//	console.log(res);
						if (res.data.data.code == 0) {
							//发送消息
							let obj = {
								"msg": [{
									"_method_": "SendMsg",
									"chatid": res.data.data.info[0].chatid,
									"action": "1",
									"token": this.userInfo.token,
									"uid": this.userInfo.id,
									"user_nickname": this.userInfo.user_nickname,
									"avatar": this.userInfo.avatar,
									"liveuid": this.liveInfo.liveuid,
									"content": this.content,
									"url": this.voice_url,
									"length": this.voice_length,
									"equipment": "app",
									"create_time": Math.floor((new Date()).getTime().toString() / 1000),
									"msgtype": 2,
									"status": status,
									"type": this.voice_url.length > 1 ? '1' : '0',
									"user_type": this.userInfo.type,
									'lessonid': this.liveInfo.lessonid,
								}],
								"retcode": "000000",
								"retmsg": "OK"
							};
							socket.emit('broadcast', obj);
							this.content = '';
							this.voice_url = '';
							this.voice_length = '';
						} else {
							uni.showToast({
								title: res.data.data.msg,
								icon: 'none'
							});
						}
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					},
				});
			},
			question(isQue) {
				if (this.isQue == false) {
					this.isQue = true;
				} else {
					this.isQue = false;
				}
			},
			sort2url(arr1) {
				var newkey = Object.keys(arr1).sort();
				var newObj = {};
				for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
					newObj[newkey[i]] = arr1[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
				}
				var text = "";
				for (var index in newObj) {
					text = text + index + "=" + newObj[index] + "&";
				}
				text = text.substr(0, text.length - 1);
				text += '&' + app.globalData.sign_key;

				return md5_js(text);
			},
			setSign(obj) { //排序的函数
				var str = '';
				var newkey = Object.keys(obj).sort();
				//先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
				var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
				for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
					//newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
					str += newkey[i] + '=' + obj[newkey[i]] + '&';
				}
				str += app.globalData.sign_key;
				var sign = md5_js.hex_md5(str);
				return sign;
			},
			pageToBottom() {
				if (this.list.length == 1){
					return;
				}
				let lastIndex = this.list.length - 1;
				if (lastIndex < 0) {
					return;
				}
				var that = this;
				setTimeout(() => {
				    that.scrollTop = 999;
					that.scrollInto = 'chat' + lastIndex;
				}, 500);
			},
			
		}
	}
</script>
<style>
	@import url("/static/css/infoplay.css");

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
</style>
