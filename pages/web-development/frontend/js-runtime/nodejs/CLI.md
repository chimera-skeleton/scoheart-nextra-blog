# Command Line Interface
命令行界面、命令行接口、命令行工具
## package.json文件添加一个bin字段
``` json
{
	"bin": {
		"jsc": "index.js"
	}
}
```

## index.js
给这个要转变成二进制可执行文件的js文件 添加一个头`#!/usr/bin/env node`

``` javascript
#!/usr/bin/env node

console.log("hello")
```

那么在下载这个npm包的时候，就会自动转化这个文件为一个可执行文件
并且文件被放置在 `node_modules/.bin/`

## 执行这个二进制可执行文件的方式
``` shell
node_modules/.bin/webpack

npm exec webpack

npm x webpack

npx webpack
```

``` json
{
	"scripts": {
		"dev": "webpack"
	}
}

npm run dev
```
