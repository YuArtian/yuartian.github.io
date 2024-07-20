# TypeScript中enum枚举类型的实现原理
>
> <https://www.typescriptlang.org/docs/handbook/enums.html>
> <https://segmentfault.com/q/1010000037529753>

typescript的enum其实是定义了一个双向的映射关系
通过枚举值获取到枚举名称, 也可以通过枚举名称获取到枚举值
编译结果是一个对象, 通过对象的属性名获取到属性值, 通过属性值获取到属性名

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 1
console.log(Direction[1]); // Up
```

编译后的JavaScript代码大致如下：

```javascript
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 1
console.log(Direction[1]); // Up
```
