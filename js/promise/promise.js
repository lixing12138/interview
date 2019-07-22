class Promise{
    constructor(fn){

    }
    then(onFulfilled, onRejected){

    }
}

let res = new Promise(function(resolve, reject){
    $.get('/',function(result){
        resolve(result);
        return;
    });
    reject('err');
});
res.then(function(json){
    return json;
});