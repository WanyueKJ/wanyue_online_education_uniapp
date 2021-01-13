import $C from './config.js';
export default {
	common:{
		method: 'GET',
		header:{
			"content-type":"application/json"
		},
		data:{}
	},
	request(options = {}){
		
		options.url = $C.webUrl + options.url
		options.method = options.method || this.common.method
		options.header = options.header || this.common.header
		
		// 验证权限token
			console.log(options.url);
		//大坑,真机调试时,手机必须联网,否则连不上也不报错!!!!
		return uni.request(options);
		
	},
	get(url, data = {}, options={}){
		options.url = url;
		options.data = data;
		options.method = 'GET';
		return this.request(options);
	},
	post(url, data = {}, options={}){
		options.url = url;
		options.data = data;
		options.method = 'POST';
		return this.request(options);
	},
	
	
}