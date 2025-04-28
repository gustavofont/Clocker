<template>
  <div class="home-view">
    <div class="container">
      <div class="side-options">
        <div class="logoContainer">
          <img
            class="logo"
            src="/src/assets/images/fullLogo.png"
            alt=""
          >
        </div>
        <ul class="list-options">
          <li
            :class="getOptionClass(1)"
            @click="selectOption(1)"
          >
            <MenuOption
              :text="'Dashboard'"
              :prefix-icon="'grid_view'"
            />
          </li>
          <li
            :class="getOptionClass(2)"
            @click="selectOption(2)"
          >
            <MenuOption
              :text="'Time Tracker'"
              :prefix-icon="'schedule'"
            />
          </li>
        </ul>
      </div>
      <div class="option-content">
        content
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import MenuOption from '@src/components/basicComponents/menus/MenuOption.vue';
  import {ref} from 'vue';

  const selectedSideOption = ref(1);

  function selectOption(option: number) {
    selectedSideOption.value = option;
  }

  function getOptionClass(option: number) {
    if(option === selectedSideOption.value) {
      return 'side-option selected';
    }
    return 'side-option';
  }

</script>

<style lang="scss">
  .home-view {
    background-color: $color-primary;
    width: 100%;
    height: 100%;
  }

  .container {
    display: flex;
    height: 100%;
  }

  .side-options {
    display: block;
    width: 20%;
    height: 100%;
    background-color: $light-grey-4;
    justify-items: center;
  }

  .list-options {
    list-style-type: none;
    margin: 5px;
    padding: 10px;
    width: 100%;
  }

  .side-option {
      align-content: center;
      justify-items: center;
      height: 60px;
    }

  .side-option:hover {
    background-color: $light-grey-2;
  }

  .side-option.selected {
    background-color: $light-grey-1;
  }

  .option-content {
    background-color: $light-grey-1;
    width: 100%;
  }

</style>