# React 自定义 Hook 实现
>
> 一文搞定常用的自定义 React Hooks #26
> <https://github.com/fengshi123/blog/issues/26>

## useDebounce

```typescript
import { useCallback, useRef } from 'react';

const useDebounce = (fn: Function, delay = 100) => {
  const time1 = useRef<any>();

  return useCallback((...args) => {
    if (time1.current) {
      clearTimeout(time1.current);
    }
    time1.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }, [delay]);
};

export default useDebounce;
```

> 3个自定义防抖Hooks的实现原理
> <https://juejin.cn/post/7131704053121155079#heading-2>
