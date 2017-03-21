<template lang="pug">
div(id="landing")
  .top-matter
    bwprogress(completed=3 float=true)
    bwtips(float=true)

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

#landing {
  display: block;
}

.top-matter {
  position: relative;
  margin: 0px auto;
  width: 95%;
}
</style>
