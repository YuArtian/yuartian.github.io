# OAuth2.0

OAuth 2.0 是一个授权框架
允许用户授权第三方应用访问他们存储在另外的服务提供者上的信息，而不需要将用户名和密码提供给第三方应用

## 授权码模式

1. 用户进入登录页面，选择一个第三方登录
2. 重定向到第三方应用的登录页面，url上一般会携带以下参数:
`response_type`：值为 `code` 表示请求一个授权码。
`client_id`：应用在授权服务器注册时获得的 ID。
`redirect_uri`：授权服务器授权后将用户重定向回的 URI。（可以是后端地址，对授权码再次加密跳回前端，也可以直接跳回前端）
`scope`：应用请求访问的权限范围。
`state`：一个防CSRF攻击的随机生成的值，用于维护状态在请求和回调之间。
3. 用户输入用户名和密码，登录第三方应用并同意授权
4. 第三方授权服务器，根据 `redirect_uri` 跳转到用户指定的重定向地址，并在 url 参数中携带授权码 (code)
5. （前端向后端发起请求）后端使用授权码，请求后端服务向授权服务器后端服务发出请求，以交换访问令牌（access_token）
这个请求包括以下参数:
`grant_type`：值为 `authorization_code` 表示使用授权码获取访问令牌。
`code`：之前步骤中获取的授权码。（这个授权码一般是一次性的）
`redirect_uri`：必须与最初用于获取授权码的 `redirect_uri` 相同。
`client_id` 和 `client_secret`：应用的客户端标识和密钥。

6. 授权服务器验证通过之后，返回 access_token，expires_in（过期时间），refresh_token 等信息

### access_token 过期时间如何设置

一般为 12 小时的过期时间，过期后可以使用 refresh_token 刷新 access_token

### OAuth2.0 的授权码模式为什么要用 code 获取 token?
>
> <https://www.authing.cn/blog/493>
code 的作用在于让 token 不经过用户的浏览器直接传递，保护了 token 的安全。因为 code 只能用一次，且有时间限制，超时会失效，所以即使被截也未必能用。
其次，要获得 token，除了需要 code，还需要 client id/client secret。所以即使 code 被盗，也是无法获得 token 的。

### access_token 是如何加密的

?
