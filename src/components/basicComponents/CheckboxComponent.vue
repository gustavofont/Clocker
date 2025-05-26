<template>
  <div
    class="checkboxComponent"
  >
    <IconComponent
      :icon-name="active ? 'check_box': 'check_box_outline_blank'"
      @click="handleCheckbox"  
    />
  </div>
</template>

<script setup lang="ts">
  import IconComponent from './IconComponent.vue';

  defineProps({
    modelValue: {
      type: Boolean,
      reuquired: true,
    }
  });
  
  const emit = defineEmits(['update:modelValue']);

  const active = defineModel<boolean>({default:false});

  function handleCheckbox() {
    active.value = !active.value;
    emit('update:modelValue', active);
  }

</script>

<style lang="scss">
</style>