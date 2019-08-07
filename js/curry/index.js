function curry(fn){
    let args = Array.prototype.slice.call(arguments, 1);
    return function(){
        let innerArgs = Array.prototype.slice.call(arguments);
        let finalArgs = args.concat(innerArgs);
        return fn.apply(this, finalArgs);
    }
}
// 将一个使用多个参数的函数转换成单个参数的函数
function cur(fn, arg = []){
    let length = fn.length;
    let args = arg;
    return function(...rest){
        let _args = args.concat(rest);

        if(_args.length < length){
            return cur(fn, _args);
        }else{
            return fn.apply(this, _args);
        }
    }
}
var fn = cur(function(a, b, c) {
    console.log([a, b, c]);
});
fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]