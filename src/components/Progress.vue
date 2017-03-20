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
</template>

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
