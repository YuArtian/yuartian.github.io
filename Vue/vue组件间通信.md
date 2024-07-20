# Vue 组件间通信

通讯方式：

1. props、$emit
vue2.x 中，父组件通过 props 传递数据给子组件，子组件通过 $emit 事件传递数据给父组件
vue3 中子组件需要定义 defineProps 和 defineEmits
类型声明

```ts
const props = defineProps<{
  foo: string
  bar?: number
}>()

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

// 3.3+：另一种更简洁的语法
const emit = defineEmits<{
  change: [id: number] // 具名元组语法
  update: [value: string]
}>()
```

2. ref 和 defineExpose
vue3 中，通过 ref 创建响应式数据，通过 defineExpose 暴露数据给父组件
vue2 中，通过 $refs 获取子组件实例，通过 $parent 获取父组件实例

3. $children 和 $parent
vue2 通过 $children 获取子组件实例，通过 $parent 获取父组件实例
vue3 $children 已经废弃，建议使用 ref

4. $attrs 和 $listeners

> inheritAttrs: true（默认）
> <https://v2.cn.vuejs.org/v2/api/#inheritAttrs>
vue 中 props 需要声明才能使用，如果子组件不用 props 接收父组件传递的属性
那么这些属性将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上

vue3 中删除了 $listeners, 在 Vue 3 的虚拟 DOM 中，事件监听器现在只是以 on 为前缀的 attribute

5. provide 和 inject

> <https://v2.cn.vuejs.org/v2/api/#provide-inject>

vue3 中 `import { provide } from 'vue'`
可以使用 Symbol 作为 key

6. EventBus / mitt

7. v-model

v-model 是 Vue.js 中一个语法糖，可以用来简化组件的 props 和 events 的传递

在 vue2 中，v-model 会自动将 value 作为 prop 传递给组件，并且将 input 事件作为 event 传递给组件

在 vue3 中，v-model 会自动将 modelValue 作为 prop 传递给组件，并且将 update:modelValue 事件作为 event 传递给组件
