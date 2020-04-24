<template>
  <div class="hello">
    <div class="example">
      <span>Flexible的示例代码</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .example{
    width: 150px;
    height: 64px;
    font-size: 28px; /*px*/
    border: 1px solid #ddd; /*no*/
  }
</style>
