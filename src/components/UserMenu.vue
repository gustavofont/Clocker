<template>
  <div class="user-menu">
    <div class="user-menu-avatar">
      <span class="material-symbols-outlined">
        {{ 'person' }}
      </span>
    </div>
    <div class="user-menu-description">
      <div class="user-menu-description-name">
        {{ user.name}}
      </div>
      <div class="user-menu-description-email">
        {{ user.email }}
      </div>
    </div>
    <div class="user-menu-options">
      <span class="material-symbols-outlined">
        {{ 'more_vert' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
 import useAuthStore from '@src/store/auth';
 import { ref } from 'vue';

 const authstore = useAuthStore();
 const user = ref(authstore.getUser());

</script>

<style lang="scss">
  .user-menu {
    background-color: $light-grey-3;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .user-menu-avatar {
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
  }

  .user-menu-description {
    color: black;
    margin-left: 5px;
    font-family: monospace;
  }

  .user-menu-description-name {
    font-size: 14px;
  }

  .user-menu-description-email {
    font-size: 11px;
  }

  .user-menu-options {
    color: white;
    margin-right: 10px;
    margin-left: auto;

    :hover {
      background-color: $light-grey-2;
    }
  }

</style>