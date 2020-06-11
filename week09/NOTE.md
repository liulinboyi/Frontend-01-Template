# CSS
## Animation

- @keyframes 定义 【关键帧】
  - animation
  - animation-name
  - animation-duration
  - animation-timing-function
  - animation-delay
  - animation-iteration-count
  - animation-direction

animation: 使用
```
@keyframes mykf {
    from { background: red; }
    to { background: blue; }
}
div {
    animation: mykf 5s infinite;
}
```
## Transition

- transition-property
- transition-duration
- transition-timing-function
- transition-delay

## cubic-bezier

[贝塞尔曲线在线地址](https://cubic-bezier.com/#.17,.67,.83,.67)

# 颜色

CMYK 和 RGB
HSL 和 HSV
Hue 色相

Saturation 纯度

Lightness 明度

value 色值


- CMYK：Cyan-青色，Magenta-品红，Yellow-黄色，blacK-黑色
- RGB：Red-红色，Green-绿色，Blue-蓝色
- HSL：Hue-颜色（0-360），Saturation-饱和度（0-100%），Lightness-亮度（0-100%，黑-白）
- HSV：Hue-颜色（0-360），Saturation-饱和度（0-100%），Value-明度（0-100%，黑-白）


## 形状
- border
- box-shadow
- border-radius
CSS 属性回归本真，不要用 border 等去写三角形、五角星等可以用矢量图来表示的图形，可以使用 data uri + svg 来画任何矢量图形。


# HTML


## 合法元素
DocumentType: <!Document html>
ElementL: <tag></tag>
Text: text
Comment: <!-- xxx -->
ProcessingInstruction: <?a 1?>
CDATA: <![CDATA[]]>
## 字符引用
&#161; = !

&amp; = &

&lt; = <

&gt; = >

&quot; = "

# DOM
## 导航类操作
- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling
## 修改操作
- appendChild
- insertBefore
- removeChild
- replaceChild
## 高级操作
- compareDocumentPosition：比较两个节点的位置关系
- contains：是否包含另一个节点
- isEqualNode：两个节点是否完全相同
- cloneNode(deep)：拷贝一个节点，支持深度拷贝
## 事件
- 捕获
- 冒泡