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
console.log(obj.b);