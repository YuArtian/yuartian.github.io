# XSS
>
> XSS 跨站脚本攻击
> <https://tsejx.github.io/javascript-guidebook/computer-networks/web-security/xss#xss-%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB>

>
> <https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC>

XSS（Cross Site Scripting）跨站脚本攻击，是一种代码注入攻击。攻击者在目标网站上注入恶意脚本，当用户访问目标网站时，恶意脚本会被执行，从而达到攻击目的。

## 如何防止XSS攻击

防止XSS（跨站脚本攻击）的关键是对用户输入进行正确的过滤和转义。下面是一些常用的防止XSS攻击的方法：

1. 输入验证：对用户输入的数据进行验证，只接受符合预期格式的数据。可以使用正则表达式或其他验证方法来验证输入数据的合法性。

2. 输出转义：在将用户输入的数据显示到页面上时，将特殊字符进行转义，例如将<转义为&lt;，将>转义为&gt;等。这样可以防止恶意脚本在页面中执行。

3. 使用安全的API：不要直接拼接用户输入的数据到HTML、JavaScript或CSS代码中，而是使用安全的API，例如使用innerText代替innerHTML，或使用setAttribute来设置属性值。

4. 使用HTTP头部的Content Security Policy（CSP）：CSP可以指定哪些资源可以被加载和执行，从而防止恶意脚本的注入。通过设置CSP策略，可以限制页面上的脚本只能从特定的域名加载，或者只能使用特定的资源。

5. 使用HttpOnly标志设置Cookie：将Cookie的HttpOnly标志设置为true，可以防止通过JavaScript访问Cookie，从而减少XSS攻击的可能性。

6. 限制权限：将用户的权限限制在最低必要级别，确保用户只能访问其需要的功能和资源，从而减少恶意脚本的影响范围。

以上方法只是一些常用的防止XSS攻击的方法，但并不能完全杜绝XSS攻击。因此，在开发过程中，还需要保持对新的漏洞和攻击方式的关注，并及时更新和改进防护措施。

## CSP
>
> <https://juejin.cn/post/6844903780228530183>
