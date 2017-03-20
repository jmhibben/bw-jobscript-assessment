<template lang="pug">
div(id="landing")
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
</style>
