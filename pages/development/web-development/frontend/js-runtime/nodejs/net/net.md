# net 模块

使用 net 模块，可以创建 TCP 或 UDP 服务器和客户端。

## 创建 TCP 服务器

```js
const net = require('net');

net
  .createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
      console.log(data.toString());
    });

    socket.on('end', () => {
      console.log('Client disconnected');
    });
  })
  .listen(8081);
```

在 macOS 上，可以打开终端，利用 `nc` 命令，连接到服务器。

```shell
# nc <host> <port>
 ~/ nc localhost 8081
hello im client
i want to send you some messages
ok, thanks
bye bye
^C
```
