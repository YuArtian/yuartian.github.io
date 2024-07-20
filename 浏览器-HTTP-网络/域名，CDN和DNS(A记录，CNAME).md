# 域名，CDN和DNS

> DNS 查询原理详解
> https://www.ruanyifeng.com/blog/2022/08/dns-query.html



## 域名 和 DNS 解析

域名对应的 IP 地址，都保存在 DNS 服务器。我们输入域名后，由浏览器向 DNS 服务器发出请求，通过逐级查询，最后返回对应的 IP 地址。这就是 DNS 查询。

域名是一个树状结构，最顶层的域名是根域名（root），然后是顶级域名（top-level domain，简写 TLD），再是一级域名、二级域名、三级域名。

- 根域名：所有域名的起点都是根域名，它写作一个点 `.`，放在域名的结尾
- 根域名的下一级是顶级域名：如 `.com` 等，顶级域名由国际域名管理机构控制

```
a.b.com.
[a](二级域名) [.b](一级域名) [.com](顶级域名TLD) [.](根域名root)
```



DNS 查询是 **逐级查询** 的，只有上级 DNS ，才知道下一级域名的 IP 地址，每一级域名都有自己的 DNS 服务器，存放下级域名的 IP 地址

**一个 IP 可能对应 多个域名，一个域名 也可能对应 多个 IP地址**

DNS 服务器类型：本地 DNS 服务器，根域名服务器，TLD 顶级域名服务器，权威域名服务器

## CDN

> https://www.cnblogs.com/WindrunnerMax/p/13606903.html
>
> https://www.jianshu.com/p/1dae6e1680ff
>
> https://www.huaweicloud.com/zhishi/cdn001.html
>
> 阿里云CDN文档
>
> https://www.alibabacloud.com/help/zh/cdn/use-cases/accelerate-the-retrieval-of-resources-from-an-oss-bucket-in-the-alibaba-cloud-cdn-console?spm=a2c63.p38356.0.0.2d4814e5FzL3yW

cdn（指内容分发网络）

1. 用户输入访问的域名，首先向 本地DNS服务器 查询域名的 ip 地址（有缓存直接返回）

2. 本地DNS 向 根DNS 查询域名的TLD服务器(这里假设缓存过期)

3. 根DNS将域名授权dns记录回应给本地DNS

4. 本地DNS得到域名的 TLD DNS记录后，继续向 TLD DNS 查询域名的ip地址

5. TLD DNS 查询域名记录后(一般是CNAME)，回应给 本地DNS

6. 本地DNS 得到 CNAME 后，向智能调度DNS查询域名的ip地址

7. 智能调度DNS 根据一定的算法和策略(比如静态拓扑，容量等)，将最适合的CDN节点ip地址回应给 本地DNS

8. 本地 DNS 将得到的域名ip地址，回应给 用户端

   

## 相关

#### A记录

> 什么是 DNS A记录？
> https://www.cloudflare.com/zh-cn/learning/dns/dns-records/dns-a-record/

“A”代表“地址”，这是最基础的 [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) 记录类型：它表示给定[域](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/)的 [IP 地址](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/)。比如，拉取 cloudflare.com 的 DNS 记录，A 记录当前返回的 IP 地址为：104.17.210.9。

A 记录只保存 IPv4 地址。如果一个网站拥有 IPv6 地址，它将改用[“AAAA”记录](https://www.cloudflare.com/learning/dns/dns-records/dns-aaaa-record/)。

一条A记录对应一个 IP 地址，但是一个域名可以对应多条记录，为了支持 DNS 负载均衡

TTL：指存活时间，缓存失效的时间，A记录默认是 14400 s

> DNS 解析一个地址，会返回多个 IP 吗？
> https://blog.csdn.net/techforward/article/details/132278857
>
> 不会

#### CNAME

> cname记录是什么？他存在的意义是什么？
>
> https://www.zhihu.com/question/22916306

A记录就是把一个域名解析到一个IP地址，而CNAME记录就是把域名解析到另外一个域名

其功能是差不多，CNAME 可以将几个主机名指向一个别名，其实跟指向IP地址是一样的，因为这个别名也要做一个A记录的

使用 CNAME 记录可以很方便地变更IP地址，如果一台服务器有100个网站，他们都做了别名，该台服务器变更IP时，只需要变更别名的A记录就可以了

使用场景：

1. 你在使用cdn服务的时候，服务商提供给你的就是一个cname地址，如果服务商给你一个ip，假如哪天服务商想把ip地址换一个，很多人域名上对应的ip地址就要跟着变化，要让所有人都一起改完，完全没有办法做到的事情，换成cname就没事了，你用你的cdn，他改他的ip地址。唯一的坏处就是，第一次DNS解析域名的时候会多解析一次。总结来看，好处远大于坏处
2. CDN 网络往往有非常多的边际(edge)节点，当你购买了 CDN 服务又想用自己的域名的时候，直接把你的域名 CNAME 到 CDN 的域名就好了
   然后当用户连接的时候往往能够连接到他们最近的节点，CDN 服务之所以要用CNAME，最主要的原因是要根据用户所在位置选择并返回最优节点 IP
   如果不用CNAME，A记录只能实现域名解析到IP，因此就无法实现CDN的加速效果

