
# PNPM
## 操作系统的文件管理
- 文件目录
### 操作系统的文件共享
- 索引结点
- 符号链接
### 软连接 符号链接 
通过路径名来获取文件主的文件
- 每次访问都需要读盘时间
node_modules下面的包模块都是软连接
指向
.pnpm/@scope+包名+版本/node_modules/webpack

### 硬连接 索引节点 
.pnpm/@scope+包名+版本/node_modules/webpack 里都是硬链接
指向
/Users/scoheart/Library/pnpm/store/v3

### 依赖获取三个阶段
- resolving
- fetching
- writing all dependencies to `node_modules`.

### 依赖
Creating a non-flat node_modules directory
# NPM