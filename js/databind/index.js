// defineProperty方法
var obj ={};
Object.defineProperty(obj, 'name', {
    
    enumerable: true, // 可枚举
    configurable: true,
    // 数据描述符
    value: 'lixing',
    writable: true
});
console.log(obj);
