# Redux
>
> <https://cn.redux.js.org/introduction/getting-started#%E5%9F%BA%E7%A1%80%E7%A4%BA%E4%BE%8B>

应用的整体全局状态以对象树的方式存放于单个 store
唯一改变状态树（state tree）的方法是创建 action，一个描述发生了什么的对象，并将其 dispatch 给 store
要指定状态树如何响应 action 来进行更新，你可以编写纯 reducer 函数，这些函数根据旧 state 和 action 来计算新 state
