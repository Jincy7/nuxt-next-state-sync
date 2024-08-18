<template>
  <div>
    <p>카운터: {{ count }}</p>
    <button @click="incrementCount">증가</button>
    <button @click="decrementCount">감소</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    count() {
      return this.$store.getters.getCount
    }
  },
  methods: {
    incrementCount() {
      this.$store.dispatch('incrementCount')
    },
    decrementCount() {
      this.$store.dispatch('decrementCount')
    }
  }
})
</script>