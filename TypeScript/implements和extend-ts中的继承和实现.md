# implements和extend

## implements
>
><https://ts.xcatliu.com/advanced/class-and-interfaces.html>

一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现

Class **implements** [Class | Interface], ...

## extends

Class extends Class

Interface extends [Class | Interface ], ...

- 类继承类
- 类 **不能** 继承接口，类只能 implements 实现接口
- 接口继承类
  只能继承类实例的方法和属性，构造函数和静态方法不能继承
- 接口继承接口

## 区别
>
> TypeScript中implements与extends的区别
> <https://juejin.cn/post/6914213447169376263>

extends​ 用于建立类与类之间的继承关系，而 implements​ 用于确保类实现了特定的接口。 extends​ 在类的层次结构中用于继承，而 implements 则用于实现接口的规范

- 接口不能实现接口或者类，所以实现只能用于类身上,即类可以实现接口或类
- 接口可以继承接口或类
- 类不可以继承接口，类只能继承类
- 可多继承多实现
  `class Car implements Alarm, Light {...}`
