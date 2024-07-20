# interface和type区别
>
> <https://juejin.cn/post/6844903749501059085#heading-2>

用interface描述**数据结构**，用type描述**类型关系**

type 可以声明基本类型别名，联合类型，元组等类型
type 语句中还可以使用 typeof 获取实例的 类型进行赋值

继承：
都可以继承但是语法不同, interface 通过 extends 而 type 通过 &(交叉类型)

合并：
interface 可以定义多个相同的名字，会自动合并，type 不行
