<template lang="pug">
#assessment-container.inner-container
  h1.header-1 JobScript Assessment
  router-view
  bwbutton.button.button-back(
    v-on:completed="regress"
    v-bind:disabled="!disableBack"
  ) Back
  bwbutton.button.button-next(
    v-on:completed="progress"
    v-bind:disabled="!disableNext"
  ) Next/Submit
</template>

<script>
import Button from './Button'

export default {
  name: 'bwassessment',
  data () {
    return {
      rindex: 0,
      routes: [
        // probably kind of hacky to do it this way, but it made the logic here a bit easier
        'page1',
        'page2',
        'page3',
        'page4',
        'page5',
        'page6',
        'page7',
        'page8',
        'done'
      ]
    }
  },
  components: {
    bwbutton: Button
  },
  props: {
    disableBack: {
      type: Boolean
    },
    disableNext: {
      type: Boolean
    }
  },
  methods: {
    progress () {
      // notify Landing that we want to move forward in the assessment
      // this only allows the Landing to push the change to the Progress component
      this.$emit('progress')
      // Progress to the next route
      ++this.rindex
      let route = ''
      // add the parent route to the child route if necessary
      if (this.$route.path === '/landing') {
        route += '/landing/'
      }
      route += this.routes[this.rindex]
      this.$router.push(route)
    },
    regress () {
      // notify the Landing that we want to move backward in the assessment
      // this only allows the Landing to push the change to the Progress component
      this.$emit('regress')
      // Go back to the previous route
      --this.rindex
      this.$router.push(this.routes[this.rindex])
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/less/helpers';
@import '../assets/less/colors';

#assessment-container {
  .no-margin;
  .border();
  .padding();
  margin-bottom: 10px;
  background-color: lighten(@base, 30%);
  display: block;
}

.button { 
  .no-border;
  margin-top: 5px;
  max-width: 150px;
  width: 40%;
  height: 40px;
}

.button-back {
  left: 0px;
  background-color: @normal;
}

.button-next {
  float: right;
  background-color: @success;
}
</style>
