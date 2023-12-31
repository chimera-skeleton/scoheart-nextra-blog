# JavaScript的包管理器
## 包管理器用来干嘛
用来导入第三方库

### 浏览器环境怎么导入第三方库
通过script标签

将你要导入的第三方库的CDN的URL填入 src
``` html
<script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.min.js"></script>
```

### nodejs环境怎么导入第三方库
需要包管理器
- npm
- yarn
- pnpm

## nodejs 项目
### 初始化项目
- 需要一个项目配置文件 package.json
	- 可以手动创建
	- 可以自动创建
``` shell
npm init

npm init -y

yarn init
```

### 下载第三方库
``` shell
npm install vue

npm install vue@2.7.14

npm install vue@3
```