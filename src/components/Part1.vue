<template lang="pug">
.part
  p Example description of the current section. 
  p The width of the page is constrained to 600px, much like the content for The Whether. The checkboxes below will re-organize themselves into 1-3 columns, according to how wide the screen is.

  template(v-for="i in 24")
    .check(v-bind:class="'check'+i")
      input(
        type="checkbox"
        checked=false
        v-bind:value="i"
        v-bind:id="'chk' + i.toString()"
      )
      label(
        v-bind:for="'chk' + i.toString()"
      ) Check {{i}}

</template>

<script>
export default {
  name: 'part1',
  data () {
    return {
      name: 'part1'
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/less/checks';
</style>
