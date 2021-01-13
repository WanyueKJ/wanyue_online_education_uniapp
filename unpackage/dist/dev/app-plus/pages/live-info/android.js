"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************************************!*\
  !*** /Users/wangxiaowen/Desktop/Kaiyuan/main.js?{"page":"pages%2Flive-info%2Fandroid"} ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_live_info_android_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/live-info/android.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_live_info_android_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_live_info_android_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/live-info/android'\n        _pages_live_info_android_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_live_info_android_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsaUZBQUc7QUFDWCxRQUFRLGlGQUFHO0FBQ1gsUUFBUSxpRkFBRztBQUNYLGdCQUFnQixpRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9saXZlLWluZm8vYW5kcm9pZC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2xpdmUtaW5mby9hbmRyb2lkJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** /Users/wangxiaowen/Desktop/Kaiyuan/main.js?{"type":"appStyle"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************************************************************!*\
  !*** /Users/wangxiaowen/Desktop/Kaiyuan/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangxiaowen/Desktop/Kaiyuan/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "uniicons",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url('~@/static/uni.ttf') format('truetype')"
    },
    {
      "fontFamily": "iconfont",
      "src": "url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')"
    }
  ],
  "uni-flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "uni-flex-item": {
    "flex": 1
  },
  "uni-row": {
    "flexDirection": "row"
  },
  "uni-column": {
    "flexDirection": "column"
  },
  "uni-link": {
    "color": "#576B95",
    "fontSize": "26rpx"
  },
  "uni-center": {
    "textAlign": "center"
  },
  "uni-inline-item": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-page-head": {
    "paddingTop": "35rpx",
    "paddingRight": "35rpx",
    "paddingBottom": "35rpx",
    "paddingLeft": "35rpx",
    "textAlign": "center"
  },
  "uni-page-head-title": {
    "display": "inline-block",
    "paddingTop": 0,
    "paddingRight": "40rpx",
    "paddingBottom": 0,
    "paddingLeft": "40rpx",
    "fontSize": "30rpx",
    "height": "88rpx",
    "lineHeight": "88rpx",
    "color": "#BEBEBE",
    "boxSizing": "border-box",
    "borderBottom": "2rpx solid #D8D8D8"
  },
  "uni-page-body": {
    "width": 100,
    "flexGrow": 1,
    "overflowX": "hidden"
  },
  "uni-padding-wrap": {
    "width": "690rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-word": {
    "textAlign": "center",
    "paddingTop": "200rpx",
    "paddingRight": "100rpx",
    "paddingBottom": "200rpx",
    "paddingLeft": "100rpx"
  },
  "uni-title": {
    "fontSize": "30rpx",
    "fontWeight": "500",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0,
    "lineHeight": 1.5
  },
  "uni-text": {
    "fontSize": "28rpx"
  },
  "uni-text-gray": {
    "color": "#cccccc"
  },
  "uni-text-small": {
    "fontSize": "24rpx"
  },
  "uni-common-mb": {
    "marginBottom": "30rpx"
  },
  "uni-common-pb": {
    "paddingBottom": "30rpx"
  },
  "uni-common-pl": {
    "paddingLeft": "30rpx"
  },
  "uni-common-mt": {
    "marginTop": "30rpx"
  },
  "uni-bg-red": {
    "background": "#F76260",
    "color": "#FFFFFF"
  },
  "uni-bg-green": {
    "background": "#09BB07",
    "color": "#FFFFFF"
  },
  "uni-bg-blue": {
    "background": "#007AFF",
    "color": "#FFFFFF"
  },
  "uni-h1": {
    "fontSize": "80rpx",
    "fontWeight": "700"
  },
  "uni-h2": {
    "fontSize": "60rpx",
    "fontWeight": "700"
  },
  "uni-h3": {
    "fontSize": "48rpx",
    "fontWeight": "700"
  },
  "uni-h4": {
    "fontSize": "36rpx",
    "fontWeight": "700"
  },
  "uni-h5": {
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-h6": {
    "fontSize": "24rpx",
    "color": "#8f8f94"
  },
  "uni-bold": {
    "fontWeight": "bold"
  },
  "uni-ellipsis": {
    "overflow": "hidden",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "uni-btn-v": {
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-form-item": {
    "display": "flex",
    "width": 100,
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-label": {
    "width": "210rpx",
    "wordWrap": "break-word",
    "wordBreak": "break-all",
    "textIndent": "20rpx"
  },
  "uni-input": {
    "height": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "25rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "25rpx",
    "lineHeight": "50rpx",
    "fontSize": "28rpx",
    "background": "#FFF",
    "flex": 1
  },
  "uni-loadmore": {
    "height": "80rpx",
    "lineHeight": "80rpx",
    "textAlign": "center",
    "paddingBottom": "30rpx"
  },
  "uni-badge": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-default": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-primary": {
    "color": "#ffffff",
    "backgroundColor": "#007aff"
  },
  "uni-badge-green": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-success": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-warning": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-yellow": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-danger": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-red": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-purple": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-badge-royal": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-collapse-content": {
    "height": 0,
    "width": 100,
    "overflow": "hidden"
  },
  "uni-card": {
    "background": "#fff",
    "borderRadius": "8rpx",
    "marginTop": "20rpx",
    "marginRight": 0,
    "marginBottom": "20rpx",
    "marginLeft": 0,
    "position": "relative",
    "boxShadow": "0 2rpx 4rpx rgba(0, 0, 0, .3)"
  },
  "uni-card-content": {
    "fontSize": "30rpx"
  },
  "uni-card-content-inner": {
    "position": "relative",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "uni-card-footer": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "color": "#6d6d72",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "WebkitTransform:before": "scaleY(.5)",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc"
  },
  "uni-card-header": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "fontSize": "36rpx",
    "position:before:after": "absolute",
    "top:before:after": 0,
    "right:before:after": 0,
    "left:before:after": 0,
    "height:before:after": "2rpx",
    "content:before:after": "''",
    "WebkitTransform:before:after": "scaleY(.5)",
    "transform:before:after": "scaleY(.5)",
    "backgroundColor:before:after": "#c8c7cc",
    "bottom:after": 0
  },
  "uni-card-media": {
    "justifyContent": "flex-start"
  },
  "uni-card-media-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-card-media-body": {
    "height": "84rpx",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  "uni-card-media-text-top": {
    "lineHeight": "36rpx",
    "fontSize": "34rpx"
  },
  "uni-card-media-text-bottom": {
    "lineHeight": "30rpx",
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-card-link": {
    "color": "#007AFF"
  },
  "uni-list": {
    "backgroundColor": "#FFFFFF",
    "position": "relative",
    "width": 100,
    "display": "flex",
    "flexDirection": "column",
    "position:after": "absolute",
    "zIndex:after": 10,
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "1",
    "content:after": "''",
    "WebkitTransform:after": "scaleY(.5)",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc",
    "position::before": "absolute",
    "zIndex::before": 10,
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc"
  },
  "uni-list-cell": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "position::after": "absolute",
    "zIndex::after": 3,
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "30rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-hover": {
    "backgroundColor": "#eeeeee"
  },
  "uni-list-cell-pd": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-left": {
    "whiteSpace": "nowrap",
    "fontSize": "28rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-db": {
    "flex": 1
  },
  "uni-list-cell-right": {
    "flex": 1
  },
  "uni-list-cell-divider": {
    "position": "relative",
    "display": "flex",
    "color": "#999999",
    "backgroundColor": "#f7f7f7",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "position::before": "absolute",
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc",
    "position::after": "absolute",
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "0rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-navigate": {
    "fontSize": "30rpx",
    "paddingTop": "22rpx",
    "paddingRight": "36rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "lineHeight": "48rpx",
    "position": "relative",
    "display": "flex",
    "boxSizing": "border-box",
    "width": 100,
    "flex": 1,
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "uni-navigate-badge": {
    "paddingRight": "50rpx"
  },
  "uni-triplex-row": {
    "display": "flex",
    "flex": 1,
    "width": 100,
    "boxSizing": "border-box",
    "flexDirection": "row",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-triplex-right": {
    "display": "flex",
    "flexDirection": "column",
    "width": 16,
    "textAlign": "right"
  },
  "uni-triplex-left": {
    "display": "flex",
    "flexDirection": "column",
    "width": 84
  },
  "uni-media-list": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "boxSizing": "border-box",
    "display": "flex",
    "width": 100,
    "flexDirection": "row"
  },
  "uni-pull-right": {
    "flexDirection": "row-reverse"
  },
  "uni-media-list-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-media-list-body": {
    "height": "84rpx",
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "overflow": "hidden"
  },
  "uni-media-list-text-top": {
    "width": 100,
    "lineHeight": "36rpx",
    "fontSize": "30rpx"
  },
  "uni-media-list-text-bottom": {
    "width": 100,
    "lineHeight": "30rpx",
    "fontSize": "26rpx",
    "color": "#8f8f94"
  },
  "uni-grid-9": {
    "background": "#f2f2f2",
    "width": "750rpx",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "borderTop": "2rpx solid #eee"
  },
  "uni-grid-9-item": {
    "width": "250rpx",
    "height": "200rpx",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottom": "2rpx solid",
    "borderRight": "2rpx solid",
    "borderColor": "#eeeeee",
    "boxSizing": "border-box"
  },
  "no-border-right": {
    "borderRight": "none"
  },
  "uni-grid-9-image": {
    "width": "100rpx",
    "height": "100rpx"
  },
  "uni-grid-9-text": {
    "width": "250rpx",
    "lineHeight": "4rpx",
    "height": "40rpx",
    "textAlign": "center",
    "fontSize": "30rpx"
  },
  "uni-grid-9-item-hover": {
    "background": "rgba(0, 0, 0, 0.1)"
  },
  "uni-uploader": {
    "flex": 1,
    "flexDirection": "column"
  },
  "uni-uploader-head": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "uni-uploader-info": {
    "color": "#B2B2B2"
  },
  "uni-uploader-body": {
    "marginTop": "16rpx"
  },
  "uni-uploader__files": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "uni-uploader__file": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__img": {
    "display": "block",
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__input-box": {
    "position": "relative",
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "208rpx",
    "height": "208rpx",
    "border": "2rpx solid #D9D9D9",
    "content:before": "\" \"",
    "position:before": "absolute",
    "top:before": 50,
    "left:before": 50,
    "WebkitTransform:before": "translate(-50%, -50%)",
    "transform:before": "translate(-50%, -50%)",
    "backgroundColor:before": "#D9D9D9",
    "content:before:after": "\" \"",
    "position:before:after": "absolute",
    "top:before:after": 50,
    "left:before:after": 50,
    "WebkitTransform:before:after": "translate(-50%, -50%)",
    "transform:before:after": "translate(-50%, -50%)",
    "backgroundColor:before:after": "#D9D9D9",
    "width:before": "4rpx",
    "height:before": "79rpx",
    "width:after": "79rpx",
    "height:after": "4rpx",
    "borderColor:active": "#999999",
    "backgroundColor:active:before": "#999999",
    "backgroundColor:active:before:active:after": "#999999"
  },
  "uni-uploader__input": {
    "position": "absolute",
    "zIndex": 1,
    "top": 0,
    "left": 0,
    "width": 100,
    "height": 100,
    "opacity": 0
  },
  "feedback-title": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "color": "#8f8f94",
    "fontSize": "28rpx"
  },
  "feedback-quick": {
    "position": "relative",
    "paddingRight": "40rpx",
    "fontFamily:after": "uniicons",
    "fontSize:after": "40rpx",
    "content:after": "'\\e581'",
    "position:after": "absolute",
    "right:after": 0,
    "top:after": 50,
    "color:after": "#bbbbbb",
    "WebkitTransform:after": "translateY(-50%)",
    "transform:after": "translateY(-50%)"
  },
  "feedback-body": {
    "background": "#fff"
  },
  "feedback-textare": {
    "height": "200rpx",
    "fontSize": "34rpx",
    "lineHeight": "50rpx",
    "width": 100,
    "boxSizing": "border-box",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "feedback-input": {
    "fontSize": "34rpx",
    "height": "50rpx",
    "minHeight": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "lineHeight": "50rpx"
  },
  "feedback-uploader": {
    "paddingTop": "22rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "20rpx"
  },
  "feedback-star": {
    "fontFamily": "uniicons",
    "fontSize": "40rpx",
    "marginLeft": "6rpx",
    "content:after": "'\\e408'"
  },
  "feedback-star-view": {
    "marginLeft": "20rpx"
  },
  "feedback-submit": {
    "background": "#007AFF",
    "color": "#FFFFFF",
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "uni-input-group": {
    "position": "relative",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "border": 0,
    "backgroundColor": "#ffffff",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc",
    "position:after": "absolute",
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "2rpx",
    "content:after": "''",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "uni-input-row": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "fontSize": "28rpx",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between"
  },
  "uni-textarea": {
    "width": 100,
    "background": "#FFF"
  },
  "uni-tab-bar": {
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden",
    "height": 100
  },
  "uni-swiper-tab": {
    "width": 100,
    "whiteSpace": "nowrap",
    "lineHeight": "100rpx",
    "height": "100rpx",
    "borderBottom": "1upx solid #EEEEEE"
  },
  "swiper-tab-list": {
    "fontSize": "30rpx",
    "width": "150rpx",
    "display": "inline-block",
    "textAlign": "center",
    "color": "#969696",
    "fontWeight": "bold"
  },
  "uni-tab-bar-loading": {
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0
  },
  "uni-comment": {
    "paddingTop": "5rpx",
    "paddingRight": 0,
    "paddingBottom": "5rpx",
    "paddingLeft": 0,
    "display": "flex",
    "flexGrow": 1,
    "flexDirection": "column"
  },
  "uni-comment-list": {
    "flexWrap": "nowrap",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "marginTop": "10rpx",
    "marginRight": 0,
    "marginBottom": "10rpx",
    "marginLeft": 0,
    "width": 100,
    "display": "flex"
  },
  "uni-comment-face": {
    "width": "70rpx",
    "height": "70rpx",
    "borderRadius": 100,
    "marginRight": "20rpx",
    "flexShrink": 0,
    "overflow": "hidden"
  },
  "uni-comment-body": {
    "width": 100
  },
  "uni-comment-top": {
    "lineHeight": 1.5,
    "justifyContent": "space-between"
  },
  "uni-comment-date": {
    "lineHeight": "38rpx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "display": "flex",
    "flexGrow": 1
  },
  "uni-comment-content": {
    "lineHeight": 1.6,
    "fontSize": "28rpx",
    "paddingTop": "8rpx",
    "paddingRight": 0,
    "paddingBottom": "8rpx",
    "paddingLeft": 0
  },
  "uni-comment-replay-btn": {
    "background": "#FFF",
    "fontSize": "24rpx",
    "lineHeight": "28rpx",
    "paddingTop": "5rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "20rpx",
    "borderRadius": "30rpx",
    "color": "#333333",
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx"
  },
  "uni-swiper-msg": {
    "width": 100,
    "paddingTop": "12rpx",
    "paddingRight": 0,
    "paddingBottom": "12rpx",
    "paddingLeft": 0,
    "flexWrap": "nowrap",
    "display": "flex"
  },
  "uni-swiper-msg-icon": {
    "width": "50rpx",
    "marginRight": "20rpx"
  },
  "uni-product-list": {
    "display": "flex",
    "width": 100,
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "uni-product": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "display": "flex",
    "flexDirection": "column"
  },
  "image-view": {
    "height": "330rpx",
    "width": "330rpx",
    "marginTop": "12rpx",
    "marginRight": 0,
    "marginBottom": "12rpx",
    "marginLeft": 0
  },
  "uni-product-image": {
    "height": "330rpx",
    "width": "330rpx"
  },
  "uni-product-title": {
    "width": "300rpx",
    "wordBreak": "break-all",
    "display": "-webkit-box",
    "overflow": "hidden",
    "lineHeight": 1.5,
    "textOverflow": "ellipsis",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2
  },
  "uni-product-price": {
    "marginTop": "10rpx",
    "fontSize": "28rpx",
    "lineHeight": 1.5,
    "position": "relative"
  },
  "uni-product-price-original": {
    "color": "#e80080"
  },
  "uni-product-price-favour": {
    "color": "#888888",
    "textDecoration": "line-through",
    "marginLeft": "10rpx"
  },
  "uni-product-tip": {
    "position": "absolute",
    "right": "10rpx",
    "backgroundColor": "#ff3333",
    "color": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx",
    "borderRadius": "5rpx"
  },
  "uni-timeline": {
    "marginTop": "35rpx",
    "marginRight": 0,
    "marginBottom": "35rpx",
    "marginLeft": 0,
    "display": "flex",
    "flexDirection": "column",
    "position": "relative"
  },
  "uni-timeline-item": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "paddingBottom": "20rpx",
    "boxSizing": "border-box",
    "overflow": "hidden"
  },
  "uni-timeline-item-divider": {
    "position::before": "absolute",
    "left::before": "15rpx",
    "width::before": "1rpx",
    "height::before": 100,
    "content::before": "''",
    "background::before": "inherit",
    "position::before::after": "absolute",
    "left::before::after": "15rpx",
    "width::before::after": "1rpx",
    "height::before::after": 100,
    "content::before::after": "''",
    "background::before::after": "inherit",
    "bottom::before": 100,
    "top::after": 100
  },
  "uni-icon": {
    "fontFamily": "uniicons",
    "fontSize": "24",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "display": "inline-block",
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "uni-icon-contact": {
    "content:before": "'\\e100'"
  },
  "uni-icon-person": {
    "content:before": "'\\e101'"
  },
  "uni-icon-personadd": {
    "content:before": "'\\e102'"
  },
  "uni-icon-contact-filled": {
    "content:before": "'\\e130'"
  },
  "uni-icon-person-filled": {
    "content:before": "'\\e131'"
  },
  "uni-icon-personadd-filled": {
    "content:before": "'\\e132'"
  },
  "uni-icon-phone": {
    "content:before": "'\\e200'"
  },
  "uni-icon-email": {
    "content:before": "'\\e201'"
  },
  "uni-icon-chatbubble": {
    "content:before": "'\\e202'"
  },
  "uni-icon-chatboxes": {
    "content:before": "'\\e203'"
  },
  "uni-icon-phone-filled": {
    "content:before": "'\\e230'"
  },
  "uni-icon-email-filled": {
    "content:before": "'\\e231'"
  },
  "uni-icon-chatbubble-filled": {
    "content:before": "'\\e232'"
  },
  "uni-icon-chatboxes-filled": {
    "content:before": "'\\e233'"
  },
  "uni-icon-weibo": {
    "content:before": "'\\e260'"
  },
  "uni-icon-weixin": {
    "content:before": "'\\e261'"
  },
  "uni-icon-pengyouquan": {
    "content:before": "'\\e262'"
  },
  "uni-icon-chat": {
    "content:before": "'\\e263'"
  },
  "uni-icon-qq": {
    "content:before": "'\\e264'"
  },
  "uni-icon-videocam": {
    "content:before": "'\\e300'"
  },
  "uni-icon-camera": {
    "content:before": "'\\e301'"
  },
  "uni-icon-mic": {
    "content:before": "'\\e302'"
  },
  "uni-icon-location": {
    "content:before": "'\\e303'"
  },
  "uni-icon-mic-filled": {
    "content:before": "'\\e332'"
  },
  "uni-icon-speech": {
    "content:before:before": "'\\e332'"
  },
  "uni-icon-location-filled": {
    "content:before": "'\\e333'"
  },
  "uni-icon-micoff": {
    "content:before": "'\\e360'"
  },
  "uni-icon-image": {
    "content:before": "'\\e363'"
  },
  "uni-icon-map": {
    "content:before": "'\\e364'"
  },
  "uni-icon-compose": {
    "content:before": "'\\e400'"
  },
  "uni-icon-trash": {
    "content:before": "'\\e401'"
  },
  "uni-icon-upload": {
    "content:before": "'\\e402'"
  },
  "uni-icon-download": {
    "content:before": "'\\e403'"
  },
  "uni-icon-close": {
    "content:before": "'\\e404'"
  },
  "uni-icon-redo": {
    "content:before": "'\\e405'"
  },
  "uni-icon-undo": {
    "content:before": "'\\e406'"
  },
  "uni-icon-refresh": {
    "content:before": "'\\e407'"
  },
  "uni-icon-star": {
    "content:before": "'\\e408'"
  },
  "uni-icon-plus": {
    "content:before": "'\\e409'"
  },
  "uni-icon-minus": {
    "content:before": "'\\e410'"
  },
  "uni-icon-circle": {
    "content:before": "'\\e411'"
  },
  "uni-icon-checkbox": {
    "content:before:before": "'\\e411'"
  },
  "uni-icon-close-filled": {
    "content:before": "'\\e434'"
  },
  "uni-icon-clear": {
    "content:before:before": "'\\e434'"
  },
  "uni-icon-refresh-filled": {
    "content:before": "'\\e437'"
  },
  "uni-icon-star-filled": {
    "content:before": "'\\e438'"
  },
  "uni-icon-plus-filled": {
    "content:before": "'\\e439'"
  },
  "uni-icon-minus-filled": {
    "content:before": "'\\e440'"
  },
  "uni-icon-circle-filled": {
    "content:before": "'\\e441'"
  },
  "uni-icon-checkbox-filled": {
    "content:before": "'\\e442'"
  },
  "uni-icon-closeempty": {
    "content:before": "'\\e460'"
  },
  "uni-icon-refreshempty": {
    "content:before": "'\\e461'"
  },
  "uni-icon-reload": {
    "content:before": "'\\e462'"
  },
  "uni-icon-starhalf": {
    "content:before": "'\\e463'"
  },
  "uni-icon-spinner": {
    "content:before": "'\\e464'"
  },
  "uni-icon-spinner-cycle": {
    "content:before": "'\\e465'"
  },
  "uni-icon-search": {
    "content:before": "'\\e466'"
  },
  "uni-icon-plusempty": {
    "content:before": "'\\e468'"
  },
  "uni-icon-forward": {
    "content:before": "'\\e470'"
  },
  "uni-icon-back": {
    "content:before": "'\\e471'"
  },
  "uni-icon-left-nav": {
    "content:before:before": "'\\e471'"
  },
  "uni-icon-checkmarkempty": {
    "content:before": "'\\e472'"
  },
  "uni-icon-home": {
    "content:before": "'\\e500'"
  },
  "uni-icon-navigate": {
    "content:before": "'\\e501'"
  },
  "uni-icon-gear": {
    "content:before": "'\\e502'"
  },
  "uni-icon-paperplane": {
    "content:before": "'\\e503'"
  },
  "uni-icon-info": {
    "content:before": "'\\e504'"
  },
  "uni-icon-help": {
    "content:before": "'\\e505'"
  },
  "uni-icon-locked": {
    "content:before": "'\\e506'"
  },
  "uni-icon-more": {
    "content:before": "'\\e507'"
  },
  "uni-icon-flag": {
    "content:before": "'\\e508'"
  },
  "uni-icon-home-filled": {
    "content:before": "'\\e530'"
  },
  "uni-icon-gear-filled": {
    "content:before": "'\\e532'"
  },
  "uni-icon-info-filled": {
    "content:before": "'\\e534'"
  },
  "uni-icon-help-filled": {
    "content:before": "'\\e535'"
  },
  "uni-icon-more-filled": {
    "content:before": "'\\e537'"
  },
  "uni-icon-settings": {
    "content:before": "'\\e560'"
  },
  "uni-icon-list": {
    "content:before": "'\\e562'"
  },
  "uni-icon-bars": {
    "content:before": "'\\e563'"
  },
  "uni-icon-loop": {
    "content:before": "'\\e565'"
  },
  "uni-icon-paperclip": {
    "content:before": "'\\e567'"
  },
  "uni-icon-eye": {
    "content:before": "'\\e568'"
  },
  "uni-icon-arrowup": {
    "content:before": "'\\e580'"
  },
  "uni-icon-arrowdown": {
    "content:before": "'\\e581'"
  },
  "uni-icon-arrowleft": {
    "content:before": "'\\e582'"
  },
  "uni-icon-arrowright": {
    "content:before": "'\\e583'"
  },
  "uni-icon-arrowthinup": {
    "content:before": "'\\e584'"
  },
  "uni-icon-arrowthindown": {
    "content:before": "'\\e585'"
  },
  "uni-icon-arrowthinleft": {
    "content:before": "'\\e586'"
  },
  "uni-icon-arrowthinright": {
    "content:before": "'\\e587'"
  },
  "uni-icon-pulldown": {
    "content:before": "'\\e588'"
  },
  "uni-icon-scan": {
    "content:before": "\"\\e612\""
  },
  "uni-divider": {
    "height": "110rpx",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative"
  },
  "uni-divider__content": {
    "fontSize": "28rpx",
    "color": "#999999",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "position": "relative",
    "zIndex": 101,
    "background": "#F4F5F6"
  },
  "uni-divider__line": {
    "backgroundColor": "#CCCCCC",
    "height": "1",
    "width": 100,
    "position": "absolute",
    "zIndex": 100,
    "top": 50,
    "left": 0,
    "transform": "translateY(50%)"
  },
  "iconfont": {
    "fontFamily": "\"iconfont\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  },
  "icon-pingfenxingxing": {
    "content:before": "\"\\e64b\""
  },
  "icon-xingxing1": {
    "content:before": "\"\\e641\""
  },
  "icon-xingxingx": {
    "content:before": "\"\\e626\""
  },
  "icon-shezhi-tianchong": {
    "content:before": "\"\\e638\""
  },
  "icon-ic_setting": {
    "content:before": "\"\\e614\""
  },
  "icon-shezhi2": {
    "content:before": "\"\\e87c\""
  },
  "icon-bianji": {
    "content:before": "\"\\e657\""
  },
  "icon-shezhi1": {
    "content:before": "\"\\e681\""
  },
  "icon-duihao1": {
    "content:before": "\"\\e625\""
  },
  "icon-fanhui1": {
    "content:before": "\"\\e66a\""
  },
  "icon-nan2": {
    "content:before": "\"\\e653\""
  },
  "icon-nv2": {
    "content:before": "\"\\e654\""
  },
  "icon-QQ": {
    "content:before": "\"\\e73e\""
  },
  "icon-QQ1": {
    "content:before": "\"\\e60b\""
  },
  "icon-weixin1": {
    "content:before": "\"\\e61f\""
  },
  "icon-xiaolian": {
    "content:before": "\"\\e688\""
  },
  "icon-jianpan": {
    "content:before": "\"\\e69f\""
  },
  "icon-jiahao": {
    "content:before": "\"\\e6c3\""
  },
  "icon-298": {
    "content:before": "\"\\e748\""
  },
  "icon-chahao": {
    "content:before": "\"\\e669\""
  },
  "icon-qicheqianlian-": {
    "content:before": "\"\\e619\""
  },
  "icon-gouwuche": {
    "content:before": "\"\\e624\""
  },
  "icon-triangle-bottom": {
    "content:before": "\"\\e62c\""
  },
  "icon-triangle-top": {
    "content:before": "\"\\e635\""
  },
  "icon-wenhao": {
    "content:before": "\"\\e6ab\""
  },
  "icon-iconset0143": {
    "content:before": "\"\\e62b\""
  },
  "icon-riqi": {
    "content:before": "\"\\e644\""
  },
  "icon-shijian": {
    "content:before": "\"\\e603\""
  },
  "icon-error-1": {
    "content:before": "\"\\e610\""
  },
  "icon-right-1": {
    "content:before": "\"\\e612\""
  },
  "icon-duihao": {
    "content:before": "\"\\e62a\""
  },
  "icon-down": {
    "content:before": "\"\\e617\""
  },
  "icon-show_more": {
    "content:before": "\"\\e637\""
  },
  "icon-qingchu": {
    "content:before": "\"\\e601\""
  },
  "icon-ego-close": {
    "content:before": "\"\\e606\""
  },
  "icon-write": {
    "content:before": "\"\\e613\""
  },
  "icon-renzheng": {
    "content:before": "\"\\e616\""
  },
  "icon-weibiaoti525": {
    "content:before": "\"\\e61d\""
  },
  "icon-liulan": {
    "content:before": "\"\\e7d0\""
  },
  "icon-qq1": {
    "content:before": "\"\\e600\""
  },
  "icon-pengyouquan": {
    "content:before": "\"\\e630\""
  },
  "icon-qq": {
    "content:before": "\"\\e646\""
  },
  "icon-tubiaozhizuo-": {
    "content:before": "\"\\e60a\""
  },
  "icon-weixin": {
    "content:before": "\"\\e648\""
  },
  "icon-geren": {
    "content:before": "\"\\e61c\""
  },
  "icon-nan": {
    "content:before": "\"\\e64a\""
  },
  "icon-nv": {
    "content:before": "\"\\e665\""
  },
  "icon-nan1": {
    "content:before": "\"\\e608\""
  },
  "icon-nv1": {
    "content:before": "\"\\e611\""
  },
  "icon-caidan1": {
    "content:before": "\"\\e609\""
  },
  "icon-icon_duoren": {
    "content:before": "\"\\e618\""
  },
  "icon-xihuan": {
    "content:before": "\"\\e60f\""
  },
  "icon-jinrujiantou": {
    "content:before": "\"\\e88e\""
  },
  "icon-lajitong": {
    "content:before": "\"\\e615\""
  },
  "icon-tupian": {
    "content:before": "\"\\e622\""
  },
  "icon-caidan": {
    "content:before": "\"\\e61b\""
  },
  "icon-huatifuhao": {
    "content:before": "\"\\e8b0\""
  },
  "icon-shezhi": {
    "content:before": "\"\\e65d\""
  },
  "icon-pinglun": {
    "content:before": "\"\\e60e\""
  },
  "icon-zhuanfa": {
    "content:before": "\"\\e604\""
  },
  "icon-cai": {
    "content:before": "\"\\e620\""
  },
  "icon-dianzan1": {
    "content:before": "\"\\e64d\""
  },
  "icon-dianzan2": {
    "content:before": "\"\\e61e\""
  },
  "icon-ziyuan1": {
    "content:before": "\"\\e602\""
  },
  "icon-dianzan": {
    "content:before": "\"\\e647\""
  },
  "icon-fatie_icon": {
    "content:before": "\"\\e668\""
  },
  "icon-wode": {
    "content:before": "\"\\e6d8\""
  },
  "icon-shouye2": {
    "content:before": "\"\\e621\""
  },
  "icon-xiaoxi": {
    "content:before": "\"\\e60d\""
  },
  "icon-faxianchaxun": {
    "content:before": "\"\\e61a\""
  },
  "icon-shouye": {
    "content:before": "\"\\e60c\""
  },
  "icon-shouye1": {
    "content:before": "\"\\e639\""
  },
  "icon-ziyuan": {
    "content:before": "\"\\e623\""
  },
  "bounce": {
    "WebkitAnimationName": "bounce",
    "animationName": "bounce",
    "WebkitTransformOrigin": "center bottom",
    "transformOrigin": "center bottom"
  },
  "flash": {
    "WebkitAnimationName": "flash",
    "animationName": "flash"
  },
  "pulse": {
    "WebkitAnimationName": "pulse",
    "animationName": "pulse"
  },
  "rubberBand": {
    "WebkitAnimationName": "rubberBand",
    "animationName": "rubberBand"
  },
  "shake": {
    "WebkitAnimationName": "shake",
    "animationName": "shake"
  },
  "headShake": {
    "WebkitAnimationTimingFunction": "ease-in-out",
    "animationTimingFunction": "ease-in-out",
    "WebkitAnimationName": "headShake",
    "animationName": "headShake"
  },
  "swing": {
    "WebkitTransformOrigin": "top center",
    "transformOrigin": "top center",
    "WebkitAnimationName": "swing",
    "animationName": "swing"
  },
  "tada": {
    "WebkitAnimationName": "tada",
    "animationName": "tada"
  },
  "wobble": {
    "WebkitAnimationName": "wobble",
    "animationName": "wobble"
  },
  "jello": {
    "WebkitAnimationName": "jello",
    "animationName": "jello",
    "WebkitTransformOrigin": "center",
    "transformOrigin": "center"
  },
  "heartBeat": {
    "WebkitAnimationName": "heartBeat",
    "animationName": "heartBeat",
    "WebkitAnimationDuration": 1.3,
    "animationDuration": 1.3,
    "WebkitAnimationTimingFunction": "ease-in-out",
    "animationTimingFunction": "ease-in-out"
  },
  "bounceIn": {
    "WebkitAnimationDuration": 0.75,
    "animationDuration": 0.75,
    "WebkitAnimationName": "bounceIn",
    "animationName": "bounceIn"
  },
  "bounceInDown": {
    "WebkitAnimationName": "bounceInDown",
    "animationName": "bounceInDown"
  },
  "bounceInLeft": {
    "WebkitAnimationName": "bounceInLeft",
    "animationName": "bounceInLeft"
  },
  "bounceInRight": {
    "WebkitAnimationName": "bounceInRight",
    "animationName": "bounceInRight"
  },
  "bounceInUp": {
    "WebkitAnimationName": "bounceInUp",
    "animationName": "bounceInUp"
  },
  "bounceOut": {
    "WebkitAnimationDuration": 0.75,
    "animationDuration": 0.75,
    "WebkitAnimationName": "bounceOut",
    "animationName": "bounceOut"
  },
  "bounceOutDown": {
    "WebkitAnimationName": "bounceOutDown",
    "animationName": "bounceOutDown"
  },
  "bounceOutLeft": {
    "WebkitAnimationName": "bounceOutLeft",
    "animationName": "bounceOutLeft"
  },
  "bounceOutRight": {
    "WebkitAnimationName": "bounceOutRight",
    "animationName": "bounceOutRight"
  },
  "bounceOutUp": {
    "WebkitAnimationName": "bounceOutUp",
    "animationName": "bounceOutUp"
  },
  "fadeIn": {
    "WebkitAnimationName": "fadeIn",
    "animationName": "fadeIn"
  },
  "fadeInDown": {
    "WebkitAnimationName": "fadeInDown",
    "animationName": "fadeInDown"
  },
  "fadeInDownBig": {
    "WebkitAnimationName": "fadeInDownBig",
    "animationName": "fadeInDownBig"
  },
  "fadeInLeft": {
    "WebkitAnimationName": "fadeInLeft",
    "animationName": "fadeInLeft"
  },
  "fadeInLeftBig": {
    "WebkitAnimationName": "fadeInLeftBig",
    "animationName": "fadeInLeftBig"
  },
  "fadeInRight": {
    "WebkitAnimationName": "fadeInRight",
    "animationName": "fadeInRight"
  },
  "fadeInRightBig": {
    "WebkitAnimationName": "fadeInRightBig",
    "animationName": "fadeInRightBig"
  },
  "fadeInUp": {
    "WebkitAnimationName": "fadeInUp",
    "animationName": "fadeInUp"
  },
  "fadeInUpBig": {
    "WebkitAnimationName": "fadeInUpBig",
    "animationName": "fadeInUpBig"
  },
  "fadeOut": {
    "WebkitAnimationName": "fadeOut",
    "animationName": "fadeOut"
  },
  "fadeOutDown": {
    "WebkitAnimationName": "fadeOutDown",
    "animationName": "fadeOutDown"
  },
  "fadeOutDownBig": {
    "WebkitAnimationName": "fadeOutDownBig",
    "animationName": "fadeOutDownBig"
  },
  "fadeOutLeft": {
    "WebkitAnimationName": "fadeOutLeft",
    "animationName": "fadeOutLeft"
  },
  "fadeOutLeftBig": {
    "WebkitAnimationName": "fadeOutLeftBig",
    "animationName": "fadeOutLeftBig"
  },
  "fadeOutRight": {
    "WebkitAnimationName": "fadeOutRight",
    "animationName": "fadeOutRight"
  },
  "fadeOutRightBig": {
    "WebkitAnimationName": "fadeOutRightBig",
    "animationName": "fadeOutRightBig"
  },
  "fadeOutUp": {
    "WebkitAnimationName": "fadeOutUp",
    "animationName": "fadeOutUp"
  },
  "fadeOutUpBig": {
    "WebkitAnimationName": "fadeOutUpBig",
    "animationName": "fadeOutUpBig"
  },
  "flipInX": {
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible",
    "WebkitAnimationName": "flipInX",
    "animationName": "flipInX"
  },
  "flipInY": {
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible",
    "WebkitAnimationName": "flipInY",
    "animationName": "flipInY"
  },
  "flipOutX": {
    "WebkitAnimationDuration": 0.75,
    "animationDuration": 0.75,
    "WebkitAnimationName": "flipOutX",
    "animationName": "flipOutX",
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible"
  },
  "flipOutY": {
    "WebkitAnimationDuration": 0.75,
    "animationDuration": 0.75,
    "WebkitBackfaceVisibility": "visible",
    "backfaceVisibility": "visible",
    "WebkitAnimationName": "flipOutY",
    "animationName": "flipOutY"
  },
  "lightSpeedIn": {
    "WebkitAnimationName": "lightSpeedIn",
    "animationName": "lightSpeedIn",
    "WebkitAnimationTimingFunction": "ease-out",
    "animationTimingFunction": "ease-out"
  },
  "lightSpeedOut": {
    "WebkitAnimationName": "lightSpeedOut",
    "animationName": "lightSpeedOut",
    "WebkitAnimationTimingFunction": "ease-in",
    "animationTimingFunction": "ease-in"
  },
  "rotateIn": {
    "WebkitAnimationName": "rotateIn",
    "animationName": "rotateIn"
  },
  "rotateInDownLeft": {
    "WebkitAnimationName": "rotateInDownLeft",
    "animationName": "rotateInDownLeft"
  },
  "rotateInDownRight": {
    "WebkitAnimationName": "rotateInDownRight",
    "animationName": "rotateInDownRight"
  },
  "rotateInUpLeft": {
    "WebkitAnimationName": "rotateInUpLeft",
    "animationName": "rotateInUpLeft"
  },
  "rotateInUpRight": {
    "WebkitAnimationName": "rotateInUpRight",
    "animationName": "rotateInUpRight"
  },
  "rotateOut": {
    "WebkitAnimationName": "rotateOut",
    "animationName": "rotateOut"
  },
  "rotateOutDownLeft": {
    "WebkitAnimationName": "rotateOutDownLeft",
    "animationName": "rotateOutDownLeft"
  },
  "rotateOutDownRight": {
    "WebkitAnimationName": "rotateOutDownRight",
    "animationName": "rotateOutDownRight"
  },
  "rotateOutUpLeft": {
    "WebkitAnimationName": "rotateOutUpLeft",
    "animationName": "rotateOutUpLeft"
  },
  "rotateOutUpRight": {
    "WebkitAnimationName": "rotateOutUpRight",
    "animationName": "rotateOutUpRight"
  },
  "hinge": {
    "WebkitAnimationDuration": 2,
    "animationDuration": 2,
    "WebkitAnimationName": "hinge",
    "animationName": "hinge"
  },
  "jackInTheBox": {
    "WebkitAnimationName": "jackInTheBox",
    "animationName": "jackInTheBox"
  },
  "rollIn": {
    "WebkitAnimationName": "rollIn",
    "animationName": "rollIn"
  },
  "rollOut": {
    "WebkitAnimationName": "rollOut",
    "animationName": "rollOut"
  },
  "zoomIn": {
    "WebkitAnimationName": "zoomIn",
    "animationName": "zoomIn"
  },
  "zoomInDown": {
    "WebkitAnimationName": "zoomInDown",
    "animationName": "zoomInDown"
  },
  "zoomInLeft": {
    "WebkitAnimationName": "zoomInLeft",
    "animationName": "zoomInLeft"
  },
  "zoomInRight": {
    "WebkitAnimationName": "zoomInRight",
    "animationName": "zoomInRight"
  },
  "zoomInUp": {
    "WebkitAnimationName": "zoomInUp",
    "animationName": "zoomInUp"
  },
  "zoomOut": {
    "WebkitAnimationName": "zoomOut",
    "animationName": "zoomOut"
  },
  "zoomOutDown": {
    "WebkitAnimationName": "zoomOutDown",
    "animationName": "zoomOutDown"
  },
  "zoomOutLeft": {
    "WebkitAnimationName": "zoomOutLeft",
    "animationName": "zoomOutLeft"
  },
  "zoomOutRight": {
    "WebkitAnimationName": "zoomOutRight",
    "animationName": "zoomOutRight"
  },
  "zoomOutUp": {
    "WebkitAnimationName": "zoomOutUp",
    "animationName": "zoomOutUp"
  },
  "slideInDown": {
    "WebkitAnimationName": "slideInDown",
    "animationName": "slideInDown"
  },
  "slideInLeft": {
    "WebkitAnimationName": "slideInLeft",
    "animationName": "slideInLeft"
  },
  "slideInRight": {
    "WebkitAnimationName": "slideInRight",
    "animationName": "slideInRight"
  },
  "slideInUp": {
    "WebkitAnimationName": "slideInUp",
    "animationName": "slideInUp"
  },
  "slideOutDown": {
    "WebkitAnimationName": "slideOutDown",
    "animationName": "slideOutDown"
  },
  "slideOutLeft": {
    "WebkitAnimationName": "slideOutLeft",
    "animationName": "slideOutLeft"
  },
  "slideOutRight": {
    "WebkitAnimationName": "slideOutRight",
    "animationName": "slideOutRight"
  },
  "slideOutUp": {
    "WebkitAnimationName": "slideOutUp",
    "animationName": "slideOutUp"
  },
  "animated": {
    "WebkitAnimationDuration": 1,
    "animationDuration": 1,
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "w-100": {
    "width": 100
  },
  "flex": {
    "display": "flex"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "text-center": {
    "textAlign": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "rounded-circle": {
    "borderRadius": 100
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "flex-1": {
    "flex": 1
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginRight": 0,
    "marginBottom": "10rpx",
    "marginLeft": 0
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "px-2": {
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx"
  },
  "px-5": {
    "paddingTop": 0,
    "paddingRight": "50rpx",
    "paddingBottom": 0,
    "paddingLeft": "50rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingRight": 0,
    "paddingBottom": "30rpx",
    "paddingLeft": 0
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font-md": {
    "fontSize": "30rpx"
  },
  "font-lg": {
    "fontSize": "35rpx"
  },
  "font-weight-bold": {
    "font": "bold"
  },
  "text-white": {
    "color": "#FFFFFF"
  },
  "text-light-muted": {
    "color": "#A9A5A0"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTop": "1px solid #D9D9D9"
  },
  "border-bottom": {
    "borderBottom": "1px solid #E8E8E8"
  },
  "border-lignt-secondary": {
    "borderColor": "#B2B2B2"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-white": {
    "backgroundColor": "#FFFFFF"
  },
  "bg-dark": {
    "backgroundColor": "#000000"
  },
  "bg-primary": {
    "backgroundColor": "#007AFF"
  },
  "bg-success": {
    "backgroundColor": "#1AAD19"
  },
  "bg-red": {
    "backgroundColor": "#FF3333"
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "top-0": {
    "position": "absolute",
    "top": 0
  },
  "right-0": {
    "position": "absolute",
    "right": 0
  },
  "text-right": {
    "textAlign": "right"
  },
  "bg-main": {
    "backgroundColor": "#FF4A6A"
  },
  "bg-hui-main": {
    "backgroundColor": "#A9A5A0"
  },
  "bg-main-disabled": {
    "backgroundColor": "#FF4A6A"
  },
  "text-main": {
    "color": "#3BDCA8",
    "position": "relative",
    "content::after": "\"\"",
    "position::after": "absolute",
    "left::after": 0,
    "right::after": 0,
    "bottom::after": "-4",
    "width::after": "40rpx",
    "height::after": "6rpx",
    "backgroundColor::after": "#4CE88E",
    "marginTop::after": 0,
    "marginBottom::after": 0
  },
  "uni-navbar": {
    "marginTop": "52rpx"
  }
}

/***/ }),
/* 4 */
/*!***********************************************************************************!*\
  !*** /Users/wangxiaowen/Desktop/Kaiyuan/pages/live-info/android.nvue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _android_nvue_vue_type_template_id_3a7c22f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./android.nvue?vue&type=template&id=3a7c22f0&mpType=page */ 5);\n/* harmony import */ var _android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./android.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./android.nvue?vue&type=style&index=0&lang=css&mpType=page */ 14).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./android.nvue?vue&type=style&index=0&lang=css&mpType=page */ 14).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _android_nvue_vue_type_template_id_3a7c22f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _android_nvue_vue_type_template_id_3a7c22f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"9e6c164c\",\n  false,\n  _android_nvue_vue_type_template_id_3a7c22f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/live-info/android.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9FQUE0RDtBQUNoSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0VBQTREO0FBQ3JIOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9hbmRyb2lkLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2E3YzIyZjAmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FuZHJvaWQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9hbmRyb2lkLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2FuZHJvaWQubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2FuZHJvaWQubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOWU2YzE2NGNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbGl2ZS1pbmZvL2FuZHJvaWQubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************************************************************************************************!*\
  !*** /Users/wangxiaowen/Desktop/Kaiyuan/pages/live-info/android.nvue?vue&type=template&id=3a7c22f0&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_template_id_3a7c22f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./android.nvue?vue&type=template&id=3a7c22f0&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_template_id_3a7c22f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_template_id_3a7c22f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_template_id_3a7c22f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_template_id_3a7c22f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangxiaowen/Desktop/Kaiyuan/pages/live-info/android.nvue?vue&type=template&id=3a7c22f0&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["live-all-wrap"] },
        [
          _vm.phonetype == 1
            ? [
                _c(
                  "view",
                  { staticClass: ["video-wrap"] },
                  [
                    _c("TestText", {
                      ref: "videoAdnroid",
                      staticClass: ["video-wrap"],
                      attrs: { tel: "xxxxxx" }
                    })
                  ],
                  1
                )
              ]
            : _vm.phonetype == 2
            ? [
                _c(
                  "view",
                  { staticClass: ["video-wrap"] },
                  [
                    _c("dc-TestComponent", {
                      ref: "videoIos",
                      staticClass: ["video-wrap"],
                      attrs: { appid: "xxxxxx" }
                    })
                  ],
                  1
                )
              ]
            : _vm.phonetype == 3
            ? [
                _c(
                  "view",
                  { ref: "remotecontainer", attrs: { id: "remoteContainer" } },
                  [
                    _c("view", {
                      staticClass: ["video-wrap"],
                      attrs: { id: "subremoteContainer" }
                    })
                  ]
                )
              ]
            : void 0,
          _c(
            "view",
            {
              staticStyle: {
                width: "750rpx",
                height: "90rpx",
                flexDirection: "row",
                backgroundColor: "#FFFFFF"
              }
            },
            _vm._l(_vm.tabBars, function(item, index) {
              return _c(
                "view",
                {
                  key: index,
                  ref: "tab" + index,
                  refInFor: true,
                  staticStyle: {
                    height: "90rpx",
                    width: "250rpx",
                    alignItems: "center"
                  },
                  on: {
                    click: function($event) {
                      _vm.changeXXK(index)
                    }
                  }
                },
                [
                  _c(
                    "u-text",
                    {
                      staticStyle: {
                        fontSize: "30rpx",
                        height: "90rpx",
                        width: "100rpx",
                        textAlign: "center",
                        lineHeight: "90rpx",
                        borderBottomWidth: "5rpx",
                        borderStyle: "solid"
                      },
                      style: {
                        color: _vm.tabIndex === index ? "#3BDCA8" : "#A9A5A0",
                        "border-color":
                          _vm.tabIndex === index ? "#3BDCA8" : "#FFFFFF"
                      }
                    },
                    [_vm._v(_vm._s(item.name))]
                  )
                ]
              )
            }),
            0
          ),
          _c(
            "view",
            {
              staticStyle: {
                width: "750rpx",
                height: "600rpx",
                backgroundColor: "#F4F5F6"
              },
              attrs: { current: _vm.tabIndex },
              on: { change: _vm.onChangeTab }
            },
            [
              _vm.tabIndex == 0
                ? _c("view", { staticClass: ["zhinan"] }, [
                    _c("u-text", { staticClass: ["zhinantext"] }, [
                      _vm._v("听课指南")
                    ])
                  ])
                : _vm._e(),
              _vm.tabIndex == 0
                ? _c("view", [
                    _c(
                      "list",
                      { staticStyle: { width: "750rpx", height: "600rpx" } },
                      _vm._l(_vm.list, function(item, index) {
                        return _c(
                          "cell",
                          {
                            key: index,
                            staticClass: ["chatcell"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [
                            item.user_type == 1
                              ? _c(
                                  "view",
                                  {
                                    staticClass: ["messagebottom"],
                                    attrs: { id: "chat" + index }
                                  },
                                  [
                                    _c("u-image", {
                                      staticClass: ["rounded"],
                                      attrs: { src: item.avatar }
                                    }),
                                    _c("view", { staticClass: ["message"] }, [
                                      _c(
                                        "u-text",
                                        { staticClass: ["user_nickname"] },
                                        [_vm._v(_vm._s(item.user_nickname))]
                                      ),
                                      _c(
                                        "u-text",
                                        { staticClass: ["textmessage"] },
                                        [_vm._v(_vm._s(item.content))]
                                      )
                                    ])
                                  ],
                                  1
                                )
                              : _vm._e()
                          ]
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm.tabIndex == 1
                ? _c("view", [
                    _c(
                      "list",
                      {
                        staticClass: ["chat1"],
                        staticStyle: { height: "600rpx" },
                        attrs: { animation: _vm.animationData }
                      },
                      _vm._l(_vm.list, function(item, index) {
                        return _c(
                          "cell",
                          {
                            key: index,
                            staticClass: ["chatcell"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [
                            item.uid === _vm.myID
                              ? [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["messagebottom2"],
                                      attrs: { id: "chat" + index }
                                    },
                                    [
                                      _c("u-image", {
                                        staticClass: ["rounded"],
                                        attrs: { src: item.avatar }
                                      }),
                                      _c("view", { staticClass: ["message"] }, [
                                        _c(
                                          "u-text",
                                          { staticClass: ["textmessage2"] },
                                          [_vm._v(_vm._s(item.content))]
                                        )
                                      ]),
                                      item.status == "1"
                                        ? _c(
                                            "u-text",
                                            { staticClass: ["wen"] },
                                            [_vm._v("问")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]
                              : [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["messagebottom"],
                                      attrs: { id: "chat" + index }
                                    },
                                    [
                                      _c("u-image", {
                                        staticClass: ["rounded"],
                                        attrs: { src: item.avatar }
                                      }),
                                      _c("view", { staticClass: ["message"] }, [
                                        _c(
                                          "u-text",
                                          { staticClass: ["user_nickname"] },
                                          [_vm._v(_vm._s(item.user_nickname))]
                                        ),
                                        _c(
                                          "u-text",
                                          { staticClass: ["textmessage"] },
                                          [_vm._v(_vm._s(item.content))]
                                        )
                                      ]),
                                      item.status == "1"
                                        ? _c(
                                            "u-text",
                                            { staticClass: ["wen2"] },
                                            [_vm._v("问")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]
                          ],
                          2
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm.tabIndex == 2
                ? _c("view", [
                    _c(
                      "list",
                      { staticStyle: { width: "750rpx", height: "600rpx" } },
                      _vm._l(_vm.list, function(item, index) {
                        return _c(
                          "cell",
                          {
                            key: index,
                            staticClass: ["chatcell"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [
                            item.uid === _vm.myID
                              ? [
                                  item.status == "1"
                                    ? _c(
                                        "view",
                                        {
                                          staticClass: ["messagebottom2"],
                                          attrs: { id: "chat" + index }
                                        },
                                        [
                                          _c("u-image", {
                                            staticClass: ["rounded"],
                                            attrs: { src: item.avatar }
                                          }),
                                          _c(
                                            "view",
                                            { staticClass: ["message"] },
                                            [
                                              _c(
                                                "u-text",
                                                {
                                                  staticClass: ["textmessage2"]
                                                },
                                                [_vm._v(_vm._s(item.content))]
                                              )
                                            ]
                                          ),
                                          _c(
                                            "u-text",
                                            { staticClass: ["wen"] },
                                            [_vm._v("问")]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ]
                              : [
                                  item.status == "1"
                                    ? _c(
                                        "view",
                                        {
                                          staticClass: ["messagebottom"],
                                          attrs: { id: "chat" + index }
                                        },
                                        [
                                          _c("u-image", {
                                            staticClass: ["rounded"],
                                            attrs: { src: item.avatar }
                                          }),
                                          _c(
                                            "view",
                                            { staticClass: ["message"] },
                                            [
                                              _c(
                                                "u-text",
                                                {
                                                  staticClass: ["user_nickname"]
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(item.user_nickname)
                                                  )
                                                ]
                                              ),
                                              _c(
                                                "u-text",
                                                {
                                                  staticClass: ["textmessage"]
                                                },
                                                [_vm._v(_vm._s(item.content))]
                                              )
                                            ]
                                          ),
                                          _c(
                                            "u-text",
                                            { staticClass: ["wen2"] },
                                            [_vm._v("问")]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ]
                          ],
                          2
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e()
            ]
          ),
          _vm.tabIndex != 2
            ? [
                _c("view", { staticClass: ["inputbottom"] }, [
                  _c("view", { staticClass: ["inputclass"] }, [
                    _c(
                      "u-text",
                      { staticClass: ["send"], on: { click: _vm.submit } },
                      [_vm._v("发送")]
                    ),
                    _c(
                      "view",
                      { staticClass: ["inputborder"] },
                      [
                        _c("u-input", {
                          ref: "input1",
                          staticClass: ["input"],
                          attrs: {
                            type: "text",
                            confirmType: "send",
                            placeholder: "说点什么...",
                            value: _vm.content
                          },
                          on: {
                            input: [
                              function($event) {
                                _vm.content = $event.detail.value
                              },
                              _vm.inputing
                            ]
                          }
                        }),
                        _c("view", { staticClass: ["wen-btn-wrap"] }, [
                          _c(
                            "view",
                            {
                              staticClass: ["duihao-wrap"],
                              on: { click: _vm.question }
                            },
                            [
                              _vm.isQue == true
                                ? _c("u-image", {
                                    staticClass: ["duihao-img"],
                                    attrs: {
                                      src: "../../static/images/duihao.png",
                                      mode: "aspectFill"
                                    }
                                  })
                                : _vm._e(),
                              _vm.isQue == false
                                ? _c("u-image", {
                                    staticClass: ["duihao-img"],
                                    attrs: {
                                      src: "../../static/images/questionno.png",
                                      mode: "aspectFill"
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _c("u-text", { staticClass: ["tiwen"] }, [
                            _vm._v("提问")
                          ])
                        ])
                      ],
                      1
                    )
                  ])
                ])
              ]
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!***********************************************************************************************************!*\
  !*** /Users/wangxiaowen/Desktop/Kaiyuan/pages/live-info/android.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./android.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdqQixDQUFnQixta0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuZHJvaWQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYW5kcm9pZC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangxiaowen/Desktop/Kaiyuan/pages/live-info/android.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniSocket = _interopRequireDefault(__webpack_require__(/*! @hyoga/uni-socket.io */ 12));\nvar _md = _interopRequireDefault(__webpack_require__(/*! @/static/js/md5.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\n\n\n\n\n\n\nvar app = getApp();\n//连接socket\nvar socket = (0, _uniSocket.default)(app.globalData.socket_url, {\n  query: {},\n  transports: ['websocket', 'polling'],\n  timeout: 5000 });var _default =\n\n\n{\n\n  data: function data() {\n    return {\n      scrollH: 600,\n      tabIndex: 0,\n      tabBars: [{\n        name: \"讲师区\" },\n      {\n        name: \"讨论区\" },\n      {\n        name: \"问答区\" }],\n\n\n\n      list: [],\n      isConnectSocket: false, //是否连接socket\n      liveInfo: {\n        'liveuid': '',\n        'courseid': '' },\n\n      userInfo: {},\n      isQue: false,\n      //直播添加\n      agoraappid: '',\n      agoramRoomName: '',\n      agorauid: '',\n      phonetype: 0,\n      wechatliveurl: '',\n      myID: '',\n      animationData: {},\n      scrollHeight: 0,\n      scrollInto: \"\" };\n\n\n\n  },\n  //agora离开通道\n  onUnload: function onUnload() {\n\n\n\n\n\n\n  },\n  onLoad: function onLoad(option) {var _this2 = this;\n    this.myID = app.globalData.userinfo.id;\n    __f__(\"log\", 'myID:' + this.myID, \" at pages/live-info/android.nvue:195\");\n\n\n\n\n\n\n\n\n\n    if (uni.getSystemInfoSync().platform === 'android') {\n      __f__(\"log\", \"运行在android\", \" at pages/live-info/android.nvue:206\");\n      this.phonetype = 1;\n    } else if (uni.getSystemInfoSync().platform === 'ios') {\n      this.phonetype = 2;\n      __f__(\"log\", \"运行在ios\", \" at pages/live-info/android.nvue:210\");\n    }\n\n    this.userInfo = app.globalData.userinfo;\n    this.liveInfo.liveuid = option.liveuid;\n    this.liveInfo.courseid = option.courseid;\n    // 接收直播liveuid courseid \n    this.enterLive(option.liveuid, option.courseid);\n\n    socket.emit('conn', {\n      uid: this.userInfo.id, //进入该房间的学生id 假如等于下面的房间id, 那即为老师进入房间\n      roomnum: this.liveInfo.liveuid, //房间号,即老师id\n      nickname: this.userInfo.user_nickname,\n      stream: this.liveInfo.liveuid + '_' + this.liveInfo.courseid + '_0', //老师id_课程id_课时id\n      equipment: 'uni-app', //环境\n      token: this.userInfo.token,\n      avatar: this.userInfo.avatar,\n      sign: 0, //签名 默认为0\n      usertype: this.userInfo.type //0学生, 1老师\n    });\n    socket.on('conn', function (data) {\n      __f__(\"log\", 'ws 已连接 ' + data, \" at pages/live-info/android.nvue:231\");\n      _this2.isConnectSocket = true; //已连接\n    });\n    var that = this;\n    //监听服务端消息\n    socket.on('broadcastingListen', function (data) {\n      var msgInfo = JSON.parse(data).msg[0];\n      if (msgInfo.content != undefined) {\n        _this2.list.push(msgInfo);\n      }\n      __f__(\"log\", msgInfo, \" at pages/live-info/android.nvue:241\");\n      // 滚动到底部\n\n      _this2.prizeScroll();\n\n    });\n\n\n  },\n  methods: {\n\n    changeXXK: function changeXXK(index) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\n                _this3.tabIndex = index;return _context.abrupt(\"return\",\n\n                _this3.tabIndex);case 2:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n    onChangeTab: function onChangeTab(e) {\n      __f__(\"log\", '切换当前索引' + e.detail.current, \" at pages/live-info/android.nvue:259\");\n      this.tabIndex = e.detail.current;\n    },\n    decypt: function decypt(code) {\n      var newcode = '';\n      var str = '1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp';\n      for (var i = 0; i < code.length; i++) {\n        var codeIteam = code[i];\n        for (var j = 0; j < str.length; j++) {\n          var stringIteam = str[j];\n          if (codeIteam == stringIteam) {\n            if (j == 0) {\n              newcode += str[j];\n            } else {\n              newcode += str[j - 1];\n            }\n          }\n        }\n      }\n      return newcode;\n    },\n    agoraWechat: function agoraWechat(agoraappid, agorastream, uid) {var _this4 = this;\n      //在小程序里编写代码\n      setTimeout(function () {\n        //初始化\n        var client = AogoraWechat.Client();\n        client.setRole('audience');\n        client.init(_this4.decypt(agoraappid), function () {\n          __f__(\"log\", '小程序初始化成功', \" at pages/live-info/android.nvue:287\");\n          //加入通道\n          client.join('', agorastream, uid, function () {\n            __f__(\"log\", '加入通道成功', \" at pages/live-info/android.nvue:290\");\n          }, function (e) {\n            __f__(\"log\", '加入通道失败', \" at pages/live-info/android.nvue:292\");\n          });\n\n        }, function (e) {\n          __f__(\"log\", '小程序初始化失败', \" at pages/live-info/android.nvue:296\");\n        });\n\n        //订阅远端流\n        client.on(\"stream-added\", function (e) {\n          client.subscribe(evt.uid, function (res) {\n            __f__(\"log\", \"订阅视频流成功playUrl\" + res, \" at pages/live-info/android.nvue:302\");\n            _this4.wechatliveurl = res;\n          }, function (err) {\n            __f__(\"log\", \"订阅视频流错误\", err, \" at pages/live-info/android.nvue:305\");\n            uni.showToast({\n              icon: \"none\",\n              title: \"订阅视频流错误\" });\n\n          });\n        });\n        //远端流移除\n        client.on(\"stream-removed\", function (e) {\n          __f__(\"log\", '远端流移除', \" at pages/live-info/android.nvue:314\");\n        });\n        //重连机制\n        client.rejoin('', agorastream, uid, '', function () {\n          __f__(\"log\", '重连加入通道成功', \" at pages/live-info/android.nvue:318\");\n        }, function (e) {\n          __f__(\"log\", '重连加入通道失败', \" at pages/live-info/android.nvue:320\");\n        });\n\n\n      }, 0);\n    },\n    agoraH5: function agoraH5(agoraappid, agorastream) {\n\n      var _this = this;\n      setTimeout(function () {\n        // var isgo = AgoreRTCH5.checkSystemRequirements();\n        // if (!isgo) {\n        // \talert('当前浏览器不支持，请更换浏览器或者升级该浏览器，如:谷歌浏览器');\n        // }\n        // 4ff617f955ec4e5f89414cc06855cd46\n        //demoChannel1\n\n        var client = AgoraRTCH5.createClient({\n          mode: \"live\",\n          codec: \"vp8\" });\n\n        AgoraRTCH5.client = client;\n        client.init(_this.decypt(agoraappid));\n        client.setClientRole('audience');\n        // 加入频道\n        client.join(\"\", agorastream, null, function (uid) {\n          __f__(\"log\", \"H5加入通道成功\", \" at pages/live-info/android.nvue:346\");\n        }, null);\n        // 有远端用户发布流时进行订阅 \n        client.on(\"stream-added\", function (evt) {\n          client.subscribe(evt.stream, null);\n        });\n        // 订阅成功后播放主播的流\n        client.on(\"stream-subscribed\", function (evt) {\n          var stream = evt.stream;\n          var streamId = String(stream.getId());\n          __f__(\"log\", \"订阅成功后播放主播的流streamId：\" + streamId, \" at pages/live-info/android.nvue:356\");\n          //let streamview = document.createElement(\"view\");\n          var streamview = document.getElementById(\"subremoteContainer\");\n          streamview.id = streamId;\n          //streamview.style.transform = \"rotateY(180deg)\";\n          document.getElementById(\"remoteContainer\").appendChild(streamview);\n          stream.play(streamId);\n        });\n        // 远端用户取消发布流时，关闭及移除对应的流。\n        client.on(\"stream-removed\", function (evt) {\n          var stream = evt.stream;\n          var streamId = String(stream.getId());\n          stream.close();\n          __f__(\"log\", \"远端用户取消发布流时，关闭及移除对应的流。\", \" at pages/live-info/android.nvue:369\");\n\n        });\n        // 远端用户离开频道时，关闭及移除对应的流。\n        client.on(\"peer-leave\", function (evt) {\n          var stream = evt.stream;\n          var streamId = String(stream.getId());\n          stream.close();\n          __f__(\"log\", \"远端用户离开频道时，关闭及移除对应的流。\", \" at pages/live-info/android.nvue:377\");\n        });\n      }, 0);\n\n    },\n    // 进入直播\n    enterLive: function enterLive(liveuid, courseid) {\n      var _this = this;\n      var gData = app.globalData;\n      _this.agorauid = gData.userinfo.id;\n      //console.log(courseid);\n      //console.log(liveuid);\n      uni.request({\n        url: gData.site_url + 'Live.Enter',\n        method: 'GET',\n        data: {\n          'liveuid': liveuid,\n          'courseid': courseid,\n          'lessonid': '',\n          'token': gData.userinfo.token,\n          'uid': gData.userinfo.id },\n\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/live-info/android.nvue:400\");\n          _this.agoraappid = res.data.data.info[0].sound_appid,\n          _this.agoramRoomName = res.data.data.info[0].stream, __f__(\"log\",\n          \"获取数据agoraappid：\" + _this.agoraappid, \" at pages/live-info/android.nvue:403\");\n          __f__(\"log\", \"获取数据agoramRoomName：\" + _this.agoramRoomName, \" at pages/live-info/android.nvue:404\");\n          if (_this.phonetype == 2) {\n            __f__(\"log\", '接口返回进入ios', \" at pages/live-info/android.nvue:406\");\n            setTimeout(function () {\n              _this.$nextTick(function () {\n                _this.$refs.videoIos.focus({\n                  'appid': _this.agoraappid,\n                  'mRoomName': _this.agoramRoomName,\n                  'uid': gData.userinfo.id });\n\n              });\n            }, 0);\n          } else if (_this.phonetype == 1) {\n            __f__(\"log\", '接口返回进入android', \" at pages/live-info/android.nvue:417\");\n\n            setTimeout(function () {\n              _this.$nextTick(function () {\n                _this.$refs.videoAdnroid.clearTel(\n                _this.agoraappid + '声' + _this.agoramRoomName + '网' + gData.userinfo.id);\n\n              });\n            }, 0);\n\n          } else if (_this.phonetype == 3) {\n            __f__(\"log\", '接口返回进入H5', \" at pages/live-info/android.nvue:428\");\n            _this.agoraH5(_this.agoraappid, _this.agoramRoomName);\n          } else if (_this.phonetype == 4) {\n            _this.agoraWechat(_this.agoraappid, _this.agoramRoomName, gData.userinfo.id);\n          }\n        } });\n\n    },\n    inputing: function inputing(event) {\n      // this.content = event.value;\n    },\n    //发送消息\n    submit: function submit(data) {var _this5 = this;\n      if (this.content === '') {\n        return uni.showToast({\n          title: '消息不能为空',\n          icon: 'none' });\n\n      }\n\n\n      //清空输入框\n      // var newcontent = this.content;\n      // this.content = '';\n\n      var userInfo = app.globalData.userinfo;\n      var msgtype = this.isQue === true ? \"1\" : \"0\";\n\n      //发送消息\n      var obj = {\n        \"msg\": [{\n          \"_method_\": \"SendMsg\",\n          \"action\": \"0\",\n          \"token\": userInfo.token,\n          \"uid\": '' + userInfo.id,\n          \"user_nickname\": '' + userInfo.user_nickname,\n          \"avatar\": '' + userInfo.avatar,\n          \"liveuid\": '' + this.liveInfo.liveuid,\n          \"content\": '' + this.content,\n          \"equipment\": \"uni-app\",\n          \"create_time\": Math.floor(new Date().getTime().toString() / 1000),\n          \"msgtype\": msgtype }],\n\n        \"retcode\": \"000000\",\n        \"retmsg\": \"OK\" };\n\n\n      if (this.isConnectSocket == true) {\n        socket.emit('broadcast', obj);\n        this.tabIndex = 1;\n        var gData = app.globalData;\n        var liveuid = this.liveInfo.liveuid;\n        var courseid = this.liveInfo.courseid;\n        // 签名\n        var sign = this.sort2url({\n          'uid': this.userInfo.id,\n          'liveuid': liveuid,\n          'courseid': courseid,\n          'lessonid': '0',\n          'type': '0',\n          'content': this.content,\n          'url': '',\n          'user_type': this.userInfo.type });\n\n        //记录聊天信息\n        uni.request({\n          url: gData.site_url + 'Live.SetChat',\n          method: 'GET',\n          data: {\n            'uid': this.userInfo.id,\n            'token': this.userInfo.token,\n            'liveuid': liveuid,\n            'courseid': courseid,\n            'lessonid': 0,\n            'type': 0,\n            'content': this.content,\n            'url': '',\n            'length': 0,\n            'status': msgtype,\n            'user_type': this.userInfo.type,\n            'sign': sign },\n\n          success: function success(res) {\n            // console.log(res);\n            // this.content = '';\n            _this5.$refs.input1.blur();\n          },\n          fail: function fail() {\n            uni.showToast({\n              icon: 'none',\n              title: '网络错误' });\n\n          } });\n\n      }\n    },\n    question: function question(isQue) {\n\n      if (this.isQue == false) {\n        // 切换到问答区\n        // this.tabIndex = 2;\n        this.isQue = true;\n      } else {\n        // this.tabIndex = 0;\n        this.isQue = false;\n      }\n    },\n    // 字典序排序\n    sort2url: function sort2url(arr1) {\n      var newkey = Object.keys(arr1).sort();\n      var newObj = {};\n      for (var i = 0; i < newkey.length; i++) {//遍历newkey数组\n        newObj[newkey[i]] = arr1[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对\n      }\n\n      var text = \"\";\n      for (var index in newObj) {\n        text = text + index + \"=\" + newObj[index] + \"&\";\n      }\n      text = text.substr(0, text.length - 1);\n      text += '&' + app.globalData.sign_key;\n      return _md.default.hex_md5(text);\n    },\n    listscroll: function listscroll(event) {\n      __f__(\"log\", event, \" at pages/live-info/android.nvue:552\");\n    },\n    getHeight: function getHeight(Class) {var _this6 = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.\n      selectAll(Class).\n      boundingClientRect(function (data) {\n        _this6.scrollH = data[0].height;\n      }).\n      exec();\n    },\n    prizeScroll: function prizeScroll() {\n\n\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbGl2ZS1pbmZvL2FuZHJvaWQubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpSUE7QUFDQSxvRjs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQSxXQURBO0FBRUEsc0NBRkE7QUFHQSxlQUhBLEk7OztBQU1BOztBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUNBLG1CQURBO0FBRUE7QUFDQSxtQkFEQSxFQUZBO0FBSUE7QUFDQSxtQkFEQSxFQUpBLENBSEE7Ozs7QUFZQSxjQVpBO0FBYUEsNEJBYkEsRUFhQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxzQkFGQSxFQWRBOztBQWtCQSxrQkFsQkE7QUFtQkEsa0JBbkJBO0FBb0JBO0FBQ0Esb0JBckJBO0FBc0JBLHdCQXRCQTtBQXVCQSxrQkF2QkE7QUF3QkEsa0JBeEJBO0FBeUJBLHVCQXpCQTtBQTBCQSxjQTFCQTtBQTJCQSx1QkEzQkE7QUE0QkEscUJBNUJBO0FBNkJBLG9CQTdCQTs7OztBQWlDQSxHQXBDQTtBQXFDQTtBQUNBOzs7Ozs7O0FBT0EsR0E3Q0E7QUE4Q0EsUUE5Q0Esa0JBOENBLE1BOUNBLEVBOENBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBLEtBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBREEsRUFDQTtBQUNBLG9DQUZBLEVBRUE7QUFDQSwyQ0FIQTtBQUlBLHlFQUpBLEVBSUE7QUFDQSwwQkFMQSxFQUtBO0FBQ0EsZ0NBTkE7QUFPQSxrQ0FQQTtBQVFBLGFBUkEsRUFRQTtBQUNBLGtDQVRBLENBU0E7QUFUQTtBQVdBO0FBQ0E7QUFDQSxvQ0FGQSxDQUVBO0FBQ0EsS0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQVZBOzs7QUFhQSxHQXRHQTtBQXVHQTs7QUFFQSxhQUZBLHFCQUVBLEtBRkEsRUFFQTs7QUFFQSx3Q0FGQTs7QUFJQSwrQkFKQTtBQUtBLEtBUEE7QUFRQSxlQVJBLHVCQVFBLENBUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQSxLQVhBO0FBWUEsVUFaQSxrQkFZQSxJQVpBLEVBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdCQTtBQThCQSxlQTlCQSx1QkE4QkEsVUE5QkEsRUE4QkEsV0E5QkEsRUE4QkEsR0E5QkEsRUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsRUFFQTtBQUNBO0FBQ0EsV0FKQTs7QUFNQSxTQVRBLEVBU0E7QUFDQTtBQUNBLFNBWEE7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSEEsRUFHQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDhCQUZBOztBQUlBLFdBVEE7QUFVQSxTQVhBO0FBWUE7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQTtBQUNBO0FBQ0EsU0FKQTs7O0FBT0EsT0ExQ0EsRUEwQ0EsQ0ExQ0E7QUEyQ0EsS0EzRUE7QUE0RUEsV0E1RUEsbUJBNEVBLFVBNUVBLEVBNEVBLFdBNUVBLEVBNEVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxJQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVZBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUxBO0FBTUEsT0FsREEsRUFrREEsQ0FsREE7O0FBb0RBLEtBbklBO0FBb0lBO0FBQ0EsYUFySUEscUJBcUlBLE9BcklBLEVBcUlBLFFBcklBLEVBcUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBREE7QUFFQSxxQkFGQTtBQUdBO0FBQ0EsNEJBREE7QUFFQSw4QkFGQTtBQUdBLHdCQUhBO0FBSUEsdUNBSkE7QUFLQSxrQ0FMQSxFQUhBOztBQVVBO0FBQ0E7QUFDQTtBQUNBLDZEQURBO0FBRUEsOENBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FEQTtBQUVBLG1EQUZBO0FBR0EsMENBSEE7O0FBS0EsZUFOQTtBQU9BLGFBUkEsRUFRQSxDQVJBO0FBU0EsV0FYQSxNQVdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUZBREE7O0FBR0EsZUFKQTtBQUtBLGFBTkEsRUFNQSxDQU5BOztBQVFBLFdBWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQSxXQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsU0E1Q0E7O0FBOENBLEtBekxBO0FBMExBLFlBMUxBLG9CQTBMQSxLQTFMQSxFQTBMQTtBQUNBO0FBQ0EsS0E1TEE7QUE2TEE7QUFDQSxVQTlMQSxrQkE4TEEsSUE5TEEsRUE4TEE7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQSxzQkFGQTs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSx1QkFGQTtBQUdBLGlDQUhBO0FBSUEsaUNBSkE7QUFLQSxzREFMQTtBQU1BLHdDQU5BO0FBT0EsK0NBUEE7QUFRQSxzQ0FSQTtBQVNBLGdDQVRBO0FBVUEsMkVBVkE7QUFXQSw0QkFYQSxHQURBOztBQWNBLDJCQWRBO0FBZUEsc0JBZkE7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSw0QkFGQTtBQUdBLDhCQUhBO0FBSUEseUJBSkE7QUFLQSxxQkFMQTtBQU1BLGlDQU5BO0FBT0EsbUJBUEE7QUFRQSx5Q0FSQTs7QUFVQTtBQUNBO0FBQ0EsOENBREE7QUFFQSx1QkFGQTtBQUdBO0FBQ0EsbUNBREE7QUFFQSx3Q0FGQTtBQUdBLDhCQUhBO0FBSUEsZ0NBSkE7QUFLQSx5QkFMQTtBQU1BLHFCQU5BO0FBT0EsbUNBUEE7QUFRQSxxQkFSQTtBQVNBLHVCQVRBO0FBVUEsNkJBVkE7QUFXQSwyQ0FYQTtBQVlBLHdCQVpBLEVBSEE7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FyQkE7QUFzQkE7QUFDQTtBQUNBLDBCQURBO0FBRUEsMkJBRkE7O0FBSUEsV0EzQkE7O0FBNkJBO0FBQ0EsS0FqUkE7QUFrUkEsWUFsUkEsb0JBa1JBLEtBbFJBLEVBa1JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1UkE7QUE2UkE7QUFDQSxZQTlSQSxvQkE4UkEsSUE5UkEsRUE4UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FEQSxDQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVTQTtBQTZTQSxjQTdTQSxzQkE2U0EsS0E3U0EsRUE2U0E7QUFDQTtBQUNBLEtBL1NBO0FBZ1RBLGFBaFRBLHFCQWdUQSxLQWhUQSxFQWdUQTtBQUNBO0FBQ0E7QUFDQSxlQURBLENBQ0EsS0FEQTtBQUVBLHdCQUZBLENBRUE7QUFDQTtBQUNBLE9BSkE7QUFLQSxVQUxBO0FBTUEsS0F4VEE7QUF5VEEsZUF6VEEseUJBeVRBOzs7O0FBSUEsS0E3VEEsRUF2R0EsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLSDnm7Tmkq3pl7TpobXpnaIgLS0+XHJcbjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImxpdmUtYWxsLXdyYXBcIj5cclxuXHRcdDwhLS0g55u05pKt56qX5Y+jIC0tPlxyXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJwaG9uZXR5cGUgPT0gMVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvLXdyYXBcIj5cclxuXHRcdFx0XHQ8VGVzdFRleHQgcmVmPVwidmlkZW9BZG5yb2lkXCIgdGVsPVwieHh4eHh4XCIgY2xhc3M9XCJ2aWRlby13cmFwXCI+PC9UZXN0VGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHRcdDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJwaG9uZXR5cGUgPT0gMlwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvLXdyYXBcIj5cclxuXHRcdFx0XHQ8ZGMtVGVzdENvbXBvbmVudCByZWY9XCJ2aWRlb0lvc1wiIGFwcGlkPVwieHh4eHh4XCIgY2xhc3M9XCJ2aWRlby13cmFwXCI+PC9kYy1UZXN0Q29tcG9uZW50PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PHRlbXBsYXRlIHYtZWxzZS1pZj1cInBob25ldHlwZSA9PSAzXCI+XHJcblx0XHRcdDx2aWV3IGlkPVwicmVtb3RlQ29udGFpbmVyXCIgcmVmPVwicmVtb3RlY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PHZpZXcgaWQ9XCJzdWJyZW1vdGVDb250YWluZXJcIiBjbGFzcz1cInZpZGVvLXdyYXBcIj48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxyXG5cdFx0XHQ8IS0tICNpZmRlZiBNUC1XRUlYSU4gLS0+XHJcblx0XHRcdDxsaXZlLXBsYXllciBpZD1cInBsYXllclwiIHNyYz1cIndlY2hhdGxpdmV1cmxcIiBtb2RlPVwiUlRDXCIgYmluZHN0YXRlY2hhbmdlPVwicGxheWVyU3RhdGVDaGFuZ2VcIiBvYmplY3QtZml0PVwiZmlsbENyb3BcIiAvPlxyXG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8IS0tIOiBiuWkqeWMuuWfnyAtLT5cclxuXHJcblx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOiA3NTBycHg7IGhlaWdodDogOTBycHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XCI+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiA5MHJweDt3aWR0aDogMjUwcnB4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHRhYkJhcnNcIiA6a2V5PVwiaW5kZXhcIiBAY2xpY2s9XCJjaGFuZ2VYWEsoaW5kZXgpXCJcclxuXHRcdFx0IDpyZWY9XCJgdGFiJHtpbmRleH1gXCI+XHJcblx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDMwcnB4OyBoZWlnaHQ6IDkwcnB4OyB3aWR0aDogMTAwcnB4O3RleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDkwcnB4OyBib3JkZXItYm90dG9tLXdpZHRoOiA1cnB4OyBib3JkZXItc3R5bGU6IHNvbGlkO1wiXHJcblx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOnRhYkluZGV4ID09PWluZGV4PycjM0JEQ0E4JzonI0E5QTVBMCcsJ2JvcmRlci1jb2xvcic6dGFiSW5kZXggPT09IGluZGV4PyAnIzNCRENBOCc6JyNGRkZGRkYnfVwiPnt7aXRlbS5uYW1lfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PHZpZXcgOmN1cnJlbnQ9XCJ0YWJJbmRleFwiIEBjaGFuZ2U9XCJvbkNoYW5nZVRhYlwiIHN0eWxlPVwid2lkdGg6IDc1MHJweDtoZWlnaHQ6IDYwMHJweDsgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGNjtcIj5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInRhYkluZGV4ID09MFwiIGNsYXNzPVwiemhpbmFuXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ6aGluYW50ZXh0XCI+5ZCs6K++5oyH5Y2XPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHYtaWY9XCJ0YWJJbmRleCA9PTBcIj5cclxuXHRcdFx0XHQ8bGlzdCBzdHlsZT1cIndpZHRoOiA3NTBycHg7aGVpZ2h0OiA2MDBycHg7XCI+XHJcblx0XHRcdFx0XHQ8Y2VsbCB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBsaXN0XCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJjaGF0Y2VsbFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS51c2VyX3R5cGUgPT0gMVwiIDppZD1cIidjaGF0JyAraW5kZXhcIiBjbGFzcz1cIm1lc3NhZ2Vib3R0b21cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCIgY2xhc3M9XCJyb3VuZGVkXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlcl9uaWNrbmFtZVwiPnt7aXRlbS51c2VyX25pY2tuYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRtZXNzYWdlXCI+e3tpdGVtLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvY2VsbD5cclxuXHRcdFx0XHQ8L2xpc3Q+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInRhYkluZGV4ID09MVwiPlxyXG5cclxuXHRcdFx0XHQ8bGlzdCBjbGFzcz1cImNoYXQxXCIgOmFuaW1hdGlvbj1cImFuaW1hdGlvbkRhdGFcIiBzdHlsZT1cImhlaWdodDogNjAwcnB4O1wiPlxyXG5cdFx0XHRcdFx0PGNlbGwgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbGlzdFwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwiY2hhdGNlbGxcIj5cclxuXHRcdFx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJpdGVtLnVpZCA9PT0gbXlJRFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IDppZD1cIidjaGF0JyAraW5kZXhcIiBjbGFzcz1cIm1lc3NhZ2Vib3R0b20yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCIgY2xhc3M9XCJyb3VuZGVkXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRtZXNzYWdlMlwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwiaXRlbS5zdGF0dXMgPT0gJzEnXCIgY2xhc3M9XCJ3ZW5cIj7pl648L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IDppZD1cIidjaGF0JyAraW5kZXhcIiBjbGFzcz1cIm1lc3NhZ2Vib3R0b21cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hdmF0YXJcIiBjbGFzcz1cInJvdW5kZWRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlcl9uaWNrbmFtZVwiPnt7aXRlbS51c2VyX25pY2tuYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dG1lc3NhZ2VcIj57e2l0ZW0uY29udGVudH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cIml0ZW0uc3RhdHVzID09ICcxJ1wiIGNsYXNzPVwid2VuMlwiPumXrjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8L2NlbGw+XHJcblxyXG5cdFx0XHRcdDwvbGlzdD5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInRhYkluZGV4ID09MlwiPlxyXG5cdFx0XHRcdDxsaXN0IHN0eWxlPVwid2lkdGg6IDc1MHJweDsgaGVpZ2h0OiA2MDBycHg7XCI+XHJcblxyXG5cdFx0XHRcdFx0PGNlbGwgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbGlzdFwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwiY2hhdGNlbGxcIj5cclxuXHRcdFx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJpdGVtLnVpZCA9PT0gbXlJRFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtLnN0YXR1cyA9PSAnMSdcIiA6aWQ9XCInY2hhdCcgK2luZGV4XCIgY2xhc3M9XCJtZXNzYWdlYm90dG9tMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF2YXRhclwiIGNsYXNzPVwicm91bmRlZFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0bWVzc2FnZTJcIj57e2l0ZW0uY29udGVudH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ3ZW5cIj7pl648L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtLnN0YXR1cyA9PSAnMSdcIiA6aWQ9XCInY2hhdCcgK2luZGV4XCIgY2xhc3M9XCJtZXNzYWdlYm90dG9tXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCIgY2xhc3M9XCJyb3VuZGVkXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZXJfbmlja25hbWVcIj57e2l0ZW0udXNlcl9uaWNrbmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRtZXNzYWdlXCI+e3tpdGVtLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwid2VuMlwiPumXrjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8L2NlbGw+XHJcblxyXG5cdFx0XHRcdDwvbGlzdD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJ0YWJJbmRleCAhPSAyXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRib3R0b21cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0Y2xhc3NcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cInN1Ym1pdFwiPuWPkemAgTwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRib3JkZXJcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHJlZj1cImlucHV0MVwiIEBpbnB1dD0naW5wdXRpbmcnIHR5cGU9XCJ0ZXh0XCIgY29uZmlybS10eXBlPVwic2VuZFwiIHYtbW9kZWw9XCJjb250ZW50XCIgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwi6K+054K55LuA5LmILi4uXCIgLz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZW4tYnRuLXdyYXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJxdWVzdGlvblwiIGNsYXNzPVwiZHVpaGFvLXdyYXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXNRdWUgPT0gdHJ1ZVwiIGNsYXNzPVwiZHVpaGFvLWltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZHVpaGFvLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXNRdWUgPT0gZmFsc2VcIiBjbGFzcz1cImR1aWhhby1pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3F1ZXN0aW9ubm8ucG5nXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpd2VuXCI+5o+Q6ZeuPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3RlbXBsYXRlPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGlvIGZyb20gJ0BoeW9nYS91bmktc29ja2V0LmlvJztcclxuXHRpbXBvcnQgbWQ1X2pzIGZyb20gXCJAL3N0YXRpYy9qcy9tZDUuanNcIjtcclxuXHQvLyAjaWZkZWYgSDVcclxuXHRpbXBvcnQgQWdvcmFSVENINSBmcm9tIFwiLi9BZ29yYVJUQ1NESy0zLjAuMS5qc1wiO1xyXG5cdC8vICNlbmRpZlxyXG5cdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRpbXBvcnQgQW9nb3JhV2VjaGF0IGZyb20gXCIuL0Fnb3JhX01pbmlhcHBfU0RLX2Zvcl9XZUNoYXQuanNcIlxyXG5cdC8vICNlbmRpZlxyXG5cclxuXHRjb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuXHQvL+i/nuaOpXNvY2tldFxyXG5cdGNvbnN0IHNvY2tldCA9IGlvKChhcHAuZ2xvYmFsRGF0YS5zb2NrZXRfdXJsKSwge1xyXG5cdFx0cXVlcnk6IHt9LFxyXG5cdFx0dHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnLCAncG9sbGluZyddLFxyXG5cdFx0dGltZW91dDogNTAwMFxyXG5cdH0pO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzY3JvbGxIOiA2MDAsXHJcblx0XHRcdFx0dGFiSW5kZXg6IDAsXHJcblx0XHRcdFx0dGFiQmFyczogW3tcclxuXHRcdFx0XHRcdG5hbWU6IFwi6K6y5biI5Yy6XCJcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRuYW1lOiBcIuiuqOiuuuWMulwiXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bmFtZTogXCLpl67nrZTljLpcIlxyXG5cdFx0XHRcdH1dLFxyXG5cclxuXHJcblx0XHRcdFx0bGlzdDogW10sXHJcblx0XHRcdFx0aXNDb25uZWN0U29ja2V0OiBmYWxzZSwgLy/mmK/lkKbov57mjqVzb2NrZXRcclxuXHRcdFx0XHRsaXZlSW5mbzoge1xyXG5cdFx0XHRcdFx0J2xpdmV1aWQnOiAnJyxcclxuXHRcdFx0XHRcdCdjb3Vyc2VpZCc6ICcnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR1c2VySW5mbzoge30sXHJcblx0XHRcdFx0aXNRdWU6IGZhbHNlLFxyXG5cdFx0XHRcdC8v55u05pKt5re75YqgXHJcblx0XHRcdFx0YWdvcmFhcHBpZDogJycsXHJcblx0XHRcdFx0YWdvcmFtUm9vbU5hbWU6ICcnLFxyXG5cdFx0XHRcdGFnb3JhdWlkOiAnJyxcclxuXHRcdFx0XHRwaG9uZXR5cGU6IDAsXHJcblx0XHRcdFx0d2VjaGF0bGl2ZXVybDogJycsXHJcblx0XHRcdFx0bXlJRDogJycsXHJcblx0XHRcdFx0YW5pbWF0aW9uRGF0YToge30sXHJcblx0XHRcdFx0c2Nyb2xsSGVpZ2h0OiAwLFxyXG5cdFx0XHRcdHNjcm9sbEludG86IFwiXCIsXHJcblxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vYWdvcmHnprvlvIDpgJrpgZNcclxuXHRcdG9uVW5sb2FkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdEFnb3JlUlRDSDUuY2xpZW50KCkubGVhdmUoKTtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRcdFx0QW9nb3JhV2VjaGF0LkNsaWVudCgpLmxldmVsKCk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb24pIHtcclxuXHRcdFx0dGhpcy5teUlEID0gYXBwLmdsb2JhbERhdGEudXNlcmluZm8uaWQ7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdteUlEOicgKyB0aGlzLm15SUQpO1xyXG5cdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdGNvbnNvbGUubG9nKFwi6L+Q6KGM5Zyo5bCP56iL5bqPXCIpO1xyXG5cdFx0XHR0aGlzLnBob25ldHlwZSA9IDQ7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0Y29uc29sZS5sb2coXCLov5DooYzlnKhINVwiKTtcclxuXHRcdFx0dGhpcy5waG9uZXR5cGUgPSAzO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLov5DooYzlnKhhbmRyb2lkXCIpO1xyXG5cdFx0XHRcdHRoaXMucGhvbmV0eXBlID0gMTtcclxuXHRcdFx0fSBlbHNlIGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PT0gJ2lvcycpIHtcclxuXHRcdFx0XHR0aGlzLnBob25ldHlwZSA9IDI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLov5DooYzlnKhpb3NcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdHRoaXMudXNlckluZm8gPSBhcHAuZ2xvYmFsRGF0YS51c2VyaW5mbztcclxuXHRcdFx0dGhpcy5saXZlSW5mby5saXZldWlkID0gb3B0aW9uLmxpdmV1aWQ7XHJcblx0XHRcdHRoaXMubGl2ZUluZm8uY291cnNlaWQgPSBvcHRpb24uY291cnNlaWQ7XHJcblx0XHRcdC8vIOaOpeaUtuebtOaSrWxpdmV1aWQgY291cnNlaWQgXHJcblx0XHRcdHRoaXMuZW50ZXJMaXZlKG9wdGlvbi5saXZldWlkLCBvcHRpb24uY291cnNlaWQpO1xyXG5cclxuXHRcdFx0c29ja2V0LmVtaXQoJ2Nvbm4nLCB7XHJcblx0XHRcdFx0dWlkOiB0aGlzLnVzZXJJbmZvLmlkLCAvL+i/m+WFpeivpeaIv+mXtOeahOWtpueUn2lkIOWBh+WmguetieS6juS4i+mdoueahOaIv+mXtGlkLCDpgqPljbPkuLrogIHluIjov5vlhaXmiL/pl7RcclxuXHRcdFx0XHRyb29tbnVtOiB0aGlzLmxpdmVJbmZvLmxpdmV1aWQsIC8v5oi/6Ze05Y+3LOWNs+iAgeW4iGlkXHJcblx0XHRcdFx0bmlja25hbWU6IHRoaXMudXNlckluZm8udXNlcl9uaWNrbmFtZSxcclxuXHRcdFx0XHRzdHJlYW06IHRoaXMubGl2ZUluZm8ubGl2ZXVpZCArICdfJyArIHRoaXMubGl2ZUluZm8uY291cnNlaWQgKyAnXzAnLCAvL+iAgeW4iGlkX+ivvueoi2lkX+ivvuaXtmlkXHJcblx0XHRcdFx0ZXF1aXBtZW50OiAndW5pLWFwcCcsIC8v546v5aKDXHJcblx0XHRcdFx0dG9rZW46IHRoaXMudXNlckluZm8udG9rZW4sXHJcblx0XHRcdFx0YXZhdGFyOiB0aGlzLnVzZXJJbmZvLmF2YXRhcixcclxuXHRcdFx0XHRzaWduOiAwLCAvL+etvuWQjSDpu5jorqTkuLowXHJcblx0XHRcdFx0dXNlcnR5cGU6IHRoaXMudXNlckluZm8udHlwZSwgLy8w5a2m55SfLCAx6ICB5biIXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzb2NrZXQub24oJ2Nvbm4nLCAoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd3cyDlt7Lov57mjqUgJyArIGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuaXNDb25uZWN0U29ja2V0ID0gdHJ1ZTsgLy/lt7Lov57mjqVcclxuXHRcdFx0fSk7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly/nm5HlkKzmnI3liqHnq6/mtojmga9cclxuXHRcdFx0c29ja2V0Lm9uKCdicm9hZGNhc3RpbmdMaXN0ZW4nLCAoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdGxldCBtc2dJbmZvID0gSlNPTi5wYXJzZShkYXRhKS5tc2dbMF07XHJcblx0XHRcdFx0aWYgKG1zZ0luZm8uY29udGVudCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMubGlzdC5wdXNoKG1zZ0luZm8pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhtc2dJbmZvKTtcclxuXHRcdFx0XHQvLyDmu5rliqjliLDlupXpg6hcclxuXHJcblx0XHRcdFx0dGhpcy5wcml6ZVNjcm9sbCgpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblxyXG5cdFx0XHRhc3luYyBjaGFuZ2VYWEsoaW5kZXgpIHtcclxuXHJcblx0XHRcdFx0dGhpcy50YWJJbmRleCA9IGluZGV4O1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50YWJJbmRleDtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25DaGFuZ2VUYWIoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfliIfmjaLlvZPliY3ntKLlvJUnICsgZS5kZXRhaWwuY3VycmVudCk7XHJcblx0XHRcdFx0dGhpcy50YWJJbmRleCA9IGUuZGV0YWlsLmN1cnJlbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVjeXB0KGNvZGUpIHtcclxuXHRcdFx0XHR2YXIgbmV3Y29kZSA9ICcnO1xyXG5cdFx0XHRcdHZhciBzdHIgPSAnMWVjeFh5TFJCLkNPZHJBaTpxMDlaNjJhc2gtUUduOFZGTklsYj1mTS9ENzRXalNfRVV6WXV3P0htVFB2a0ozb3RLNWdwJztcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvZGUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBjb2RlSXRlYW0gPSBjb2RlW2ldO1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzdHIubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIHN0cmluZ0l0ZWFtID0gc3RyW2pdO1xyXG5cdFx0XHRcdFx0XHRpZiAoY29kZUl0ZWFtID09IHN0cmluZ0l0ZWFtKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGogPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0bmV3Y29kZSArPSBzdHJbal07XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdG5ld2NvZGUgKz0gc3RyW2ogLSAxXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG5ld2NvZGU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFnb3JhV2VjaGF0KGFnb3JhYXBwaWQsIGFnb3Jhc3RyZWFtLCB1aWQpIHtcclxuXHRcdFx0XHQvL+WcqOWwj+eoi+W6j+mHjOe8luWGmeS7o+eggVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly/liJ3lp4vljJZcclxuXHRcdFx0XHRcdGxldCBjbGllbnQgPSBBb2dvcmFXZWNoYXQuQ2xpZW50KCk7XHJcblx0XHRcdFx0XHRjbGllbnQuc2V0Um9sZSgnYXVkaWVuY2UnKTtcclxuXHRcdFx0XHRcdGNsaWVudC5pbml0KHRoaXMuZGVjeXB0KGFnb3JhYXBwaWQpLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCflsI/nqIvluo/liJ3lp4vljJbmiJDlip8nKTtcclxuXHRcdFx0XHRcdFx0Ly/liqDlhaXpgJrpgZNcclxuXHRcdFx0XHRcdFx0Y2xpZW50LmpvaW4oJycsIGFnb3Jhc3RyZWFtLCB1aWQsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5Yqg5YWl6YCa6YGT5oiQ5YqfJyk7XHJcblx0XHRcdFx0XHRcdH0sIGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfliqDlhaXpgJrpgZPlpLHotKUnKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9LCBlID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+Wwj+eoi+W6j+WIneWni+WMluWksei0pScpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Ly/orqLpmIXov5znq6/mtYFcclxuXHRcdFx0XHRcdGNsaWVudC5vbihcInN0cmVhbS1hZGRlZFwiLCBlID0+IHtcclxuXHRcdFx0XHRcdFx0Y2xpZW50LnN1YnNjcmliZShldnQudWlkLCAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLorqLpmIXop4bpopHmtYHmiJDlip9wbGF5VXJsXCIgKyByZXMpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMud2VjaGF0bGl2ZXVybCA9IHJlcztcclxuXHRcdFx0XHRcdFx0fSwgKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6K6i6ZiF6KeG6aKR5rWB6ZSZ6K+vXCIsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuiuoumYheinhumikea1gemUmeivr1wiXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvL+i/nOerr+a1geenu+mZpFxyXG5cdFx0XHRcdFx0Y2xpZW50Lm9uKFwic3RyZWFtLXJlbW92ZWRcIiwgZSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfov5znq6/mtYHnp7vpmaQnKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly/ph43ov57mnLrliLZcclxuXHRcdFx0XHRcdGNsaWVudC5yZWpvaW4oJycsIGFnb3Jhc3RyZWFtLCB1aWQsICcnLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfph43ov57liqDlhaXpgJrpgZPmiJDlip8nKTtcclxuXHRcdFx0XHRcdH0sIGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn6YeN6L+e5Yqg5YWl6YCa6YGT5aSx6LSlJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblxyXG5cdFx0XHRcdH0sIDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZ29yYUg1KGFnb3JhYXBwaWQsIGFnb3Jhc3RyZWFtKSB7XHJcblxyXG5cdFx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQvLyB2YXIgaXNnbyA9IEFnb3JlUlRDSDUuY2hlY2tTeXN0ZW1SZXF1aXJlbWVudHMoKTtcclxuXHRcdFx0XHRcdC8vIGlmICghaXNnbykge1xyXG5cdFx0XHRcdFx0Ly8gXHRhbGVydCgn5b2T5YmN5rWP6KeI5Zmo5LiN5pSv5oyB77yM6K+35pu05o2i5rWP6KeI5Zmo5oiW6ICF5Y2H57qn6K+l5rWP6KeI5Zmo77yM5aaCOuiwt+atjOa1j+iniOWZqCcpO1xyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0Ly8gNGZmNjE3Zjk1NWVjNGU1Zjg5NDE0Y2MwNjg1NWNkNDZcclxuXHRcdFx0XHRcdC8vZGVtb0NoYW5uZWwxXHJcblxyXG5cdFx0XHRcdFx0bGV0IGNsaWVudCA9IEFnb3JhUlRDSDUuY3JlYXRlQ2xpZW50KHtcclxuXHRcdFx0XHRcdFx0bW9kZTogXCJsaXZlXCIsXHJcblx0XHRcdFx0XHRcdGNvZGVjOiBcInZwOFwiLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRBZ29yYVJUQ0g1LmNsaWVudCA9IGNsaWVudDtcclxuXHRcdFx0XHRcdGNsaWVudC5pbml0KF90aGlzLmRlY3lwdChhZ29yYWFwcGlkKSk7XHJcblx0XHRcdFx0XHRjbGllbnQuc2V0Q2xpZW50Um9sZSgnYXVkaWVuY2UnKTtcclxuXHRcdFx0XHRcdC8vIOWKoOWFpemikemBk1xyXG5cdFx0XHRcdFx0Y2xpZW50LmpvaW4oXCJcIiwgYWdvcmFzdHJlYW0sIG51bGwsICh1aWQpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJINeWKoOWFpemAmumBk+aIkOWKn1wiKVxyXG5cdFx0XHRcdFx0fSwgbnVsbCk7XHJcblx0XHRcdFx0XHQvLyDmnInov5znq6/nlKjmiLflj5HluIPmtYHml7bov5vooYzorqLpmIUgXHJcblx0XHRcdFx0XHRjbGllbnQub24oXCJzdHJlYW0tYWRkZWRcIiwgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0XHRcdGNsaWVudC5zdWJzY3JpYmUoZXZ0LnN0cmVhbSwgbnVsbCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vIOiuoumYheaIkOWKn+WQjuaSreaUvuS4u+aSreeahOa1gVxyXG5cdFx0XHRcdFx0Y2xpZW50Lm9uKFwic3RyZWFtLXN1YnNjcmliZWRcIiwgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0XHRcdGxldCBzdHJlYW0gPSBldnQuc3RyZWFtO1xyXG5cdFx0XHRcdFx0XHRsZXQgc3RyZWFtSWQgPSBTdHJpbmcoc3RyZWFtLmdldElkKCkpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuiuoumYheaIkOWKn+WQjuaSreaUvuS4u+aSreeahOa1gXN0cmVhbUlk77yaXCIgKyBzdHJlYW1JZClcclxuXHRcdFx0XHRcdFx0Ly9sZXQgc3RyZWFtdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWV3XCIpO1xyXG5cdFx0XHRcdFx0XHRsZXQgc3RyZWFtdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VicmVtb3RlQ29udGFpbmVyXCIpXHJcblx0XHRcdFx0XHRcdHN0cmVhbXZpZXcuaWQgPSBzdHJlYW1JZDtcclxuXHRcdFx0XHRcdFx0Ly9zdHJlYW12aWV3LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgxODBkZWcpXCI7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtb3RlQ29udGFpbmVyXCIpLmFwcGVuZENoaWxkKHN0cmVhbXZpZXcpO1xyXG5cdFx0XHRcdFx0XHRzdHJlYW0ucGxheShzdHJlYW1JZCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vIOi/nOerr+eUqOaIt+WPlua2iOWPkeW4g+a1geaXtu+8jOWFs+mXreWPiuenu+mZpOWvueW6lOeahOa1geOAglxyXG5cdFx0XHRcdFx0Y2xpZW50Lm9uKFwic3RyZWFtLXJlbW92ZWRcIiwgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0XHRcdGxldCBzdHJlYW0gPSBldnQuc3RyZWFtO1xyXG5cdFx0XHRcdFx0XHRsZXQgc3RyZWFtSWQgPSBTdHJpbmcoc3RyZWFtLmdldElkKCkpO1xyXG5cdFx0XHRcdFx0XHRzdHJlYW0uY2xvc2UoKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLov5znq6/nlKjmiLflj5bmtojlj5HluIPmtYHml7bvvIzlhbPpl63lj4rnp7vpmaTlr7nlupTnmoTmtYHjgIJcIik7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyDov5znq6/nlKjmiLfnprvlvIDpopHpgZPml7bvvIzlhbPpl63lj4rnp7vpmaTlr7nlupTnmoTmtYHjgIJcclxuXHRcdFx0XHRcdGNsaWVudC5vbihcInBlZXItbGVhdmVcIiwgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0XHRcdGxldCBzdHJlYW0gPSBldnQuc3RyZWFtO1xyXG5cdFx0XHRcdFx0XHRsZXQgc3RyZWFtSWQgPSBTdHJpbmcoc3RyZWFtLmdldElkKCkpO1xyXG5cdFx0XHRcdFx0XHRzdHJlYW0uY2xvc2UoKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLov5znq6/nlKjmiLfnprvlvIDpopHpgZPml7bvvIzlhbPpl63lj4rnp7vpmaTlr7nlupTnmoTmtYHjgIJcIik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LCAwKTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/m+WFpeebtOaSrVxyXG5cdFx0XHRlbnRlckxpdmUobGl2ZXVpZCwgY291cnNlaWQpIHtcclxuXHRcdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRcdGxldCBnRGF0YSA9IGFwcC5nbG9iYWxEYXRhO1xyXG5cdFx0XHRcdF90aGlzLmFnb3JhdWlkID0gZ0RhdGEudXNlcmluZm8uaWQ7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhjb3Vyc2VpZCk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhsaXZldWlkKTtcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IGdEYXRhLnNpdGVfdXJsICsgJ0xpdmUuRW50ZXInLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0J2xpdmV1aWQnOiBsaXZldWlkLFxyXG5cdFx0XHRcdFx0XHQnY291cnNlaWQnOiBjb3Vyc2VpZCxcclxuXHRcdFx0XHRcdFx0J2xlc3NvbmlkJzogJycsXHJcblx0XHRcdFx0XHRcdCd0b2tlbic6IGdEYXRhLnVzZXJpbmZvLnRva2VuLFxyXG5cdFx0XHRcdFx0XHQndWlkJzogZ0RhdGEudXNlcmluZm8uaWQsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0X3RoaXMuYWdvcmFhcHBpZCA9IHJlcy5kYXRhLmRhdGEuaW5mb1swXS5zb3VuZF9hcHBpZCxcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5hZ29yYW1Sb29tTmFtZSA9IHJlcy5kYXRhLmRhdGEuaW5mb1swXS5zdHJlYW0sXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bmlbDmja5hZ29yYWFwcGlk77yaXCIgKyBfdGhpcy5hZ29yYWFwcGlkKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bmlbDmja5hZ29yYW1Sb29tTmFtZe+8mlwiICsgX3RoaXMuYWdvcmFtUm9vbU5hbWUpO1xyXG5cdFx0XHRcdFx0XHRpZiAoX3RoaXMucGhvbmV0eXBlID09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5o6l5Y+j6L+U5Zue6L+b5YWlaW9zJylcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLiRyZWZzLnZpZGVvSW9zLmZvY3VzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnYXBwaWQnOiBfdGhpcy5hZ29yYWFwcGlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdtUm9vbU5hbWUnOiBfdGhpcy5hZ29yYW1Sb29tTmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQndWlkJzogZ0RhdGEudXNlcmluZm8uaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9LCAwKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChfdGhpcy5waG9uZXR5cGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmjqXlj6Pov5Tlm57ov5vlhaVhbmRyb2lkJylcclxuXHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy4kcmVmcy52aWRlb0FkbnJvaWQuY2xlYXJUZWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMuYWdvcmFhcHBpZCArICflo7AnICsgX3RoaXMuYWdvcmFtUm9vbU5hbWUgKyAn572RJyArIGdEYXRhLnVzZXJpbmZvLmlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9LCAwKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoX3RoaXMucGhvbmV0eXBlID09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5o6l5Y+j6L+U5Zue6L+b5YWlSDUnKVxyXG5cdFx0XHRcdFx0XHRcdF90aGlzLmFnb3JhSDUoX3RoaXMuYWdvcmFhcHBpZCwgX3RoaXMuYWdvcmFtUm9vbU5hbWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKF90aGlzLnBob25ldHlwZSA9PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuYWdvcmFXZWNoYXQoX3RoaXMuYWdvcmFhcHBpZCwgX3RoaXMuYWdvcmFtUm9vbU5hbWUsIGdEYXRhLnVzZXJpbmZvLmlkKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGlucHV0aW5nKGV2ZW50KSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5jb250ZW50ID0gZXZlbnQudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5Y+R6YCB5raI5oGvXHJcblx0XHRcdHN1Ym1pdChkYXRhKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29udGVudCA9PT0gJycpIHtcclxuXHRcdFx0XHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmtojmga/kuI3og73kuLrnqbonLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdC8v5riF56m66L6T5YWl5qGGXHJcblx0XHRcdFx0Ly8gdmFyIG5ld2NvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcblx0XHRcdFx0Ly8gdGhpcy5jb250ZW50ID0gJyc7XHJcblxyXG5cdFx0XHRcdGxldCB1c2VySW5mbyA9IGFwcC5nbG9iYWxEYXRhLnVzZXJpbmZvO1xyXG5cdFx0XHRcdGxldCBtc2d0eXBlID0gKHRoaXMuaXNRdWUgPT09IHRydWUpID8gXCIxXCIgOiBcIjBcIjtcclxuXHJcblx0XHRcdFx0Ly/lj5HpgIHmtojmga9cclxuXHRcdFx0XHRsZXQgb2JqID0ge1xyXG5cdFx0XHRcdFx0XCJtc2dcIjogW3tcclxuXHRcdFx0XHRcdFx0XCJfbWV0aG9kX1wiOiBcIlNlbmRNc2dcIixcclxuXHRcdFx0XHRcdFx0XCJhY3Rpb25cIjogXCIwXCIsXHJcblx0XHRcdFx0XHRcdFwidG9rZW5cIjogdXNlckluZm8udG9rZW4sXHJcblx0XHRcdFx0XHRcdFwidWlkXCI6ICcnICsgdXNlckluZm8uaWQsXHJcblx0XHRcdFx0XHRcdFwidXNlcl9uaWNrbmFtZVwiOiAnJyArIHVzZXJJbmZvLnVzZXJfbmlja25hbWUsXHJcblx0XHRcdFx0XHRcdFwiYXZhdGFyXCI6ICcnICsgdXNlckluZm8uYXZhdGFyLFxyXG5cdFx0XHRcdFx0XHRcImxpdmV1aWRcIjogJycgKyB0aGlzLmxpdmVJbmZvLmxpdmV1aWQsXHJcblx0XHRcdFx0XHRcdFwiY29udGVudFwiOiAnJyArIHRoaXMuY29udGVudCxcclxuXHRcdFx0XHRcdFx0XCJlcXVpcG1lbnRcIjogXCJ1bmktYXBwXCIsXHJcblx0XHRcdFx0XHRcdFwiY3JlYXRlX3RpbWVcIjogTWF0aC5mbG9vcigobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKCkgLyAxMDAwKSxcclxuXHRcdFx0XHRcdFx0XCJtc2d0eXBlXCI6IG1zZ3R5cGVcclxuXHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0XCJyZXRjb2RlXCI6IFwiMDAwMDAwXCIsXHJcblx0XHRcdFx0XHRcInJldG1zZ1wiOiBcIk9LXCJcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5pc0Nvbm5lY3RTb2NrZXQgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0c29ja2V0LmVtaXQoJ2Jyb2FkY2FzdCcsIG9iaik7XHJcblx0XHRcdFx0XHR0aGlzLnRhYkluZGV4ID0gMTtcclxuXHRcdFx0XHRcdGxldCBnRGF0YSA9IGFwcC5nbG9iYWxEYXRhO1xyXG5cdFx0XHRcdFx0bGV0IGxpdmV1aWQgPSB0aGlzLmxpdmVJbmZvLmxpdmV1aWQ7XHJcblx0XHRcdFx0XHRsZXQgY291cnNlaWQgPSB0aGlzLmxpdmVJbmZvLmNvdXJzZWlkO1xyXG5cdFx0XHRcdFx0Ly8g562+5ZCNXHJcblx0XHRcdFx0XHRsZXQgc2lnbiA9IHRoaXMuc29ydDJ1cmwoe1xyXG5cdFx0XHRcdFx0XHQndWlkJzogdGhpcy51c2VySW5mby5pZCxcclxuXHRcdFx0XHRcdFx0J2xpdmV1aWQnOiBsaXZldWlkLFxyXG5cdFx0XHRcdFx0XHQnY291cnNlaWQnOiBjb3Vyc2VpZCxcclxuXHRcdFx0XHRcdFx0J2xlc3NvbmlkJzogJzAnLFxyXG5cdFx0XHRcdFx0XHQndHlwZSc6ICcwJyxcclxuXHRcdFx0XHRcdFx0J2NvbnRlbnQnOiB0aGlzLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdCd1cmwnOiAnJyxcclxuXHRcdFx0XHRcdFx0J3VzZXJfdHlwZSc6IHRoaXMudXNlckluZm8udHlwZSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly/orrDlvZXogYrlpKnkv6Hmga9cclxuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0dXJsOiBnRGF0YS5zaXRlX3VybCArICdMaXZlLlNldENoYXQnLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0J3VpZCc6IHRoaXMudXNlckluZm8uaWQsXHJcblx0XHRcdFx0XHRcdFx0J3Rva2VuJzogdGhpcy51c2VySW5mby50b2tlbixcclxuXHRcdFx0XHRcdFx0XHQnbGl2ZXVpZCc6IGxpdmV1aWQsXHJcblx0XHRcdFx0XHRcdFx0J2NvdXJzZWlkJzogY291cnNlaWQsXHJcblx0XHRcdFx0XHRcdFx0J2xlc3NvbmlkJzogMCxcclxuXHRcdFx0XHRcdFx0XHQndHlwZSc6IDAsXHJcblx0XHRcdFx0XHRcdFx0J2NvbnRlbnQnOiB0aGlzLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0J3VybCc6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdCdsZW5ndGgnOiAwLFxyXG5cdFx0XHRcdFx0XHRcdCdzdGF0dXMnOiBtc2d0eXBlLFxyXG5cdFx0XHRcdFx0XHRcdCd1c2VyX3R5cGUnOiB0aGlzLnVzZXJJbmZvLnR5cGUsXHJcblx0XHRcdFx0XHRcdFx0J3NpZ24nOiBzaWduXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0XHQvLyB0aGlzLmNvbnRlbnQgPSAnJztcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRyZWZzLmlucHV0MS5ibHVyKCk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWw6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn572R57uc6ZSZ6K+vJ1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRxdWVzdGlvbihpc1F1ZSkge1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5pc1F1ZSA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0Ly8g5YiH5o2i5Yiw6Zeu562U5Yy6XHJcblx0XHRcdFx0XHQvLyB0aGlzLnRhYkluZGV4ID0gMjtcclxuXHRcdFx0XHRcdHRoaXMuaXNRdWUgPSB0cnVlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLnRhYkluZGV4ID0gMDtcclxuXHRcdFx0XHRcdHRoaXMuaXNRdWUgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWtl+WFuOW6j+aOkuW6j1xyXG5cdFx0XHRzb3J0MnVybChhcnIxKSB7XHJcblx0XHRcdFx0dmFyIG5ld2tleSA9IE9iamVjdC5rZXlzKGFycjEpLnNvcnQoKTtcclxuXHRcdFx0XHR2YXIgbmV3T2JqID0ge307XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuZXdrZXkubGVuZ3RoOyBpKyspIHsgLy/pgY3ljoZuZXdrZXnmlbDnu4RcclxuXHRcdFx0XHRcdG5ld09ialtuZXdrZXlbaV1dID0gYXJyMVtuZXdrZXlbaV1dOyAvL+WQkeaWsOWIm+W7uueahOWvueixoeS4reaMieeFp+aOkuWlveeahOmhuuW6j+S+neasoeWinuWKoOmUruWAvOWvuVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIHRleHQgPSBcIlwiO1xyXG5cdFx0XHRcdGZvciAodmFyIGluZGV4IGluIG5ld09iaikge1xyXG5cdFx0XHRcdFx0dGV4dCA9IHRleHQgKyBpbmRleCArIFwiPVwiICsgbmV3T2JqW2luZGV4XSArIFwiJlwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0ZXh0ID0gdGV4dC5zdWJzdHIoMCwgdGV4dC5sZW5ndGggLSAxKTtcclxuXHRcdFx0XHR0ZXh0ICs9ICcmJyArIGFwcC5nbG9iYWxEYXRhLnNpZ25fa2V5O1xyXG5cdFx0XHRcdHJldHVybiBtZDVfanMuaGV4X21kNSh0ZXh0KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlzdHNjcm9sbChldmVudCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0SGVpZ2h0KENsYXNzKSB7XHJcblx0XHRcdFx0bGV0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHRxdWVyeVxyXG5cdFx0XHRcdFx0LnNlbGVjdEFsbChDbGFzcylcclxuXHRcdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2Nyb2xsSCA9IGRhdGFbMF0uaGVpZ2h0O1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5leGVjKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByaXplU2Nyb2xsKCkge1xyXG5cblxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZT5cclxuXHQubGl2ZS1hbGwtd3JhcCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUY2O1xyXG5cdH1cclxuXHJcblx0LnZpZGVvLXdyYXAge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogNDAwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblxyXG5cdC5zd3BpZXIge31cclxuXHJcblx0LnJvdW5kZWQge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuY2hhdGNlbGwge31cclxuXHJcblx0Lm1lc3NhZ2Vib3R0b20ge1xyXG5cdFx0LyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL3N0YXRpYy9jaGF0X21lc3NhZ2Vfb3RoZXIucG5nKTsgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQubWVzc2FnZWJvdHRvbTIge1xyXG5cclxuXHRcdC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9zdGF0aWMvY2hhdF9tZXNzYWdlX3NlbGYucG5nKTsgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcblx0fVxyXG5cclxuXHQubWVzc2FnZSB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0LnVzZXJfbmlja25hbWUge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRwYWRkaW5nOiAxMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5zY3JvbGwxIHtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0fVxyXG5cclxuXHQudGV4dG1lc3NhZ2Uge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRwYWRkaW5nOiAyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDhycHg7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdG1heC13aWR0aDogNDUwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHJcblx0LnRleHRtZXNzYWdlMiB7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bWF4LXdpZHRoOiA0NTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzRENjk1O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuaW5wdXRib3R0b20ge1xyXG5cdFx0aGVpZ2h0OiAxMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwcnB4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHJcblx0fVxyXG5cclxuXHQuaW5wdXRjbGFzcyB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0aGVpZ2h0OiAxMzBycHg7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC5pbnB1dGJvcmRlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGJvdHRvbTogdW5zZXQ7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0bGVmdDogMjBycHg7XHJcblx0XHRyaWdodDogMTQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGNjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LmlucHV0IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcblx0XHRib3R0b206IHVuc2V0O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxlZnQ6IDIwcnB4O1xyXG5cdFx0cmlnaHQ6IDEwMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyZW07XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MHJweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDEwcnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnNlbmQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDMwcnB4O1xyXG5cdFx0Y29sb3I6ICMzNEQ2OTU7XHJcblx0XHRmb250LXNpemU6IDM1cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogNDBycHg7XHJcblx0fVxyXG5cclxuXHQudGl3ZW4ge1xyXG5cdFx0Zm9udC1zaXplOiAyNXJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiA1cnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogOHJweDtcclxuXHJcblx0fVxyXG5cclxuXHQud2VuLWJ0bi13cmFwIHtcclxuXHRcdHdpZHRoOiAxMDBycHg7XHJcblx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTVycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNzBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwIDUwcnB4IDUwcnB4IDA7XHJcblxyXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTsgKi9cclxuXHR9XHJcblxyXG5cdC5kdWloYW8taW1nIHtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0fVxyXG5cclxuXHQuZHVpaGFvLXdyYXAge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDhycHhcclxuXHR9XHJcblxyXG5cdC53ZW4ge1xyXG5cdFx0dG9wOiAyMHJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzNEQ2OTU7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGhlaWdodDogMzdycHg7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC53ZW4yIHtcclxuXHRcdHRvcDogNjBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiA2MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzNEQ2OTU7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGhlaWdodDogMzdycHg7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC56aGluYW4ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0MHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC56aGluYW50ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHJweDtcclxuXHRcdHBhZGRpbmctdG9wOiAyMHJweDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 11);

/***/ }),
/* 11 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 12 */
/*!**************************************************************************************************!*\
  !*** /Users/wangxiaowen/Desktop/Kaiyuan/node_modules/@hyoga/uni-socket.io/dist/uni-socket.io.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__f__) {function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}!function (t, e) {if (true) module.exports = e();else { var n, r; }}(window, function () {return function (t) {var e = {};function r(n) {if (e[n]) return e[n].exports;var o = e[n] = { i: n, l: !1, exports: {} };return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;}return r.m = t, r.c = e, r.d = function (t, e, n) {r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });}, r.r = function (t) {"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });}, r.t = function (t, e) {if (1 & e && (t = r(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) {r.d(n, o, function (e) {return t[e];}.bind(null, o));}return n;}, r.n = function (t) {var e = t && t.__esModule ? function () {return t.default;} : function () {return t;};return r.d(e, "a", e), e;}, r.o = function (t, e) {return Object.prototype.hasOwnProperty.call(t, e);}, r.p = "", r(r.s = 22);}([function (t, e) {t.exports = function () {return function () {};};}, function (t, e, r) {function n(t) {if (t) return function (t) {for (var e in n.prototype) {t[e] = n.prototype[e];}return t;}(t);}t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;}, n.prototype.once = function (t, e) {function r() {this.off(t, r), e.apply(this, arguments);}return r.fn = e, this.on(t, r), this;}, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var r,n = this._callbacks["$" + t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks["$" + t], this;for (var o = 0; o < n.length; o++) {if ((r = n[o]) === e || r.fn === e) {n.splice(o, 1);break;}}return this;}, n.prototype.emit = function (t) {this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),r = this._callbacks["$" + t];if (r) for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) {r[n].apply(this, e);}return this;}, n.prototype.listeners = function (t) {return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];}, n.prototype.hasListeners = function (t) {return !!this.listeners(t).length;};}, function (t, e, r) {var n,o = r(33),i = r(16),s = r(35),a = r(36),c = r(37);"undefined" != typeof ArrayBuffer && (n = r(38));var h = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),u = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),f = h || u;e.protocol = 3;var p = e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },l = o(p),d = { type: "error", data: "parser error" },y = r(39);function g(t, e, r) {for (var n = new Array(t.length), o = a(t.length, r), i = function i(t, r, o) {e(r, function (e, r) {n[t] = r, o(e, n);});}, s = 0; s < t.length; s++) {i(s, t[s], o);}}e.encodePacket = function (t, r, n, o) {"function" == typeof r && (o = r, r = !1), "function" == typeof n && (o = n, n = null);var i = void 0 === t.data ? void 0 : t.data.buffer || t.data;if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) return function (t, r, n) {if (!r) return e.encodeBase64Packet(t, n);var o = t.data,i = new Uint8Array(o),s = new Uint8Array(1 + o.byteLength);s[0] = p[t.type];for (var a = 0; a < i.length; a++) {s[a + 1] = i[a];}return n(s.buffer);}(t, r, o);if (void 0 !== y && i instanceof y) return function (t, r, n) {if (!r) return e.encodeBase64Packet(t, n);if (f) return function (t, r, n) {if (!r) return e.encodeBase64Packet(t, n);var o = new FileReader();return o.onload = function () {e.encodePacket({ type: t.type, data: o.result }, r, !0, n);}, o.readAsArrayBuffer(t.data);}(t, r, n);var o = new Uint8Array(1);o[0] = p[t.type];var i = new y([o.buffer, t.data]);return n(i);}(t, r, o);if (i && i.base64) return function (t, r) {var n = "b" + e.packets[t.type] + t.data.data;return r(n);}(t, o);var s = p[t.type];return void 0 !== t.data && (s += n ? c.encode(String(t.data), { strict: !1 }) : String(t.data)), o("" + s);}, e.encodeBase64Packet = function (t, r) {var n,o = "b" + e.packets[t.type];if (void 0 !== y && t.data instanceof y) {var i = new FileReader();return i.onload = function () {var t = i.result.split(",")[1];r(o + t);}, i.readAsDataURL(t.data);}try {n = String.fromCharCode.apply(null, new Uint8Array(t.data));} catch (e) {for (var s = new Uint8Array(t.data), a = new Array(s.length), c = 0; c < s.length; c++) {a[c] = s[c];}n = String.fromCharCode.apply(null, a);}return o += btoa(n), r(o);}, e.decodePacket = function (t, r, n) {if (void 0 === t) return d;if ("string" == typeof t) {if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), r);if (n && !1 === (t = function (t) {try {t = c.decode(t, { strict: !1 });} catch (t) {return !1;}return t;}(t))) return d;var o = t.charAt(0);return Number(o) == o && l[o] ? t.length > 1 ? { type: l[o], data: t.substring(1) } : { type: l[o] } : d;}o = new Uint8Array(t)[0];var i = s(t, 1);return y && "blob" === r && (i = new y([i])), { type: l[o], data: i };}, e.decodeBase64Packet = function (t, e) {var r = l[t.charAt(0)];if (!n) return { type: r, data: { base64: !0, data: t.substr(1) } };var o = n.decode(t.substr(1));return "blob" === e && y && (o = new y([o])), { type: r, data: o };}, e.encodePayload = function (t, r, n) {"function" == typeof r && (n = r, r = null);var o = i(t);if (r && o) return y && !f ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n);if (!t.length) return n("0:");g(t, function (t, n) {e.encodePacket(t, !!o && r, !1, function (t) {n(null, function (t) {return t.length + ":" + t;}(t));});}, function (t, e) {return n(e.join(""));});}, e.decodePayload = function (t, r, n) {if ("string" != typeof t) return e.decodePayloadAsBinary(t, r, n);var o;if ("function" == typeof r && (n = r, r = null), "" === t) return n(d, 0, 1);for (var i, s, a = "", c = 0, h = t.length; c < h; c++) {var u = t.charAt(c);if (":" === u) {if ("" === a || a != (i = Number(a))) return n(d, 0, 1);if (a != (s = t.substr(c + 1, i)).length) return n(d, 0, 1);if (s.length) {if (o = e.decodePacket(s, r, !1), d.type === o.type && d.data === o.data) return n(d, 0, 1);if (!1 === n(o, c + i, h)) return;}c += i, a = "";} else a += u;}return "" !== a ? n(d, 0, 1) : void 0;}, e.encodePayloadAsArrayBuffer = function (t, r) {if (!t.length) return r(new ArrayBuffer(0));g(t, function (t, r) {e.encodePacket(t, !0, !0, function (t) {return r(null, t);});}, function (t, e) {var n = e.reduce(function (t, e) {var r;return t + (r = "string" == typeof e ? e.length : e.byteLength).toString().length + r + 2;}, 0),o = new Uint8Array(n),i = 0;return e.forEach(function (t) {var e = "string" == typeof t,r = t;if (e) {for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) {n[s] = t.charCodeAt(s);}r = n.buffer;}o[i++] = e ? 0 : 1;var a = r.byteLength.toString();for (s = 0; s < a.length; s++) {o[i++] = parseInt(a[s]);}o[i++] = 255;for (n = new Uint8Array(r), s = 0; s < n.length; s++) {o[i++] = n[s];}}), r(o.buffer);});}, e.encodePayloadAsBlob = function (t, r) {g(t, function (t, r) {e.encodePacket(t, !0, !0, function (t) {var e = new Uint8Array(1);if (e[0] = 1, "string" == typeof t) {for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) {n[o] = t.charCodeAt(o);}t = n.buffer, e[0] = 0;}var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),s = new Uint8Array(i.length + 1);for (o = 0; o < i.length; o++) {s[o] = parseInt(i[o]);}if (s[i.length] = 255, y) {var a = new y([e.buffer, s.buffer, t]);r(null, a);}});}, function (t, e) {return r(new y(e));});}, e.decodePayloadAsBinary = function (t, r, n) {"function" == typeof r && (n = r, r = null);for (var o = t, i = []; o.byteLength > 0;) {for (var a = new Uint8Array(o), c = 0 === a[0], h = "", u = 1; 255 !== a[u]; u++) {if (h.length > 310) return n(d, 0, 1);h += a[u];}o = s(o, 2 + h.length), h = parseInt(h);var f = s(o, 0, h);if (c) try {f = String.fromCharCode.apply(null, new Uint8Array(f));} catch (t) {var p = new Uint8Array(f);f = "";for (u = 0; u < p.length; u++) {f += String.fromCharCode(p[u]);}}i.push(f), o = s(o, h);}var l = i.length;i.forEach(function (t, o) {n(e.decodePacket(t, r, !0), o, l);});};}, function (t, e) {e.encode = function (t) {var e = "";for (var r in t) {t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));}return e;}, e.decode = function (t) {for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {var i = r[n].split("=");e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);}return e;};}, function (t, e) {t.exports = function (t, e) {var r = function r() {};r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;};}, function (t, e, r) {var n = r(0)("socket.io-parser"),o = r(1),i = r(25),s = r(10),a = r(11);function c() {}e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = c, e.Decoder = f;var h = e.ERROR + '"encode error"';function u(t) {var r = "" + t.type;if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (r += t.attachments + "-"), t.nsp && "/" !== t.nsp && (r += t.nsp + ","), null != t.id && (r += t.id), null != t.data) {var o = function (t) {try {return JSON.stringify(t);} catch (t) {return !1;}}(t.data);if (!1 === o) return h;r += o;}return n("encoded %j as %s", t, r), r;}function f() {this.reconstructor = null;}function p(t) {this.reconPack = t, this.buffers = [];}function l(t) {return { type: e.ERROR, data: "parser error: " + t };}c.prototype.encode = function (t, r) {(n("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) ? function (t, e) {i.removeBlobs(t, function (t) {var r = i.deconstructPacket(t),n = u(r.packet),o = r.buffers;o.unshift(n), e(o);});}(t, r) : r([u(t)]);}, o(f.prototype), f.prototype.add = function (t) {var r;if ("string" == typeof t) r = function (t) {var r = 0,o = { type: Number(t.charAt(0)) };if (null == e.types[o.type]) return l("unknown packet type " + o.type);if (e.BINARY_EVENT === o.type || e.BINARY_ACK === o.type) {for (var i = ""; "-" !== t.charAt(++r) && (i += t.charAt(r), r != t.length);) {;}if (i != Number(i) || "-" !== t.charAt(r)) throw new Error("Illegal attachments");o.attachments = Number(i);}if ("/" === t.charAt(r + 1)) for (o.nsp = ""; ++r;) {if ("," === (c = t.charAt(r))) break;if (o.nsp += c, r === t.length) break;} else o.nsp = "/";var a = t.charAt(r + 1);if ("" !== a && Number(a) == a) {for (o.id = ""; ++r;) {var c;if (null == (c = t.charAt(r)) || Number(c) != c) {--r;break;}if (o.id += t.charAt(r), r === t.length) break;}o.id = Number(o.id);}if (t.charAt(++r)) {var h = function (t) {try {return JSON.parse(t);} catch (t) {return !1;}}(t.substr(r));if (!(!1 !== h && (o.type === e.ERROR || s(h)))) return l("invalid payload");o.data = h;}return n("decoded %s as %j", t, o), o;}(t), e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type ? (this.reconstructor = new p(r), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r);else {if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");(r = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", r));}}, f.prototype.destroy = function () {this.reconstructor && this.reconstructor.finishedReconstruction();}, p.prototype.takeBinaryData = function (t) {if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {var e = i.reconstructPacket(this.reconPack, this.buffers);return this.finishedReconstruction(), e;}return null;}, p.prototype.finishedReconstruction = function () {this.reconPack = null, this.buffers = [];};}, function (t, e, r) {"use strict";(function (t) {
      /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * The buffer module from node.js, for the browser.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @author   Feross Aboukhadijeh <http://feross.org>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @license  MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */
      var n = r(26),o = r(27),i = r(28);function s() {return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;}function a(t, e) {if (s() < e) throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t;}function c(t, e, r) {if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, r);if ("number" == typeof t) {if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");return f(this, t);}return h(this, t, e, r);}function h(t, e, r, n) {if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) {if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = p(t, e);return t;}(t, e, r, n) : "string" == typeof e ? function (t, e, r) {"string" == typeof r && "" !== r || (r = "utf8");if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');var n = 0 | d(e, r),o = (t = a(t, n)).write(e, r);o !== n && (t = t.slice(0, o));return t;}(t, e, r) : function (t, e) {if (c.isBuffer(e)) {var r = 0 | l(e.length);return 0 === (t = a(t, r)).length || e.copy(t, 0, 0, r), t;}if (e) {if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : p(t, e);if ("Buffer" === e.type && i(e.data)) return p(t, e.data);}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");}(t, e);}function u(t) {if ("number" != typeof t) throw new TypeError('"size" argument must be a number');if (t < 0) throw new RangeError('"size" argument must not be negative');}function f(t, e) {if (u(e), t = a(t, e < 0 ? 0 : 0 | l(e)), !c.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) {t[r] = 0;}return t;}function p(t, e) {var r = e.length < 0 ? 0 : 0 | l(e.length);t = a(t, r);for (var n = 0; n < r; n += 1) {t[n] = 255 & e[n];}return t;}function l(t) {if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");return 0 | t;}function d(t, e) {if (c.isBuffer(t)) return t.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;"string" != typeof t && (t = "" + t);var r = t.length;if (0 === r) return 0;for (var n = !1;;) {switch (e) {case "ascii":case "latin1":case "binary":return r;case "utf8":case "utf-8":case void 0:return q(t).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return 2 * r;case "hex":return r >>> 1;case "base64":return Y(t).length;default:if (n) return q(t).length;e = ("" + e).toLowerCase(), n = !0;}}}function y(t, e, r) {var n = !1;if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";if ((r >>>= 0) <= (e >>>= 0)) return "";for (t || (t = "utf8");;) {switch (t) {case "hex":return C(this, e, r);case "utf8":case "utf-8":return x(this, e, r);case "ascii":return R(this, e, r);case "latin1":case "binary":return S(this, e, r);case "base64":return _(this, e, r);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return P(this, e, r);default:if (n) throw new TypeError("Unknown encoding: " + t);t = (t + "").toLowerCase(), n = !0;}}}function g(t, e, r) {var n = t[e];t[e] = t[r], t[r] = n;}function v(t, e, r, n, o) {if (0 === t.length) return -1;if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {if (o) return -1;r = t.length - 1;} else if (r < 0) {if (!o) return -1;r = 0;}if ("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, o);if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : m(t, [e], r, n, o);throw new TypeError("val must be string, number or Buffer");}function m(t, e, r, n, o) {var i,s = 1,a = t.length,c = e.length;if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {if (t.length < 2 || e.length < 2) return -1;s = 2, a /= 2, c /= 2, r /= 2;}function h(t, e) {return 1 === s ? t[e] : t.readUInt16BE(e * s);}if (o) {var u = -1;for (i = r; i < a; i++) {if (h(t, i) === h(e, -1 === u ? 0 : i - u)) {if (-1 === u && (u = i), i - u + 1 === c) return u * s;} else -1 !== u && (i -= i - u), u = -1;}} else for (r + c > a && (r = a - c), i = r; i >= 0; i--) {for (var f = !0, p = 0; p < c; p++) {if (h(t, i + p) !== h(e, p)) {f = !1;break;}}if (f) return i;}return -1;}function b(t, e, r, n) {r = Number(r) || 0;var o = t.length - r;n ? (n = Number(n)) > o && (n = o) : n = o;var i = e.length;if (i % 2 != 0) throw new TypeError("Invalid hex string");n > i / 2 && (n = i / 2);for (var s = 0; s < n; ++s) {var a = parseInt(e.substr(2 * s, 2), 16);if (isNaN(a)) return s;t[r + s] = a;}return s;}function w(t, e, r, n) {return H(q(e, t.length - r), t, r, n);}function A(t, e, r, n) {return H(function (t) {for (var e = [], r = 0; r < t.length; ++r) {e.push(255 & t.charCodeAt(r));}return e;}(e), t, r, n);}function k(t, e, r, n) {return A(t, e, r, n);}function E(t, e, r, n) {return H(Y(e), t, r, n);}function B(t, e, r, n) {return H(function (t, e) {for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) {r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);}return i;}(e, t.length - r), t, r, n);}function _(t, e, r) {return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));}function x(t, e, r) {r = Math.min(t.length, r);for (var n = [], o = e; o < r;) {var i,s,a,c,h = t[o],u = null,f = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;if (o + f <= r) switch (f) {case 1:h < 128 && (u = h);break;case 2:128 == (192 & (i = t[o + 1])) && (c = (31 & h) << 6 | 63 & i) > 127 && (u = c);break;case 3:i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (c = (15 & h) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (u = c);break;case 4:i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & h) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (u = c);}null === u ? (u = 65533, f = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), o += f;}return function (t) {var e = t.length;if (e <= 4096) return String.fromCharCode.apply(String, t);var r = "",n = 0;for (; n < e;) {r += String.fromCharCode.apply(String, t.slice(n, n += 4096));}return r;}(n);}e.Buffer = c, e.SlowBuffer = function (t) {+t != t && (t = 0);return c.alloc(+t);}, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {try {var t = new Uint8Array(1);return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {return 42;} }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;} catch (t) {return !1;}}(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function (t) {return t.__proto__ = c.prototype, t;}, c.from = function (t, e, r) {return h(null, t, e, r);}, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, { value: null, configurable: !0 })), c.alloc = function (t, e, r) {return function (t, e, r, n) {return u(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e);}(null, t, e, r);}, c.allocUnsafe = function (t) {return f(null, t);}, c.allocUnsafeSlow = function (t) {return f(null, t);}, c.isBuffer = function (t) {return !(null == t || !t._isBuffer);}, c.compare = function (t, e) {if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");if (t === e) return 0;for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o) {if (t[o] !== e[o]) {r = t[o], n = e[o];break;}}return r < n ? -1 : n < r ? 1 : 0;}, c.isEncoding = function (t) {switch (String(t).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return !0;default:return !1;}}, c.concat = function (t, e) {if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === t.length) return c.alloc(0);var r;if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) {e += t[r].length;}var n = c.allocUnsafe(e),o = 0;for (r = 0; r < t.length; ++r) {var s = t[r];if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n, o), o += s.length;}return n;}, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {var t = this.length;if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var e = 0; e < t; e += 2) {g(this, e, e + 1);}return this;}, c.prototype.swap32 = function () {var t = this.length;if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var e = 0; e < t; e += 4) {g(this, e, e + 3), g(this, e + 1, e + 2);}return this;}, c.prototype.swap64 = function () {var t = this.length;if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var e = 0; e < t; e += 8) {g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);}return this;}, c.prototype.toString = function () {var t = 0 | this.length;return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : y.apply(this, arguments);}, c.prototype.equals = function (t) {if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");return this === t || 0 === c.compare(this, t);}, c.prototype.inspect = function () {var t = "",r = e.INSPECT_MAX_BYTES;return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";}, c.prototype.compare = function (t, e, r, n, o) {if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");if (n >= o && e >= r) return 0;if (n >= o) return -1;if (e >= r) return 1;if (this === t) return 0;for (var i = (o >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(i, s), h = this.slice(n, o), u = t.slice(e, r), f = 0; f < a; ++f) {if (h[f] !== u[f]) {i = h[f], s = u[f];break;}}return i < s ? -1 : s < i ? 1 : 0;}, c.prototype.includes = function (t, e, r) {return -1 !== this.indexOf(t, e, r);}, c.prototype.indexOf = function (t, e, r) {return v(this, t, e, r, !0);}, c.prototype.lastIndexOf = function (t, e, r) {return v(this, t, e, r, !1);}, c.prototype.write = function (t, e, r, n) {if (void 0 === e) n = "utf8", r = this.length, e = 0;else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;else {if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);}var o = this.length - e;if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");n || (n = "utf8");for (var i = !1;;) {switch (n) {case "hex":return b(this, t, e, r);case "utf8":case "utf-8":return w(this, t, e, r);case "ascii":return A(this, t, e, r);case "latin1":case "binary":return k(this, t, e, r);case "base64":return E(this, t, e, r);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return B(this, t, e, r);default:if (i) throw new TypeError("Unknown encoding: " + n);n = ("" + n).toLowerCase(), i = !0;}}}, c.prototype.toJSON = function () {return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };};function R(t, e, r) {var n = "";r = Math.min(t.length, r);for (var o = e; o < r; ++o) {n += String.fromCharCode(127 & t[o]);}return n;}function S(t, e, r) {var n = "";r = Math.min(t.length, r);for (var o = e; o < r; ++o) {n += String.fromCharCode(t[o]);}return n;}function C(t, e, r) {var n = t.length;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);for (var o = "", i = e; i < r; ++i) {o += M(t[i]);}return o;}function P(t, e, r) {for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) {o += String.fromCharCode(n[i] + 256 * n[i + 1]);}return o;}function T(t, e, r) {if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");if (t + e > r) throw new RangeError("Trying to access beyond buffer length");}function O(t, e, r, n, o, i) {if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');if (r + n > t.length) throw new RangeError("Index out of range");}function N(t, e, r, n) {e < 0 && (e = 65535 + e + 1);for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) {t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);}}function L(t, e, r, n) {e < 0 && (e = 4294967295 + e + 1);for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) {t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255;}}function U(t, e, r, n, o, i) {if (r + n > t.length) throw new RangeError("Index out of range");if (r < 0) throw new RangeError("Index out of range");}function I(t, e, r, n, i) {return i || U(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;}function j(t, e, r, n, i) {return i || U(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;}c.prototype.slice = function (t, e) {var r,n = this.length;if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), c.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = c.prototype;else {var o = e - t;r = new c(o, void 0);for (var i = 0; i < o; ++i) {r[i] = this[i + t];}}return r;}, c.prototype.readUIntLE = function (t, e, r) {t |= 0, e |= 0, r || T(t, e, this.length);for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {n += this[t + i] * o;}return n;}, c.prototype.readUIntBE = function (t, e, r) {t |= 0, e |= 0, r || T(t, e, this.length);for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) {n += this[t + --e] * o;}return n;}, c.prototype.readUInt8 = function (t, e) {return e || T(t, 1, this.length), this[t];}, c.prototype.readUInt16LE = function (t, e) {return e || T(t, 2, this.length), this[t] | this[t + 1] << 8;}, c.prototype.readUInt16BE = function (t, e) {return e || T(t, 2, this.length), this[t] << 8 | this[t + 1];}, c.prototype.readUInt32LE = function (t, e) {return e || T(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];}, c.prototype.readUInt32BE = function (t, e) {return e || T(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);}, c.prototype.readIntLE = function (t, e, r) {t |= 0, e |= 0, r || T(t, e, this.length);for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {n += this[t + i] * o;}return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;}, c.prototype.readIntBE = function (t, e, r) {t |= 0, e |= 0, r || T(t, e, this.length);for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) {i += this[t + --n] * o;}return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;}, c.prototype.readInt8 = function (t, e) {return e || T(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];}, c.prototype.readInt16LE = function (t, e) {e || T(t, 2, this.length);var r = this[t] | this[t + 1] << 8;return 32768 & r ? 4294901760 | r : r;}, c.prototype.readInt16BE = function (t, e) {e || T(t, 2, this.length);var r = this[t + 1] | this[t] << 8;return 32768 & r ? 4294901760 | r : r;}, c.prototype.readInt32LE = function (t, e) {return e || T(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;}, c.prototype.readInt32BE = function (t, e) {return e || T(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];}, c.prototype.readFloatLE = function (t, e) {return e || T(t, 4, this.length), o.read(this, t, !0, 23, 4);}, c.prototype.readFloatBE = function (t, e) {return e || T(t, 4, this.length), o.read(this, t, !1, 23, 4);}, c.prototype.readDoubleLE = function (t, e) {return e || T(t, 8, this.length), o.read(this, t, !0, 52, 8);}, c.prototype.readDoubleBE = function (t, e) {return e || T(t, 8, this.length), o.read(this, t, !1, 52, 8);}, c.prototype.writeUIntLE = function (t, e, r, n) {(t = +t, e |= 0, r |= 0, n) || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);var o = 1,i = 0;for (this[e] = 255 & t; ++i < r && (o *= 256);) {this[e + i] = t / o & 255;}return e + r;}, c.prototype.writeUIntBE = function (t, e, r, n) {(t = +t, e |= 0, r |= 0, n) || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);var o = r - 1,i = 1;for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) {this[e + o] = t / i & 255;}return e + r;}, c.prototype.writeUInt8 = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;}, c.prototype.writeUInt16LE = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2;}, c.prototype.writeUInt16BE = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2;}, c.prototype.writeUInt32LE = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : L(this, t, e, !0), e + 4;}, c.prototype.writeUInt32BE = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;}, c.prototype.writeIntLE = function (t, e, r, n) {if (t = +t, e |= 0, !n) {var o = Math.pow(2, 8 * r - 1);O(this, t, e, r, o - 1, -o);}var i = 0,s = 1,a = 0;for (this[e] = 255 & t; ++i < r && (s *= 256);) {t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;}return e + r;}, c.prototype.writeIntBE = function (t, e, r, n) {if (t = +t, e |= 0, !n) {var o = Math.pow(2, 8 * r - 1);O(this, t, e, r, o - 1, -o);}var i = r - 1,s = 1,a = 0;for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) {t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;}return e + r;}, c.prototype.writeInt8 = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;}, c.prototype.writeInt16LE = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2;}, c.prototype.writeInt16BE = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2;}, c.prototype.writeInt32LE = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : L(this, t, e, !0), e + 4;}, c.prototype.writeInt32BE = function (t, e, r) {return t = +t, e |= 0, r || O(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;}, c.prototype.writeFloatLE = function (t, e, r) {return I(this, t, e, !0, r);}, c.prototype.writeFloatBE = function (t, e, r) {return I(this, t, e, !1, r);}, c.prototype.writeDoubleLE = function (t, e, r) {return j(this, t, e, !0, r);}, c.prototype.writeDoubleBE = function (t, e, r) {return j(this, t, e, !1, r);}, c.prototype.copy = function (t, e, r, n) {if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;if (0 === t.length || 0 === this.length) return 0;if (e < 0) throw new RangeError("targetStart out of bounds");if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");if (n < 0) throw new RangeError("sourceEnd out of bounds");n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);var o,i = n - r;if (this === t && r < e && e < n) for (o = i - 1; o >= 0; --o) {t[o + e] = this[o + r];} else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) {t[o + e] = this[o + r];} else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);return i;}, c.prototype.fill = function (t, e, r, n) {if ("string" == typeof t) {if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {var o = t.charCodeAt(0);o < 256 && (t = o);}if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);} else "number" == typeof t && (t &= 255);if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");if (r <= e) return this;var i;if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) {this[i] = t;} else {var s = c.isBuffer(t) ? t : q(new c(t, n).toString()),a = s.length;for (i = 0; i < r - e; ++i) {this[i + e] = s[i % a];}}return this;};var D = /[^+\/0-9A-Za-z-_]/g;function M(t) {return t < 16 ? "0" + t.toString(16) : t.toString(16);}function q(t, e) {var r;e = e || 1 / 0;for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {if (!o) {if (r > 56319) {(e -= 3) > -1 && i.push(239, 191, 189);continue;}if (s + 1 === n) {(e -= 3) > -1 && i.push(239, 191, 189);continue;}o = r;continue;}if (r < 56320) {(e -= 3) > -1 && i.push(239, 191, 189), o = r;continue;}r = 65536 + (o - 55296 << 10 | r - 56320);} else o && (e -= 3) > -1 && i.push(239, 191, 189);if (o = null, r < 128) {if ((e -= 1) < 0) break;i.push(r);} else if (r < 2048) {if ((e -= 2) < 0) break;i.push(r >> 6 | 192, 63 & r | 128);} else if (r < 65536) {if ((e -= 3) < 0) break;i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);} else {if (!(r < 1114112)) throw new Error("Invalid code point");if ((e -= 4) < 0) break;i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);}}return i;}function Y(t) {return n.toByteArray(function (t) {if ((t = function (t) {return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");}(t).replace(D, "")).length < 2) return "";for (; t.length % 4 != 0;) {t += "=";}return t;}(t));}function H(t, e, r, n) {for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) {e[o + r] = t[o];}return o;}}).call(this, r(12));}, function (t, e, r) {var n = r(31);t.exports = function (t) {var e = t.xdomain,r = t.xscheme,o = t.enablesXDR;try {if ("undefined" != typeof XMLHttpRequest && (!e || n)) return new XMLHttpRequest();} catch (t) {}try {if ("undefined" != typeof XDomainRequest && !r && o) return new XDomainRequest();} catch (t) {}if (!e) try {return new self[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");} catch (t) {}};}, function (t, e, r) {var n = r(2),o = r(1);function i(t) {this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.isReactNative = t.isReactNative, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;}t.exports = i, o(i.prototype), i.prototype.onError = function (t, e) {var r = new Error(t);return r.type = "TransportError", r.description = e, this.emit("error", r), this;}, i.prototype.open = function () {return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;}, i.prototype.close = function () {return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;}, i.prototype.send = function (t) {if ("open" !== this.readyState) throw new Error("Transport not open");this.write(t);}, i.prototype.onOpen = function () {this.readyState = "open", this.writable = !0, this.emit("open");}, i.prototype.onData = function (t) {var e = n.decodePacket(t, this.socket.binaryType);this.onPacket(e);}, i.prototype.onPacket = function (t) {this.emit("packet", t);}, i.prototype.onClose = function () {this.readyState = "closed", this.emit("close");};}, function (t, e) {var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];t.exports = function (t) {var e = t,o = t.indexOf("["),i = t.indexOf("]");-1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));for (var s = r.exec(t || ""), a = {}, c = 14; c--;) {a[n[c]] = s[c] || "";}return -1 != o && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;};}, function (t, e) {var r = {}.toString;t.exports = Array.isArray || function (t) {return "[object Array]" == r.call(t);};}, function (t, e, r) {(function (e) {t.exports = function (t) {return r && e.isBuffer(t) || n && (t instanceof ArrayBuffer || function (t) {return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;}(t));};var r = "function" == typeof e && "function" == typeof e.isBuffer,n = "function" == typeof ArrayBuffer;}).call(this, r(6).Buffer);}, function (t, e) {var r;r = function () {return this;}();try {r = r || new Function("return this")();} catch (t) {"object" == typeof window && (r = window);}t.exports = r;}, function (t, e, r) {var n = r(29),o = r(19),i = r(1),s = r(5),a = r(20),c = r(21),h = r(0)("socket.io-client:manager"),u = r(18),f = r(46),p = Object.prototype.hasOwnProperty;function l(t, e) {if (!(this instanceof l)) return new l(t, e);t && "object" == typeof t && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new f({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];var r = e.parser || s;this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open();}t.exports = l, l.prototype.emitAll = function () {for (var t in this.emit.apply(this, arguments), this.nsps) {p.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);}}, l.prototype.updateSocketIds = function () {for (var t in this.nsps) {p.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));}}, l.prototype.generateId = function (t) {return ("/" === t ? "" : t + "#") + this.engine.id;}, i(l.prototype), l.prototype.reconnection = function (t) {return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;}, l.prototype.reconnectionAttempts = function (t) {return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;}, l.prototype.reconnectionDelay = function (t) {return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;}, l.prototype.randomizationFactor = function (t) {return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;}, l.prototype.reconnectionDelayMax = function (t) {return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;}, l.prototype.timeout = function (t) {return arguments.length ? (this._timeout = t, this) : this._timeout;}, l.prototype.maybeReconnectOnOpen = function () {!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();}, l.prototype.open = l.prototype.connect = function (t, e) {if (h("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;h("opening %s", this.uri), this.engine = n(this.uri, this.opts);var r = this.engine,o = this;this.readyState = "opening", this.skipReconnect = !1;var i = a(r, "open", function () {o.onopen(), t && t();}),s = a(r, "error", function (e) {if (h("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), t) {var r = new Error("Connection error");r.data = e, t(r);} else o.maybeReconnectOnOpen();});if (!1 !== this._timeout) {var c = this._timeout;h("connect attempt will timeout after %d", c);var u = setTimeout(function () {h("connect attempt timed out after %d", c), i.destroy(), r.close(), r.emit("error", "timeout"), o.emitAll("connect_timeout", c);}, c);this.subs.push({ destroy: function destroy() {clearTimeout(u);} });}return this.subs.push(i), this.subs.push(s), this;}, l.prototype.onopen = function () {h("open"), this.cleanup(), this.readyState = "open", this.emit("open");var t = this.engine;this.subs.push(a(t, "data", c(this, "ondata"))), this.subs.push(a(t, "ping", c(this, "onping"))), this.subs.push(a(t, "pong", c(this, "onpong"))), this.subs.push(a(t, "error", c(this, "onerror"))), this.subs.push(a(t, "close", c(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded")));}, l.prototype.onping = function () {this.lastPing = new Date(), this.emitAll("ping");}, l.prototype.onpong = function () {this.emitAll("pong", new Date() - this.lastPing);}, l.prototype.ondata = function (t) {this.decoder.add(t);}, l.prototype.ondecoded = function (t) {this.emit("packet", t);}, l.prototype.onerror = function (t) {h("error", t), this.emitAll("error", t);}, l.prototype.socket = function (t, e) {var r = this.nsps[t];if (!r) {r = new o(this, t, e), this.nsps[t] = r;var n = this;r.on("connecting", i), r.on("connect", function () {r.id = n.generateId(t);}), this.autoConnect && i();}function i() {~u(n.connecting, r) || n.connecting.push(r);}return r;}, l.prototype.destroy = function (t) {var e = u(this.connecting, t);~e && this.connecting.splice(e, 1), this.connecting.length || this.close();}, l.prototype.packet = function (t) {h("writing packet %j", t);var e = this;t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (r) {for (var n = 0; n < r.length; n++) {e.engine.write(r[n], t.options);}e.encoding = !1, e.processPacketQueue();}));}, l.prototype.processPacketQueue = function () {if (this.packetBuffer.length > 0 && !this.encoding) {var t = this.packetBuffer.shift();this.packet(t);}}, l.prototype.cleanup = function () {h("cleanup");for (var t = this.subs.length, e = 0; e < t; e++) {this.subs.shift().destroy();}this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();}, l.prototype.close = l.prototype.disconnect = function () {h("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();}, l.prototype.onclose = function (t) {h("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();}, l.prototype.reconnect = function () {if (this.reconnecting || this.skipReconnect) return this;var t = this;if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {var e = this.backoff.duration();h("will wait %dms before reconnect attempt", e), this.reconnecting = !0;var r = setTimeout(function () {t.skipReconnect || (h("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {e ? (h("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (h("reconnect success"), t.onreconnect());}));}, e);this.subs.push({ destroy: function destroy() {clearTimeout(r);} });}}, l.prototype.onreconnect = function () {var t = this.backoff.attempts;this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);};}, function (t, e, r) {var n = r(7),o = r(32),i = r(40),s = r(41);e.polling = function (t) {var e = !1,r = !1,s = !1 !== t.jsonp;if ("undefined" != typeof location) {var a = "https:" === location.protocol,c = location.port;c || (c = a ? 443 : 80), e = t.hostname !== location.hostname || c !== t.port, r = t.secure !== a;}if (t.xdomain = e, t.xscheme = r, "open" in new n(t) && !t.forceJSONP) return new o(t);if (!s) throw new Error("JSONP disabled");return new i(t);}, e.websocket = s;}, function (t, e, r) {var n = r(8),o = r(3),i = r(2),s = r(4),a = r(17),c = r(0)("engine.io-client:polling");t.exports = u;var h = null != new (r(7))({ xdomain: !1 }).responseType;function u(t) {var e = t && t.forceBase64;h && !e || (this.supportsBinary = !1), n.call(this, t);}s(u, n), u.prototype.name = "polling", u.prototype.doOpen = function () {this.poll();}, u.prototype.pause = function (t) {var e = this;function r() {c("paused"), e.readyState = "paused", t();}if (this.readyState = "pausing", this.polling || !this.writable) {var n = 0;this.polling && (c("we are currently polling - waiting to pause"), n++, this.once("pollComplete", function () {c("pre-pause polling complete"), --n || r();})), this.writable || (c("we are currently writing - waiting to pause"), n++, this.once("drain", function () {c("pre-pause writing complete"), --n || r();}));} else r();}, u.prototype.poll = function () {c("polling"), this.polling = !0, this.doPoll(), this.emit("poll");}, u.prototype.onData = function (t) {var e = this;c("polling got data %s", t);i.decodePayload(t, this.socket.binaryType, function (t, r, n) {if ("opening" === e.readyState && e.onOpen(), "close" === t.type) return e.onClose(), !1;e.onPacket(t);}), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState));}, u.prototype.doClose = function () {var t = this;function e() {c("writing close packet"), t.write([{ type: "close" }]);}"open" === this.readyState ? (c("transport open - closing"), e()) : (c("transport not open - deferring close"), this.once("open", e));}, u.prototype.write = function (t) {var e = this;this.writable = !1;var r = function r() {e.writable = !0, e.emit("drain");};i.encodePayload(t, this.supportsBinary, function (t) {e.doWrite(t, r);});}, u.prototype.uri = function () {var t = this.query || {},e = this.secure ? "https" : "http",r = "";return !1 !== this.timestampRequests && (t[this.timestampParam] = a()), this.supportsBinary || t.sid || (t.b64 = 1), t = o.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (r = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;};}, function (t, e, r) {(function (e) {var n = r(34),o = Object.prototype.toString,i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);t.exports = function t(r) {if (!r || "object" != typeof r) return !1;if (n(r)) {for (var o = 0, a = r.length; o < a; o++) {if (t(r[o])) return !0;}return !1;}if ("function" == typeof e && e.isBuffer && e.isBuffer(r) || "function" == typeof ArrayBuffer && r instanceof ArrayBuffer || i && r instanceof Blob || s && r instanceof File) return !0;if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length) return t(r.toJSON(), !0);for (var c in r) {if (Object.prototype.hasOwnProperty.call(r, c) && t(r[c])) return !0;}return !1;};}).call(this, r(6).Buffer);}, function (t, e, r) {"use strict";var n,o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),i = {},s = 0,a = 0;function c(t) {var e = "";do {e = o[t % 64] + e, t = Math.floor(t / 64);} while (t > 0);return e;}function h() {var t = c(+new Date());return t !== n ? (s = 0, n = t) : t + "." + c(s++);}for (; a < 64; a++) {i[o[a]] = a;}h.encode = c, h.decode = function (t) {var e = 0;for (a = 0; a < t.length; a++) {e = 64 * e + i[t.charAt(a)];}return e;}, t.exports = h;}, function (t, e) {var r = [].indexOf;t.exports = function (t, e) {if (r) return t.indexOf(e);for (var n = 0; n < t.length; ++n) {if (t[n] === e) return n;}return -1;};}, function (t, e, r) {var n = r(5),o = r(1),i = r(45),s = r(20),a = r(21),c = r(0)("socket.io-client:socket"),h = r(3),u = r(16);t.exports = l;var f = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },p = o.prototype.emit;function l(t, e, r) {this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, r && r.query && (this.query = r.query), this.io.autoConnect && this.open();}o(l.prototype), l.prototype.subEvents = function () {if (!this.subs) {var t = this.io;this.subs = [s(t, "open", a(this, "onopen")), s(t, "packet", a(this, "onpacket")), s(t, "close", a(this, "onclose"))];}}, l.prototype.open = l.prototype.connect = function () {return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this;}, l.prototype.send = function () {var t = i(arguments);return t.unshift("message"), this.emit.apply(this, t), this;}, l.prototype.emit = function (t) {if (f.hasOwnProperty(t)) return p.apply(this, arguments), this;var e = i(arguments),r = { type: (void 0 !== this.flags.binary ? this.flags.binary : u(e)) ? n.BINARY_EVENT : n.EVENT, data: e, options: {} };return r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), this.flags = {}, this;}, l.prototype.packet = function (t) {t.nsp = this.nsp, this.io.packet(t);}, l.prototype.onopen = function () {if (c("transport is open - connecting"), "/" !== this.nsp) if (this.query) {var t = "object" == typeof this.query ? h.encode(this.query) : this.query;c("sending connect packet with query %s", t), this.packet({ type: n.CONNECT, query: t });} else this.packet({ type: n.CONNECT });}, l.prototype.onclose = function (t) {c("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);}, l.prototype.onpacket = function (t) {var e = t.nsp === this.nsp,r = t.type === n.ERROR && "/" === t.nsp;if (e || r) switch (t.type) {case n.CONNECT:this.onconnect();break;case n.EVENT:case n.BINARY_EVENT:this.onevent(t);break;case n.ACK:case n.BINARY_ACK:this.onack(t);break;case n.DISCONNECT:this.ondisconnect();break;case n.ERROR:this.emit("error", t.data);}}, l.prototype.onevent = function (t) {var e = t.data || [];c("emitting event %j", e), null != t.id && (c("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? p.apply(this, e) : this.receiveBuffer.push(e);}, l.prototype.ack = function (t) {var e = this,r = !1;return function () {if (!r) {r = !0;var o = i(arguments);c("sending ack %j", o), e.packet({ type: u(o) ? n.BINARY_ACK : n.ACK, id: t, data: o });}};}, l.prototype.onack = function (t) {var e = this.acks[t.id];"function" == typeof e ? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : c("bad ack %s", t.id);}, l.prototype.onconnect = function () {this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();}, l.prototype.emitBuffered = function () {var t;for (t = 0; t < this.receiveBuffer.length; t++) {p.apply(this, this.receiveBuffer[t]);}for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {this.packet(this.sendBuffer[t]);}this.sendBuffer = [];}, l.prototype.ondisconnect = function () {c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");}, l.prototype.destroy = function () {if (this.subs) {for (var t = 0; t < this.subs.length; t++) {this.subs[t].destroy();}this.subs = null;}this.io.destroy(this);}, l.prototype.close = l.prototype.disconnect = function () {return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({ type: n.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;}, l.prototype.compress = function (t) {return this.flags.compress = t, this;}, l.prototype.binary = function (t) {return this.flags.binary = t, this;};}, function (t, e) {t.exports = function (t, e, r) {return t.on(e, r), { destroy: function destroy() {t.removeListener(e, r);} };};}, function (t, e) {var r = [].slice;t.exports = function (t, e) {if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");var n = r.call(arguments, 2);return function () {return e.apply(t, n.concat(r.call(arguments)));};};}, function (t, e, r) {t.exports = r(23);}, function (t, e, r) {var n = r(24),o = r(5),i = r(13),s = r(0)("socket.io-client");t.exports = e = c;var a = e.managers = {};function c(t, e) {"object" == typeof t && (e = t, t = void 0), e = e || {};var r,o = n(t),c = o.source,h = o.id,u = o.path,f = a[h] && u in a[h].nsps;return e.forceNew || e["force new connection"] || !1 === e.multiplex || f ? (s("ignoring socket cache for %s", c), r = i(c, e)) : (a[h] || (s("new io instance for %s", c), a[h] = i(c, e)), r = a[h]), o.query && !e.query && (e.query = o.query), r.socket(o.path, e);}e.protocol = o.protocol, e.connect = c, e.Manager = r(13), e.Socket = r(19);}, function (t, e, r) {var n = r(9),o = r(0)("socket.io-client:url");t.exports = function (t, e) {var r = t;e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host);"string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), o("parse %s", t), r = n(t));r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443"));r.path = r.path || "/";var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;return r.id = r.protocol + "://" + i + ":" + r.port, r.href = r.protocol + "://" + i + (e && e.port === r.port ? "" : ":" + r.port), r;};}, function (t, e, r) {var n = r(10),o = r(11),i = Object.prototype.toString,s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);e.deconstructPacket = function (t) {var e = [],r = t.data,i = t;return i.data = function t(e, r) {if (!e) return e;if (o(e)) {var i = { _placeholder: !0, num: r.length };return r.push(e), i;}if (n(e)) {for (var s = new Array(e.length), a = 0; a < e.length; a++) {s[a] = t(e[a], r);}return s;}if ("object" == typeof e && !(e instanceof Date)) {s = {};for (var c in e) {s[c] = t(e[c], r);}return s;}return e;}(r, e), i.attachments = e.length, { packet: i, buffers: e };}, e.reconstructPacket = function (t, e) {return t.data = function t(e, r) {if (!e) return e;if (e && e._placeholder) return r[e.num];if (n(e)) for (var o = 0; o < e.length; o++) {e[o] = t(e[o], r);} else if ("object" == typeof e) for (var i in e) {e[i] = t(e[i], r);}return e;}(t.data, e), t.attachments = void 0, t;}, e.removeBlobs = function (t, e) {var r = 0,i = t;!function t(c, h, u) {if (!c) return c;if (s && c instanceof Blob || a && c instanceof File) {r++;var f = new FileReader();f.onload = function () {u ? u[h] = this.result : i = this.result, --r || e(i);}, f.readAsArrayBuffer(c);} else if (n(c)) for (var p = 0; p < c.length; p++) {t(c[p], p, c);} else if ("object" == typeof c && !o(c)) for (var l in c) {t(c[l], l, c);}}(i), r || e(i);};}, function (t, e, r) {"use strict";e.byteLength = function (t) {var e = h(t),r = e[0],n = e[1];return 3 * (r + n) / 4 - n;}, e.toByteArray = function (t) {var e,r,n = h(t),s = n[0],a = n[1],c = new i(function (t, e, r) {return 3 * (e + r) / 4 - r;}(0, s, a)),u = 0,f = a > 0 ? s - 4 : s;for (r = 0; r < f; r += 4) {e = o[t.charCodeAt(r)] << 18 | o[t.charCodeAt(r + 1)] << 12 | o[t.charCodeAt(r + 2)] << 6 | o[t.charCodeAt(r + 3)], c[u++] = e >> 16 & 255, c[u++] = e >> 8 & 255, c[u++] = 255 & e;}2 === a && (e = o[t.charCodeAt(r)] << 2 | o[t.charCodeAt(r + 1)] >> 4, c[u++] = 255 & e);1 === a && (e = o[t.charCodeAt(r)] << 10 | o[t.charCodeAt(r + 1)] << 4 | o[t.charCodeAt(r + 2)] >> 2, c[u++] = e >> 8 & 255, c[u++] = 255 & e);return c;}, e.fromByteArray = function (t) {for (var e, r = t.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) {i.push(u(t, s, s + 16383 > a ? a : s + 16383));}1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));return i.join("");};for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) {n[a] = s[a], o[s.charCodeAt(a)] = a;}function h(t) {var e = t.length;if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");var r = t.indexOf("=");return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4];}function u(t, e, r) {for (var o, i, s = [], a = e; a < r; a += 3) {o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);}return s.join("");}o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;}, function (t, e) {e.read = function (t, e, r, n, o) {var i,s,a = 8 * o - n - 1,c = (1 << a) - 1,h = c >> 1,u = -7,f = r ? o - 1 : 0,p = r ? -1 : 1,l = t[e + f];for (f += p, i = l & (1 << -u) - 1, l >>= -u, u += a; u > 0; i = 256 * i + t[e + f], f += p, u -= 8) {;}for (s = i & (1 << -u) - 1, i >>= -u, u += n; u > 0; s = 256 * s + t[e + f], f += p, u -= 8) {;}if (0 === i) i = 1 - h;else {if (i === c) return s ? NaN : 1 / 0 * (l ? -1 : 1);s += Math.pow(2, n), i -= h;}return (l ? -1 : 1) * s * Math.pow(2, i - n);}, e.write = function (t, e, r, n, o, i) {var s,a,c,h = 8 * i - o - 1,u = (1 << h) - 1,f = u >> 1,p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,l = n ? 0 : i - 1,d = n ? 1 : -1,y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = u) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + f >= 1 ? p / c : p * Math.pow(2, 1 - f)) * c >= 2 && (s++, c /= 2), s + f >= u ? (a = 0, s = u) : s + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + l] = 255 & a, l += d, a /= 256, o -= 8) {;}for (s = s << o | a, h += o; h > 0; t[r + l] = 255 & s, l += d, s /= 256, h -= 8) {;}t[r + l - d] |= 128 * y;};}, function (t, e) {var r = {}.toString;t.exports = Array.isArray || function (t) {return "[object Array]" == r.call(t);};}, function (t, e, r) {t.exports = r(30), t.exports.parser = r(2);}, function (t, e, r) {var n = r(14),o = r(1),i = r(0)("engine.io-client:socket"),s = r(18),a = r(2),c = r(9),h = r(3);function u(t, e) {if (!(this instanceof u)) return new u(t, e);e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = c(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = c(e.host).host), this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.withCredentials = !1 !== e.withCredentials, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();}t.exports = u, u.priorWebsocketSuccess = !1, o(u.prototype), u.protocol = a.protocol, u.Socket = u, u.Transport = r(8), u.transports = r(14), u.parser = r(2), u.prototype.createTransport = function (t) {i('creating transport "%s"', t);var e = function (t) {var e = {};for (var r in t) {t.hasOwnProperty(r) && (e[r] = t[r]);}return e;}(this.query);e.EIO = a.protocol, e.transport = t;var r = this.transportOptions[t] || {};return this.id && (e.sid = this.id), new n[t]({ query: e, socket: this, agent: r.agent || this.agent, hostname: r.hostname || this.hostname, port: r.port || this.port, secure: r.secure || this.secure, path: r.path || this.path, forceJSONP: r.forceJSONP || this.forceJSONP, jsonp: r.jsonp || this.jsonp, forceBase64: r.forceBase64 || this.forceBase64, enablesXDR: r.enablesXDR || this.enablesXDR, withCredentials: r.withCredentials || this.withCredentials, timestampRequests: r.timestampRequests || this.timestampRequests, timestampParam: r.timestampParam || this.timestampParam, policyPort: r.policyPort || this.policyPort, pfx: r.pfx || this.pfx, key: r.key || this.key, passphrase: r.passphrase || this.passphrase, cert: r.cert || this.cert, ca: r.ca || this.ca, ciphers: r.ciphers || this.ciphers, rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate, extraHeaders: r.extraHeaders || this.extraHeaders, forceNode: r.forceNode || this.forceNode, localAddress: r.localAddress || this.localAddress, requestTimeout: r.requestTimeout || this.requestTimeout, protocols: r.protocols || void 0, isReactNative: this.isReactNative });}, u.prototype.open = function () {var t;if (this.rememberUpgrade && u.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";else {if (0 === this.transports.length) {var e = this;return void setTimeout(function () {e.emit("error", "No transports available");}, 0);}t = this.transports[0];}this.readyState = "opening";try {t = this.createTransport(t);} catch (t) {return this.transports.shift(), void this.open();}t.open(), this.setTransport(t);}, u.prototype.setTransport = function (t) {i("setting transport %s", t.name);var e = this;this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {e.onDrain();}).on("packet", function (t) {e.onPacket(t);}).on("error", function (t) {e.onError(t);}).on("close", function () {e.onClose("transport close");});}, u.prototype.probe = function (t) {i('probing transport "%s"', t);var e = this.createTransport(t, { probe: 1 }),r = !1,n = this;function o() {if (n.onlyBinaryUpgrades) {var o = !this.supportsBinary && n.transport.supportsBinary;r = r || o;}r || (i('probe transport "%s" opened', t), e.send([{ type: "ping", data: "probe" }]), e.once("packet", function (o) {if (!r) if ("pong" === o.type && "probe" === o.data) {if (i('probe transport "%s" pong', t), n.upgrading = !0, n.emit("upgrading", e), !e) return;u.priorWebsocketSuccess = "websocket" === e.name, i('pausing current transport "%s"', n.transport.name), n.transport.pause(function () {r || "closed" !== n.readyState && (i("changing transport and sending upgrade packet"), p(), n.setTransport(e), e.send([{ type: "upgrade" }]), n.emit("upgrade", e), e = null, n.upgrading = !1, n.flush());});} else {i('probe transport "%s" failed', t);var s = new Error("probe error");s.transport = e.name, n.emit("upgradeError", s);}}));}function s() {r || (r = !0, p(), e.close(), e = null);}function a(r) {var o = new Error("probe error: " + r);o.transport = e.name, s(), i('probe transport "%s" failed because of error: %s', t, r), n.emit("upgradeError", o);}function c() {a("transport closed");}function h() {a("socket closed");}function f(t) {e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name), s());}function p() {e.removeListener("open", o), e.removeListener("error", a), e.removeListener("close", c), n.removeListener("close", h), n.removeListener("upgrading", f);}u.priorWebsocketSuccess = !1, e.once("open", o), e.once("error", a), e.once("close", c), this.once("close", h), this.once("upgrading", f), e.open();}, u.prototype.onOpen = function () {if (i("socket open"), this.readyState = "open", u.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {i("starting upgrade probes");for (var t = 0, e = this.upgrades.length; t < e; t++) {this.probe(this.upgrades[t]);}}}, u.prototype.onPacket = function (t) {if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {case "open":this.onHandshake(JSON.parse(t.data));break;case "pong":this.setPing(), this.emit("pong");break;case "error":var e = new Error("server error");e.code = t.data, this.onError(e);break;case "message":this.emit("data", t.data), this.emit("message", t.data);} else i('packet received with socket readyState "%s"', this.readyState);}, u.prototype.onHandshake = function (t) {this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));}, u.prototype.onHeartbeat = function (t) {clearTimeout(this.pingTimeoutTimer);var e = this;e.pingTimeoutTimer = setTimeout(function () {"closed" !== e.readyState && e.onClose("ping timeout");}, t || e.pingInterval + e.pingTimeout);}, u.prototype.setPing = function () {var t = this;clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {i("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);}, t.pingInterval);}, u.prototype.ping = function () {var t = this;this.sendPacket("ping", function () {t.emit("ping");});}, u.prototype.onDrain = function () {this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();}, u.prototype.flush = function () {"closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));}, u.prototype.write = u.prototype.send = function (t, e, r) {return this.sendPacket("message", t, e, r), this;}, u.prototype.sendPacket = function (t, e, r, n) {if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {(r = r || {}).compress = !1 !== r.compress;var o = { type: t, data: e, options: r };this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush();}}, u.prototype.close = function () {if ("opening" === this.readyState || "open" === this.readyState) {this.readyState = "closing";var t = this;this.writeBuffer.length ? this.once("drain", function () {this.upgrading ? n() : e();}) : this.upgrading ? n() : e();}function e() {t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close();}function r() {t.removeListener("upgrade", r), t.removeListener("upgradeError", r), e();}function n() {t.once("upgrade", r), t.once("upgradeError", r);}return this;}, u.prototype.onError = function (t) {i("socket error %j", t), u.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);}, u.prototype.onClose = function (t, e) {if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {i('socket close with reason: "%s"', t);clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0;}}, u.prototype.filterUpgrades = function (t) {for (var e = [], r = 0, n = t.length; r < n; r++) {~s(this.transports, t[r]) && e.push(t[r]);}return e;};}, function (t, e) {try {t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();} catch (e) {t.exports = !1;}}, function (t, e, r) {var n = r(7),o = r(15),i = r(1),s = r(4),a = r(0)("engine.io-client:polling-xhr");function c() {}function h(t) {if (o.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, "undefined" != typeof location) {var e = "https:" === location.protocol,r = location.port;r || (r = e ? 443 : 80), this.xd = "undefined" != typeof location && t.hostname !== location.hostname || r !== t.port, this.xs = t.secure !== e;}}function u(t) {this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create();}if (t.exports = h, t.exports.Request = u, s(h, o), h.prototype.supportsBinary = !0, h.prototype.request = function (t) {return (t = t || {}).uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.withCredentials = this.withCredentials, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new u(t);}, h.prototype.doWrite = function (t, e) {var r = "string" != typeof t && void 0 !== t,n = this.request({ method: "POST", data: t, isBinary: r }),o = this;n.on("success", e), n.on("error", function (t) {o.onError("xhr post error", t);}), this.sendXhr = n;}, h.prototype.doPoll = function () {a("xhr poll");var t = this.request(),e = this;t.on("data", function (t) {e.onData(t);}), t.on("error", function (t) {e.onError("xhr poll error", t);}), this.pollXhr = t;}, i(u.prototype), u.prototype.create = function () {var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;var e = this.xhr = new n(t),r = this;try {a("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);try {if (this.extraHeaders) for (var o in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders) {this.extraHeaders.hasOwnProperty(o) && e.setRequestHeader(o, this.extraHeaders[o]);}} catch (t) {}if ("POST" === this.method) try {this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");} catch (t) {}try {e.setRequestHeader("Accept", "*/*");} catch (t) {}"withCredentials" in e && (e.withCredentials = this.withCredentials), this.requestTimeout && (e.timeout = this.requestTimeout), this.hasXDR() ? (e.onload = function () {r.onLoad();}, e.onerror = function () {r.onError(e.responseText);}) : e.onreadystatechange = function () {if (2 === e.readyState) try {var t = e.getResponseHeader("Content-Type");(r.supportsBinary && "application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && (e.responseType = "arraybuffer");} catch (t) {}4 === e.readyState && (200 === e.status || 1223 === e.status ? r.onLoad() : setTimeout(function () {r.onError("number" == typeof e.status ? e.status : 0);}, 0));}, a("xhr data %s", this.data), e.send(this.data);} catch (t) {return void setTimeout(function () {r.onError(t);}, 0);}"undefined" != typeof document && (this.index = u.requestsCount++, u.requests[this.index] = this);}, u.prototype.onSuccess = function () {this.emit("success"), this.cleanup();}, u.prototype.onData = function (t) {this.emit("data", t), this.onSuccess();}, u.prototype.onError = function (t) {this.emit("error", t), this.cleanup(!0);}, u.prototype.cleanup = function (t) {if (void 0 !== this.xhr && null !== this.xhr) {if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = c : this.xhr.onreadystatechange = c, t) try {this.xhr.abort();} catch (t) {}"undefined" != typeof document && delete u.requests[this.index], this.xhr = null;}}, u.prototype.onLoad = function () {var t;try {var e;try {e = this.xhr.getResponseHeader("Content-Type");} catch (t) {}t = ("application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && this.xhr.response || this.xhr.responseText;} catch (t) {this.onError(t);}null != t && this.onData(t);}, u.prototype.hasXDR = function () {return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;}, u.prototype.abort = function () {this.cleanup();}, u.requestsCount = 0, u.requests = {}, "undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", p);else if ("function" == typeof addEventListener) {var f = "onpagehide" in self ? "pagehide" : "unload";addEventListener(f, p, !1);}function p() {for (var t in u.requests) {u.requests.hasOwnProperty(t) && u.requests[t].abort();}}}, function (t, e) {t.exports = Object.keys || function (t) {var e = [],r = Object.prototype.hasOwnProperty;for (var n in t) {r.call(t, n) && e.push(n);}return e;};}, function (t, e) {var r = {}.toString;t.exports = Array.isArray || function (t) {return "[object Array]" == r.call(t);};}, function (t, e) {t.exports = function (t, e, r) {var n = t.byteLength;if (e = e || 0, r = r || n, t.slice) return t.slice(e, r);if (e < 0 && (e += n), r < 0 && (r += n), r > n && (r = n), e >= n || e >= r || 0 === n) return new ArrayBuffer(0);for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++, a++) {i[a] = o[s];}return i.buffer;};}, function (t, e) {function r() {}t.exports = function (t, e, n) {var o = !1;return n = n || r, i.count = t, 0 === t ? e() : i;function i(t, r) {if (i.count <= 0) throw new Error("after called too many times");--i.count, t ? (o = !0, e(t), e = n) : 0 !== i.count || o || e(null, r);}};}, function (t, e) {
    /*! https://mths.be/utf8js v2.1.2 by @mathias */
    var r,n,o,i = String.fromCharCode;function s(t) {for (var e, r, n = [], o = 0, i = t.length; o < i;) {(e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) : n.push(e);}return n;}function a(t, e) {if (t >= 55296 && t <= 57343) {if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");return !1;}return !0;}function c(t, e) {return i(t >> e & 63 | 128);}function h(t, e) {if (0 == (4294967168 & t)) return i(t);var r = "";return 0 == (4294965248 & t) ? r = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t, e) || (t = 65533), r = i(t >> 12 & 15 | 224), r += c(t, 6)) : 0 == (4292870144 & t) && (r = i(t >> 18 & 7 | 240), r += c(t, 12), r += c(t, 6)), r += i(63 & t | 128);}function u() {if (o >= n) throw Error("Invalid byte index");var t = 255 & r[o];if (o++, 128 == (192 & t)) return 63 & t;throw Error("Invalid continuation byte");}function f(t) {var e, i;if (o > n) throw Error("Invalid byte index");if (o == n) return !1;if (e = 255 & r[o], o++, 0 == (128 & e)) return e;if (192 == (224 & e)) {if ((i = (31 & e) << 6 | u()) >= 128) return i;throw Error("Invalid continuation byte");}if (224 == (240 & e)) {if ((i = (15 & e) << 12 | u() << 6 | u()) >= 2048) return a(i, t) ? i : 65533;throw Error("Invalid continuation byte");}if (240 == (248 & e) && (i = (7 & e) << 18 | u() << 12 | u() << 6 | u()) >= 65536 && i <= 1114111) return i;throw Error("Invalid UTF-8 detected");}t.exports = { version: "2.1.2", encode: function encode(t, e) {for (var r = !1 !== (e = e || {}).strict, n = s(t), o = n.length, i = -1, a = ""; ++i < o;) {a += h(n[i], r);}return a;}, decode: function decode(t, e) {var a = !1 !== (e = e || {}).strict;r = s(t), n = r.length, o = 0;for (var c, h = []; !1 !== (c = f(a));) {h.push(c);}return function (t) {for (var e, r = t.length, n = -1, o = ""; ++n < r;) {(e = t[n]) > 65535 && (o += i((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += i(e);}return o;}(h);} };}, function (t, e) {!function () {"use strict";for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), n = 0; n < t.length; n++) {r[t.charCodeAt(n)] = n;}e.encode = function (e) {var r,n = new Uint8Array(e),o = n.length,i = "";for (r = 0; r < o; r += 3) {i += t[n[r] >> 2], i += t[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t[63 & n[r + 2]];}return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i;}, e.decode = function (t) {var e,n,o,i,s,a = .75 * t.length,c = t.length,h = 0;"=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);var u = new ArrayBuffer(a),f = new Uint8Array(u);for (e = 0; e < c; e += 4) {n = r[t.charCodeAt(e)], o = r[t.charCodeAt(e + 1)], i = r[t.charCodeAt(e + 2)], s = r[t.charCodeAt(e + 3)], f[h++] = n << 2 | o >> 4, f[h++] = (15 & o) << 4 | i >> 2, f[h++] = (3 & i) << 6 | 63 & s;}return u;};}();}, function (t, e) {var r = void 0 !== r ? r : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,n = function () {try {return 2 === new Blob(["hi"]).size;} catch (t) {return !1;}}(),o = n && function () {try {return 2 === new Blob([new Uint8Array([1, 2])]).size;} catch (t) {return !1;}}(),i = r && r.prototype.append && r.prototype.getBlob;function s(t) {return t.map(function (t) {if (t.buffer instanceof ArrayBuffer) {var e = t.buffer;if (t.byteLength !== e.byteLength) {var r = new Uint8Array(t.byteLength);r.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = r.buffer;}return e;}return t;});}function a(t, e) {e = e || {};var n = new r();return s(t).forEach(function (t) {n.append(t);}), e.type ? n.getBlob(e.type) : n.getBlob();}function c(t, e) {return new Blob(s(t), e || {});}"undefined" != typeof Blob && (a.prototype = Blob.prototype, c.prototype = Blob.prototype), t.exports = n ? o ? Blob : c : i ? a : void 0;}, function (t, e, r) {(function (e) {var n = r(15),o = r(4);t.exports = u;var i,s = /\n/g,a = /\\n/g;function c() {}function h() {return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {};}function u(t) {if (n.call(this, t), this.query = this.query || {}, !i) {var e = h();i = e.___eio = e.___eio || [];}this.index = i.length;var r = this;i.push(function (t) {r.onData(t);}), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", function () {r.script && (r.script.onerror = c);}, !1);}o(u, n), u.prototype.supportsBinary = !1, u.prototype.doClose = function () {this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), n.prototype.doClose.call(this);}, u.prototype.doPoll = function () {var t = this,e = document.createElement("script");this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) {t.onError("jsonp poll error", e);};var r = document.getElementsByTagName("script")[0];r ? r.parentNode.insertBefore(e, r) : (document.head || document.body).appendChild(e), this.script = e, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {var t = document.createElement("iframe");document.body.appendChild(t), document.body.removeChild(t);}, 100);}, u.prototype.doWrite = function (t, e) {var r = this;if (!this.form) {var n,o = document.createElement("form"),i = document.createElement("textarea"),c = this.iframeId = "eio_iframe_" + this.index;o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px", o.target = c, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), i.name = "d", o.appendChild(i), document.body.appendChild(o), this.form = o, this.area = i;}function h() {u(), e();}function u() {if (r.iframe) try {r.form.removeChild(r.iframe);} catch (t) {r.onError("jsonp polling iframe removal error", t);}try {var t = '<iframe src="javascript:0" name="' + r.iframeId + '">';n = document.createElement(t);} catch (t) {(n = document.createElement("iframe")).name = r.iframeId, n.src = "javascript:0";}n.id = r.iframeId, r.form.appendChild(n), r.iframe = n;}this.form.action = this.uri(), u(), t = t.replace(a, "\\\n"), this.area.value = t.replace(s, "\\n");try {this.form.submit();} catch (t) {}this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {"complete" === r.iframe.readyState && h();} : this.iframe.onload = h;};}).call(this, r(12));}, function (t, e, r) {(function (e) {var n,o,i = r(8),s = r(2),a = r(3),c = r(4),h = r(17),u = r(0)("engine.io-client:websocket");if ("undefined" != typeof WebSocket ? n = WebSocket : "undefined" != typeof self && (n = self.WebSocket || self.MozWebSocket), "undefined" == typeof window) try {o = r(42);} catch (t) {}var f = n || o;function p(t) {t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = n && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (f = o), i.call(this, t);}t.exports = p, c(p, i), p.prototype.name = "websocket", p.prototype.supportsBinary = !0, p.prototype.doOpen = function () {if (this.check()) {var t = this.uri(),e = this.protocols,r = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);try {this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new f(t, e) : new f(t) : new f(t, e, r);} catch (t) {return this.emit("error", t);}void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();}}, p.prototype.addEventListeners = function () {var t = this;this.ws.onopen = function () {t.onOpen();}, this.ws.onclose = function () {t.onClose();}, this.ws.onmessage = function (e) {t.onData(e.data);}, this.ws.onerror = function (e) {t.onError("websocket error", e);};}, p.prototype.write = function (t) {var r = this;this.writable = !1;for (var n = t.length, o = 0, i = n; o < i; o++) {!function (t) {s.encodePacket(t, r.supportsBinary, function (o) {if (!r.usingBrowserWebSocket) {var i = {};if (t.options && (i.compress = t.options.compress), r.perMessageDeflate) ("string" == typeof o ? e.byteLength(o) : o.length) < r.perMessageDeflate.threshold && (i.compress = !1);}try {r.usingBrowserWebSocket ? r.ws.send(o) : r.ws.send(o, i);} catch (t) {u("websocket closed before onclose event");}--n || a();});}(t[o]);}function a() {r.emit("flush"), setTimeout(function () {r.writable = !0, r.emit("drain");}, 0);}}, p.prototype.onClose = function () {i.prototype.onClose.call(this);}, p.prototype.doClose = function () {void 0 !== this.ws && this.ws.close();}, p.prototype.uri = function () {var t = this.query || {},e = this.secure ? "wss" : "ws",r = "";return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (r = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = h()), this.supportsBinary || (t.b64 = 1), (t = a.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;}, p.prototype.check = function () {return !(!f || "__initialize" in f && this.name === p.prototype.name);};}).call(this, r(6).Buffer);}, function (t, e, r) {var n = r(43),o = r(44),i = r(0)("@hyoga/uni-socket:"),s = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],a = uni || wx;var c = /*#__PURE__*/function (_n) {"use strict";_inherits(c, _n);var _super = _createSuper(c);function c(t, e, r) {var _this;_classCallCheck(this, c);_this = _super.call(this), _this.readyState = c.CONNECTING, _this.protocol = "", _this._socket = null, null !== t && (Array.isArray(e) ? e = e.join(", ") : "object" == typeof e && null !== e && (r = e, e = void 0), h.call(_assertThisInitialized(_this), t, e, r));return _this;}_createClass(c, [{ key: "addSocketEventListeners", value: function addSocketEventListeners() {var _this2 = this;this._socket.onOpen(function () {_this2.readyState = c.OPEN, _this2.onopen();}), this._socket.onClose(function (t) {i("onclose: ", t), _this2.readyState = c.CLOSED, _this2.onclose(t.code, t.reason);}), this._socket.onError(function (t) {i("onerror: ", t), _this2.onerror(t);}), this._socket.onMessage(function (t) {_this2.onmessage(t);});} }, { key: "send", value: function send(t) {i("send data: ", t, this.readyState), this.readyState === c.OPEN && this._socket.send({ data: t });} }, { key: "close", value: function close(t, e) {i("close socket: ", t, e), this.readyState = c.CLOSING, this._socket.close({ code: t, reason: e });} }, { key: "CONNECTING", get: function get() {return c.CONNECTING;} }, { key: "CLOSING", get: function get() {return c.CLOSING;} }, { key: "CLOSED", get: function get() {return c.CLOSED;} }, { key: "OPEN", get: function get() {return c.OPEN;} }]);return c;}(n);function h(t, e, r) {Object.assign(r, { url: t, header: { "content-type": "application/json" }, protocols: e, method: "GET" }), this._socket = function (t) {var e = a.connectSocket(_objectSpread({ complete: function complete() {} }, t));if (e) return e;return { onClose: a.onSocketClose, onOpen: a.onSocketOpen, onError: a.onSocketError, onMessage: a.onSocketMessage, send: a.sendSocketMessage, close: a.closeSocket };}(r), this.addSocketEventListeners();}s.forEach(function (t, e) {c[s[e]] = e;});["open", "error", "close", "message"].forEach(function (t) {Object.defineProperty(c.prototype, "on".concat(t), { get: function get() {var e = this.listeners(t);for (var r = 0; r < e.length; r++) {if (e[r]._listener) return e[r]._listener;}}, set: function set(e) {var r = this.listeners(t);for (var n = 0; n < r.length; n++) {r[n]._listener && this.removeListener(t, r[n]);}this.addEventListener(t, e);} });}), c.prototype.addEventListener = o.addEventListener, c.prototype.removeEventListener = o.removeEventListener, t.exports = c;}, function (t, e, r) {"use strict";var n,o = "object" == typeof Reflect ? Reflect : null,i = o && "function" == typeof o.apply ? o.apply : function (t, e, r) {return Function.prototype.apply.call(t, e, r);};n = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (t) {return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));} : function (t) {return Object.getOwnPropertyNames(t);};var s = Number.isNaN || function (t) {return t != t;};function a() {a.init.call(this);}t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;var c = 10;function h(t) {if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);}function u(t) {return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;}function f(t, e, r, n) {var o, i, s, a;if (h(r), void 0 === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== i.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), i = t._events), s = i[e]), void 0 === s) s = i[e] = r, ++t._eventsCount;else if ("function" == typeof s ? s = i[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), (o = u(t)) > 0 && s.length > o && !s.warned) {s.warned = !0;var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = s.length, a = c, console && console.warn && __f__("warn", a, " at node_modules/@hyoga/uni-socket.io/dist/uni-socket.io.js:10");}return t;}function p() {if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);}function l(t, e, r) {var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },o = p.bind(n);return o.listener = r, n.wrapFn = o, o;}function d(t, e, r) {var n = t._events;if (void 0 === n) return [];var o = n[e];return void 0 === o ? [] : "function" == typeof o ? r ? [o.listener || o] : [o] : r ? function (t) {for (var e = new Array(t.length), r = 0; r < e.length; ++r) {e[r] = t[r].listener || t[r];}return e;}(o) : g(o, o.length);}function y(t) {var e = this._events;if (void 0 !== e) {var r = e[t];if ("function" == typeof r) return 1;if (void 0 !== r) return r.length;}return 0;}function g(t, e) {for (var r = new Array(e), n = 0; n < e; ++n) {r[n] = t[n];}return r;}Object.defineProperty(a, "defaultMaxListeners", { enumerable: !0, get: function get() {return c;}, set: function set(t) {if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");c = t;} }), a.init = function () {void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;}, a.prototype.setMaxListeners = function (t) {if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");return this._maxListeners = t, this;}, a.prototype.getMaxListeners = function () {return u(this);}, a.prototype.emit = function (t) {for (var e = [], r = 1; r < arguments.length; r++) {e.push(arguments[r]);}var n = "error" === t,o = this._events;if (void 0 !== o) n = n && void 0 === o.error;else if (!n) return !1;if (n) {var s;if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));throw a.context = s, a;}var c = o[t];if (void 0 === c) return !1;if ("function" == typeof c) i(c, this, e);else {var h = c.length,u = g(c, h);for (r = 0; r < h; ++r) {i(u[r], this, e);}}return !0;}, a.prototype.addListener = function (t, e) {return f(this, t, e, !1);}, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (t, e) {return f(this, t, e, !0);}, a.prototype.once = function (t, e) {return h(e), this.on(t, l(this, t, e)), this;}, a.prototype.prependOnceListener = function (t, e) {return h(e), this.prependListener(t, l(this, t, e)), this;}, a.prototype.removeListener = function (t, e) {var r, n, o, i, s;if (h(e), void 0 === (n = this._events)) return this;if (void 0 === (r = n[t])) return this;if (r === e || r.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));else if ("function" != typeof r) {for (o = -1, i = r.length - 1; i >= 0; i--) {if (r[i] === e || r[i].listener === e) {s = r[i].listener, o = i;break;}}if (o < 0) return this;0 === o ? r.shift() : function (t, e) {for (; e + 1 < t.length; e++) {t[e] = t[e + 1];}t.pop();}(r, o), 1 === r.length && (n[t] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", t, s || e);}return this;}, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (t) {var e, r, n;if (void 0 === (r = this._events)) return this;if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;if (0 === arguments.length) {var o,i = Object.keys(r);for (n = 0; n < i.length; ++n) {"removeListener" !== (o = i[n]) && this.removeAllListeners(o);}return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;}if ("function" == typeof (e = r[t])) this.removeListener(t, e);else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) {this.removeListener(t, e[n]);}return this;}, a.prototype.listeners = function (t) {return d(this, t, !0);}, a.prototype.rawListeners = function (t) {return d(this, t, !1);}, a.listenerCount = function (t, e) {return "function" == typeof t.listenerCount ? t.listenerCount(e) : y.call(t, e);}, a.prototype.listenerCount = y, a.prototype.eventNames = function () {return this._eventsCount > 0 ? n(this._events) : [];};}, function (t, e, r) {"use strict";var n = function n(t, e) {_classCallCheck(this, n);this.target = e, this.type = t;};var o = /*#__PURE__*/function (_n2) {_inherits(o, _n2);var _super2 = _createSuper(o);function o(t, e) {var _this3;_classCallCheck(this, o);_this3 = _super2.call(this, "message", e), _this3.data = t;return _this3;}return o;}(n);var i = /*#__PURE__*/function (_n3) {_inherits(i, _n3);var _super3 = _createSuper(i);function i(t, e, r) {var _this4;_classCallCheck(this, i);_this4 = _super3.call(this, "close", r), _this4.wasClean = r._closeFrameReceived && r._closeFrameSent, _this4.reason = e, _this4.code = t;return _this4;}return i;}(n);var s = /*#__PURE__*/function (_n4) {_inherits(s, _n4);var _super4 = _createSuper(s);function s(t) {_classCallCheck(this, s);return _super4.call(this, "open", t);}return s;}(n);var a = /*#__PURE__*/function (_n5) {_inherits(a, _n5);var _super5 = _createSuper(a);function a(t, e) {var _this5;_classCallCheck(this, a);_this5 = _super5.call(this, "error", e), _this5.message = t.message, _this5.error = t;return _this5;}return a;}(n);var c = { addEventListener: function addEventListener(t, e) {function r(t) {e.call(this, new o(t, this));}function n(t, r) {e.call(this, new i(t, r, this));}function c(t) {e.call(this, new a(t, this));}function h() {e.call(this, new s(this));}"function" == typeof e && ("message" === t ? (r._listener = e, this.on(t, r)) : "close" === t ? (n._listener = e, this.on(t, n)) : "error" === t ? (c._listener = e, this.on(t, c)) : "open" === t ? (h._listener = e, this.on(t, h)) : this.on(t, e));}, removeEventListener: function removeEventListener(t, e) {var r = this.listeners(t);for (var n = 0; n < r.length; n++) {r[n] !== e && r[n]._listener !== e || this.removeListener(t, r[n]);}} };t.exports = c;}, function (t, e) {t.exports = function (t, e) {for (var r = [], n = (e = e || 0) || 0; n < t.length; n++) {r[n - e] = t[n];}return r;};}, function (t, e) {function r(t) {t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;}t.exports = r, r.prototype.duration = function () {var t = this.ms * Math.pow(this.factor, this.attempts++);if (this.jitter) {var e = Math.random(),r = Math.floor(e * this.jitter * t);t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;}return 0 | Math.min(t, this.max);}, r.prototype.reset = function () {this.attempts = 0;}, r.prototype.setMin = function (t) {this.ms = t;}, r.prototype.setMax = function (t) {this.max = t;}, r.prototype.setJitter = function (t) {this.jitter = t;};}]);});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)["default"]))

/***/ }),
/* 13 */
/*!***********************************************************!*\
  !*** /Users/wangxiaowen/Desktop/Kaiyuan/static/js/md5.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message\n * Digest Algorithm, as defined in RFC 1321.\n * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.\n * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet\n * Distributed under the BSD License\n * See http://pajhome.org.uk/crypt/md5 for more info.\n */\n\n/*\n     * Configurable variables. You may need to tweak these to be compatible with\n     * the server-side, but the defaults work in most cases.\n     */\nvar hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */\nvar b64pad = \"\"; /* base-64 pad character. \"=\" for strict RFC compliance   */\nvar chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */\n\n/*\n                                                                             * These are the functions you'll usually want to call\n                                                                             * They take string arguments and return either hex or base-64 encoded strings\n                                                                             */\nfunction hex_md5(s) {return binl2hex(core_md5(str2binl(s), s.length * chrsz));}\nfunction b64_md5(s) {return binl2b64(core_md5(str2binl(s), s.length * chrsz));}\nfunction str_md5(s) {return binl2str(core_md5(str2binl(s), s.length * chrsz));}\nfunction hex_hmac_md5(key, data) {return binl2hex(core_hmac_md5(key, data));}\nfunction b64_hmac_md5(key, data) {return binl2b64(core_hmac_md5(key, data));}\nfunction str_hmac_md5(key, data) {return binl2str(core_hmac_md5(key, data));}\n/*\n                                                                               * Perform a simple self-test to see if the VM is working\n                                                                               */\nfunction md5_vm_test()\n{\n  return hex_md5(\"abc\") == \"900150983cd24fb0d6963f7d28e17f72\";\n}\n\n/*\n   * Calculate the MD5 of an array of little-endian words, and a bit length\n   */\nfunction core_md5(x, len)\n{\n  /* append padding */\n  x[len >> 5] |= 0x80 << len % 32;\n  x[(len + 64 >>> 9 << 4) + 14] = len;\n\n  var a = 1732584193;\n  var b = -271733879;\n  var c = -1732584194;\n  var d = 271733878;\n\n  for (var i = 0; i < x.length; i += 16)\n  {\n    var olda = a;\n    var oldb = b;\n    var oldc = c;\n    var oldd = d;\n\n    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);\n    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);\n    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);\n    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);\n    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);\n    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);\n    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);\n    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);\n    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);\n    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);\n    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);\n    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);\n    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);\n    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);\n    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);\n    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);\n\n    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);\n    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);\n    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);\n    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);\n    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);\n    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);\n    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);\n    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);\n    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);\n    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);\n    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);\n    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);\n    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);\n    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);\n    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);\n    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);\n\n    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);\n    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);\n    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);\n    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);\n    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);\n    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);\n    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);\n    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);\n    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);\n    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);\n    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);\n    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);\n    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);\n    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);\n    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);\n    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);\n\n    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);\n    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);\n    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);\n    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);\n    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);\n    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);\n    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);\n    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);\n    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);\n    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);\n    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);\n    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);\n    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);\n    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);\n    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);\n    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);\n\n    a = safe_add(a, olda);\n    b = safe_add(b, oldb);\n    c = safe_add(c, oldc);\n    d = safe_add(d, oldd);\n  }\n  return Array(a, b, c, d);\n\n}\n\n/*\n   * These functions implement the four basic operations the algorithm uses.\n   */\nfunction md5_cmn(q, a, b, x, s, t)\n{\n  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);\n}\nfunction md5_ff(a, b, c, d, x, s, t)\n{\n  return md5_cmn(b & c | ~b & d, a, b, x, s, t);\n}\nfunction md5_gg(a, b, c, d, x, s, t)\n{\n  return md5_cmn(b & d | c & ~d, a, b, x, s, t);\n}\nfunction md5_hh(a, b, c, d, x, s, t)\n{\n  return md5_cmn(b ^ c ^ d, a, b, x, s, t);\n}\nfunction md5_ii(a, b, c, d, x, s, t)\n{\n  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);\n}\n\n/*\n   * Calculate the HMAC-MD5, of a key and some data\n   */\nfunction core_hmac_md5(key, data)\n{\n  var bkey = str2binl(key);\n  if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);\n\n  var ipad = Array(16),opad = Array(16);\n  for (var i = 0; i < 16; i++)\n  {\n    ipad[i] = bkey[i] ^ 0x36363636;\n    opad[i] = bkey[i] ^ 0x5C5C5C5C;\n  }\n\n  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);\n  return core_md5(opad.concat(hash), 512 + 128);\n}\n\n/*\n   * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n   * to work around bugs in some JS interpreters.\n   */\nfunction safe_add(x, y)\n{\n  var lsw = (x & 0xFFFF) + (y & 0xFFFF);\n  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n  return msw << 16 | lsw & 0xFFFF;\n}\n\n/*\n   * Bitwise rotate a 32-bit number to the left.\n   */\nfunction bit_rol(num, cnt)\n{\n  return num << cnt | num >>> 32 - cnt;\n}\n\n/*\n   * Convert a string to an array of little-endian words\n   * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.\n   */\nfunction str2binl(str)\n{\n  var bin = Array();\n  var mask = (1 << chrsz) - 1;\n  for (var i = 0; i < str.length * chrsz; i += chrsz) {\n    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;}\n  return bin;\n}\n\n/*\n   * Convert an array of little-endian words to a string\n   */\nfunction binl2str(bin)\n{\n  var str = \"\";\n  var mask = (1 << chrsz) - 1;\n  for (var i = 0; i < bin.length * 32; i += chrsz) {\n    str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);}\n  return str;\n}\n\n/*\n   * Convert an array of little-endian words to a hex string.\n   */\nfunction binl2hex(binarray)\n{\n  var hex_tab = hexcase ? \"0123456789ABCDEF\" : \"0123456789abcdef\";\n  var str = \"\";\n  for (var i = 0; i < binarray.length * 4; i++)\n  {\n    str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) +\n    hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);\n  }\n  return str;\n}\n\n/*\n   * Convert an array of little-endian words to a base-64 string\n   */\nfunction binl2b64(binarray)\n{\n  var tab = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\";\n  var str = \"\";\n  for (var i = 0; i < binarray.length * 4; i += 3)\n  {\n    var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 |\n    (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) << 8 |\n    binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF;\n    for (var j = 0; j < 4; j++)\n    {\n      if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;else\n      str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);\n    }\n  }\n  return str;\n}\n// 导出方法\nmodule.exports = {\n  hex_md5: hex_md5,\n  b64_md5: b64_md5,\n  str_md5: str_md5 };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RhdGljL2pzL21kNS5qcyJdLCJuYW1lcyI6WyJoZXhjYXNlIiwiYjY0cGFkIiwiY2hyc3oiLCJoZXhfbWQ1IiwicyIsImJpbmwyaGV4IiwiY29yZV9tZDUiLCJzdHIyYmlubCIsImxlbmd0aCIsImI2NF9tZDUiLCJiaW5sMmI2NCIsInN0cl9tZDUiLCJiaW5sMnN0ciIsImhleF9obWFjX21kNSIsImtleSIsImRhdGEiLCJjb3JlX2htYWNfbWQ1IiwiYjY0X2htYWNfbWQ1Iiwic3RyX2htYWNfbWQ1IiwibWQ1X3ZtX3Rlc3QiLCJ4IiwibGVuIiwiYSIsImIiLCJjIiwiZCIsImkiLCJvbGRhIiwib2xkYiIsIm9sZGMiLCJvbGRkIiwibWQ1X2ZmIiwibWQ1X2dnIiwibWQ1X2hoIiwibWQ1X2lpIiwic2FmZV9hZGQiLCJBcnJheSIsIm1kNV9jbW4iLCJxIiwidCIsImJpdF9yb2wiLCJia2V5IiwiaXBhZCIsIm9wYWQiLCJoYXNoIiwiY29uY2F0IiwieSIsImxzdyIsIm1zdyIsIm51bSIsImNudCIsInN0ciIsImJpbiIsIm1hc2siLCJjaGFyQ29kZUF0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYmluYXJyYXkiLCJoZXhfdGFiIiwiY2hhckF0IiwidGFiIiwidHJpcGxldCIsImoiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBU0E7Ozs7QUFJQSxJQUFJQSxPQUFPLEdBQUcsQ0FBZCxDLENBQWtCO0FBQ2xCLElBQUlDLE1BQU0sR0FBSSxFQUFkLEMsQ0FBa0I7QUFDbEIsSUFBSUMsS0FBSyxHQUFLLENBQWQsQyxDQUFrQjs7QUFFbEI7Ozs7QUFJQSxTQUFTQyxPQUFULENBQWlCQyxDQUFqQixFQUFtQixDQUFFLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNILENBQUQsQ0FBVCxFQUFjQSxDQUFDLENBQUNJLE1BQUYsR0FBV04sS0FBekIsQ0FBVCxDQUFmLENBQTBEO0FBQy9F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R0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QjtBQUNBO0FBQ0UsVUFBR3BDLENBQUMsR0FBRyxDQUFKLEdBQVFvQyxDQUFDLEdBQUcsQ0FBWixHQUFnQkwsUUFBUSxDQUFDakQsTUFBVCxHQUFrQixFQUFyQyxFQUF5QzJDLEdBQUcsSUFBSWxELE1BQVAsQ0FBekM7QUFDS2tELFNBQUcsSUFBSVMsR0FBRyxDQUFDRCxNQUFKLENBQVlFLE9BQU8sSUFBSSxLQUFHLElBQUVDLENBQUwsQ0FBWixHQUF1QixJQUFsQyxDQUFQO0FBQ047QUFDRjtBQUNELFNBQU9YLEdBQVA7QUFDRDtBQUNEO0FBQ0FZLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNoQjdELFNBQU8sRUFBUEEsT0FEZ0I7QUFFaEJNLFNBQU8sRUFBUEEsT0FGZ0I7QUFHYkUsU0FBTyxFQUFQQSxPQUhhLEVBQWpCIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMSBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDIuXG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cblxuLypcbiAqIENvbmZpZ3VyYWJsZSB2YXJpYWJsZXMuIFlvdSBtYXkgbmVlZCB0byB0d2VhayB0aGVzZSB0byBiZSBjb21wYXRpYmxlIHdpdGhcbiAqIHRoZSBzZXJ2ZXItc2lkZSwgYnV0IHRoZSBkZWZhdWx0cyB3b3JrIGluIG1vc3QgY2FzZXMuXG4gKi9cbnZhciBoZXhjYXNlID0gMDsgIC8qIGhleCBvdXRwdXQgZm9ybWF0LiAwIC0gbG93ZXJjYXNlOyAxIC0gdXBwZXJjYXNlICAgICAgICAqL1xudmFyIGI2NHBhZCAgPSBcIlwiOyAvKiBiYXNlLTY0IHBhZCBjaGFyYWN0ZXIuIFwiPVwiIGZvciBzdHJpY3QgUkZDIGNvbXBsaWFuY2UgICAqL1xudmFyIGNocnN6ICAgPSA4OyAgLyogYml0cyBwZXIgaW5wdXQgY2hhcmFjdGVyLiA4IC0gQVNDSUk7IDE2IC0gVW5pY29kZSAgICAgICovXG5cbi8qXG4gKiBUaGVzZSBhcmUgdGhlIGZ1bmN0aW9ucyB5b3UnbGwgdXN1YWxseSB3YW50IHRvIGNhbGxcbiAqIFRoZXkgdGFrZSBzdHJpbmcgYXJndW1lbnRzIGFuZCByZXR1cm4gZWl0aGVyIGhleCBvciBiYXNlLTY0IGVuY29kZWQgc3RyaW5nc1xuICovXG5mdW5jdGlvbiBoZXhfbWQ1KHMpeyByZXR1cm4gYmlubDJoZXgoY29yZV9tZDUoc3RyMmJpbmwocyksIHMubGVuZ3RoICogY2hyc3opKTt9XG5mdW5jdGlvbiBiNjRfbWQ1KHMpeyByZXR1cm4gYmlubDJiNjQoY29yZV9tZDUoc3RyMmJpbmwocyksIHMubGVuZ3RoICogY2hyc3opKTt9XG5mdW5jdGlvbiBzdHJfbWQ1KHMpeyByZXR1cm4gYmlubDJzdHIoY29yZV9tZDUoc3RyMmJpbmwocyksIHMubGVuZ3RoICogY2hyc3opKTt9XG5mdW5jdGlvbiBoZXhfaG1hY19tZDUoa2V5LCBkYXRhKSB7IHJldHVybiBiaW5sMmhleChjb3JlX2htYWNfbWQ1KGtleSwgZGF0YSkpOyB9XG5mdW5jdGlvbiBiNjRfaG1hY19tZDUoa2V5LCBkYXRhKSB7IHJldHVybiBiaW5sMmI2NChjb3JlX2htYWNfbWQ1KGtleSwgZGF0YSkpOyB9XG5mdW5jdGlvbiBzdHJfaG1hY19tZDUoa2V5LCBkYXRhKSB7IHJldHVybiBiaW5sMnN0cihjb3JlX2htYWNfbWQ1KGtleSwgZGF0YSkpOyB9XG4vKlxuICogUGVyZm9ybSBhIHNpbXBsZSBzZWxmLXRlc3QgdG8gc2VlIGlmIHRoZSBWTSBpcyB3b3JraW5nXG4gKi9cbmZ1bmN0aW9uIG1kNV92bV90ZXN0KClcbntcbiAgcmV0dXJuIGhleF9tZDUoXCJhYmNcIikgPT0gXCI5MDAxNTA5ODNjZDI0ZmIwZDY5NjNmN2QyOGUxN2Y3MlwiO1xufVxuXG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aFxuICovXG5mdW5jdGlvbiBjb3JlX21kNSh4LCBsZW4pXG57XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgKChsZW4pICUgMzIpO1xuICB4WygoKGxlbiArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsZW47XG5cbiAgdmFyIGEgPSAgMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9ICAyNzE3MzM4Nzg7XG5cbiAgZm9yKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KVxuICB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuXG4gICAgYSA9IG1kNV9mZihhLCBiLCBjLCBkLCB4W2krIDBdLCA3ICwgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNV9mZihkLCBhLCBiLCBjLCB4W2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNV9mZihjLCBkLCBhLCBiLCB4W2krIDJdLCAxNywgIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVfZmYoYSwgYiwgYywgZCwgeFtpKyA0XSwgNyAsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVfZmYoZCwgYSwgYiwgYywgeFtpKyA1XSwgMTIsICAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2krIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1X2ZmKGEsIGIsIGMsIGQsIHhbaSsgOF0sIDcgLCAgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNV9mZihkLCBhLCBiLCBjLCB4W2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVfZmYoYywgZCwgYSwgYiwgeFtpKzEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2krMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVfZmYoYSwgYiwgYywgZCwgeFtpKzEyXSwgNyAsICAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1X2ZmKGQsIGEsIGIsIGMsIHhbaSsxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVfZmYoYywgZCwgYSwgYiwgeFtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1X2ZmKGIsIGMsIGQsIGEsIHhbaSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XG5cbiAgICBhID0gbWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSsgMV0sIDUgLCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSsgNl0sIDkgLCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNV9nZyhjLCBkLCBhLCBiLCB4W2krMTFdLCAxNCwgIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNV9nZyhiLCBjLCBkLCBhLCB4W2krIDBdLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNV9nZyhhLCBiLCBjLCBkLCB4W2krIDVdLCA1ICwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNV9nZyhkLCBhLCBiLCBjLCB4W2krMTBdLCA5ICwgIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1X2dnKGMsIGQsIGEsIGIsIHhbaSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1X2dnKGIsIGMsIGQsIGEsIHhbaSsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSsgOV0sIDUgLCAgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSsxNF0sIDkgLCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNV9nZyhjLCBkLCBhLCBiLCB4W2krIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNV9nZyhiLCBjLCBkLCBhLCB4W2krIDhdLCAyMCwgIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVfZ2coYSwgYiwgYywgZCwgeFtpKzEzXSwgNSAsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSsgMl0sIDkgLCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVfZ2coYywgZCwgYSwgYiwgeFtpKyA3XSwgMTQsICAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1X2dnKGIsIGMsIGQsIGEsIHhbaSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG5cbiAgICBhID0gbWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSsgNV0sIDQgLCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1X2hoKGQsIGEsIGIsIGMsIHhbaSsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2krMTFdLCAxNiwgIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVfaGgoYiwgYywgZCwgYSwgeFtpKzE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNV9oaChhLCBiLCBjLCBkLCB4W2krIDFdLCA0ICwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVfaGgoZCwgYSwgYiwgYywgeFtpKyA0XSwgMTEsICAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1X2hoKGMsIGQsIGEsIGIsIHhbaSsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSsxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNV9oaChhLCBiLCBjLCBkLCB4W2krMTNdLCA0ICwgIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNV9oaChkLCBhLCBiLCBjLCB4W2krIDBdLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2krIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNV9oaChiLCBjLCBkLCBhLCB4W2krIDZdLCAyMywgIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSsgOV0sIDQgLCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1X2hoKGQsIGEsIGIsIGMsIHhbaSsxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1X2hoKGMsIGQsIGEsIGIsIHhbaSsxNV0sIDE2LCAgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcblxuICAgIGEgPSBtZDVfaWkoYSwgYiwgYywgZCwgeFtpKyAwXSwgNiAsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVfaWkoZCwgYSwgYiwgYywgeFtpKyA3XSwgMTAsICAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1X2lpKGMsIGQsIGEsIGIsIHhbaSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1X2lpKGEsIGIsIGMsIGQsIHhbaSsxMl0sIDYgLCAgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNV9paShkLCBhLCBiLCBjLCB4W2krIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVfaWkoYywgZCwgYSwgYiwgeFtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1X2lpKGIsIGMsIGQsIGEsIHhbaSsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2krIDhdLCA2ICwgIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVfaWkoZCwgYSwgYiwgYywgeFtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNV9paShjLCBkLCBhLCBiLCB4W2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVfaWkoYiwgYywgZCwgYSwgeFtpKzEzXSwgMjEsICAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1X2lpKGEsIGIsIGMsIGQsIHhbaSsgNF0sIDYgLCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSsxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNV9paShjLCBkLCBhLCBiLCB4W2krIDJdLCAxNSwgIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG5cbiAgICBhID0gc2FmZV9hZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVfYWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlX2FkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZV9hZGQoZCwgb2xkZCk7XG4gIH1cbiAgcmV0dXJuIEFycmF5KGEsIGIsIGMsIGQpO1xuXG59XG5cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5mdW5jdGlvbiBtZDVfY21uKHEsIGEsIGIsIHgsIHMsIHQpXG57XG4gIHJldHVybiBzYWZlX2FkZChiaXRfcm9sKHNhZmVfYWRkKHNhZmVfYWRkKGEsIHEpLCBzYWZlX2FkZCh4LCB0KSksIHMpLGIpO1xufVxuZnVuY3Rpb24gbWQ1X2ZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpXG57XG4gIHJldHVybiBtZDVfY21uKChiICYgYykgfCAoKH5iKSAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNV9nZyhhLCBiLCBjLCBkLCB4LCBzLCB0KVxue1xuICByZXR1cm4gbWQ1X2NtbigoYiAmIGQpIHwgKGMgJiAofmQpKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVfaGgoYSwgYiwgYywgZCwgeCwgcywgdClcbntcbiAgcmV0dXJuIG1kNV9jbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNV9paShhLCBiLCBjLCBkLCB4LCBzLCB0KVxue1xuICByZXR1cm4gbWQ1X2NtbihjIF4gKGIgfCAofmQpKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIEhNQUMtTUQ1LCBvZiBhIGtleSBhbmQgc29tZSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNvcmVfaG1hY19tZDUoa2V5LCBkYXRhKVxue1xuICB2YXIgYmtleSA9IHN0cjJiaW5sKGtleSk7XG4gIGlmKGJrZXkubGVuZ3RoID4gMTYpIGJrZXkgPSBjb3JlX21kNShia2V5LCBrZXkubGVuZ3RoICogY2hyc3opO1xuXG4gIHZhciBpcGFkID0gQXJyYXkoMTYpLCBvcGFkID0gQXJyYXkoMTYpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgMTY7IGkrKylcbiAge1xuICAgIGlwYWRbaV0gPSBia2V5W2ldIF4gMHgzNjM2MzYzNjtcbiAgICBvcGFkW2ldID0gYmtleVtpXSBeIDB4NUM1QzVDNUM7XG4gIH1cblxuICB2YXIgaGFzaCA9IGNvcmVfbWQ1KGlwYWQuY29uY2F0KHN0cjJiaW5sKGRhdGEpKSwgNTEyICsgZGF0YS5sZW5ndGggKiBjaHJzeik7XG4gIHJldHVybiBjb3JlX21kNShvcGFkLmNvbmNhdChoYXNoKSwgNTEyICsgMTI4KTtcbn1cblxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cbmZ1bmN0aW9uIHNhZmVfYWRkKHgsIHkpXG57XG4gIHZhciBsc3cgPSAoeCAmIDB4RkZGRikgKyAoeSAmIDB4RkZGRik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4RkZGRik7XG59XG5cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cbmZ1bmN0aW9uIGJpdF9yb2wobnVtLCBjbnQpXG57XG4gIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKTtcbn1cblxuLypcbiAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogSWYgY2hyc3ogaXMgQVNDSUksIGNoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuZnVuY3Rpb24gc3RyMmJpbmwoc3RyKVxue1xuICB2YXIgYmluID0gQXJyYXkoKTtcbiAgdmFyIG1hc2sgPSAoMSA8PCBjaHJzeikgLSAxO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aCAqIGNocnN6OyBpICs9IGNocnN6KVxuICAgIGJpbltpPj41XSB8PSAoc3RyLmNoYXJDb2RlQXQoaSAvIGNocnN6KSAmIG1hc2spIDw8IChpJTMyKTtcbiAgcmV0dXJuIGJpbjtcbn1cblxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhIHN0cmluZ1xuICovXG5mdW5jdGlvbiBiaW5sMnN0cihiaW4pXG57XG4gIHZhciBzdHIgPSBcIlwiO1xuICB2YXIgbWFzayA9ICgxIDw8IGNocnN6KSAtIDE7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBiaW4ubGVuZ3RoICogMzI7IGkgKz0gY2hyc3opXG4gICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGJpbltpPj41XSA+Pj4gKGkgJSAzMikpICYgbWFzayk7XG4gIHJldHVybiBzdHI7XG59XG5cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYSBoZXggc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiaW5sMmhleChiaW5hcnJheSlcbntcbiAgdmFyIGhleF90YWIgPSBoZXhjYXNlID8gXCIwMTIzNDU2Nzg5QUJDREVGXCIgOiBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbiAgdmFyIHN0ciA9IFwiXCI7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBiaW5hcnJheS5sZW5ndGggKiA0OyBpKyspXG4gIHtcbiAgICBzdHIgKz0gaGV4X3RhYi5jaGFyQXQoKGJpbmFycmF5W2k+PjJdID4+ICgoaSU0KSo4KzQpKSAmIDB4RikgK1xuICAgICAgICAgICBoZXhfdGFiLmNoYXJBdCgoYmluYXJyYXlbaT4+Ml0gPj4gKChpJTQpKjggICkpICYgMHhGKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGEgYmFzZS02NCBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gYmlubDJiNjQoYmluYXJyYXkpXG57XG4gIHZhciB0YWIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcbiAgdmFyIHN0ciA9IFwiXCI7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBiaW5hcnJheS5sZW5ndGggKiA0OyBpICs9IDMpXG4gIHtcbiAgICB2YXIgdHJpcGxldCA9ICgoKGJpbmFycmF5W2kgICA+PiAyXSA+PiA4ICogKCBpICAgJTQpKSAmIDB4RkYpIDw8IDE2KVxuICAgICAgICAgICAgICAgIHwgKCgoYmluYXJyYXlbaSsxID4+IDJdID4+IDggKiAoKGkrMSklNCkpICYgMHhGRikgPDwgOCApXG4gICAgICAgICAgICAgICAgfCAgKChiaW5hcnJheVtpKzIgPj4gMl0gPj4gOCAqICgoaSsyKSU0KSkgJiAweEZGKTtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgNDsgaisrKVxuICAgIHtcbiAgICAgIGlmKGkgKiA4ICsgaiAqIDYgPiBiaW5hcnJheS5sZW5ndGggKiAzMikgc3RyICs9IGI2NHBhZDtcbiAgICAgIGVsc2Ugc3RyICs9IHRhYi5jaGFyQXQoKHRyaXBsZXQgPj4gNiooMy1qKSkgJiAweDNGKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cbi8vIOWvvOWHuuaWueazlVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGhleF9tZDUsXG5cdGI2NF9tZDUsXG4gICAgc3RyX21kNVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*******************************************************************************************************************!*\
  !*** /Users/wangxiaowen/Desktop/Kaiyuan/pages/live-info/android.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./android.nvue?vue&type=style&index=0&lang=css&mpType=page */ 15);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_android_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangxiaowen/Desktop/Kaiyuan/pages/live-info/android.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "live-all-wrap": {
    "backgroundColor": "#F4F5F6"
  },
  "video-wrap": {
    "width": "750rpx",
    "height": "400rpx",
    "backgroundColor": "#000000"
  },
  "rounded": {
    "marginTop": "20rpx",
    "width": "80rpx",
    "height": "80rpx",
    "borderRadius": "40rpx"
  },
  "messagebottom": {
    "flexDirection": "row"
  },
  "messagebottom2": {
    "flexDirection": "row-reverse"
  },
  "message": {
    "flexDirection": "column"
  },
  "user_nickname": {
    "marginTop": "20rpx",
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx",
    "fontSize": "30rpx",
    "fontWeight": "bold"
  },
  "scroll1": {
    "width": "750rpx"
  },
  "textmessage": {
    "marginTop": "20rpx",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "borderRadius": "8rpx",
    "fontSize": "30rpx",
    "fontWeight": "normal",
    "maxWidth": "450rpx",
    "backgroundColor": "#FFFFFF",
    "color": "#000000"
  },
  "textmessage2": {
    "marginTop": "20rpx",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "borderRadius": "8rpx",
    "fontSize": "30rpx",
    "fontWeight": "normal",
    "maxWidth": "450rpx",
    "backgroundColor": "#34D695",
    "color": "#FFFFFF"
  },
  "inputbottom": {
    "height": "130rpx",
    "backgroundColor": "#FFFFFF",
    "position": "fixed",
    "bottom": "0rpx",
    "width": "750rpx"
  },
  "inputclass": {
    "flexDirection": "row",
    "height": "130rpx",
    "width": "750rpx"
  },
  "inputborder": {
    "position": "absolute",
    "marginTop": "20rpx",
    "height": "80rpx",
    "left": "20rpx",
    "right": "140rpx",
    "backgroundColor": "#F4F5F6",
    "borderRadius": "40rpx"
  },
  "input": {
    "position": "absolute",
    "height": "80rpx",
    "left": "20rpx",
    "right": "100rpx",
    "lineHeight": 2,
    "color": "#000000",
    "fontSize": "30rpx",
    "borderRadius": "40rpx",
    "paddingRight": "20rpx",
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "send": {
    "position": "absolute",
    "right": "30rpx",
    "color": "#34D695",
    "fontSize": "35rpx",
    "marginTop": "40rpx"
  },
  "tiwen": {
    "fontSize": "25rpx",
    "position": "absolute",
    "right": "5rpx",
    "marginTop": "8rpx"
  },
  "wen-btn-wrap": {
    "width": "100rpx",
    "height": "50rpx",
    "position": "absolute",
    "right": "20rpx",
    "marginTop": "15rpx",
    "lineHeight": "70rpx"
  },
  "duihao-img": {
    "width": "30rpx",
    "height": "30rpx"
  },
  "duihao-wrap": {
    "position": "absolute",
    "width": "40rpx",
    "height": "40rpx",
    "marginTop": "8rpx"
  },
  "wen": {
    "top": "20rpx",
    "marginRight": "10rpx",
    "marginTop": "20rpx",
    "backgroundColor": "#34D695",
    "color": "#FFFFFF",
    "width": "40rpx",
    "height": "37rpx",
    "fontSize": "30rpx",
    "textAlign": "center",
    "alignItems": "center"
  },
  "wen2": {
    "top": "60rpx",
    "marginLeft": "10rpx",
    "marginTop": "60rpx",
    "backgroundColor": "#34D695",
    "color": "#FFFFFF",
    "width": "40rpx",
    "height": "37rpx",
    "fontSize": "30rpx",
    "textAlign": "center",
    "alignItems": "center"
  },
  "zhinan": {
    "backgroundColor": "#FFFFFF",
    "marginTop": "20rpx",
    "marginLeft": "40rpx",
    "marginRight": "40rpx",
    "height": "80rpx",
    "borderRadius": "10rpx"
  },
  "zhinantext": {
    "fontSize": "35rpx",
    "height": "80rpx",
    "paddingLeft": "20rpx",
    "paddingTop": "20rpx"
  }
}

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);