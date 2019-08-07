// 防抖
function debounce(fn, wait){
    let timeout;
    return function(...rest){
        let context = this;
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(function(){
            fn.apply(context, rest);
        }, wait);
    }
}
// 节流1
function throttle(fn, wait){
    let pre = Date.now();
    return function(...rest){
        const context = this;
        const now = Date.now()
        if(now - pre >= wait){
            // 执行函数
            fn.apply(context, rest);
            // 更新pre
            pre = Date.now();
        }
    }
}
// 节流2
function throttle2(fn, wait){
    let timeout = null;
    return function(...rest){
        let context = this;
        if(!timeout){
            timeout = setTimeout(function(){
                fn.apply(context, rest);
                timeout = null;
            }, wait);
        }
    }
}