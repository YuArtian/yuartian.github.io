# 实现new

```js
function _new (constructor, ...args) {
  let target = {}
  Object.setPrototypeOf(target, constructor.prototype)
  const result = constructor.apply(target, args)
  return result instanceof Object ? result : target
}
```

