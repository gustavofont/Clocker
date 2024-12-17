<template>
  <div class="main-container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
body {
  background-image: url('/src/assets/images/Background.jpg');
  height:100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
#app, .main-container {
  height: 100%;
}

</style>