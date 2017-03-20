<template lang="pug">
div(id="progress" v-bind:style='{float: float ? "left" : "none"}')
  h1 Progress
  div(id="list")
    div(v-for="c in completed") Section {{c}}
    div(v-for="d in (8 - completed)") Section {{d}}
  div
    div Completed {{completed}} of 8 sections:
    div(class="progress")
      progress(max=8 v-bind:value="completed")
</template>

<!--<template>
<div id="progress" v-bind:style='{float: float ? "left" : "none"}'>
  <h1>Progress</h1>
  <div>
    <ul>
      <li>Section 1</li>
      <li>Section 2</li>
      <li>Section 3</li>
      <li>Section 4</li>
      <li>Section 5</li>
    </ul>
  </div>
  <div>
    <div>
      Completed {{completed}} of 8 sections:
    </div>
    <div class="progress">
      <progress max=8 v-bind:value="completed"></progress>
    </div>
  </div>
</div>
</template>-->

<script>
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
    completedPercent: function () {
      return this.completed / 8
    }
  }
}
</script>

<style scoped lang="less">
@import "../assets/less/helpers";
@base: rgb(120, 180, 245);

#progress {
    .border();
    .margin(10px);
    .padding(5px);
    display: block;

    h1 {
      .no-margin;
      font-size: 1.2em;
    }
  }

  progress {
    color: @base;
    width: 90%;
    height: 10px;

    &::-moz-progress-bar {
      background-color: @base;
    }
  }

@media (min-width: 800px) {
  #progress {
    width: 45%;
  }  
}

@media (max-width: 799px) {
  #progress {
    width: 90%;
  }
}
</style>
