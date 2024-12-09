<template>
  <div>
    <button
      :class="`custom-button ${type}`"
      @click="onSubmit"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';

  type ButtonType = 'Primary' | 'Secondary' | 'Warning';

  const emit = defineEmits(['submit']);

  defineProps({
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<ButtonType>,
      required: true,
    },
    width: {
      type: String,
      default: '150px',
    },
    height: {
      type: String,
      default: '50px',
    }
  });

  function onSubmit() {
    emit('submit');
  }
  
</script>

<style>
  /* CSS */
  .custom-button {
    font-size: 16px;
    font-family: Monospace;
    font-weight: 600;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    height: v-bind(height);
    width: v-bind(width);
    color: #F0F1F0;
    opacity: 0.9;
    border: 0px solid;
  }

  .custom-button *:focus {
    outline: none;
  }

  .custom-button:hover,
  .custom-button:focus {
    opacity: 1;
  }

  .custom-button.Warning {
    background-color: #e74c3c;
  }

  .custom-button.Primary {
    background-color: #32ca75;
  }

  .custom-button.Secondary {
    background-color: #838383;
  }
</style>