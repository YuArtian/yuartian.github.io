# 浏览器输入URL之后的过程

<https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work>

1. DNS 查询

   > DNS 查询原理详解
   > <https://www.ruanyifeng.com/blog/2022/08/dns-query.html>

   通过逐级查询，将输入的域名换成 IP 地址
   域名对应的 IP 地址，都保存在 DNS 服务器
   我们输入域名，浏览器就会在后台，自动向 DNS 服务器发出请求，获取对应的 IP 地址。这就是 DNS 查询

2. TCP 握手
   一旦获取到服务器 IP 地址，浏览器就会通过 TCP “三次握手” 与服务器建立连接
   TCP 的“三次握手”技术经常被称为“SYN-SYN-ACK”——更确切的说是 SYN、SYN-ACK、ACK
   因为通过 TCP 首先发送了三个消息进行协商，然后在两台电脑之间开始一个 TCP 会话
   是的，这意味着终端与每台服务器之间还要来回发送三条消息，而请求尚未发出

3. TLS 协商

4. 服务器响应

  TCP 慢启动 / 14KB 规则
  拥塞控制

5. 浏览器解析
1. 构建 DOM 树
    第一步是处理 HTML 标记并构造 DOM 树
    当解析器发现非阻塞资源，例如一张图片，浏览器会请求这些资源并且继续解析
    当遇到一个 CSS 文件时，解析也可以继续进行，但是对于 `<script>` 标签（特别是没有 async 或者 defer 属性的）
    会阻塞渲染并停止 HTML 的解析

### 预加载扫描器

    浏览器构建 DOM 树时，这个过程占用了主线程
    当这种情况发生时，预加载扫描仪将解析可用的内容并请求高优先级资源
    如 CSS、JavaScript 和 web 字体
    当主线程在解析 HTML 和 CSS 时，预加载扫描器将找到脚本和图像，并开始下载它们。为了确保脚本不会阻塞进程，当 JavaScript 解析和执行顺序不重要时，可以添加 async 属性或 defer 属性

#### 等待获取CSS不会阻塞HTML的解析或者下载，但是它确实会阻塞 JavaScript，因为JavaScript经常用于查询元素的CSS属性

2. 构建 CSSOM 树
    第二步是处理 CSS 并构建 CSSOM 树
    构建 CSSOM 非常非常快，并且在当前的开发工具中没有以独特的颜色显示。相反，开发人员工具中的“重新计算样式”显示解析 CSS、构建 CSSOM 树和递归计算计算样式所需的总时间。在 web 性能优化方面，它是可轻易实现的，因为创建 CSSOM 的总时间通常小于一次 DNS 查询所需的时间
3. JavaScript 编译

  <.....>
  css的加载 会阻塞DOM的渲染
  css的加载 不会阻塞DOM的解析
  CSS的加载 阻塞JS的运行，不阻塞JS的加载

  JS的加载和执行 会阻塞DOM的解析
  JS的加载和执行 会阻塞DOM的渲染

  CSS的加载与JS的加载之间是否有影响？不考虑，浏览器自身会偷看并预先下载
  遇到script标签会触发渲染，以便获得最新的样式给JS代码

6. 渲染（渲染步骤包括 样式、布局、绘制，在某些情况下还包括 合成）

  > 在某些情况下，可以将内容提升到它们自己的层并进行合成
  > 通过在 GPU 而不是 CPU 上绘制屏幕的一部分来提高性能，从而释放主线程

  1. Style 样式

    计算样式，CSSOM 和 DOM 合并生成 Render 树
    Render树不包括 `<head>` 和它的子节点 以及 任何具有 display: none 样式的 结点
    根据 CSS级联 计算每个节点的最终样式

  2. Layout 布局（回流 Reflow）

    > <https://segmentfault.com/a/1190000017329980>
    
    布局是确定 Render树 中所有节点的 宽度、高度 和 位置，以及确定页面上每个对象的大小和位置的过程
    #### 什么是回流
    第一次 确定节点的大小和位置 叫做 布局，随后对节点大小和位置的重新计算称为回流
    #### 回流的代价远大于重绘
    回流必定会引发 重绘和重新合成
    #### 如何避免回流
    现代的浏览器都是很聪明的，由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程
    当你获取布局信息的操作的时候，会强制队列刷新
      1. 避免触发同步布局事件
        以下属性，应当避免，使用可以先将 值存起来，避免实时获取
        offsetTop、offsetLeft、offsetWidth、offsetHeight
        scrollTop、scrollLeft、scrollWidth、scrollHeight
        clientTop、clientLeft、clientWidth、clientHeight
        getComputedStyle()
        getBoundingClientRect
      2. 对于复杂动画效果,使用绝对定位让其脱离文档流
      3. css3硬件加速（GPU加速）合成层
        常见的触发硬件加速的css属性：
        transform
        opacity
        filters
        Will-change
    
        - 使用css3硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘
        - 对于动画的其它属性，比如background-color这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能
        - 如果你为太多元素使用css3硬件加速，会导致内存占用较大，会有性能问题
        - 在GPU渲染字体会导致抗锯齿无效。这是因为GPU和CPU的算法不同。因此如果你不在动画结束的时候关闭硬件加速，会产生字体模糊


    当页面继续加载资产时，可能会发生回流（回想一下我们迟到的示例图像），回流会触发重新绘制和重新组合
    如果我们定义了图像的大小，就不需要重新绘制，只需要重新绘制需要重新绘制的层，并在必要时进行合成
    但我们没有包括图像大小！从服务器获取图像后，渲染过程将返回到布局步骤并从那里重新开始。

  3. Paint 绘制（重绘 Repaint）

    最后一步是将各个节点绘制到屏幕上
    将元素的每个可视部分绘制到屏幕上，包括文本、颜色、边框、阴影和替换的元素（如按钮和图像）

  4. Compositing 合成

    当文档的各个部分以不同的层绘制，相互重叠时，必须进行合成以确保它们以正确的顺序绘制到屏幕上，并正确显示内容
    > <https://juejin.cn/post/7047006440623439880#heading-0>
    > 榜单页面在最新版本 IOS 手机上切换 tab 的时候，左上角的倒计时出现闪烁
    
    #### 一些常见的提升为合成层的属性：
      1. 设置 transform: translateZ(0)
        注意它必须是 translateZ，因为它使用 GPU 来计算 perspective distortion（透视失真）
        perspective 在 3D 设计中是一个重要的属性，有兴趣的同学可以看这份资料了解一下
        如果你使用 translateX 或 translateY，元素将会被绘制在普通文档流中
    
      2. backface-visibility: hidden 指定当元素背面朝向观察者时是否可见
    
      3. will-change 该属性告诉浏览器该元素会有哪些变化，这样浏览器可以提前做好对应的优化准备工作
        当该属性的值为 opacity、transform、top、left、bottom、right 时
    
      4. video、canvas、iframe 等元素
    #### 层压缩与层爆炸
    
    #### 优化总结
      1. 使用 transform 和 opacity 来实现动画
      2. 谨慎使用 will-change
        避免过度消耗内存
      3. 减小合成层绘制区域
    
    为了确保平滑滚动和动画，占据主线程的所有内容，包括计算样式，以及回流和绘制
    ### 动画性能优化
    https://juejin.cn/post/7054055447052943396#heading-20
    https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/?ref=heydesigner
    
    offset client区别
    https://juejin.cn/post/7019174770918817828
