(function (modules) { // webpackBootstrap
  // 缓存 __webpack_require__ 函数加载过的模块
  var installedModules = {};

  /**
   * Webpack 加载函数，用来加载 webpack 定义的模块
   * @param {String} moduleId 模块 ID，一般为模块的源码路径，如 "./src/index.js"
   * @returns {Object} exports 导出对象
   */
  function __webpack_require__(moduleId) {

    // 重复加载则利用缓存
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // 如果是第一次加载，则初始化模块对象，并缓存
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    /**
     * 执行模块
     * @param module.exports -- 模块导出对象引用，改变模块包裹函数内部的 this 指向
     * @param module -- 当前模块对象引用
     * @param module.exports -- 模块导出对象引用
     * @param __webpack_require__ -- 用于在模块中加载其他模块
     */
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // 模块加载标识置为已加载
    module.l = true;

    // 返回当前模块的导出对象引用
    return module.exports;
  }


  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;

  // expose the module cache
  __webpack_require__.c = installedModules;

  // 将name属性定义到module.exports上，定制get返回传入getter
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // 区分esModule
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  // 传入表达式的值为 "./src/index.js" 并return exports
  return __webpack_require__(__webpack_require__.s = "./src/index_new.js");
})
/************************************************************************/
({

  "./src/index_new.js":
    (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      // 用于区分 ES 模块和其他模块规范。
      __webpack_require__.r(__webpack_exports__);
      // 这里返回module.export引用
      var _utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/math.js");
      Object(_utils_math__WEBPACK_IMPORTED_MODULE_0__["incCounter"])();
      console.log(_utils_math__WEBPACK_IMPORTED_MODULE_0__["counter"]);
    }),

  "./src/utils/math.js":
    (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      // 标记ES模块
      __webpack_require__.r(__webpack_exports__);
    // 这里直接将counter属性挂载到module.export上，重写get方法为第三个参数
      __webpack_require__.d(__webpack_exports__, "counter", function () {
        return counter;
      });
      // 这里直接将incCounter属性挂载到module.export上，重写get方法为第三个参数
      __webpack_require__.d(__webpack_exports__, "incCounter", function () {
        return incCounter;
      });
      let counter = 3;
      function incCounter() {
        counter++;
      }
    })
});
