<!--<template lang="pug">
div(class="col-xs-12 col-m-6")
  h1 Progress
  div(id="sections")
    ol
      li Section 1
      li Section 2
      li Section 3
      li Section 4
      li Section 5
      li Section 6
      li Section 7
      li Section 8
  
  div() Completed {{completed}} of 8 sections:
    div(class="progress")
      div(
        class="progress-bar progress-bar-info"
        role="progressbar"
        aria-valuemin="0"
        v-bind:aria-valuenow='completed'
        aria-valuemax="8"
        v-bind:style="{width: completedPercent + '%'}"
      )
</template>-->

<template>
<div class="">
  <h1 class="">Progress</h1>
  <div class="">
    <ol>
      <li>Section 1</li>
      <li>Section 2</li>
      <li>Section 3</li>
      <li>Section 4</li>
      <li>Section 5</li>
    </ol>
  </div>
  <div class="col-xs-12">
    <div class="col-xs-12">
      Completed {{completed}} of 8 sections:
    </div>
    <div class="progress">
      <progress max=8 v-bind:value="completed"></progress>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'bwprogress',
  props: {
    completed: {
      type: String,
      required: true
    }
  },
  computed: {
    completedPercent: function () {
      return this.completed / 8
    }
  }
}
</script>

<style scoped lang="less">
@base: rgb(120, 180, 245);

progress {
  color: @base;
  width: 90%;
  height: 10px;

  &::-moz-progress-bar {
    background-color: @base;
  }
}
</style>
