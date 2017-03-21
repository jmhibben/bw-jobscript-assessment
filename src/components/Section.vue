<template lang="pug">
.section
  template(v-for="i in 8")
    bwcheck(v-bind:checked="isChecked(i)") Section {{i}}
</template>

<script>
import Check from './Check'

export default {
  name: 'bwsection',
  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    completedSections: {
      type: Array,
      required: true
    }
  },
  components: {
    bwcheck: Check
  },
  methods: {
    isChecked: function (index) {
      return this.completedSections[index - 1]
    }
  }
}
</script>

<style scoped lang="less">

</style>
