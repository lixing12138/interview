function deepClone(source){
    if(!(source instanceof Object)){
        return source;
    }
    if(source instanceof Date){
        return new Date(source);
    }

    if(source instanceof Array){
        let tmp =[];
        for(let key in source){
            tmp[key] = deepClone(source[key]);
        }
        return tmp;
    }
    let res = {};
    
    for(let key in source){
        res[key] = deepClone(source[key]);
    }
    return res;
}
let obj = {
    name: 'lixing',
    age: 22,
    hobbies: ['1', '2', { play: 'ball'}]
};

function deep2(source, target= {}){
    for(let key in source){
        if(Array.isArray(source[key])){
            target[key] = [];
            deep2(source[key], target[key]);
        }else if(typeof source[key] === 'object'){
            target[key] = {};
            deep2(source[key], target[key]);
        }else{
            target[key] = source[key];
        }
    }
    return target;
}
console.log(deep2(obj));
