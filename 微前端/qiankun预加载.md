

# 预加载逻辑

prefetch
监听 single-spa:first-mount 自定义事件（single-spa的自定义事件）

1. 判断 慢网或者没网 情况下不进行 预加载
   !navigator.onLine || isSlowNetwork

2. 利用 requestIdlecallback 去加载资源
   利用 import-html-entry 库，拉去 html，获取js css 等资源清单
   实际上利用的是 fetch









