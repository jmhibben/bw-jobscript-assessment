<template lang="pug">
.part
  p Description of section goes here.

  template(v-for="i in 10")
    .row(v-bind:class="(i % 2 === 0) ? '' : 'row-odd'")
      .col.question Question {{i}}
      .col.container
        .col.answer
          input(
            type="radio" value="A"
            v-bind:id="'q'+i.toString()+'a'"
            v-bind:name="i"
          )
          label(v-bind:for="'q'+i.toString()+'a'") 1
        .col.answer
          input.col.answer(
            type="radio" value="B"
            v-bind:id="'q'+i.toString()+'b'"
            v-bind:name="i"
          )
          label(v-bind:for="'q'+i.toString()+'b'") 2
        .col.answer
          input.col.answer(
            type="radio" value="C"
            v-bind:id="'q'+i.toString()+'c'"
            v-bind:name="i"
          )
          label(v-bind:for="'q'+i.toString()+'c'") 3
        .col.answer
          input.col.answer(
            type="radio" value="D"
            v-bind:id="'q'+i.toString()+'d'"
            v-bind:name="i"
          )
          label(v-bind:for="'q'+i.toString()+'d'") 4
        .col.answer
          input.col.answer(
            type="radio" value="E"
            v-bind:id="'q'+i.toString()+'e'"
            v-bind:name="i"
          )
          label(v-bind:for="'q'+i.toString()+'e'") 5
</template>

<script>
export default {
  name: 'part2',
  data () {
    return {
      name: 'part2'
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/less/tables';
</style>
