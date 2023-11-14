# React Natvie 开发环境配置

下面将 React Native 统一简称为 RN

[官方文档地址](https://reactnative.dev/docs/environment-setup)

## 保证你的电脑可以科学上网

### 科学上网的协议

- shadowsocks
- shadowsocksR
- vmess
- trojan
- ……

### 科学上网的工具

工具又可以分为两类：内核 和 GUI 客户端

简单理解就是：内核是提供科学上网功能的，同时也提供了 CLI 命令行工具，GUI 客户端是图形化界面，提供图形化的操作方式。同时，他们都是提供了不同的操作系统版本的。

- shadowsocks
- shadownsocksR
- v2ray
  - WindowsOS：v2rayN
  - MacOS：v2rayX
  - LinuxOS：v2ray-core
  - Android：v2rayNG
- clash
  - WindowsOS：Clash for Windows
  - MacOS：ClashX
  - LinuxOS：Clash
- …

Windows 用户推荐使用 v2rayN

### 浏览器启动代理

打开系统代理，一般代理工具会提供图形化界面，点击启动代理即可，也可以通过下面的方式手动，或者敲命令的方式启动代理。

#### MacOS

WiFi 中，点击详情，点击代理设置

#### Windows

网络和 Internet……

### 命令行（终端）启用网络代理

#### MacOS

```shell
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
```

#### Windows

```shell
set https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
```

## 下载 nodejs（Windows、MacOS 系统都要配置）

确保 nodejs 的版本是 16 或者以上

## 下载 watchman（MacOS 系统推荐配置）

watchman 是 Facebook 提供的用来监视文件的变化的工具，安装他提升 RN 的开发效率。

## 下载 JDK —— Java Development Kit（Windows、MacOS 系统都要配置）

推荐使用的 JDK 版本是 JDK11
下载 JDK 之后，将 JDK 的环境变量配置好，JAVA_HOME、PATH、CLASSPATH（不必须，但是后面开发 Java Web 项目时候 Tomcat 需要， 所以推荐 JDK 下载完后，尽量所有的东西都配置好）

## 下载安卓 Android Studio（Windows、MacOS 系统都要配置）

下面的东西都需要下载

- Android SDK
- Android SDK Platform
- Android Virtual Device

构建 RN 的项目，需要特定版本的 SDK，所以需要下载对应的版本。

- Android 13 (Tiramisu)

SDK 平台

- Android SDK Platform 33
- Intel x86 Atom_64 System Image 或 Google APIs Intel x86 Atom System Image 或（对于 Apple M1 Silicon） Google APIs ARM 64 v8a System Image

还需要配置一些环境变量才能正确的构建 RN 项目

- ANDROID_HOME

Unix-like 系统举例

```shell
export ANDROID_HOME=$HOME/Library/Android/sdk # 你的Android SDK安装路径
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### windows sdk 位置

```shell
%LOCALAPPDATA%\Android\Sdk
```

## 准备安卓设备

- 通过 USB 连接安卓设备
- 通过 AVD Manager 创建模拟器

## 初始化项目

通过 javascript 的包管理工具（npm、yarn、pnpm……）下载 RN 的脚手架

```shell
# 全局安装脚手架，后面就可以直接通过react-native init命令来初始化项目
npm install react-native -g
react-natvie init yourAppName

# npx等命令安装脚手架且执行脚手架init命令初始化项目
npm exec react-native init yourAppName
npm x react-native init yourAppName
npx react-native init yourAppName

# 其他命令
react-native doctor #可以检查环境是否配置正确
react-native info #日志信息
```

## 运行项目

### 通过 Metro 打包

首先，需要启动 Metro，它是 RN 附带的 JavaScript 打包工具。 Metro 接受一个入口文件和各种选项，并返回一个包含所有代码及其依赖项的 JavaScript 文件。（即打包后的 JS 文件）

打开一个终端，在终端中输入下面的命令来启动 Metro 打包

```shell
npm start
```

### 启动项目

#### 第一种方法，通过 npm 启动项目

打开一个新的终端，在终端中输入下面的命令启动项目

```shell
npm run android
```

#### 第二种方法，通过 Android Studio 启动项目

直接在 Android Studio 中打开项目，点击运行按钮即可
