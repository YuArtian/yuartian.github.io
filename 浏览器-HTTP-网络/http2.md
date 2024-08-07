# http2
>
> <https://xiaolincoding.com/network/2_http/http_interview.html#https-%E8%A7%A3%E5%86%B3%E4%BA%86-http-%E7%9A%84%E5%93%AA%E4%BA%9B%E9%97%AE%E9%A2%98>

## 加密

HTTPS 采用的是对称加密和非对称加密结合的「混合加密」方式：

在通信建立前采用非对称加密的方式交换「会话秘钥」，后续就不再使用非对称加密。
在通信过程中全部使用对称加密的「会话秘钥」的方式加密明文数据。
采用「混合加密」的方式的原因：

对称加密只使用一个密钥，运算速度快，密钥必须保密，无法做到安全的密钥交换。
非对称加密使用两个密钥：公钥和私钥，公钥可以任意分发而私钥保密，解决了密钥交换问题但速度慢。
