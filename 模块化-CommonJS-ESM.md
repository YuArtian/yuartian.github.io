
# 模块化-CommonJS-ESM

#

## CommonJS 规范
>
> <https://www.51cto.com/article/711910.html>
> <https://javascript.ruanyifeng.com/nodejs/module.html#toc2>
> <https://github.com/LinDaiDai/niubility-coding-js/blob/master/JavaScript/ES6+/%E4%B8%80%E7%AF%87%E4%B8%8D%E6%98%AF%E6%A0%87%E9%A2%98%E5%85%9A%E7%9A%84CommonJS%E5%92%8CES6%E6%A8%A1%E5%9D%97%E8%A7%84%E8%8C%83%E8%AE%B2%E8%A7%A3.md>

每个文件都是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类都是私有的，对其他文件不可见。
导入模块：require('模块名')。模块名可以是相对路径，也可以是绝对路径，可以省略后缀名。
导出模块：

- module.exports = value。可以是任意值，可以是函数、对象、数组等等。
- module.exports.xxx = value。导出多个值。
- exports.xxx = value

不能使用 exports = value 或者任何其他赋值语句 因为虽然两者指向同一块内存，但最后被导出的是module.exports，所以不能直接赋值给exports。

exports 实际上只是对 module.exports 的引用

CommonJS模块的特点：
所有代码都运行在模块作用域，不会污染全局作用域。
模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
模块加载的顺序，按照其在代码中出现的顺序。

### module对象

Node内部提供一个Module构建函数。所有模块都是Module的实例。
每个模块内部，都有一个module对象，代表当前模块。它有以下属性。

- module.id 模块的识别符，通常是带有绝对路径的模块文件名。
- module.filename 模块的文件名，带有绝对路径。
- module.loaded 返回一个布尔值，表示模块是否已经完成加载。
- module.parent 返回一个对象，表示调用该模块的模块。
- module.children 返回一个数组，表示该模块要用到的其他模块。
- module.exports 表示模块对外输出的值

#### module.exports

module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。

#### exports

为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。

```js
var exports = module.exports;
```

注意，不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系

**这意味着，如果一个模块的对外接口，就是一个单一的值，不能使用exports输出，只能使用module.exports输出。**

```js
module.exports = function (x){ console.log(x);};
```

### require命令

Node使用CommonJS模块规范，内置的require命令用于加载模块文件。
require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的 module.exports 对象。如果没有发现指定模块，会报错。

```js
Module._load = function(request, parent, isMain) {
  // 1. 检查 Module._cache，是否缓存之中有指定模块
  // 2. 如果缓存之中没有，就创建一个新的Module实例
  // 3. 将它保存到缓存
  // 4. 使用 module.load() 加载指定的模块文件，
  //    读取文件内容之后，使用 module.compile() 执行文件代码
  // 5. 如果加载/解析过程报错，就从缓存删除该模块
  // 6. 返回该模块的 module.exports
};
```

#### 路径解析规则
>
> <https://nodejs.cn/api/modules.html#%E5%85%A8%E9%83%A8%E4%B8%80%E8%B5%B7>

1. 判断是不是一个核心模块，如果是则返回
2. 判断是否以'/'开头，如果是则表示绝对路径，加载该模块
3. 判断是否以'./'或'../'开头，如果是则表示相对路径，根据当前模块的路径计算出绝对路径，加载该模块
4. 从当前模块的目录开始，并添加 /node_modules，并尝试从中加载模块地点 （Node.js 不会将 node_modules 附加到已经以 node_modules 结尾的路径）

查找的路径在 module.paths 中，是一个数组，包含了模块的全局安装目录和当前模块的 node_modules 目录

```js
path: [
  '/Users/x/codes/test/CommonJS和ES6/commonJS/node_modules',
  '/Users/x/codes/test/CommonJS和ES6/node_modules',
  '/Users/x/codes/test/node_modules',
  '/Users/x/codes/node_modules',
  '/Users/x/node_modules',
  '/Users/node_modules',
  '/node_modules'
]
```

使用 package.json 的 main 字段指定入口文件, 如果没有指定，则默认加载 index.js

#### 模块缓存（循环引入）

CommonJS模块无论被引入多少次，都只会在第一次引入时运行一次，然后将结果保存在缓存中，以后再次引入时，直接从缓存中读取结果，不会再次运行模块代码
这可以解决循环引入的问题
模块缓存其实是 require 上的 cache 属性，是一个对象，key 是模块的绝对路径，value 是被缓存的模块
每一个模块都先加入缓存再执行，每次遇到 require 都先检查缓存，这样就不会出现死循环；借助缓存，输出的值也很简单就能找到了

#### 多次引入

由于 require 有缓存机制，所以多次引入同一个模块只会执行一次，后续引入都是直接从缓存中读取

#### 值拷贝 （错误❌）
>
> <https://juejin.cn/post/6844904052841512973#heading-1>
（❌）CommonJS的引入特点是值的拷贝，简单来说就是把导出值复制一份，放到一块新的内存中
上面这句话是错误的
CommonJS 导出的是 module.exports 对象

### 其他

#### 访问主模块
>
> <https://nodejs.cn/api/modules.html#%E8%AE%BF%E9%97%AE%E4%B8%BB%E6%A8%A1%E5%9D%97>
