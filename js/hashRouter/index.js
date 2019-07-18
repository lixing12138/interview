const HashRouter = require('./HashRouter');
let hashRouter = new HashRouter();

hashRouter.registerHome(() => console.log("首页"));
hashRouter.register('/page1', () => console.log("page1"));
hashRouter.register('/page2', () => console.log("page2"));
hashRouter.register('/page3', () => console.log("page3"));

hashRouter.load();