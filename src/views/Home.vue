<template>
  <div class="home">
    <div class="box">
      <span class="child1">child</span>
      <span class="child2">child</span>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
  @svg 1px-border {
    width: 4px;
    height: 4px;
    @rect {
      fill: transparent;  // content为透明
      width: 100%;  // 宽度为4px * 100%
      height: 100%;  // 高度为4px * 100%
      stroke-width: 25%;  // 边框宽度 4px * 25%(即1px)
      stroke: var(--color, black);  // 颜色
    }
  }
  .child2{
    color: red;
    display: inline-block;
    width: 100px;
    height: 100px;/*no*/
    /*border: .5px solid red;*/
    border: 1px solid;
    border-image: svg(1px-border param(--color #ffcc00)) 1 stretch;
    /*border-radius: 20px;*/ // 设置无效
  }
  .home{
    background-color: black;
  }
  .box {
    width: 150px;
    font-size: 28px; /*px*/
    border: 1px solid #eee; /*no*/
    .child1{
      color: red;
      display: inline-block;
      width: 100px;
      height: 100px;/*no*/
      border: 1px solid red;
    }
    .child2{
      color: red;
      display: inline-block;
      width: 100px;
      height: 100px;/*no*/
      /*border: .5px solid red;*/
      border: 1px solid;
      border-image: svg(1px-border param(--color #ffcc00)) 1 stretch;
      /*border-radius: 20px;*/ // 设置无效
    }
  }
</style>
