 (function(modules) { // webpackBootstrap
 	// 异步模块加载完以后的回调
 	function webpackJsonpCallback(data) {
 		var chunkIds = data[0];
 		var moreModules = data[1];
    // 将 chunk 标记为已加载
 		var moduleId, chunkId, i = 0, resolves = [];
 		console.dir(installedChunks);
 		for(;i < chunkIds.length; i++) {
 			chunkId = chunkIds[i];
 			if(installedChunks[chunkId]) {
 				// installedChunks = [0:[resolve,rejected,promise]]
 				resolves.push(installedChunks[chunkId][0]);
 			}
 			// 将chunk置为已加载
 			installedChunks[chunkId] = 0;
 		}
 		// 将moreModules赋给全局的modules
    /**
    * @param moreModules = {
          "./src/utils/math.js":
          (function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
          __webpack_require__.d(__webpack_exports__, "incCounter", function() { return incCounter; });
          let counter = 3;
          function incCounter() {
            counter++;
          }
          })
        }
    * */
 		for(moduleId in moreModules) {
 			// 将path对应的代码块存储到modules上
 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
 				modules[moduleId] = moreModules[moduleId];
 			}
 		}
 		// 将data整个添加到window.webpackJsonp数组里
 		if(parentJsonpFunction) parentJsonpFunction(data);
     // 执行所有promise的resolve回调
 		while(resolves.length) {
 			resolves.shift()();
 		}
 	};


 	// 缓存 chunk 模块
 	var installedModules = {};

   // 用于缓存 chunk 的加载状态，0 为已加载
 	var installedChunks = {
 		"index": 0
 	};
   // 拼接 chunk 的请求地址
 	function jsonpScriptSrc(chunkId) {
 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
 	}
 	// The require function
 	function __webpack_require__(moduleId) {

 		// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}
   // 异步加载 chunk，返回封装加载过程的 promise
 	__webpack_require__.e = function requireEnsure(chunkId) {
 		var promises = [];

 		// JSONP chunk loading for javascript

 		var installedChunkData = installedChunks[chunkId];
 		// 模块未加载过
 		if(installedChunkData !== 0) { // 0 means "already installed".

 			// a Promise means "currently loading".
 			if(installedChunkData) {
 				promises.push(installedChunkData[2]);
 			} else {
 				// setup Promise in chunk cache
 				var promise = new Promise(function(resolve, reject) {
 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
 				});
 				promises.push(installedChunkData[2] = promise);

 				// start chunk loading
 				var script = document.createElement('script');
 				var onScriptComplete;

 				script.charset = 'utf-8';
 				script.timeout = 120;
 				if (__webpack_require__.nc) {
 					script.setAttribute("nonce", __webpack_require__.nc);
 				}
 				script.src = jsonpScriptSrc(chunkId);

 				// create error before stack unwound to get useful stacktrace later
 				var error = new Error();
 				onScriptComplete = function (event) {
 					// avoid mem leaks in IE.
 					script.onerror = script.onload = null;
 					clearTimeout(timeout);
 					var chunk = installedChunks[chunkId];
 					if(chunk !== 0) {
 						if(chunk) {
 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
 							var realSrc = event && event.target && event.target.src;
 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
 							error.type = errorType;
 							error.request = realSrc;
 							chunk[1](error);
 						}
 						installedChunks[chunkId] = undefined;
 					}
 				};
 				var timeout = setTimeout(function(){
 					onScriptComplete({ type: 'timeout', target: script });
 				}, 120000);
 				script.onerror = script.onload = onScriptComplete;
 				document.head.appendChild(script);
 			}
 		}
 		return Promise.all(promises);
 	};

 	// expose the modules object (__webpack_modules__)
 	__webpack_require__.m = modules;

 	// expose the module cache
 	__webpack_require__.c = installedModules;

 	// define getter function for harmony exports
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};

 	// define __esModule on exports
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};

 	// Object.prototype.hasOwnProperty.call
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

 	// __webpack_public_path__
 	__webpack_require__.p = "_bak/import()/";

 	// on error function for async loading
 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
   /**** JSONP 初始化 ****/
 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
   // 保存 jsonpArray 的 push 函数，首次运行为 Array.prototype.push
 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
   // 将 jsonpArray 即window["webpackJsonp"] 的 push 重写为 webpackJsonpCallback （加载其他 chunk 后的回调函数）
 	jsonpArray.push = webpackJsonpCallback;
 	jsonpArray = jsonpArray.slice();
 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
 	// 将window["webpackJsonp"].push赋值给parentJsonpFunction
 	var parentJsonpFunction = oldJsonpFunction;
 	// Load entry module and return exports
 	return __webpack_require__(__webpack_require__.s = "./src/module.js");
 })
 ({

"./src/module.js":
(function(module, exports, __webpack_require__) {

__webpack_require__.e(0).then(__webpack_require__.bind(null, "./src/utils/math.js")).then(({ counter }) => {
    alert(counter);
  }
);
})

 });
