<template>
    <div id="">
      <button @click="incrementalValue" class="p-5 text-red-400 bg-yellow-400 rounded">Button A</button>
    </div>
  </template>
  <script>
  export default {
    name: 'HelloWorld',
    data() {
        return {
            value: 0
        }
    },
    methods: {
        incrementalValue(){
            this.value++;
            this.$emit('alertFunction', this.value)
        }
    }
  }
  </script>
  