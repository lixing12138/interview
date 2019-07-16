class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(item){
        return this.items.push(item);
    }
    dequeue(){
        console.log('dequeue');
        return this.items.shift();
    }
    front(){
        return this.items[0] || null;
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    print(){
        this.items.forEach((item) => console.log(item));
    }
    clear(){
        this.items = [];
    }
}
// 创建Queue实例
var queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enqueue('John'); // undefined
queue.enqueue('Jack'); // undefined
queue.enqueue('Camila'); // undefined
queue.print(); // "John,Jack,Camila"
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false
queue.dequeue(); // "John"
queue.dequeue(); // "Jack"
queue.print(); // "Camila"
queue.clear(); // undefined
console.log(queue.size()); // 0