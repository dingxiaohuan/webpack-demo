//告诉webpack 分割代码块 并按需加载
require.ensure(['./a'], (require)=>{
    let content = require('./a');
    document.open();
    document.write(`<h1>${content}</h1>`);
    document.close();
});