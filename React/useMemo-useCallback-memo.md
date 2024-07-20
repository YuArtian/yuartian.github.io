# useMemo-useCallback-memo

## useMemo
>
> useMemo
><https://zh-hans.react.dev/reference/react/useMemo>

`useMemo(() => calculation, [dependencies])`

在随后的每一次渲染中，React 将会通过 Object.is 比较所有依赖项在前后两次渲染是否相同
否则，React 将会重新执行 calculation 函数并且返回一个新的值

换言之，useMemo 在多次重新渲染中缓存了 calculation 函数计算的结果直到依赖项的值发生变化

### 失效情况

依赖数组中有在组件主体中创建的对象，由于每次渲染时都会创建一个新的对象，所以依赖数组中的对象总是不相等，导致 useMemo 每次都会重新计算

## useCallback
>
> <https://zh-hans.react.dev/reference/react/useCallback#usecallback>
>
useMemo 可以完全代替 useCallback，在 useMemo 中返回一个函数就可以了
useCallback(fn, deps) 等价于 useMemo(() => fn, deps)
useCallback 的好处在于更加语义化，不需要编写额外的嵌套函数

## memo
>
> <https://zh-hans.react.dev/reference/react/memo>

## 使用

使用 memo 包裹一个函数组件，使其只在 props 发生变化时重新渲染

### 结合 useMemo 使用

由于 memo 也是使用 Object.is 浅比较，如果 props 是一个对象，那么每次父组件重新渲染时，子组件都会重新渲染，因为每次父组件重新渲染时，都会创建一个新的对象
这时应该配合 useMemo 使用

记忆化只对 props 有效，如果组件内部的状态发生变化，或者引入的 context 变化，memo 也会重新渲染

```jsx
function Page() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  const person = useMemo(
    () => ({ name, age }),
    [name, age]
  );

  return <Profile person={person} />;
}

const Profile = memo(function Profile({ person }) {
  // ...
});
```

### 对象或者数组作为 props 传递
