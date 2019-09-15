
Function.prototype.call1 = function(context){
    console.log('1111')
    context.abc = this;
    // a.$fn = b.show;
    const result = context.$fn();// a.show()
    delete context.$fn
}
var a = {
    name: 'jack'
};
var b = {
    name: 'xiaoming',
    show(){
        console.log(this.name);
    }
}


b.show.call1(a);