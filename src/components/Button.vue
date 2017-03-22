<template lang="pug">
button(
  v-on:click="completed"
)
  slot
</template>

<script>
export default {
  name: 'bwbutton',
  methods: {
    completed: function () {
      this.$emit('completed')
    }
  }
}
</script>
