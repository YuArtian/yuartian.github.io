(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{625:function(t,e,n){"use strict";n.r(e);var s=n(45),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"发布订阅模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式"}},[t._v("#")]),t._v(" 发布订阅模式")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://github.com/YuArtian/yuartian.github.io/blob/master/.gitbook/assets/%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F.png?raw=true",alt:"发布订阅模式"}})]),t._v(" "),n("h2",{attrs:{id:"区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),n("p",[t._v("发布订阅模式 是基于 观察者模式的，区别在于 发布订阅模式 多了事件处理中心的概念")]),t._v(" "),n("p",[t._v("在观察者模式中，观察者需要直接订阅目标事件；在目标发出内容改变的事件后，直接接收事件并作出响应")]),t._v(" "),n("p",[t._v("在发布订阅模式中，发布者和订阅者之间多了一个发布通道")]),t._v(" "),n("p",[t._v("一方面从发布者接收事件，另一方面向订阅者发布事件；订阅者需要从事件通道订阅事件")]),t._v(" "),n("p",[t._v("这样发布者和订阅者是松散耦合的")]),t._v(" "),n("p",[t._v("以此避免发布者和订阅者之间产生依赖关系")]),t._v(" "),n("h2",{attrs:{id:"优点与缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优点与缺点"}},[t._v("#")]),t._v(" 优点与缺点")]),t._v(" "),n("p",[t._v("发布-订阅模式的优点非常明显，一为时间上解耦，二为对象之间的解耦。它的应用非常广泛，既可以用在异步编程中，也可以帮组我们完成更松耦合的代码编写。一些更高级的设计模式底层也是基于观察者模式。MVC、MVP、MVVM 这些架构模式内部都有观察者模式的参与")]),t._v(" "),n("p",[t._v("当然这种模式也有它固有的缺点：")]),t._v(" "),n("ol",[n("li",[t._v("创建订阅者本身需要一定时间和内存，而且当你订阅一个消息后，也许此消息最后都未发生，但这个订阅者始终存在于内存中")]),t._v(" "),n("li",[t._v("弱化对象之间的必要联系，会导致程序难以追踪和维护。要追踪bug 并不容易")])]),t._v(" "),n("p",[t._v("当事件类型越来越多时，难以维护，需要考虑事件命名的规范，也要防范数据流混乱")]),t._v(" "),n("h2",{attrs:{id:"应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),n("h3",{attrs:{id:"dom事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom事件"}},[t._v("#")]),t._v(" DOM事件")]),t._v(" "),n("p",[t._v("DOM 节点上面绑定事件函数，就是一个简单的发布订阅过程")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 在 body 上添加了两个监听者\n// 订阅者 1\ndocument.body.addEventListener('click', function(){\n    alert(1)\n}, false)\n\n// 订阅者 2\ndocument.body.addEventListener('click', function(){\n    alert(2)\n}, false)\n\n// 发布者\ndocument.body.dispatchEvent('click')\n// 或者\n// document.body.click()\n")])])]),n("h3",{attrs:{id:"自定义事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义事件"}},[t._v("#")]),t._v(" 自定义事件")]),t._v(" "),n("p",[t._v("除了DOM事件，我们还可以自定义事件，这种依靠自定义事件完成的发布订阅，更通用")]),t._v(" "),n("ol",[n("li",[t._v("发布者")]),t._v(" "),n("li",[t._v("缓存的订阅者列表")]),t._v(" "),n("li",[t._v("发布消息，遍历缓存列表的订阅者，调用订阅者的更新方法")])]),t._v(" "),n("h3",{attrs:{id:"mvvm-框架下的-发布-订阅系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-框架下的-发布-订阅系统"}},[t._v("#")]),t._v(" MVVM 框架下的 发布-订阅系统")]),t._v(" "),n("p",[t._v("Vue 的双向绑定依靠 "),n("strong",[t._v("数据劫持")]),t._v(" 和 "),n("strong",[t._v("发布-订阅")]),t._v(" 实现")]),t._v(" "),n("p",[t._v("具体请看 "),n("RouterLink",{attrs:{to:"/知识库/设计模式与前端架构/MVVM.html"}},[t._v("MVVM")])],1),t._v(" "),n("h2",{attrs:{id:"通用实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通用实现"}},[t._v("#")]),t._v(" 通用实现")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class PubSub {\n    constructor() {\n        // 维护事件及订阅行为\n        this.events = {}\n    }\n    //注册事件订阅行为\n    subscribe(type, cb) {\n        if (!this.events[type]) {\n            this.events[type] = []\n        }\n        this.events[type].push(cb)\n    }\n    //发布事件\n    publish(type, ...args) {\n        if (this.events[type]) {\n            this.events[type].forEach(cb => {\n                cb(...args)\n            })\n        }\n    }\n    //移除某个事件的一个订阅行为\n    unsubscribe(type, cb) {\n        if (this.events[type]) {\n            const targetIndex = this.events[type].findIndex(item => item === cb)\n            if (targetIndex !== -1) {\n                this.events[type].splice(targetIndex, 1)\n            }\n            if (this.events[type].length === 0) {\n                delete this.events[type]\n            }\n        }\n    }\n    //移除某个事件的所有订阅行为\n    unsubscribeAll(type) {\n        if (this.events[type]) {\n            delete this.events[type]\n        }\n    }\n}\n")])])]),n("h2",{attrs:{id:"eventemitter的简单实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eventemitter的简单实现"}},[t._v("#")]),t._v(" EventEmitter的简单实现")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class EventEmitter {\n    constructor() {\n        // 维护事件及监听者\n        this.listeners = {}\n    }\n    //注册事件监听者\n    on(type, cb) {\n        if (!this.listeners[type]) {\n            this.listeners[type] = []\n        }\n        this.listeners[type].push(cb)\n    }\n    //发布事件\n    emit(type, ...args) {\n        if (this.listeners[type]) {\n            this.listeners[type].forEach(cb => {\n                cb(...args)\n            })\n        }\n    }\n    //移除某个事件的一个监听者\n    off(type, cb) {\n        if (this.listeners[type]) {\n            const targetIndex = this.listeners[type].findIndex(item => item === cb)\n            if (targetIndex !== -1) {\n                this.listeners[type].splice(targetIndex, 1)\n            }\n            if (this.listeners[type].length === 0) {\n                delete this.listeners[type]\n            }\n        }\n    }\n    //移除某个事件的所有监听者\n    offAll(type) {\n        if (this.listeners[type]) {\n            delete this.listeners[type]\n        }\n    }\n}\n// 创建事件管理器实例\nconst ee = new EventEmitter()\n// 注册一个chifan事件监听者\nee.on('chifan', function() { console.log('吃饭了，我们走！') })\n// 发布事件chifan\nee.emit('chifan')\n// 也可以emit传递参数\nee.on('chifan', function(address, food) { console.log(`吃饭了，我们去${address}吃${food}！`) })\nee.emit('chifan', '三食堂', '铁板饭') // 此时会打印两条信息，因为前面注册了两个chifan事件的监听者\n\n// 测试移除事件监听\nconst toBeRemovedListener = function() { console.log('我是一个可以被移除的监听者') }\nee.on('testoff', toBeRemovedListener)\nee.emit('testoff')\nee.off('testoff', toBeRemovedListener)\nee.emit('testoff') // 此时事件监听已经被移除，不会再有console.log打印出来了\n\n// 测试移除chifan的所有事件监听\nee.offAll('chifan')\nconsole.log(ee) // 此时可以看到ee.listeners已经变成空对象了，再emit发送chifan事件也不会有反应了\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);