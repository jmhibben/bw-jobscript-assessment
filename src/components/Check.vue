<template lang="pug">
div(class="checkbox-wrapper")
  div(class="checkbox" v-bind:class="{checked: isChecked}")
    div(class="checkbox-check" v-bind:class="{checked: isChecked}")
  slot
</template>

<script>
export default {
  name: 'bwcheck',
  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    isChecked: function () {
      return this.checked
    }
  }
}
</script>

<style lang="less">
@import '../assets/less/helpers';
@import '../assets/less/colors';

.checkbox {
  border-radius: 15px;
  margin-right: 5px;
  width: 30px;
  height: 15px;
  background-color: @normal;

  &.checked {
    background-color: @success;
  }
}

.checkbox-check {
  background-color: white;
  position: relative;
  top: 2px;
  left: 2px;
  width: 11px;
  height: 11px;
  border-radius: 11px;

  &.checked {
    transition: left 0.3s, background-color 0.3s;
    left: 17px;
  }
}

.checkbox, slot {
  display: inline-block;
}
</style>
