/**
 * @author lishuna
 * @date  2019-05-06:19:07
 * @version 3.1.0.0
 * @desc
 */

function Animal(){
    this.msg = '你好';
    return function(){
        let context = this;
        context.msg = '测试测试';
        //console.log(global);
        // console.log(context instanceof global);
        return context;
    }
}
let animal = Animal();
console.log(animal());
