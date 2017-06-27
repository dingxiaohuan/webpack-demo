//告诉webpack从另一个chunk加载a.js
let load = require('bundle-loader!./a.js');
load((file) =>{
   document.open();
   document.write(`<h1>${file}</h1>`)
});