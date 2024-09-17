<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  
  

  body{
    background-color: #FEF8E5;
  }
</style>
<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: 'App'
});



</script>
