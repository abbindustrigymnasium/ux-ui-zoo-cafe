<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

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
