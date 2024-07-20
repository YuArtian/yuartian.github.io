# JS中addEventListener和on监听事件的区别

- 使用 on 属性只能添加一个事件监听器，而使用 addEventListener 方法可以添加多个事件监听器
- addEventListener 方法可以更好的控制事件的冒泡和捕获
- on 属性是早期浏览器实现事件监听的方式，在一些较老的浏览器版本中可能无法正常工作；而 addEventListener 方法是标准的事件监听方式，在大多数现代浏览器中都可以正常使用
- addEventListener 有对应的 removeEventListener 方法，可以移除事件监听器；而 on 属性没有对应的移除事件监听器的方法
- addEventListener 方法的第三个参数可以指定事件监听器的调用时机，true 表示在捕获阶段调用，false 表示在冒泡阶段调用；而 on 属性只能在冒泡阶段调用事件监听器
