# Hermes

Hermes 是一个 Javascript 引擎，由 Facebook 开发，目前 Facebook 正在使用 Hermes 作为 React Native 的 Javascript 引擎。

## install

安装必要的依赖包

```shell
#centos/redhat
yum install cmake git ninja-build libicu-devel python zip readline-devel

#ubuntu/debian
apt install cmake git ninja-build libicu-dev python zip readline-devel

#archlinux
pacman -S cmake git ninja icu python zip readline

#macos
brew install cmake git ninja
```

## 克隆项目

```shell
git clone https://github.com/facebook/hermes.git
```

## 编译构建

- -S 指定源目录
- -B 指定构建目录
- -G 指定构建工具
- -DCMAKE_BUILD_TYPE=Release 指定构建类型

### 调试版本

```shell
cmake -S hermes -B build -G Ninja
cmake --build ./build
```

### 生产版本

```shell
cmake -S hermes -B build_release -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build ./build_release
```

## 运行

```shell
# 开启REPL
./build/bin/hermes

# 运行文件
./build/bin/hermes test.js
```
