(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    const Util = {
      isDOMReady: false,
      isLoaded: false,
      getPerformData: () => {
        const performObj = performance.timing;
        const performData = {
          // 网络建连统计listProduct
          redirect: performObj.redirectEnd - performObj.redirectStart,
          //  重定向时间
          dns: performObj.domainLookupEnd - performObj.domainLookupStart,
          // dns查找时间
          connect: performObj.connectEnd - performObj.connectStart,
          // tcp握手时间
          network: performObj.connectEnd - performObj.navigationStart,
          // 网络总耗时
          // 网络接收统计
          send: performObj.responseStart - performObj.requestStart,
          // 发送请求时间
          recive: performObj.responseEnd - performObj.responseStart,
          // 接收响应时间
          request: performObj.responseEnd - performObj.requestStart,
          // 接收页面总时间
          // 前端渲染
          dom: performObj.domComplete - performObj.domLoading,
          // dom解析时间
          loadEvent: performObj.loadEventEnd - performObj.loadEventStart,
          // load事件加载时间
          load: performObj.loadEventEnd - performObj.navigationStart,
          // 页面加载总时间
          // 关键阶段统计
          domReady: performObj.domContentLoadedEventStart - performObj.navigationStart,
          // domready状态花费时间
          interactive: performObj.domInteractive - performObj.navigationStart,
          // 可操作时间
          ttfb: performObj.responseStart - performObj.navigationStart //首字节

        };
        return performData;
      },
      domready: cb => {
        let timer;

        if (Util.isDOMReady) {
          return;
        }

        const pollingCheck = () => {
          const state = performance.timing.domInteractive;

          if (state) {
            clearTimeout(timer);
            cb();
            Util.isDOMReady = true;
          } else {
            timer = setTimeout(pollingCheck, 100);
          }
        }; // 如果readyState = 'interactive' 说明dom已经加载完成


        if (document.readyState === 'interactive') {
          cb();
          Util.isDOMReady = true;
          return;
        } else {
          document.addEventListener('DOMContentLoaded', pollingCheck);
        }
      },
      load: cb => {
        let timer;

        if (Util.isLoaded) {
          return;
        }

        const pollingCheck = () => {
          const state = performance.timing.loadEventEnd;

          if (state) {
            clearTimeout(timer);
            cb();
            Util.isLoaded = true;
          } else {
            timer = setTimeout(pollingCheck, 100);
          }
        }; // 如果readyState = 'interactive' 说明dom已经加载完成


        if (document.readyState === 'complete') {
          cb();
          Util.isLoaded = true;
          return;
        } else {
          window.addEventListener('load', pollingCheck);
        }
      }
    };
    var performanceFn = {
      init: callback => {
        Util.domready(() => {
          const data = Util.getPerformData();
          data.type = 'domready';
          callback(data);
        });
        Util.load(() => {
          const data = Util.getPerformData();
          data.type = 'load';
          callback(data);
        });
      }
    };

    const Util$1 = {
      getSourceTime: resource => {
        let timer = {
          //   网络层
          name: resource.name,
          type: resource.initiatorType,
          redirect: resource.redirectEnd - resource.redirectStart,
          // 重定向时间
          dns: resource.domainLookupEnd - resource.domainLookupStart,
          // dns查找
          connect: resource.connectEnd - resource.connectStart,
          // tcp建连
          network: resource.connectEnd - resource.startTime,
          // 网络连接总时长
          send: resource.responseStart - resource.requestStart,
          // 发送数据到接收第一个字节
          receive: resource.responseEnd - resource.responseStart,
          // 接收总时间
          request: resource.responseEnd - resource.requestStart,
          // 请求总时长
          ttfb: resource.responseEnd - resource.startTime // 首字节

        };
        return timer;
      },
      resolveSource: entries => entries.map(res => Util$1.getSourceTime(res))
    };
    var resourceFn = {
      init: cb => {
        let entriesList = [];

        if (window.PerformanceObserver) {
          let observer = new window.PerformanceObserver(list => {
            try {
              const entries = list.getEntries();
              entriesList.push(...Util$1.resolveSource(entries));
            } catch (e) {
              console.error(e);
            }
          });
          observer.observe({
            entryTypes: ['resource']
          });
        }

        window.addEventListener('load', () => {
          if (entriesList.length == 0) {
            entriesList = Util$1.resolveSource(performance.getEntriesByType('resource'));
          }

          cb(entriesList);
        });
      }
    };

    performanceFn.init(data => {
      console.log('performance init!');
      console.log(data);
    });
    resourceFn.init(data => {
      console.log('resource init!');
      console.log(data);
    });

}));
