/**
 * auth: lishuna
 * func:
 * date:
 */
function MVVM(options) {
    this.$options = options;
    this.$data = this.$options.data;
    observe(this.$data);
    this.node2fragment(options.el);
}

MVVM.prototype.Compile = function (el) {

}
MVVM.prototype.node2fragment = function (el) {
    const $el = document.querySelector(el);
    this.$el = $el;
    const fragment = document.createDocumentFragment();
    while (child = this.$el.firstChild) {
        fragment.appendChild(child);
    }
    this.compile(fragment);
    this.$el.appendChild(fragment);

}
MVVM.prototype.compile = function (fragment) {
    const nodeList = fragment.childNodes;
    Array.from(nodeList).forEach((node) => {
        console.log(node);
        const text = node.textContent;
        const reg = /\{\{(.*)\}\}/;
        // 处理元素 v-model
        if (node.nodeType === 1) {
            this.compileElem(node);
            this.compile(node);
        } else if (reg.test(text)) { // 处理文本 {{}}
            this.compileText(node);
        }
    });
}
MVVM.prototype.compileElem = function (el) {
    const attrs = el.attributes;
    Array.from(attrs).forEach(attr => {
        const name = attr.name;
        if (this.isDirective(name)) {
            if (this.isEvent(name)) {
                const [, type] = name.split(':');
                const method = attr.value;
                el.addEventListener(type, this.$options.method[method], false);
            } else {
                const value = attr.value;
                const [, type] = name.split('-');
                compileUtil[type](el, value, this);
            }
        }
    });
}
MVVM.prototype.compileText = function (el) {
    const reg = /\{\{(.*)\}\}/;
    const text = el.textContent;
    if (reg.test(text)) {
        const name = RegExp.$1;
        new Watcher(this.$data, name, (val) => {
            el.textContent = val;
        });
        el.textContent = this.$data[name];
    }
}
MVVM.prototype.isDirective = function (val) {
    return val.includes('v-');
};
MVVM.prototype.isEvent = function (val) {
    return val.includes('v-on');
}
const compileUtil = {
    text: () => {

    },
    model: (node, name, vm) => {
        compileUtil.updater.modelUpdater(node, name, vm);
    },
    updater: {
        modelUpdater: (node, name, vm) => {
            node.value = vm.$data[name];
            const oldVal = vm.$data[name];
            node.addEventListener('keyup', (event) => {
                const newVal = event.target.value;
                if (oldVal === newVal) {
                    return;
                }
                vm.$data[name] = newVal;
            }, false);
        },
        textUpdater: () => {

        }
    }
};

function Observe(data) {
    if (Object.prototype.toString.call(data) !== '[object Object]') {
        return;
    }
    var dep = new Dep();
    Object.keys(data).forEach((key) => {
        var val = data[key];
        Object.defineProperty(data, key, {
            enumerable: true,
            set: (newVal) => {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                observe(val);
                dep.notify();
            },
            get: () => {
                Dep.target && dep.addSub(Dep.target);
                return val;
            }
        });
    });
}

function observe(data) {
    return new Observe(data);
}
