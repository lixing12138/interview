function SuperType(name){
    this.name = name;
}
SuperType.prototype.getName = function(){
    return this.name;
}
function SubType(name, age){
    SuperType.call(this,name);
    this.age = age;
}

SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;
SubType.prototype.getAge = function(){
    return this.age;
}
let children = new SubType('lixing', 22);
console.log(children.getName());
console.log(children.getAge());