
// proxy
const student = {
    name: 'linda',
    age: 18,
    chengji: {
        math: 80,
        chinese: 90,
        mixn:{

        }
    }
};
let handler = {
    get(target,key){
        // return target[key];
       console.log('update',key);
       if(typeof target[key] === 'object'){
        return new Proxy(target[key],handler);
       }
        return Reflect.get(target,key);
    },
    set(target,key, value){
        // target[p] = value;
        // return true;
        return Reflect.set(target,key,value);
    }
};
let proxy = new Proxy(student, handler);
// proxy.className = '英语';
proxy.chengji.math = 100;
proxy.chengji.mixn.n = 199;
console.log(student);

// defineproperty
const student = {
    // name: 'linda',
    // age: 18
};
Object.defineProperty(student,'age',{
    get(){
        return student.age;
    },
    set(value){
        student.age = value;
    }
});
student.age = 20;
console.log(student);