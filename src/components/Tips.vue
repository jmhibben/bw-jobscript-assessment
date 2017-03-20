<template lang="pug">
div(class="col-xs-12 col-m-6")
  h1 Tips
  ol
    li Tips from the original assessment would go here
    li Tip 2
    li Tip 3
    li etc...
</template>

<script>
export default {
  name: 'tips'
}
</script>

<style scoped lang="less">
@import "../assets/less/helpers";

#tips {
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 0 0 2px black;
  margin-top: 10px;

  h1 {
    font-size: 1.2em;
    text-align: left;
    margin-left: 5px;
  }

  ol {
    text-align: left;
  }
}
</style>
