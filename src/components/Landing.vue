<template lang="pug">
div(id="landing")
  bwprogress(completed=3)
  bwtips

  bwassessment
</template>

<script>
import Progress from './Progress'
import Tips from './Tips'
import Assessment from './Assessment'

export default {
  name: 'landing',
  components: {
    bwprogress: Progress,
    bwtips: Tips,
    bwassessment: Assessment
  }
}
</script>

<style scoped lang="less">
@import "../assets/less/helpers";

@media all and (max-width: 800px) {
  #landing {
    display: block;
    clear: both;
  }
}

@media all and (min-width: 801px) {
  #landing {
    display: inline-block;
    float: left;
  }
}

bwprogress, bwtips {
  display: inherit;
}
</style>
