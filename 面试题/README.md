# 面试题

# 1

```
var test = (function(i){
  return function(){
    alert(i*=2)
  }
})(2)
```

打印出 字符串 '4'

注意，alert() 会调用 toString()

# 2

```js
function Foo(){
  getName = function(){
    console.log('1')
  }
  return this
}

Foo.getName = function () {
  console.log('2')
}
Foo.prototype.getName = function () {
  console.log('3')
}

var getName = function () {
  console.log('4')
}
function getName () {
  console.log('5')
}

Foo.getName()//2
getName()//4
Foo().getName()//1
getName()//1
new Foo.getName()//2
new Foo().getName()//3
new new Foo().getName()//3
```

注意 [运算符优先级](../javascript基础/表达式和运算符/README.md#运算符优先级) 的问题

# 3

```js
function A (){
  alert(1)
}
function Fn(){
  A=function(){
    alert(2)
  }
  return this
}
Fn.A = A
Fn.prototype = {
  A: () => {
    alert(3)
  }
}

A()//1
Fn.A()//1
Fn().A()//2
new Fn.A()//1
new Fn().A()//3
new new Fn().A()//Error A is not a constructor
```

注意箭头函数不能 new

# 4

```js
var x = 2
var y = {
  x: 3,
  z: (function(x){
    this.x*=x
    x+=2
    return function (n) {
      this.x*=n
      x+=3
      console.log('x',x)
    }
  })(x)
}
var m = y.z
m(4)
y.z(5)
console.log('x, y.x',x, y.x)
//x 7
//x 10
//x, y.x 16 15
```

# 5

```js
var x = 0
var y = 1
function fn () {
  x+=2
  fn = function (y) {
    console.log('y',y+(--x))
  }
  console.log('inner x,y',x,y)
}
fn(3)
fn(4)
console.log('outer x,y',x,y)

//inner 2 1
//y 5
//outer 1,1
```

# 6

```js
setTimeout(() => {
  console.log(1)
},20)
console.log(2)
setTimeout(() => {
  console.log(3)
},10)
console.log(4)
console.time('AA')
for(let i=0; i<90000000; i++){
  //do something
}
console.timeEnd('AA')
console.log(5)
setTimeout(() => {
  console.log(6)
},8)
console.log(7)
setTimeout(() => {
  console.log(8)
},15)
console.log(9)
//2
//4
//'aa'
//5
//7
//9
//3
//1
//6
//8
```

# 7

```
var a = ?
 if (a == 1 && a == 2 && a == 3) {
   console.log('验证通过')
 }
```

对象转换为数字

## Symbol

```js
var a = {
  [Symbol.toPrimitive]: (function () {
    let i = 0
    return function (){
      return ++i
    }
  })()
}
```

## valueOf

```js
var a = {
  valueOf: (function(){
    let i = 0
    return function(){
      return ++i
    }
  })()
}
```

## toString

### 1

```js
var a = {
  i: 0,
  toString: function(){
    return ++this.i
  }
}
```

### 2

```js
var a = [1,2,3]
a.toSting = a.shift
```



## Object.defineProperty

```js
let i = 0
Object.defineProperty(window, 'a',{
  get () {
    return ++i
  }
})
```

## Proxy

```js
var a = new Proxy({i: 0}, {
  get: function(target){
    return () => target.i += 1
  }
})
```











