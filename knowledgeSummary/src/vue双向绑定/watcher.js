/**
 * auth: lishuna
 * func:
 * date:
 */
function Dep() {
    this.subs = [];
}
Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
};
Dep.prototype.notify = function () {
    this.subs.forEach(sub=>{
        sub.update();
    });
};

function Watcher(vm, exp, fn) {
    this.fn = fn;
    this.vm = vm;
    this.exp = exp;
    Dep.target = this;
    let val = this.vm[this.exp];
    Dep.target = null;
}
Watcher.prototype.update = function () {
    let val = this.vm[this.exp];
    this.fn(val);
};


// const watcher = new Watcher(()=> {
//     console.log('watcher 0');
// });
// const dep = new Dep();
// dep.addSub(watcher);
// const watcher1 = new Watcher(()=> {
//     console.log('watcher 1');
// });
// dep.addSub(watcher);
// dep.notify();

