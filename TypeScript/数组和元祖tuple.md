# 数组和元组区别

> TS-数组与元组的区别
>
> https://juejin.cn/post/7128320257319501838



元组是固定长度的，不能越界

元组需要明确类型

元组可以设置别名，但是  **无法通过别名进行访问** ，只有提示的作用

```ts
// tuple[0] 的别名是 age，tuple[1]的别名是 hasPartner
const tuple: [age: number, hasPartner: boolean] = [18, false]

// 无法通过别名访问到具体的值
console.log('tuple.age:', tuple['age'])
// tuple.age: undefined
```

元组被编译过后就是 数组