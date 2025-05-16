<template>
  <div class="inputComponent">
    <input
      v-model="value"
      type="text"
      class="inputComponent--input"
    >
  </div>
</template>

<script setup lang="ts">

  defineProps({
    width: {
      type: String,
      default: '200px'
    },
  });

  const value = defineModel<string>();

</script>

<style lang="scss">

  .inputComponent {
    width: v-bind(width);
  }
  .inputComponent--input {
    padding: 5px;
    width: -webkit-fill-available; 
    font-family: $font-default;
  }
</style>