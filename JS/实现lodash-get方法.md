# 实现 lodash get 方法

> <https://github.com/metroluffy/fe-learning/issues/16#issuecomment-810816445>

```js
function _get (source, path, defaultValue = undefined) {
  // translate array case to dot case, then split witth .
  // a[0].b -> a.0.b -> ['a', '0', 'b']
  const keyList = path.replace(/\[(\d+)\]/g, '.$1').split('.')
 
  const result = keyList.reduce((obj, key) => {
      return Object(obj)[key]; // null undefined get attribute will throwError, Object() can return a object 
  }, source)
  return result === undefined ? defaultValue : result;
}
```
