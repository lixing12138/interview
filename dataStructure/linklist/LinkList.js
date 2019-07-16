const Node = require('./Node');
class LinkList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    append(element){
        let node = new Node(element);
        if(this.head === null){
            this.head = node;
        }else{
           let cur = this.head;
            while(cur.next !== null){
                cur = cur.next;
            } 
            cur.next = node;

        }
        this.length ++;
    }
    insert(position, element){
        if(position > this.length || position < 0){
            return false;
        }else{
            let cur = this.head;
            let next = null; 
            let node = new Node(element);
            while(cur.next !== null){
                if( --position <= 0 ){
                    next = cur.next;
                    break;
                }
                cur = cur.next;
            }
            cur.next = node;
            node.next = next;
            this.length++;
        }
    }
    removeAt(position){
        if(position > this.length || position < 0 || this.length === 0){
            return false;
        }else{
            let cur = this.head;
            if(position === 0){
                this.head = cur.next;
            }else{
                let pre = null;
                while(position > 0){
                    pre = cur;
                    cur = cur.next;
                    position--;
                }  
                pre.next = cur.next;
            }
            this.length--;
            
        }
    }
    indexOf(element){
        let cur = this.head;
        let index = 0;
        while(cur !== null){
            if(cur.val === element){
                break;
            }
            index++;
            cur = cur.next;
        }
        return index;
    }
    remove(element){
        return this.removeAt(this.indexOf(element));
    }
    isEmpty(){
        return this.head === null;
    }
    size(){
        return this.length;
    }
    getHead(){
        return this.head;
    }
    print(){

    }
    list(){
        return this.head;
    }
    reverse(){

    }
}
var singlyLinked = new LinkList();
console.log(singlyLinked.removeAt(0)); // false
console.log(singlyLinked.isEmpty()); // true
singlyLinked.append('Tom');
singlyLinked.append('Peter');
singlyLinked.append('Paul');
singlyLinked.print(); // "Tom,Peter,Paul"
singlyLinked.insert(0, 'Susan');
singlyLinked.print(); // "Susan,Tom,Peter,Paul"
singlyLinked.insert(1, 'Jack');
singlyLinked.print(); // "Susan,Jack,Tom,Peter,Paul"
console.log(singlyLinked.getHead()); // "Susan"
console.log(singlyLinked.isEmpty()); // false
console.log(singlyLinked.indexOf('Peter')); // 3
console.log(singlyLinked.indexOf('Cris')); // -1
singlyLinked.remove('Tom');
singlyLinked.removeAt(2);
singlyLinked.print(); // "Susan,Jack,Paul"
singlyLinked.list();
