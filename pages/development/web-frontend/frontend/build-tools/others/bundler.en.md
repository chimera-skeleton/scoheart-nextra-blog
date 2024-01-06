# 众多bundler的使用

## NO.1 parcel

### installation
``` shell
yarn add parcel -D

# or 

npm install parcel -D
```

### build
创建js模块
``` shell
mkdir src && cd src
touch main.js module1.js module2.js
```

配置package.json文件，添加入口，以及打包后的目录
``` json
{
    "main": "dist/bundler.js", // 打包后的文件
    "source": "src/main.js" // 入口文件
}
```

开始打包构建
``` shell
yarn parcel build

# or 

npx parcel build
```

默认支持入口文件的模块化规范有
- ESM
- CJS

打包后的文件可以支持的模块化方案有
- ESM
- CJS

如何配置 -->  配置package.json文件
``` json
{
    "module": "dist/module.js"
}
```

``` json
{
    "type": "module" 
// 添加了type如果没有module字段会选择main字段的打包目录，如果有module就不会选择main，而是直接选择module
}
```

## N0.2 rollup
### installation
``` shell
yarn add rollup -D

# or

npm install rollup -D
```

### build
创建js模块
``` shell
mkdir src && cd src
touch main.js module1.js module2.js
```


默认支持入口文件的模块化规范有
- ESM
- CJS

打包后的文件可以支持的模块化方案有
- IIFE
- CJS
- AMD
- UMD
- Syste
- ESM

开始打包构建
#### 打包commonjs
下载插件
``` shell
npm install @rollup/plugin-commonjs --save-dev
```

添加配置文件
``` shell
touch rollup.config.js
```

``` js
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
    input: "src/main.js",
    output: {
        file: "dist/bundler.js"
    },
    plugins: [commonjs()]
}
```

打包
``` shell
yarn rollup -c

# or 

npx rollup -c
```

#### 打包ESM
``` shell
yarn rollup src/main.js -o dist/bundler.js

# or 

npx rollup src/main.js -o dist/bundler.js
```


## NO.3 vite
### installation
``` shell
yarn add vite -D

# or

npm install vite -D
```

### build（vite lib mode）
创建js模块
``` shell
mkdir src && cd src
touch main.js module1.js module2.js
```

添加配置文件
``` js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.js",
      formats: ["es"]
    }
  },
})
```

打包，默认就会打包到dist目录下，且文件名为package.json中的name
``` shell 
yarn vite build

# or

npx vite build
```

## NO.4 webpack
### installation
``` shell
yarn add webpack webpack-cli -D

# or

npm install webpack webpack-cli -D
```

### build
创建js模块
``` shell
mkdir src && cd src
touch index.js module1.js module2.js
```

打包,入口默认src/index.js，出口目录为dist/main.js
``` shell
yarn webbpack --mode none

# or 

npx webpack --mode none
```


之后补充
- esbuild
- snowpack
- turbopack
- broswserify
- gulp
- grunt
































