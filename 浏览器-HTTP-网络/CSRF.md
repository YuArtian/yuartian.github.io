# CSRF

# CSRF 跨站请求伪造与防范详解
<https://zhuanlan.zhihu.com/p/22521378>
<https://segmentfault.com/a/1190000024490213>
<https://tech.meituan.com/2018/10/11/fe-security-csrf.html>

## 什么是 CSRF

跨站请求伪造
利用后台有规律的接口 和 用户已经获取的注册凭证
绕过后台的用户验证，冒充用户对被攻击的网站执行某项操作的目的

## 方法方式

一般会先用一些诱导性强的文字或者图片等，诱导用户点击进入 第三方网站，这个网站中，有向被攻击网站发送的 跨站请求
而且请求一般是自动发送的，进入就会触发。或者可以在 其他网站上 比如 论坛上，发布一些外链图片等

1. GET类型
   一般是利用 img src 属性，自动发送
2. POST类型
   创建自动提交的表单
3. 链接类型
   a标签 诱骗点击

## 特点

1. 攻击是在第三方网站发起的，被攻击的网站无法阻止攻击的发生
2. 攻击是利用用户的登录凭证，冒充用户操作，而不是直接盗取数据
3. 攻击并不能获取凭证，只是冒用
4. 攻击方式很多，难以追踪

## 防止

### 同源检测

利用请求头 Origin Header（域名） 和 Referer Header（来源地址） (主流的浏览器不能修改这两个 Header)

### CSRF Token

1. 将CSRF Token 输出到页面中，服务器的 Token 一般存在 Session 中，而且不能使用 cookie 传给客户端
2. 页面提交的请求携带这个Token
3. 服务器验证Token是否正确

优点：防护到位
缺点：
此方法的实现比较复杂，需要给每一个页面都写入Token（前端无法使用纯静态页面），每一个Form及Ajax请求都携带这个Token，后端对每一个接口都进行校验，并保证页面Token及请求Token一致。这就使得这个防护策略不能在通用的拦截上统一拦截处理，而需要每一个页面和接口都添加对应的输出和校验。这种方法工作量巨大，且有可能遗漏

### 验证码和密码其实也可以起到CSRF Token的作用，而且更安全

### 双重Cookie验证 + cookie SameSite

1. 在用户访问网站页面时，向请求域名注入一个 Cookie，内容为随机字符串（例如 csrfcookie=v8g9e4ksfhw ）
   这个 cookie 是 SameSite=Lax 的 以及 Secure（https），注意不要设置 HttpOnly(js无法读取操作cookie)

2. 在前端向后端发起请求时，取出Cookie，并添加到请求头中（比如：x-cstoken=v8g9e4ksfhw）

3. 后端接口验证 Cookie 中的字段与 Header参数 中的字段是否一致，不一致则拒绝

优点：
无需使用Session，适用面更广，易于实施
Token储存于客户端中，不会给服务器带来压力
相对于Token，实施成本更低，可以在前后端统一拦截校验，而不需要一个个接口和页面添加

缺点：
Cookie中增加了额外的字段
如果有其他漏洞（例如XSS），攻击者可以注入Cookie，那么该防御方式失效
为了确保 Cookie 传输安全，采用这种防御方式的最好确保用整站 HTTPS 的方式，如果还没切 HTTPS 的使用这种方式也会有风险
