Function.prototype.call2 = function(that,...rest){
    let context = that || window;
    context.fn = this;
    let res = context.fn(...rest);
    delete context.fn;
    return res;
}

Function.prototype.apply = function(that, rest){
    let context = that || window;
    context.fn = this;
    let res = context.fn(...rest);
    delete context.fn;
    return res;
}

// 思路：类似call，但返回的是函数
Function.prototype.mybind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let _this = this;
  let arg = [...arguments].slice(1);
  return function F() {
    // 处理函数使用new的情况
    if (this instanceof F) {
      return new _this(...arg, ...arguments)
    } else {
      return _this.apply(context, arg.concat(...arguments))
    }
  }
}
// Object.create实现
function create(obj){
    function F(){}
    F.prototype = obj;
    return new F();
}

// new的本质
function myNew(fun){
    return function(){
        let obj = {
            __prototype__: fun.prototype
        };
        fun.call(obj, ...arguments);
        return obj;
    }
}






 