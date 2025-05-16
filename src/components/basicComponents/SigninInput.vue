<template>
  <div class="custom-input">
    <div
      v-if="icon !== ''"
      class="icon-box"
    >
      <span class="material-symbols-outlined">
        {{ icon }}
      </span>
    </div>
    <div class="input-box">
      <input
        v-model="modelValue"
        :type="type"
        :placeholder="placeholder"
        @input="emit('update:modelValue', modelValue)"
      >
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { PropType } from 'vue';
import { InputType } from '../../enums/inputEnum';

const emit = defineEmits(['update:modelValue']);

defineProps({
  type: {
    type: String as PropType<InputType>,
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '190px',
  }
});

const modelValue = defineModel<string | number>();

</script>

<style lang="scss">
.custom-input {
  color: white;
  display: flex;
  opacity: 0.95;
}
.custom-input:hover{
  opacity: 1;
}
.input-box {
  width: v-bind(width);
  height: 60px;
  background-color: #ababab;
}
.icon-box {
  width: 60px;
  height: 60px;
  background-color: #838383;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-box input{
  border: 0px solid;
  height: 60px;
  background-color: transparent;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 7px;
  font-family: $font-default;
  color: #ffffff
}

.input-box *:focus {
  outline: none;
}

</style>