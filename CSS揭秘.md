### box-sizing

.block {
  box-sizing: content-box;
  box-sizing: border-box;
}

content-box：默认值，宽度和高度都不包含内容的border和padding。

width  = "内容的宽度"
height = "内容的高度"


border-box：盒子模型的宽、高度都会包含border和padding。

width  = "border + padding + 内容区width"
height = "border + padding + 内容区height"

### flex

display: flex;

flex-direction: row | row-reverse | column | column-reverse;

row (默认): 在ltr环境下从左到右，rtl当中从右至左进行排列。
row-reverse: 在ltr环境下从右到左，rtl当中从左至右进行排列。
column: 作用与row属性值类似，但是方向为从上至下。
column-reverse: 作用与row-reverse属性值类似，但是方向为从下至上。

.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}

nowrap (默认): 所有items将会位于同一行当中。
wrap: items将会从上至下进行换行。
wrap-reverse: items将会从下至上进行换行。

etc.
### grid

transition
CSS3中提供的transition特性，提供了CSS属性变化时控制动画速度的方式，代替了CSS属性发生变化时立刻进行渲染的特性。transition能够决定哪个CSS属性体现过渡效果（transition-property），过渡效果何时开始发生（transition-delay），过渡期会持续多久（transition-duration），过渡效果将会如何体现（transition-timing-function）。transition属性结合CSS伪类选择器进行使用，可以实现非常良好的用户体验。

