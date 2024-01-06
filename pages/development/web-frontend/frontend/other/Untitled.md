实现一个CLI工具

支持命令test-cli create xxx
结果打印下面这句话

    ‘创建了xxx项目’

支持参数 --version 0.0.1
结果会加上项目的版本
    ‘创建了xxx项目’
    ‘项目的版本是0.0.1’

支持参数 --desc ‘这是一个好的项目’
结果会加上项目的描述
    ‘创建了xxx项目’
    ‘项目的版本是0.0.1’
    ‘这是一个好的项目’


要求：把--version --desc的打印功能做成函数，且作为单独的js模块
分别对应两个模块
- printVersion模块
- printDesc模块

并且使用两种模块化方案写出两套代码，项目结构如下
- 你的姓名（请使用英文）
    - commonjs （CJS模块化的代码）
    - esmodule （ESM模块化的代码）


要求：
    使用TypeScript编写代码 或者 flow

工程化要求一：
    将项目最终打包成一个js文件

使用工具（任选其一）
- rollup
- vite
- webpack
- parcel
……

打包后的模块化规范（三个都要打包出来，一个规范一个js文件）
- umd
- cjs
- esm

工程化要求二：
添加一些关于代码质量和合作规范的工具

1. 代码质量检查/代码格式规范
- eslint

- prettier

- lint-staged

2. 代码提交审核
- git hooks

- husky
- commitlint

工程化要求三：
    使用monorepo代码仓库


工程化要求四：
    测试工具
    - jest
    - vitest

2/3


搭建全栈

node cli
网页。   浏览器


server 




以rollup 举例

module.exports = {
    input: "src/index.js",
    output: [{
            file: "dist/bundler.js"
        }]
}







