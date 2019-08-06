let obj = {
    a: 3
};
Object.defineProperty(obj,'b',{
    enumerable:true,
    get:function(){
        return this.value;
    },
    set:function(item){ this.value = Math.sqrt(item);}
});
obj.b = 9;

let person = {
    name: 'lixing'
};
// 不可扩展对象
console.log('不可扩展对象')
Object.preventExtensions(person);
person.age = 18;
console.log(person);

// 密封对象
console.log('密封对象');
Object.seal(person);
person.name = 'xing';
console.log(person);