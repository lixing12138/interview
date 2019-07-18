function bfs(root){
    let queue = [root];
    while(queue.length !== 0){
        let tmp = queue.shift();
        console.log(tmp);
        if(tmp.children.length !== 0){
            Array.from(tmp.children).forEach((item) => {queue.push(item)});
        }
    }
}