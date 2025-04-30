<template>
  <div
    class="dropdown-menu"
    @click="changeButtonState()"
  >
    <Dropdown
      :triggers="['click']"
      :placement="placement"
    >
      <div class="dropdown-menu-button">
        <span class="material-symbols-outlined">
          {{ 'more_vert' }}
        </span>
      </div>
      <template #popper>
        <ul class="dropdown-menu-list">
          <li
            v-for="option in options"
            :key="option.text"
            class="dropdown-menu-option"
            @click="option.action()"
          >
            <span class="material-symbols-outlined">
              {{ option.prefixIcon }}
            </span>
            {{ option.text }}
          </li>
        </ul>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
  import { PropType, ref } from 'vue';
  import { Option } from '@src/types/menus';
  import { Dropdown, Placement } from 'floating-vue';

  defineProps({
    options: {
      type: Object as PropType<Option[]>,
      required: true,
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
  });

  const isMenuOpen = ref(false);

  function changeButtonState() {
    isMenuOpen.value = !isMenuOpen.value;
  }
</script>

<style lang="scss">
  // Remove arrow from popper menu
  .v-popper__arrow-container {
  display: none;
}

.dropdown-menu-list {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

.dropdown-menu-option {
  margin: 0px;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-menu-option:hover {
  background-color: $light-grey-1;
}

.dropdown-menu-button {
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border-radius: 20%;
    background-color: $light-grey-1;
  }
}
</style>