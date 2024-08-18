<template>
  <main class="flex min-h-screen flex-col items-center justify-start p-8 bg-white text-gray-800">
    <h1 class="text-4xl font-bold mb-8">Nuxt.js Counter</h1>
    
    <div class="w-full max-w-md">
      <div class="bg-gray-100 rounded-lg shadow-lg p-6 mb-6">
        <h2 class="text-2xl font-semibold mb-4">Counter</h2>
        <p class="text-6xl font-bold text-center">{{ count }}</p>
      </div>
      
      <div class="bg-gray-100 rounded-lg shadow-lg p-6">
        <div class="flex gap-4">
          <button
            @click="decrementCount"
            class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            -
          </button>
          <button
            @click="incrementCount"
            class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
           +
          </button>
        </div>
      </div>
    </div>
  </main>
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