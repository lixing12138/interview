// 实现eventloop
class Event{
    constructor(){
        this.events = {}
    }
    on(event, cb){
        let cbs = this.events[event] || [];
        this.events[event] = cbs.concat(cb);
        return this;
    }
    emit(event,...rest){
        this.events[event].forEach((item) => {
            item.apply(this,rest);
        });
        return this;
    }
    removeListener(event, cb){
        let index = this.events[event].indexOf(cb);
        this.events[event].splice(index,1);
        
    }
}
// 测试
let ee = new Event();
function a() {
    console.log('a')
}
function b(res) {
    console.log(res)
}
function c() {
    console.log('c')
}
function d(...a) {
    console.log('d',...a)
}
ee.on('TEST1', a).on('TEST2', b).on('TEST2',d);

ee.emit('TEST1');
console.log('....')
ee.emit('TEST2','rrrrrr');
// In test2
// In test2 again
console.log('....')
ee.emit('TEST2');


setTimeout(function(){
    console.log(2);
},2000);setTimeout(function(){
    console.log(1);
},1000);
console.log(3);