const Util = {
    getSourceTime: (resource) => {

        let timer = {
            //   网络层
            name: resource.name,
            type: resource.initiatorType,
            redirect: resource.redirectEnd - resource.redirectStart,    // 重定向时间
            dns: resource.domainLookupEnd - resource.domainLookupStart,  // dns查找
            connect: resource.connectEnd - resource.connectStart,       // tcp建连
            network: resource.connectEnd - resource.startTime,          // 网络连接总时长

            send: resource.responseStart - resource.requestStart,       // 发送数据到接收第一个字节
            receive: resource.responseEnd - resource.responseStart,     // 接收总时间
            request: resource.responseEnd - resource.requestStart,      // 请求总时长
            ttfb: resource.responseEnd - resource.startTime             // 首字节
        };

        return timer;
    },
    resolveSource: (entries) => entries.map((res) => Util.getSourceTime(res))
};

export default {
    init: (cb) => {
        let entriesList = [];
        if (window.PerformanceObserver) {
            let observer = new window.PerformanceObserver((list) => {
                try {
                    const entries = list.getEntries();
                    entriesList.push(...Util.resolveSource(entries));
                } catch (e) {
                    console.error(e);
                }
            });
            observer.observe({
                entryTypes: ['resource']
            });
        }
        window.addEventListener('load', () => {
            if(entriesList.length == 0){
                entriesList =  Util.resolveSource(performance.getEntriesByType('resource'));
            }
            cb(entriesList);
        });
    }
}
