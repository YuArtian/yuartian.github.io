(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{516:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"rpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc"}},[t._v("#")]),t._v(" RPC")]),t._v(" "),s("h2",{attrs:{id:"什么是rpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是rpc"}},[t._v("#")]),t._v(" 什么是RPC")]),t._v(" "),s("blockquote",[s("p",[t._v("https://www.jianshu.com/p/7d6853140e13")]),t._v(" "),s("p",[t._v("https://www.zhihu.com/question/25536695")])]),t._v(" "),s("p",[t._v("RPC（Remote Procedure Call）远程过程调用，简单的理解是一个节点请求另一个节点提供的服务")]),t._v(" "),s("p",[t._v("RPC是指远程过程调用，也就是说两台服务器A，B，一个应用部署在A服务器上，想要调用B服务器上应用提供的函数/方法，由于不在一个内存空间，不能直接调用，需要通过网络来表达调用的语义和传达调用的数据")]),t._v(" "),s("h4",{attrs:{id:"与本地调用函数的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与本地调用函数的区别"}},[t._v("#")]),t._v(" 与本地调用函数的区别")]),t._v(" "),s("p",[t._v("本地过程调用：如果需要将本地student对象的age+1，可以实现一个addAge()方法，将student对象传入，对年龄进行更新之后返回即可，本地方法调用的函数体通过函数指针来指定。")]),t._v(" "),s("p",[t._v("远程过程调用：上述操作的过程中，如果addAge()这个方法在服务端，执行函数的函数体在远程机器上，如何告诉机器需要调用这个方法呢？")]),t._v(" "),s("h4",{attrs:{id:"过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[t._v("#")]),t._v(" 过程")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("首先客户端需要告诉服务器，需要调用的函数，这里函数和进程ID存在一个映射，客户端远程调用时，需要查一下函数，找到对应的ID，然后执行函数的代码。")])]),t._v(" "),s("li",[s("p",[t._v("客户端需要把本地参数传给远程函数，本地调用的过程中，直接压栈即可，但是在远程调用过程中不再同一个内存里，无法直接传递函数的参数，因此需要客户端把参数转换成字节流，传给服务端，然后服务端将字节流转换成自身能读取的格式，是一个序列化和反序列化的过程。")])]),t._v(" "),s("li",[s("p",[t._v("数据准备好了之后，如何进行传输？网络传输层需要把调用的ID和序列化后的参数传给服务端，然后把计算好的结果序列化传给客户端，因此TCP层即可完成上述过程，gRPC中采用的是HTTP2协议。")])])]),t._v(" "),s("h4",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Client端 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Student student = Call(ServerAddr, addAge, student)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 将这个调用映射为Call ID。\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 将Call ID，student（"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("params")]),t._v("）序列化，以二进制形式打包\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 把"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("中得到的数据包发送给ServerAddr，这需要使用网络传输层\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 等待服务器返回结果\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 如果服务器调用成功，那么就将结果反序列化，并赋给student，年龄更新\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Server端")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 在本地维护一个Call ID到函数指针的映射call_id_map，可以用Map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" callIdMap\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 等待客户端请求\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 得到一个请求后，将其数据包反序列化，得到Call ID\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 通过在callIdMap中查找，得到相应的函数指针\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 将student（"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("params")]),t._v("）反序列化后，在本地调用"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("函数，得到结果\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 将student结果序列化后通过网络返回给Client\n")])])]),s("h4",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("p",[t._v("在微服务的设计中，一个服务A如果访问另一个Module下的服务B，可以采用HTTP REST传输数据，并在两个服务之间进行序列化和反序列化操作，服务B把执行结果返回过来")]),t._v(" "),s("p",[t._v("由于HTTP在应用层中完成，整个通信的代价较高，远程过程调用中直接基于TCP进行远程调用，数据传输在传输层TCP层完成，更适合对效率要求比较高的场景，RPC主要依赖于客户端和服务端之间建立Socket链接进行，底层实现比REST更复杂")])])}),[],!1,null,null,null);a.default=e.exports}}]);