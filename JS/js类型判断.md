# 类型判断

## typeof

js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息

- 000：对象
- 010：浮点数
- 100：字符串
- 110：布尔
- 1：整数

but, 对于 undefined 和 null 来说，这两个值的信息存储是有点特殊的。
null：所有机器码均为0
undefined：用 −2^30 整数来表示
所以，typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为0，因此直接被当做了对象来看待。

## instanceof
>
> js--浅谈instanceof的底层实现原理、手动实现一个instanceof
> <https://juejin.cn/post/6844903613584654344>

instanceof主要作用就是判断一个实例是否属于某种类型
instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上

### 实现

```js
left instanceof right
left.__proto__ === right.prototype
```

```js
// 简单实现
function myInstanceof(left, right) {
  let proto = left.__proto__;
  let prototype = right.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = proto.__proto__;
  }
}
// 复杂实现

function myInstanceof(left, right) {
  const basicType = [
    "[object Undefined]",
    "[object Null]",
    "[object Number]",
    "[object String]",
    "[object Boolean]",
    "[object Symbol]",
    "[object BigInt]",
  ];
  const objType = Object.prototype.toString.call(left);
  const constructorType = Object.prototype.toString.call(right.prototype);

  if (basicType.includes(constructorType)) {
    throw TypeError("右侧的构造函数不是一个对象");
  }
  if (!Object.is(typeof right, "function")) {
    throw TypeError(`右侧的构造函数不是一个函数`);
  }
  if (!right.prototype) {
    throw TypeError(`右侧的构造函数没有原型对象，无法判断是否是实例对象`);
  }
  if (basicType.includes(objType)) {
    return false;
  }
  let objProto = Reflect.getPrototypeOf(left);
  while (objProto !== null) {
    if (Object.is(objProto, right.prototype)) {
      return true;
    }
    objProto = Reflect.getPrototypeOf(objProto);
  }
  return false;
}
```

### null instanceof null

会报错说 null 不是一个对象

```js
null instanceof null //  TypeError: Right-hand side of 'instanceof' is not an object
```

## Object.prototype.toString.call
