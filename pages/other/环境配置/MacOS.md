## 命令行启动代理

``` zsh

alias proxysetting="networksetup -setwebproxy Wi-Fi 127.0.0.1 7890; networksetup -setsecurewebproxy Wi-Fi 127.0.0.1 7890"

alias sysproxy="networksetup -setwebproxystate Wi-Fi on && networksetup -setsecurewebproxystate Wi-Fi on"

alias unsysproxy="networksetup -setwebproxystate Wi-Fi off && networksetup -setsecurewebproxystate Wi-Fi off"
```

## 修改时区
``` zsh
sudo systemsetup -settimezone Asia/Shanghai
```