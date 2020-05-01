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



