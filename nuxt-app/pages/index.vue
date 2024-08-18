<template>
  <div>
    <p>카운터: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    count() {
      return this.$store.getters.getCount
    }
  }
})
</script>