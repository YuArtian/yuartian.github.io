# 网页变灰色

```css
.gray {
  filter: grayscale(100%);
}
```

- grayscale（灰度）
  - 0%: 无变化
  - 100%: 完全变灰
  - 50%: 半灰半彩
  - 200%: 超过 100% 的值会反转颜色
  - 0~100%: 逐渐变灰
  - 100~200%: 逐渐变彩
- blur（模糊）
  - 0: 无变化
  - 5px: 模糊程度
- brightness（亮度）
- opacity（透明度）
  <!-- 和 opacity 的区别 -->
  filter 属性会启用 GPU 加速，而 opacity 不会
