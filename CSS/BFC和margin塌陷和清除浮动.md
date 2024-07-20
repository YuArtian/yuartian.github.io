# BFC和margin塌陷合并问题

## BFC
>
> BFC(Block Formatting Context) 块级格式化上下文
> <https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context>
> 手把手带你学习CSS的Margin合并、Margin塌陷、BFC
> <https://juejin.cn/post/7262190530351693880>
> <https://juejin.cn/post/7026276336687644680>
>

BFC 是一个独立的渲染区域，容器内部的元素布局不会影响到外部的元素，反之亦然
触发 BFC 的条件:

- 根元素（`<html>`）
- 浮动元素（float 值不为 none）
- 绝对定位元素（position 值为 absolute 或 fixed）
- 行内块元素（display 值为 inline-block）
- display 值为 flow-root 的元素
- 弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
- 网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器

- 表格单元格（display 值为 table-cell，HTML 表格单元格默认值）
- 表格标题（display 值为 table-caption，HTML 表格标题默认值）
- 匿名表格单元格元素（display 值为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、tr、tbody、thead、tfoot 的默认值）或 inline-table）
- overflow 值不为 visible、clip 的块元素
- contain 值为 layout、content 或 paint 的元素
- 多列容器（column-count 或 column-width (en-US) 值不为 auto，包括column-count 为 1）
- column-span 值为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中 (规范变更, Chrome bug)

### BFC的特性

1. 内部的盒子会在垂直方向上一个接一个地放置
   盒子垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的上下 margin 会发生重叠；
2. BFC内部的子元素不会影响到外部的元素。
3. BFC内部计算高度时会包含浮动元素。这使得清除浮动变得更加简单。
4. BFC区域不会与浮动元素重叠。这可以用于防止文字环绕浮动元素。

包含内部浮动
排除外部浮动
阻止 外边距重叠

- 清除浮动
   > <https://juejin.cn/post/6936913689115099143>
   不清除浮动会发生高度塌陷：浮动元素父元素高度自适应（父元素不写高度时，子元素写了浮动后，父元素会发生高度塌陷）
  - 使用 `clear:both` 属性 + after 伪类的方法

      ```css
      .float_div:after{
         clear:both;
         /* 保证伪类元素生效 并且 隐藏不占据空间 */
         content:".";
         display:block;
         height:0;
         overflow:hidden;
         visibility:hidden;
      }
      ```

  - 父元素触发 BFC

- margin 合并
   > 手把手带你学习CSS的Margin合并、Margin塌陷、BFC
   > <https://juejin.cn/post/7262190530351693880#heading-2>
  - 更改 DOM 结构，套一层 div
  - 计算 margin 值，取最大值应用
- margin 塌陷
   子元素的 margin-top 和父元素的 margin-top 会合并，取最大值应用
  - 让父元素触发 BFC，设置 `overflow:hidden` 属性，`display:inline-block` 属性，`display: flow-root` 属性
  - 给父元素添加 `border` 或 `padding` 属性
  