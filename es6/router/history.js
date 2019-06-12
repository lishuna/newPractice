/**
 * @author lishuna
 * @date  2019-05-15:21:00
 * @version 3.1.0.0
 * @desc
 */
// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件
window.addEventListener('DOMContentLoaded', onLoad)
// 监听路由变化
window.addEventListener('popstate', onPopState)

// 路由视图
var routerView = null

function onLoad () {
  routerView = document.querySelector('#routeView')
  onPopState()

  // 拦截 <a> 标签点击事件默认行为， 点击时使用 pushState 修改 URL并更新手动 UI，从而实现点击链接更新 URL 和 UI 的效果。
  var linkList = document.querySelectorAll('a[href]')
  linkList.forEach(el => el.addEventListener('click', function (e) {
    e.preventDefault()
    history.pushState(null, '', el.getAttribute('href'))
    onPopState()
  }))
}

// 路由变化时，根据路由渲染对应 UI
function onPopState () {
  switch (location.pathname) {
    case '/home':
      routerView.innerHTML = 'Home'
      return
    case '/about':
      routerView.innerHTML = 'About'
      return
    default:
      return
  }
}

// window.addEventListener('popstate', (event) => {
//   console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
// });
// history.pushState({page: 1}, "title 1", "?page=1");
// history.pushState({page: 2}, "title 2", "?page=2");
// history.replaceState({page: 3}, "title 3", "?page=3");
// history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
// history.back(); // Logs "location: http://example.com/example.html, state: null
// history.go(2);  // Logs "location: http://example.com/example.html?page=3, state: {"page":3}
