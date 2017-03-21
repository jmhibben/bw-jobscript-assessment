<template lang="pug">
#assessment-container
  router-view
</template>

<script>
export default {
  name: 'bwassessment'
}
</script>

<style scoped lang="less">
@import '../assets/less/colors';

#assessment-view {
  clear: both;
  width: 95%;
  margin: 0 auto;
  background-color: lighten(@base, 30%);
}
</style>
