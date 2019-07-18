module.exports = class HashRouter{
    constructor(){
        this.hashRouters = {};
        window.addEventListener('hashchange',this.load().bind(this),0);
    }
    register(hash, cb){
        this.hashRouters[hash] = cb;
    }
    registerHome(cb){
        this.hashRouters[index] = cb;
    }
    load(){
        let hash = window.location.hash.slice(1);
        let handel;
        if(!hash){
            // 首页
            handel = this.hashRouters[index];
        }else{
            handel = this.hashRouters[hash];
        }
        handel();
    }
}