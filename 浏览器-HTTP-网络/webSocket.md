# webSocket
>
> WebSocket
> <https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket>
>
## webSocket协议升级
>
> 升级到 websocket 协议的连接
> <https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism#%E5%8D%87%E7%BA%A7%E5%88%B0_websocket_%E5%8D%8F%E8%AE%AE%E7%9A%84%E8%BF%9E%E6%8E%A5>

WebSocket API 会自动处理协议升级

- 1.客户端发起协议升级请求
- 2.服务端响应协议升级请求
- 3.协议升级完成，双方可以进行通信

```text
GET ws://localhost:3000/ws/chat HTTP/1.1
Host: localhost

Upgrade: websocket
Connection: Upgrade

Origin: http://localhost:3000
Sec-WebSocket-Key: client-random-string
Sec-WebSocket-Version: 13
```

该请求和普通的HTTP请求有几点不同：

GET请求的地址不是类似/path/，而是以ws://开头的地址；
请求头Upgrade: websocket和Connection: Upgrade表示这个连接将要被转换为WebSocket连接；
Sec-WebSocket-Key是用于标识这个连接，并非用于加密数据；
Sec-WebSocket-Version指定了WebSocket的协议版本。

随后，服务器如果接受该请求，就会返回如下响应：

```text
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: server-random-string
```

该响应代码101表示本次连接的HTTP协议即将被更改，更改后的协议就是Upgrade: websocket指定的WebSocket协议。
