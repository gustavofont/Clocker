<template>
  <div class="selectDropdown">
    <Dropdown
      :triggers="['click']"
      :lacement="placement"
    >
      <input
        v-model="value"
        class="selectDropdown--input"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="updateValue"
      >
      <template #popper="{ hide }">
        <ul class="dropdown-menu-list">
          <li
            v-for="option in options"
            :key="option.label"
            :class="'dropdown-menu-list--option'"
            @click="()=> {
              handleOptionSelection(option.value)
              hide()  
            }"
          >
            {{ option.label }}
          </li>
        </ul>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { PropType, Ref, ref, watch } from 'vue';
import { InputType } from '@src/enums/inputEnum';
import { Dropdown, Placement } from 'floating-vue';
import { DropdownOption } from '@src/types/menus';

const props = defineProps({
  options: {
    type: Array as PropType<DropdownOption[]>,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: InputType.TEXT,
  },
  width: {
    type: String,
    default: '100px',
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  default: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['update:model-value']);

const value : Ref<string | number | undefined>= ref(props.default);

function updateValue() {
  emit('update:model-value', value);
}

function handleOptionSelection(option: string){
  value.value = option;
}

// watch(() => value, () => {
//   updateValue();
// });

</script>
  
<style lang="scss">
  .selectDropdown {
    width: v-bind(width);
    font-family: $font-default;
    font-size: 14px;
  }

  .selectDropdown--input {
    border: 1px solid;
    border-radius: 5px;
    padding: 8px;
    width: -webkit-fill-available; 
    font-family: $font-default;
  }
  .dropdown-menu-list {
    width: 200px;
    max-height: 150px;
  }

  .dropdown-menu-list--option {
    padding: 10px  0px 10px 10px;
  }

  .dropdown-menu-list--option:hover {
    background-color: $light-grey-1;
  }
</style>