const isFunction =  fn => typeof fn === 'function';
const Pending = "Pending";
const Fulfilled = "Fulfilled";
const Rejected = "Rejected";

class Promise{
    constructor(handle){
        if(!isFunction(handle)){
            throw new Error('error');
        }

        // 状态
        this.status = Pending;
        // 执行成功时返回的值
        this.value = undefined;
        // 执行失败时返回的值
        this.reason = undefined;

        // 执行成功时的回调
        this.onFulfilledCallbacks = [];
        // 执行失败时的回调
        this.onRejectedCallbacks = [];

        let resolve = (data) => {
            if(this.status === Pending){
                this.value = data;
                this.status = Fulfilled;
                this.onFulfilledCallbacks.forEach( fn => fn());
            }
        };
        let reject = (reason) => {
            if(this.status === Pending){
                this.reason = reason;
                this.status = Rejected;
                this.onRejectedCallbacks.forEach( fn => fn());
            }
        };
        try{
            handle(resolve, reject);
        } catch(err){
            reject(err);
        }
    }
    then(onResolved, onRejected){
        if(this.status === Fulfilled){
            onResolved(this.value);
        }
        if(this.status === Rejected){
            onRejected(this.reason);
        }
        if(this.status === Pending){
            this.onFulfilledCallbacks.push(() => {
                onResolved(this.value);
            });
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            });
        }
    }
}
let promise = new Promise((resolve, rejected) => {
    $.ajax({
        url:'',
        data: '',
        type: '',
        success: (res) => {
            resolve(res);
        },
        err: (err) => {
            rejected(err);
        }
    });
});
promise.then((res) =>{
    console.log(res);
},(err) => {
    console.log(err);
});