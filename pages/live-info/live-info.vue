<!-- 直播间页面 -->
<template>
	<view class="live-all-wrap">

		<!-- livety =5 声网直播 -->
		<template v-if="livetype == 5">
			<!-- 直播窗口 -->
			<template v-if="phonetype == 1">
				<view class="video-wrap">
					<TestText ref="videoAdnroid" tel="xxxxxx" class="video-wrap"></TestText>
				</view>
			</template>
			<template v-else-if="phonetype == 2">
				<view class="video-wrap">
					<dc-TestComponent ref="videoIos" appid="xxxxxx" class="video-wrap"></dc-TestComponent>
				</view>
			</template>
			<template v-else-if="phonetype == 3">
				<view id="remoteContainer" ref="remotecontainer">
					<view id="subremoteContainer" class="video-wrap"></view>
				</view>
			</template>
			<template v-else>
				<!-- #ifdef MP-WEIXIN -->
				<live-player id="player" src="wechatliveurl" mode="RTC" bindstatechange="playerStateChange" object-fit="fillCrop" />
				<!-- #endif -->
			</template>
		</template>
		<template v-else-if="livetype == 2">
			<view class="video-wrap">
				<video class="video-wrap" :src="pull" :poster="thumb" controls="true" autoplay="true" muted="false"></video>
			</view>
		</template>
		<template v-else-if="livetype == 3 || livetype == 6">
			<view class="video-wrap">
				<image :src="thumb" class="video-wrap36">
					<video id="myVideo" :src="pull" class="hidden" autoplay="true" @timeupdate="timeupdate" ref="video"
					 @loadedmetadata="loadedmetadata"></video>
				</image>
			</view>
			<view class="shadow">
				<view class="slider-box">
					<image :src="buttonimage" class="button" @click="pause"></image>
					<slider class="slider" @change="sliderChange" @changing="sliderChanging" block-size="16" :min="0" :max="duration"
					 :value="currentTime" activeColor="#64D3AD" />
				</view>
				<view class="timeshow">
					<text class="mm">{{start}}</text>
					<text class="ss">{{end}}</text>
				</view>
			</view>
		</template>
		<template v-else-if="livetype == 4 || livetype == 1">
			<swiper class="video-wrap swiper-no-swiping" :current="pptindex">
				<swiper-item v-for="(item,index) in ppts" class="video-wrap">
					<image :src="item.thumb" mode="aspectFill" class="pptimage"></image>
					<view class="pptnum">{{pptindex +'/'+ppts.length}}</view>
				</swiper-item>
			</swiper>
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
		<view style="background-color: #FFFFFF; height: 90rpx;" class="flex align-center justify-center font-weight-bold course-tab">
			<view class="mx-5" @click="changeXXK(index)" v-for="(item, index) in tabBars" :key="index" :class="tabIndex === index ? 'text-main font-lg' : 'font-md text-light-muted'">
				{{item.name}}
			</view>
		</view>
		<swiper class="swiper-box" :current="tabIndex" @change="onChangeTab" :style="{height : scrollH + 'rpx'}" style="width: 100%;background-color: #F4F5F6;">

			<!-- v-if="tabIndex ==0" -->
			<swiper-item>
				<view v-if="tabIndex ==0" class="zhinan">
					<text class="zhinantext">听课指南</text>
					<text class="intr">{{intr}}</text>
				</view>
				<scroll-view :style="{height : scrollH - 230+ 'rpx'}" class="scroll1" scroll-y="true" :scroll-into-view="scrollInto"
				 scroll-with-animation style="position: absolute;left:0; top: 400; 
			        right: 0; bottom: 10rrpx;">
					<block v-for="(item,index) in list" :key="index">
						<view v-if="item.user_type == 1" :id="'chat' +index" class="messagebottom">
							<image :src="item.avatar" class="rounded"></image>
							<view class="message">
								<view class="jiangshiview">
									<text class="user_nickname">{{item.user_nickname}}</text>
									<view class="jiangshi">讲师</view>
								</view>
								<text class="textmessage2">{{item.content}}</text>
							</view>
							<text v-if="item.status == '1'" class="wen2">问</text>
						</view>
					</block>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :style="{height : scrollH - 100+ 'rpx'}" class="scroll1" scroll-y="true" :scroll-into-view="scrollInto"
				 scroll-with-animation style="position: absolute;left:0; top: 400; 
			        right: 0; bottom: 10rrpx; ">
					<block v-for="(item,index) in list" :key="index">
						<!-- :style=" ? 'flex-direction: row-reverse;' : '' -->
						<template v-if="item.uid === myID">
							<view :id="'chat' +index" class="messagebottom2">
								<image :src="item.avatar" class="rounded"></image>
								<view class="message">
									<text class="user_nickname2">{{item.user_nickname}}</text>
									<!-- <text class="textmessage">{{item.content}}</text> -->
									<rich-text class="textmessage" :nodes="item.content"></rich-text>
								</view>
								<text v-if="item.status == '1'" class="wen">问</text>
							</view>
						</template>
						<template v-else>
							<view :id="'chat' +index" class="messagebottom">
								<image :src="item.avatar" class="rounded"></image>
								<view class="message">
									<template v-if="item.user_type == 1">
										<view class="jiangshiview">
											<text class="user_nickname">{{item.user_nickname}}</text>
											<view class="jiangshi">讲师</view>
										</view>
									</template>
									<template v-else>
										<text class="user_nickname">{{item.user_nickname}}</text>
									</template>
									
									<rich-text class="textmessage2" :nodes="item.content.replace('\\[\\w+\\]','')"></rich-text>
								</view>
								<text v-if="item.status == '1'" class="wen2">问</text>
							</view>

						</template>
					</block>
				</scroll-view>
			</swiper-item>

			<swiper-item>
				<scroll-view :style="{height : scrollH + 'rpx'}" class="scroll1" scroll-y="true" :scroll-into-view="scrollInto"
				 scroll-with-animation style="position: absolute;left:0; top: 400; 
				    right: 0; bottom: 10rrpx; ">
					<block v-for="(item,index) in list" :key="index">
						<template v-if="item.uid === myID">
							<view v-if="item.status == '1'" :id="'chat' +index" class="messagebottom2">
								<image :src="item.avatar" class="rounded"></image>
								<view class="message">
									<text class="user_nickname2">{{item.user_nickname}}</text>
									<text class="textmessage">{{item.content}}</text>
								</view>
								<text class="wen">问</text>
							</view>
						</template>
						<template v-else>
							<view v-if="item.status == '1'" :id="'chat' +index" class="messagebottom">
								<image :src="item.avatar" class="rounded"></image>
								<view class="message">
									<template v-if="item.user_type == 1">
										<view class="jiangshiview">
											<text class="user_nickname">{{item.user_nickname}}</text>
											<view class="jiangshi">讲师</view>
										</view>
									</template>
									<template v-else>
										<text class="user_nickname">{{item.user_nickname}}</text>
									</template>
									<text class="textmessage2">{{item.content}}</text>
								</view>
								<text class="wen2">问</text>
							</view>
						</template>
					</block>
				</scroll-view>
			</swiper-item>
		</swiper>
		<template v-if="tabIndex != 2">
			<view class="inputbottom" :style="'bottom:' + inputbuttom +'rpx'">
				<view class="inputclass">
					<view class="send" @click="send">发送</view>
					<!-- <text>表情</text> -->
					<view class="inputborder">
						<input ref="input1" hold-keyboard='true' @input='inputing' adjust-position="false" type="text" confirm-type="send"
						 @keyup.enter='send' @confirm="send" v-model="content" class="input" placeholder="我来说几句～" />
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
			
		</template>
	</view>
</template>


<script>
	import io from '@hyoga/uni-socket.io';
	import md5_js from "@/static/js/md5.js";
	// #ifdef H5
	import AgoraRTCH5 from "./AgoraRTCSDK-3.0.1.js";
	// #endif
	// #ifdef MP-WEIXIN
	import AogoraWechat from "./Agora_Miniapp_SDK_for_WeChat.js"
	// #endif
	const app = getApp();
	//连接socket
	const socket = io((app.globalData.socket_url), {
		query: {},
		transports: ['websocket', 'polling'],
		timeout: 5000
	});

	export default {
		
		data() {
			return {
				scrollH: 0,
				tabIndex: 0,
				tabBars: [{
					name: "讲师区"
				}, {
					name: "讨论区"
				}, {
					name: "问答区"
				}],
				scrollInto: "",
				scrollTop: "",
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
				myID: '',
				content: '',
				islive: '已结束',
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
				pptindex: 0,
				emojylist: [],
				showemojy: false,
				inputbuttom: 0

			}
		},
		//agora离开通道
		onUnload: function() {
			// #ifdef H5
			AgoreRTCH5.client().leave();
			// #endif
			// #ifdef MP-WEIXIN
			AogoraWechat.Client().level();
			// #endif
		},
		onHide() {
			socket.disconnect();
		},
		onReady() {

			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.screenHeight - 60;
				}
			})
			this.pageToBottom();
		},
		// sort unde 套餐 0 内容 1课程2直播
		//1图文2视频3音频 4ppt直播 5视频直播6音频直播 7授课直播（白板）
		onLoad(option) {

			console.log(option);
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
			this.userInfo = app.globalData.userinfo;
			this.liveInfo.liveuid = option.liveuid;
			this.liveInfo.courseid = option.courseid;
			this.liveInfo.lessonid = option.lessonid;
			this.thumb = option.thumb;


			this.liveLive(option.liveuid, option.courseid, option.lessonid);

			socket.emit('conn', {
				uid: this.userInfo.id, //进入该房间的学生id 假如等于下面的房间id, 那即为老师进入房间
				roomnum: this.liveInfo.liveuid, //房间号,即老师id
				nickname: this.userInfo.user_nickname,
				stream: this.liveInfo.liveuid + '_' + this.liveInfo.courseid + '_0', //老师id_课程id_课时id
				equipment: 'uni-app', //环境
				token: this.userInfo.token,
				avatar: this.userInfo.avatar,
				sign: 0, //签名 默认为0
				usertype: this.userInfo.type, //0学生, 1老师
			});
			socket.on('conn', (data) => {
				console.log('ws 已连接 ' + data);
				this.isConnectSocket = true; //已连接
			});
			let that = this;
			//监听服务端消息
			socket.on('broadcastingListen', (data) => {
				let msgInfo = JSON.parse(data).msg[0];
				console.log(msgInfo);
				if (msgInfo.content != undefined) {
					this.list.push(msgInfo);
				}
				if (msgInfo._method_ == "SendMsg") {
					if (msgInfo.action == "0") {
						this.Usercount += 1;
						console.log('用户进入');
					}

				}
				if (msgInfo._method_ == 'disconnect') {
					if (this.Usercount != 0) {
						this.Usercount -= 1;
					}

					console.log('用户离开');
				}
				if (msgInfo._method_ == 'setPPT') {
					if (msgInfo.action == '0') {
						var item = {
							'id': msgInfo.pptid,
							'thumb': msgInfo.thumb
						};
						this.ppts.push(item);
						console.log('添加ppt');
					} else if (msgInfo.action == '1') {
						console.log('ppt删除');
						var pptlist = this.ppts;
						for (let i = 0; i < pptlist.length; i++) {
							var item = pptlist[i];
							if (item.id == msgInfo.pptid) {

								this.ppts.splice(i, 1);
							}
						}
					} else if (msgInfo.action == '2') {
						this.pptindex = parseInt(msgInfo.index);
						console.log('ppt切换索引');
					}
				}
				// console.log('收到消息');

				// 滚动到底部
				this.pageToBottom();

			});
			this.myID = app.globalData.userinfo.id;
			this.GetChat();

		},
		methods: {
			selectemojy(name){
				console.log('infplay');
				this.$input1.value += name;
				
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
						'type': 0
					},
					success: res => {
						// console.log('获取聊天记录');
						// console.log(res);
						this.list = res.data.data.info;
					},
				});
			},
			async changeXXK(index) {

				this.tabIndex = index;
				setTimeout(() => {
					this.pageToBottom();
				}, 500);
				return this.tabIndex;
			},
			onChangeTab(e) {
				console.log('切换当前索引' + e.detail.current);
				this.tabIndex = e.detail.current
			},
			decypt(code) {
				var newcode = '';
				var str = '1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp';
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
				//在小程序里编写代码
				setTimeout(() => {
					//初始化
					let client = AogoraWechat.Client();
					client.setRole('audience');
					client.init(this.decypt(agoraappid), () => {
						console.log('小程序初始化成功');
						//加入通道
						client.join('', agorastream, uid, () => {
							console.log('加入通道成功');
						}, e => {
							console.log('加入通道失败')
						});

					}, e => {
						console.log('小程序初始化失败');
					});

					//订阅远端流
					client.on("stream-added", e => {
						client.subscribe(evt.uid, (res) => {
							console.log("订阅视频流成功playUrl" + res);
							this.wechatliveurl = res;
						}, (err) => {
							console.log("订阅视频流错误", err);
							uni.showToast({
								icon: "none",
								title: "订阅视频流错误"
							});
						});
					});
					//远端流移除
					client.on("stream-removed", e => {
						console.log('远端流移除');
					});
					//重连机制
					client.rejoin('', agorastream, uid, '', () => {
						console.log('重连加入通道成功');
					}, e => {
						console.log('重连加入通道失败');
					});


				}, 0);
			},
			agoraH5(agoraappid, agorastream) {

				var _this = this;
				setTimeout(() => {
					// var isgo = AgoreRTCH5.checkSystemRequirements();
					// if (!isgo) {
					// 	alert('当前浏览器不支持，请更换浏览器或者升级该浏览器，如:谷歌浏览器');
					// }
					// 4ff617f955ec4e5f89414cc06855cd46
					//demoChannel1

					let client = AgoraRTCH5.createClient({
						mode: "live",
						codec: "vp8",
					});
					AgoraRTCH5.client = client;
					client.init(_this.decypt(agoraappid));
					client.setClientRole('audience');
					// 加入频道
					client.join("", agorastream, null, (uid) => {
						console.log("H5加入通道成功")
					}, null);
					// 有远端用户发布流时进行订阅 
					client.on("stream-added", function(evt) {
						client.subscribe(evt.stream, null);
					});
					// 订阅成功后播放主播的流
					client.on("stream-subscribed", function(evt) {
						let stream = evt.stream;
						let streamId = String(stream.getId());
						console.log("订阅成功后播放主播的流streamId：" + streamId)
						//let streamview = document.createElement("view");
						let streamview = document.getElementById("subremoteContainer")
						streamview.id = streamId;
						//streamview.style.transform = "rotateY(180deg)";
						document.getElementById("remoteContainer").appendChild(streamview);
						stream.play(streamId);
					});
					// 远端用户取消发布流时，关闭及移除对应的流。
					client.on("stream-removed", function(evt) {
						let stream = evt.stream;
						let streamId = String(stream.getId());
						stream.close();
						console.log("远端用户取消发布流时，关闭及移除对应的流。");

					});
					// 远端用户离开频道时，关闭及移除对应的流。
					client.on("peer-leave", function(evt) {
						let stream = evt.stream;
						let streamId = String(stream.getId());
						stream.close();
						console.log("远端用户离开频道时，关闭及移除对应的流。");
					});
				}, 0);

			},
			// 进入直播
			liveLive(liveuid, courseid, lessonid) {
				var _this = this;
				let gData = app.globalData;
				_this.agorauid = gData.userinfo.id;
				console.log(liveuid, courseid, lessonid);
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
						console.log(res);
						if (res.data.data.code == 0) {
							this.pull = this.decypt(res.data.data.info[0].pull);
							this.ppts = res.data.data.info[0].ppts;
							this.pptindex = res.data.data.info[0].pptindex;
							this.userInfo.user_type = res.data.data.info[0].user_type;
							let isLive = res.data.data.info[0].islive;
							if (isLive == 0) {
								this.islive = '未开始';
								this.diancolor = '#969696';
							} else if (isLive == 1) {
								this.islive = '直播中';
								this.diancolor = '#38DAA6';
							} else {
								this.islive = '已结束';
								this.diancolor = '#969696';
							}
							this.intr = res.data.data.info[0].intr;
							//1图文2视频3音频 4ppt直播 5视频直播6音频直播 7授课直播（白板）
							this.livetype = res.data.data.info[0].livetype;
							if (this.livetype == 3 || this.livetype == 6) {
								this.videoContext = uni.createVideoContext('myVideo');
								this.buttonimage = '../../static/voice2.png';
							}
							this.Usercount = parseInt(res.data.data.info[0].nums);
							_this.agoraappid = res.data.data.info[0].sound_appid,
								_this.agoramRoomName = res.data.data.info[0].stream,
								console.log("获取数据agoraappid：" + _this.agoraappid);
							console.log("获取数据agoramRoomName：" + _this.agoramRoomName);
							if (this.livetype == 5) {
								if (_this.phonetype == 2) {
									console.log('接口返回进入ios')
									setTimeout(() => {
										_this.$nextTick(() => {
											_this.$refs.videoIos.focus({
												'appid': _this.agoraappid,
												'mRoomName': _this.agoramRoomName,
												'uid': gData.userinfo.id
											});
										});
									}, 0);
								} else if (_this.phonetype == 1) {
									console.log('接口返回进入android')

									setTimeout(() => {
										_this.$nextTick(() => {
											_this.$refs.videoAdnroid.clearTel(
												_this.agoraappid + '声' + _this.agoramRoomName + '网' + gData.userinfo.id
											);
										});
									}, 0);

								} else if (_this.phonetype == 3) {
									console.log('接口返回进入H5')
									_this.agoraH5(_this.agoraappid, _this.agoramRoomName);
								} else if (_this.phonetype == 4) {
									_this.agoraWechat(_this.agoraappid, _this.agoramRoomName, gData.userinfo.id)
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
			inputing(event) {
				console.log(event);
				
			},
			send(event) {

				if (this.content === '') {
					return uni.showToast({
						title: '消息不能为空',
						icon: 'none'
					});
				}
				console.log('发送消息');
				console.log(this.content);
				console.log(event.detail.value);
				let userInfo = app.globalData.userinfo;
				let status = (this.isQue === true) ? "1" : "0";
				//发送消息
				let obj = {
					"msg": [{
						"_method_": "SendMsg",
						"action": "1",
						"token": userInfo.token,
						"uid": '' + userInfo.id,
						"user_nickname": '' + userInfo.user_nickname,
						"avatar": '' + userInfo.avatar,
						"liveuid": '' + this.liveInfo.liveuid,
						"content": '' + this.content,
						"equipment": "uni-app",
						"create_time": Math.floor((new Date()).getTime().toString() / 1000),
						"msgtype": 2,
						"status": status,
						"type": "0",
						"user_type": this.userInfo.type,
						'lessonid': this.liveInfo.lessonid,
					}],
					"retcode": "000000",
					"retmsg": "OK"
				};

				if (this.isConnectSocket == true) {
					socket.emit('broadcast', obj);
					this.tabIndex = 1;
					let gData = app.globalData;
					let liveuid = this.liveInfo.liveuid;
					let courseid = this.liveInfo.courseid;
					let lessonid = this.liveInfo.lessonid;
					// 签名
					let sign = this.sort2url({
						'uid': this.userInfo.id,
						'liveuid': liveuid,
						'courseid': courseid,
						'lessonid': this.liveInfo.lessonid,
						'type': '0',
						'content': this.content,
						'url': '',
						'user_type': this.userInfo.type,
					});
					//记录聊天信息
					uni.request({
						url: gData.site_url + 'Live.SetChat',
						method: 'GET',
						data: {
							'uid': this.userInfo.id,
							'token': this.userInfo.token,
							'liveuid': liveuid,
							'courseid': courseid,
							'lessonid': lessonid,
							'type': 0,
							'content': this.content,
							'url': '',
							'length': 0,
							"msgtype": 2,
							'status': status,
							'user_type': this.userInfo.type,
							'sign': sign
						},
						success: res => {
							// console.log(res);
							this.content = '';
						},
						fail: () => {
							uni.showToast({
								icon: 'none',
								title: '网络错误'
							});
						},
					});
				}
			},
			question(isQue) {

				if (this.isQue == false) {
					// 切换到问答区
					// this.tabIndex = 2;
					this.isQue = true;
				} else {
					// this.tabIndex = 0;
					this.isQue = false;
				}
			},
			// 字典序排序
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
				return md5_js.hex_md5(text);
			},

			// 滚动到底部
			pageToBottom() {
				let lastIndex = this.list.length - 1;

				if (lastIndex < 0) {
					return;
				}

				// 大坑, vue采用虚拟dom, 刚发送消息时最后一条dom元素是取不到的!!! 必须用异步等元素渲染
				var _this = this;
				setTimeout(() => {
					_this.scrollInto = 'chat' + lastIndex;
				}, 500);

			},
			pause() {
				if (this.status == 0) {
					this.status = 1;
					this.videoContext.play();
					this.buttonimage = '../../static/voice2.png';
				} else {
					this.status = 0;
					this.videoContext.pause();
					this.buttonimage = '../../static/voice.png';
				}


			},
			timeupdate(event) {

				if (event.detail.detail) {
					this.currentTime = event.detail.detail.currentTime;
					this.duration = event.detail.detail.duration;
					this.start = this.calcTimer(this.currentTime);
					this.end = this.calcTimer(this.duration);
				} else {
					this.currentTime = event.detail.currentTime;
					this.duration = event.detail.duration;
					this.start = this.calcTimer(event.detail.currentTime);
					this.end = this.calcTimer(event.detail.duration);
				}
			},

			// 拖动进度条
			sliderChange(data) {
				this.videoContext.seek(data.detail.value);
			},

			//拖动中
			sliderChanging(data) {
				this.currentTime = data.detail.value;
				this.start = this.calcTimer(data.detail.value);
			},

			loadedmetadata(data) {
				this.duration = data.detail.duration;
				this.start = this.calcTimer(data.detail.duration);
				console.log('音频加载完成');
			},
			calcTimer(timer) {
				if (timer === 0 || typeof timer !== 'number') {
					return '00:00'
				}
				let mm = Math.floor(timer / 60)
				let ss = Math.floor(timer % 60)
				if (mm < 10) {
					mm = '0' + mm
				}
				if (ss < 10) {
					ss = '0' + ss
				}
				return mm + ':' + ss
			},
		}

	}
</script>


<style>
	@import url("/static/css/infoplay.css");

	.inputbottom {
		height: 130rpx;
		background-color: #FFFFFF;
		position: fixed;
		/* bottom: 0rpx; */
		width: 750rpx;

	}

</style>
