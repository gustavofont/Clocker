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
        type="text"
        :placeholder="placeholder"
      >
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { PropType } from 'vue';
import { InputType } from '../../enums/inputEnum';

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
  inputWidthInVh: {
    type: String,
    default: '180px',
  }
});
</script>

<style>
.custom-input {
  color: white;
  display: flex;
  opacity: 0.95;
}
.custom-input:hover{
  opacity: 1;
}
.input-box {
  width: calc(v-bind(inputWidthInVh) -60px) ;
  height: 60px;
  background-color: #2b2b2b;
}
.icon-box {
  width: 60px;
  height: 60px;
  background-color: #515050;
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
  color: #ffffff
}

.input-box *:focus {
  outline: none;
}

</style>