![[Pasted image 20230731151756.png]]
``` js
setTimeout(function() {
  console.log(1)
}, 0);

new Promise(function executor(resolve) {
  console.log(2);
  for( var i=0 ; i<10000 ; i++ ) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);

```

``` js
setTimeout(() => {
  new Promise(resolve => {
      resolve();
  }).then(() => {
      console.log('test');
  });
    console.log(4);
}); 

new Promise(resolve => {
  resolve();
  console.log(1)
}).then(() => {
  console.log(3);
  Promise.resolve().then(() => {
    console.log('before timeout');
}).then(() => {
  Promise.resolve().then(() => {
    console.log('also before timeout')
    })
  })
})
console.log(2);


console.log(1)
console.log(2);
console.log(3);
    console.log('before timeout');
        console.log('also before timeout')
            console.log(4);
      console.log('test');
            



micro 
 console.log('test');
 console.log(3);
   Promise.resolve().then(() => {
    console.log('before timeout');
}
    console.log('before timeout');
						
 
macro
	console.log(4);
```

``` js
setTimeout(function() {
    console.log(0);
});

new Promise((resolve, reject) => {
    console.log(1);
    resolve();
}).then(() => {
    console.log(2);
    new Promise((resolve, reject) => {    
        console.log(3);
        resolve();
    }).then(() => {
        console.log(4);
    }).then(() => {
        console.log(5);
    });
}).then(() => {
    console.log(6);
});

new Promise((resolve, reject) => {
    console.log(7);
    resolve();
}).then(() => {
    console.log(8);
});

```

``` js
console.log( "1" )
 
setTimeout(function() {
	console.log( "2" )
}, 0 )
 
setTimeout(function() {
	console.log( "3" )
}, 0 )
 
setTimeout(function() {
	console.log( "4" )
}, 0 )
 
console.log( "5" )
 
// 输出顺序 1，5, 2, 3, 4
```

``` js
setTimeout(function(){
    console.log('1')
});
 
new Promise(function(resolve){
    console.log('2')
    for(var i = 0; i < 10000; i++){
        i == 99 && resolve()
    }
}).then(function(){
    console.log('3')
});
 
console.log('4')
 
// 输出顺序 2，4, 3, 1
```

``` js
console.log('1')
 
async function async1() {
    await async2() 
    console.log('2')
}
 
async function async2() {
    console.log('3')
}

async1()
 
setTimeout(function() {
    console.log('4')
}, 0)
 
new Promise(resolve => {
    console.log('5')
    resolve()
})
.then(function() {
    console.log('6')
})
.then(function() {
    console.log('7')
})
 
console.log('8')
 
// 输出顺序 1，3，5，8，2，6，7，4

```

Wordpress

SSG  Static Site Generator

CMS 内容管理系统


jamstack
SSG      前台展示
headless CMS      后台管理

Wordpress



- 掌握HTML、CSS能够使用、、布局还原设计稿
- 掌握JavaScript，等知识、以及ES6、
- 掌握js的运行时、nodejs的使用，以及浏览器的一些原理
- 了解TypeScript、flow等等
- 掌握JS包管理工具npm、yarn、pnpm。了解单仓库多模块管理monorepo。
- 了解前端工程化，构建工具。例如linter工具、基于任务流的grunt、gulp、以及模块打包工具webpack、rollup、vite、esbuild
- 掌握Vue React等前端框架，知道MVVM、MVP、MVC这种架构思想
- 掌握前端状态管理机制，以及了解SPA和前端路由机制。
- 掌握Nuxt Nextjs等全栈框架
- 熟悉前后端交互原理，了解JS异步编程以及JSON格式、AJAX axios fetch

mini-axios
读了axios源码，自己实现的一个前端请求库？

create-vite
自己创建的前端项目脚手架？

cli        



一个项目发布到npm

monorepo