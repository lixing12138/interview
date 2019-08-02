const Node = require('./Node');
class BT{
    constructor(){
        this.root = null;
    }
    insert(val){
        let node = new Node(val);
        if(this.root === null){
            this.root = node;
        } else {
            let tmp = this.root;
             
            while(true){
                if(val > tmp.val){
                    if(tmp.right === null){
                        tmp.right = node;
                        break;
                    }
                    tmp = tmp.right;
                }else{
                    if(tmp.left === null){
                        tmp.left = node;
                        break;
                    }
                    tmp = tmp.left;
                }
            }
        }
    }  
    // 前序
    traversal(){
        this.pre_traversal(this.root);
    }
    pre_traversal(node){
        if(node){
            this.pre_traversal(node.left);    
            console.log(node.val);
            this.pre_traversal(node.right);
        }
    }
}

var bst = new BT();
bst.insert(10);
bst.insert(8);
bst.insert(2);
bst.insert(7);
bst.insert(5);
bst.traversal();
