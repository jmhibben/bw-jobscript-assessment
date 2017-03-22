<template lang="pug">
#landing.outer-container
  bwprogress(
    v-bind:completed="completedString"
    float=true
  )

  bwtips(float=true)

  bwassessment(
    v-on:progress="incrementCompleted"
    v-on:regress="decrementCompleted"
    v-bind:disableBack="canGoBack"
    v-bind:disableNext="canGoForward"
  )
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
  },
  data () {
    return {
      completed: 0,
      canGoBack: false,
      canGoForward: true
    }
  },
  methods: {
    incrementCompleted () {
      if (this.completed < 8) {
        this.completed += 1
      }
      this.toggleButtons()
    },
    decrementCompleted () {
      if (this.completed > 0) {
        this.completed -= 1
      }
      this.toggleButtons()
    },
    toggleButtons () {
      if (this.completed === 0) {
        this.canGoBack = false
      } else {
        this.canGoBack = true
      }

      if (this.completed === 8) {
        this.canGoForward = false
      } else {
        this.canGoForward = true
      }
    }
  },
  computed: {
    completedString () {
      return this.completed.toString()
    }
  }
}
</script>

<style scoped lang="less">
@import "../assets/less/helpers";

#landing {
  display: block;
}
</style>
