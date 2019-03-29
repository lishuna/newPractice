/**
 * auth: lishuna
 * func:
 * date:
 */

/*
* 检测是否是类的实例，用instanceof
* 对于类的定义，不允许直接以方法的形式调用，会抛异常。内部实现就是检测this instanceof 类 。
* this是不是类的实例，如果不是，代表不是用过new关键字调用的constructor
* */
function Parent() {
    constructor()
    {
        console.log('调用父级构造函数');
    }
    // console.log(this instanceof Parent);
    console.log('调用父级');
    this.name = '小小';
}

Parent.prototype.getName = function () {
    console.log('获取名字');
}
Parent.prototype.getAge = function () {
    console.log('获取年龄');
}

function ParentSub() {
    constructor()
    {
        console.log('调用新的子集构造函数');
    }
    console.log('调用新的子集');
}
/*
* es5的继承写法，最优方案是使用xxx.prototype = Object.create(XXX.prototype)
* 因为使用xxx.prototype = new XXX()会把私有属性继承过来
* 然后再修复一下xxx.prototype.constructor的指向xxx
* xxx.prototype.constructor = xxx;
* */
// ParentSub.prototype = new Parent();
ParentSub.prototype = Object.create(Parent.prototype);
ParentSub.prototype.constructor = ParentSub;
let pp1 = new ParentSub();
console.dir(ParentSub.prototype.constructor);
console.log(pp1.name);

class Parent1 {
    constructor(name) {
        console.log(this instanceof Parent1)
        this.name = name;
    }

    getName() {
        return this.name;
    }

    static age() {
        console.log('年龄');
    }
}

const p = new Parent1();
Parent1.age();

// Parent1();

class Child extends Parent1 {
    // age = 0;
    constructor() {
        super('小明');
        this.age = '18'
    }
}
