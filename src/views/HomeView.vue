<template>
  <div class="home-view">
    <div class="container">
      <div class="side-options">
        <div class="logo-container">
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
        <div class="user-menu-container">
          <UserMenu />
        </div>
      </div>
      <div class="option-content">
        <DashboardPage v-if="selectedSideOption === 1" />
        <SchedulePage v-if="selectedSideOption === 2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import MenuOption from '@src/components/basicComponents/menus/MenuOption.vue';
  import UserMenu from '@src/components/UserMenu.vue';
  import SchedulePage from '@src/components/resources/SchedulePage.vue';
  import DashboardPage from '@src/components/resources/DashboardPage.vue';
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
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 77%;
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
    background-color: white;
  }

  .option-content {
    background-color: white;
    width: 100%;
    height: 100%;
  }

  .logo {
    height: 100%;
  }

  .logo-container {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
  }

  .user-menu-container {
    width: 100%;
    height: 8%;
  }

</style>