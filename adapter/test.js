Function.prototype.callme  = function(context, ...rest){
    context.fn = this;
    context.fn(rest);
    delete context.fn;
};

Function.prototype.applyme  = function(context, rest){
    context.fn = this;
    context.fn(...rest);
    delete context.fn;
};

Function.prototype.bindme = function(context, ...rest){
    let self = this;
    console.log('rest' + rest);
    return function(...arg2){
        self.applyme(context, rest.concat(arg2));
    }
}
var foo = {
    value: 1
};

function bar(name, age, sex) {
    console.log('this.value ' + this.value);
    console.log('name ' + name);
    console.log('age ' + age);
    console.log('sex ' + sex);
}
// var bindFoo = bar.bindme(foo, 'daisy');
// console.log(bindFoo);
// bindFoo('18', 'girl');
// console.log('---------------------------');
// let obj = new bindFoo('18', 'girl');
// console.log(obj);

function myNew(){
    
}