<template lang="pug">
#tips.inner-container
  h1 Tips
  ol
    li Tips from the original assessment would go here
    li Tip 2
    li Tip 3
    li etc...
</template>

<script>
export default {
  name: 'tips',
  props: {
    float: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style scoped lang="less">
@import "../assets/less/helpers";

#tips {
  .border();
  margin-bottom: 10px;
  position: relative;
  padding: 5px;
  display: block;

  h1 {
    font-size: 1.2em;
    text-align: left;
    margin-left: 5px;
    .no-margin;
  }

  ol {
    text-align: left;
  }
}
</style>
