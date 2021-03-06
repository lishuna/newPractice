/**
 * @author lishuna
 * @date  2019-05-15:20:59
 * @version 3.1.0.0
 * @desc
 */

// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件
window.addEventListener('DOMContentLoaded', onLoad)
// 监听路由变化
window.addEventListener('hashchange', onHashChange)

// 路由视图
var routerView = null

function onLoad () {
  routerView = document.querySelector('#routeView')
  onHashChange()
}

// 路由变化时，根据路由渲染对应 UI
function onHashChange () {
  switch (location.hash) {
    case '#/home':
      routerView.innerHTML = 'Home';
      return;
    case '#/about':
      routerView.innerHTML = 'About';
      return;
    default:
      return;
  }
}
