<template>
  <div class="menuOption">
    <div class="optionIcon">
      <span class="material-symbols-outlined">
        {{ prefixIcon }}
      </span>
    </div>
    <div class="optionText">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      required: true,
    },
    prefixIcon : {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'white'
    }
  });
</script>

<style lang="scss">

.menuOption {
  display: flex; 
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 15px;
  font-weight: 600;
}

.optionIcon {
  margin-right: 3px;
  display: flex;
}

</style>