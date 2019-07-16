class Stack{
    constructor(){
        this.items = [];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length === 0;
    }
    push(item){
        this.items[this.items.length] = item;
    }
    pop(){
        this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    clear(){
        this.items = [];
    }
}

var stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push(5); // undefined
stack.push(8); // undefined
console.log(stack.peek()); // 8
stack.push(11); // undefined
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false
stack.push(15); // undefined
stack.pop(); // 15
console.log(stack.size()); // 3
stack.clear(); // undefined
console.log(stack.size()); // 0