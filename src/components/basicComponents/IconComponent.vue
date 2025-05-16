<template>
  <div class="checkboxComponent">
    <span class="material-symbols-outlined">
      {{ iconName }}
    </span>
  </div>
</template>

<script setup lang="ts">

defineProps({
  iconName: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
  .checkboxComponent {
    display: flex;
    align-items: center;
  }
</style>