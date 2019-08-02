module.exports = class Node{
    constructor(val,left = null, right = null){
        this.left = left;
        this.right = right;
        this.val = val;
    }
}