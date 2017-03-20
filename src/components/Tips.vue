<template lang="pug">
div(id="tips" v-bind:style='{float: float ? "left" : "none"}')
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
  .margin(10px);
  .padding(5px);
  display: block;
  min-width: 45%;

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

@media (min-width: 800px) {
  #tips {
    width: 45%;
  }
}

@media (max-width: 799px) {
  #tips {
    width: 90%;
  }
}
</style>
