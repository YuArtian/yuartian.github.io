# Symbol

## 目的

ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入`Symbol`的原因

## 用法

Symbol 值通过 `Symbol`函数生成

### toString

Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分

```text
let s = Symbol();
let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```

如果 Symbol 的参数是一个对象，就会调用该对象的`toString`方法，将其转为字符串，然后才生成一个 Symbol 值

```text
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
sym // Symbol(abc)
```

Symbol 值不能与其他类型的值进行运算，会报错

### Symbol 不能 new

注意，`Symbol`函数前不能使用`new`命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型

### Symbol.prototype.description <a id="Symbol-prototype-description"></a>

创建 Symbol 的时候，可以添加一个描述

读取这个描述可以显示的调用 toString 方法

也可以比较快捷的使用 ES2019 的 description 属性

```text
const sym = Symbol('foo');

sym.description // "foo"
```

### 作为属性名的 Symbol

Symbol 作为属性名时，不能使用 点 运算符

## 遍历

Symbol 作为属性名，遍历对象的时候，该属性不会出现在`for...in`、`for...of`循环中

也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回

### Object.getOwnPropertySymbol

可以返回所有 Symbol 属性的值

### Reflect.ownKeys

可以返回所有类型的键名

### 重用

Symbol.for\(\) 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局

```text
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
```













