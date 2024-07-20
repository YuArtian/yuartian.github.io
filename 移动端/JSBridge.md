# JSBridge

## JS 调用 Native

### 注入API

通过 WebView 提供的接口，向 JavaScript 的 window 中注入对象，js 直接执行相应的 Native 代码逻辑

#### IOS

UIWebView 的 JSContext 注入

- 支持同步返回
- 支持直接传递对象，无需通过字符串序列化
- 要注意注入时机
- 只支持UIWebView

WKWebView 的 messageHandler 注入

通过 `webkit.messageHandlers.xxx.postMessage()` 调用

#### Android
>
>安卓有版本区别。4.2 之前用的是 addJavascriptInterface, 之后用 @JavascriptInterface
> 原理机制几乎和UIWebView的JSContext注入一样，而且不需要考虑注入时机

### 其他方式 (不推荐)

1. 拦截 Url Schema
   通过 location.href / 构建Iframe，填充 src 属性 / 构建 a 标签，填充 href 属性，实现假跳转
   假跳转的请求归根结底是一种模拟跳转，跳转这件事情上 webview 会有限制
   当JS连续发送多条跳转的时候，webview会直接过滤掉后发的跳转请求 (可以采用延时发送消息 或者 消息队列+定时清空队列 的方式解决)
   另外，url 的长度有限制，过长会导致后面的信息丢失
   由于参数只能带在 url 上，所以参数需要做一次 encode
2. 弹窗拦截
   通过 alert / confirm / prompt 等弹窗，native 拦截

#### 对比

| 通信方案           |     版本支持      | 丢消息 | 支持同步返回 | 传递对象 | 注入原生对象 | 数据长度限制 |
| ------------------ | :---------------: | -----: | -----------: | -------: | -----------: | -----------: |
| 假跳转             |   全版本全平台    | 会丢失 |       不支持 |   不支持 |       不支持 |       有限制 |
| 弹窗拦截           |  UIWebView不支持  | 不丢失 |         支持 |   不支持 |       不支持 |       无限制 |
| JSContext注入      | 只有UIWebView支持 | 不丢失 |         支持 |     支持 |         支持 |       无限制 |
| 安卓interface注入  |    安卓全版本     | 不丢失 |         支持 |     支持 |         支持 |       无限制 |
| MessageHandler注入 | 只有WKWebView支持 | 不丢失 |       不支持 |   不支持 |       不支持 |       无限制 |

## Native 调用 JS

H5 将 JS 方法暴露在 Window 上，Native 通过调用 webview 提供的 evaluateJavaScript 方法，使 webview 执行注入的 js 代码。以 javascript: 开头的字符串

### Android

通过 WebView 的 loadUrl 或 evaluateJavaScript 方法

- loadUrl

  ```java
  mWebview.loadUrl("javascript: func()");
  // 优点：1.兼容性好
  // 缺点：1.会刷新页面 2.无法获取 js 方法执行结果
  ```

- evaluateJavaScript

  ```java
  mWebview.evaluateJavascript("javascript: func()", new ValueCallback<String>() {
      @Override
      public void onReceiveValue(String value) {
          return;
      }
  });
  // 优点：1.性能好 2.可获取 js 执行后的返回值
  // 缺点：1.仅在安卓 4.4 以上可用
  ```

### iOS

通过 UIWebView 的 stringByEvaluatingJavaScriptFromString 或 WKWebview 的 evaluateJavaScript 方法

## 工具和框架

cordova
