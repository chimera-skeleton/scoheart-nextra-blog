# 包管理的node_modules

## npm

## yarn

## pnpm



是否在项目根目录

获取package.json 项目是否初始化

获取锁文件 项目是否下载依赖 且是使用什么包管理工具

分析依赖

输出JSON 或 打开网页

``` json
{
	"react": {
		"loose": {
			"js-tokens"
		}
	}
}
```


给每一个依赖都做一个标记，寻找过的下次在遇到就不继续递归。


node cli.js


图 --》 json
图 --〉 web

https://registry.npmmirror.com/

@depanlz/cli    cli工具
@depanlz/core   处理依赖
@depanlz/plugin-web-server  可视化依赖
@depanlz/plugin-json-file   输出依赖json文件
@depanlz/docs    项目文档

简历
面试技巧
八股文