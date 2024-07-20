# useEffect

> 使用 Effect Hook
> <https://zh-hans.legacy.reactjs.org/docs/hooks-effect.html>
> useEffect(setup, dependencies?)
> <https://zh-hans.react.dev/reference/react/useEffect#useeffect>
>
## 执行时机

React 会在组件渲染后调用 `useEffect`，在第一次渲染和每次更新后都会调用。
可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合

与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。大多数情况下，effect 不需要同步地执行。在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同

- `useEffect(..., [])` 相当于 `componentDidMount`
   如果第二个参数是一个空数组，就表明副效应参数没有任何依赖项, useEffect 只会执行一次

## 清除 Effect

useEffect 可以返回一个清除函数
清除函数执行时机：

1. 在组件卸载时执行
2. 在执行当前 effect 之前对上一个 effect 进行清除

# useLayoutEffect
