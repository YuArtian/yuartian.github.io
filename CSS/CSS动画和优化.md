# CSS动画属性优化
>
> [CSS]CSS动画与transform属性
> <https://juejin.cn/post/7051148335708651528>

CSS 动画方式：

- transition
   > <https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition>
- animation
- transform
   其实这是由浏览器的实现决定的。无论是transition还是animation，都只是浏览器帮助我们实现css属性的动态改变，并根据屏幕帧率实现更自然的动画效果。但本质上css的属性改变还是会触发页面的【重绘】【重排】，因此他们的渲染成本是比较高的。
   然而transform的待遇则更高级，由于transform可能涉及3D的动画效果，浏览器会为transform的元素单独生成一个图层，并使用GPU进程单独渲染。因此但触发transform效果的时候，是不会影响主图层的，因此不会触发重绘和重排，效率更高。
   同时，由于transform的内容是GPU进程渲染的，所以即使浏览器渲染进程阻塞了，我们会发现transform的动画仍然会正常运行

## 序列帧动画
>
> <https://juejin.cn/post/6986832597061992462>
