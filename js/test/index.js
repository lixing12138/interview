function total(res, ...rest){
    if(rest.length === 0){
        return res;
    }
    return total(handle(res , rest.shift()), ...rest);
}
function handle(arg1, arg2){
    let res = [];
    arg1.forEach(element => {
        arg2.forEach((item) => {
            res.push(element + item);
        })
    });
    return res;
}

console.log(total([''],['S','M','L','XL'],['R','G','B','P']));