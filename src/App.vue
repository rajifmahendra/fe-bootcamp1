<template>
  <div id="">
    <Navbar />
    <RouterView />
  </div>
</template>
<script>
import {RouterView} from "vue-router";
import Navbar from "./components/Navbar.vue";
export default {
    name: 'App VUE',
    components: {Navbar},
    methods: {
      alertFunction(value = 0){
        alert(`Ini akan berjalan ${value}`);
      },
    }
}
</script>
