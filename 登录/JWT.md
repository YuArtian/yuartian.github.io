# JWT

## 什么是 JWT
>
> 了解 JWT Token 释义及使用
> <https://docs.authing.cn/v2/concepts/jwt-token.html>
> JSON Web Token 入门教程
> <https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html>
> 什么是JWT
> <https://www.jianshu.com/p/576dbf44b2ae>
JSON Web Token

JWT 的原理是，服务器认证以后，生成一个 JSON 对象，发回给用户，就像下面这样:

```json
{
  "姓名": "张三",
  "角色": "管理员",
  "到期时间": "2018年7月1日0点0分"
}
```

以后，用户与服务端通信的时候，都要发回这个 JSON 对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名（详见后文）。

服务器就不保存任何 session 数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。

## 数据结构

三部分组成，由 . 连接
`Header.Payload.Signature`

```js
base64UrlEncode(header).base64UrlEncode(payload).HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
```
