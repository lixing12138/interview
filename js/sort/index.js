let testCase = [6,1,2,7,9,3,4,5,10,8];
// 升序
// bubbleSort，两两交换
function bubbleSort(arr){
    for(let i = arr.length - 1; i > 0; i--){
        for(let j = 0; j < arr.length - 1; j ++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
// selectedSort，选择最小的交换
function selectedSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let tmp = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[tmp]){
                tmp = j;
            }
        }
        tmp===i ? '' : [arr[i], arr[tmp]] = [arr[tmp], arr[i]];
    }
    return arr;
}
// insertSort，插入排序
function insertSort(arr){
    for(let i = 1; i < arr.length; i++){
        let tmp = arr[i];
        let beforeIndex = i -1;
        for(let j = beforeIndex; j >= 0; j --){
            if(arr[j] > tmp){
                arr[beforeIndex + 1] = arr[j];
                --beforeIndex;
            } else {
                break;
            }
        }
        arr[beforeIndex + 1] = tmp;
    }
    return arr;
}
// quickSort，快排
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        if(arr[i] > pivot){
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(testCase));