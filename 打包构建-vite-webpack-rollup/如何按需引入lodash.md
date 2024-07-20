# lodash 按需引入

> 【建议收藏】这四个方法，让你使用lodash后js体积减少70kB
> <https://juejin.cn/post/7069218262634102798>

- 使用 lodash-es
   直接引入 lodash-es，它是 lodash 的 ES 模块版本，可以按需引入，减少打包体积
- 使用 babel-plugin-lodash
    使用 babel-plugin-lodash 插件
    插件会将

    ```js
    import _ from 'lodash'
    import { add } from 'lodash/fp'

    const addOne = add(1)
    _.map([1, 2, 3], addOne)
    ```

    转换为

    ```js
    import _add from 'lodash/fp/add'
    import _map from 'lodash/map'

    const addOne = _add(1)
    _map([1, 2, 3], addOne)
    ```
