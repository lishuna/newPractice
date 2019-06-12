(function (modules) { // webpackBootstrap
  // 缓存模块
  var installedModules = {};

  // 加载模块方法
  function __webpack_require__(moduleId) {

    // Check if module is in cache
    if (installedModules[moduleId]) {
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
  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;

  // expose the module cache
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // define __esModule on exports
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

  // Load entry module and return exports
  return __webpack_require__(__webpack_require__.s = "./src/index_new.js");
})
({
  "./src/index_new.js": (function (module, exports, __webpack_require__) {
    // 这里直接将module.export解构赋值 实现值拷贝
    const { counter, incCounter } = __webpack_require__("./src/utils/math_commonjs.js");
    incCounter();
    console.log(counter);
  }),
  "./src/utils/math_commonjs.js":
    (function (module, exports) {
      var counter = 3;

      function incCounter() {
        counter++;
      }

      module.exports = {
        counter: counter,
        incCounter: incCounter,
      };
    })
});
