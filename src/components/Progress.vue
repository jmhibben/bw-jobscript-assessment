<template lang="pug">
#progress.inner-container
  h1.header-1 Progress
  bwsection(v-bind:completed-sections="completedSections")
  div(id="progress-bar")
    div Completed {{completed}} of 8 sections:
    div(class="progress")
      progress(max=8 v-bind:value="completed")
</template>

<script>
import Section from './Section'

export default {
  name: 'bwprogress',
  props: {
    completed: {
      type: String,
      required: true
    },
    float: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    completedSections: function () {
      let sections = []
      for (let i = 0; i < 8; ++i) {
        sections.push((i + 1 <= this.completed))
      }
      return sections
    },
    isFloat: function () {
      return this.float ? 'left' : 'none'
    }
  },
  components: {
    bwsection: Section
  }
}
</script>

<style scoped lang="less">
@import "../assets/less/helpers";
@import '../assets/less/colors';

#progress {
  .border();
  margin-bottom: 10px;
  padding: 5px;
  display: block;
}

#progress-bar {
  margin-top: 10px;
}

progress {
  color: @base;
  width: 90%;
  height: 10px;

  &::-moz-progress-bar {
    background-color: @base;
  }
}
</style>
