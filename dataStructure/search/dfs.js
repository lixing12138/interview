const dfs = (root) => {
    if(root.children.length === 0) return;
    Array.from(root.children).forEach((item) => { dfs(item); });
}