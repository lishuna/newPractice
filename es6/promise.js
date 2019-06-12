/**
 * auth: lishuna
 * func:
 * date:
 */
//

// const promisState = {
//     PENDING: 'pending',
//     FULFILLED: 'fulfilled',
//     REJECTED: 'rejected'
// };
// class Promise {
//     constructor(fun) {
//         this.state = promisState.PENDING;
//         this.value = '';
//         this.onFulfilledCallBack = [];
//         this.onRejectedCallBack = [];
//         const self = this;
//         fun(self.resolve.bind(self), self.reject.bind(self));
//
//     }
//
//     resolve(value) {
//         this.value = value;
//         if (this.state === promisState.PENDING) {
//             this.state = promisState.FULFILLED;
//             this.onFulfilledCallBack.forEach(fun => {
//                 fun(value);
//             });
//         }
//     }
//
//     reject() {
//         this.value = value;
//         if (this.state === promisState.PENDING) {
//             this.state = promisState.REJECTED;
//             this.onRejectedCallBack.forEach(fun => {
//                 fun(value);
//             });
//         }
//     }
//
//     then(resolve, reject) {
//         if (this.state === promisState.PENDING) {
//             this.onFulfilledCallBack.push(resolve);
//             this.onRejectedCallBack.push(reject);
//         } else if (this.state === promisState.FULFILLED) {
//             this.resolve(this.value)
//         } else if (this.state === promisState.REJECTED) {
//             this.reject( new Error());
//         }
//     }
// }

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('异步回调完成');
        resolve('success');
        resolve('success1');
    }, 300);
});
p.then((val) => {
    console.log('then call one ', val)
    return val+'===';
}).then(res=>{
    console.log('then next:',res);
});
p.then((val) => {
    console.log('then call two  ', val)
});



