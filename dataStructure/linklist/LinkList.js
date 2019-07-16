const Node = require('./Node');
class LinkList{
    constructor(val){
        this.head = new Node(val);
    }
    append(element){
        let cur = this.head;
        while(cur.next !== null){
            cur = cur.next;
        }
        cur.next = new Node(element);
    }
    insert(position, element){
        let size = this.size();
        if(potition > size){
            return false;
        }
        let cur = this.head;
        let next = null;
        while(cur.next !== null){
            if( --position <= 0 ){
                next = cur.next;
                break;
            }
            cur = cur.next;
        }
        let node = new Node(element);
        cur.next = node;
        node.next = next;
    }
    removeAt(position){

    }
    indexOf(element){

    }
    remove(element){

    }
    isEmpty(){
        return this.head.next === null;
    }
    size(){
        let size = 1;
        let cur = this.head;
        while(cur.next !== null){
            cur = cur.next; 
            size++;
        }
        return size;
    }
    getHead(){
        return this.head;
    }
    print(){

    }
    reverse(){

    }
}