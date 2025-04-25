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
          <li class="side-option">
            <MenuOption
              :text="'option1'"
              :prefix-icon="'grid_view'"
            />
          </li>
          <li>
            <MenuOption
              :text="'option2'"
              :prefix-icon="'grid_view'"
            />
          </li>
          <li>
            <MenuOption
              :text="'option3'"
              :prefix-icon="'grid_view'"
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
    background-color: blue;
    justify-items: center;
  }

  .list-options {
    list-style-type: none;
    margin: 5px;
    padding: 10px;

    li {
      margin-bottom: 20px;
    }
  }

  .option-content {
    background-color: aqua;
    width: 100%;
  }

</style>