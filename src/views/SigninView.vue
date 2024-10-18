<template>
  <div class="container">
    <div class="loginCard">
      <InputComponent
        class="signin-input"
        :type="InputType.TEXT"
        :icon="'person'"
        :placeholder="'Username'"
      />
      <InputComponent
        class="signin-input"
        :type="InputType.PASSWORD"
        icon="lock"
        :placeholder="'Password'"
      />
      <ButtonComponent
        class="submit-button"
        :type="ButtonType.SECONDARY"
        :text="'Login'"
        :width="'250px'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '../components/basicComponents/ButtonComponent.vue';
import InputComponent from '../components/basicComponents/InputComponent.vue';
import { ButtonType } from '../enums/buttonEnum';
import { InputType } from '../enums/inputEnum';

</script>

<style>
body {
  background-image: url("/src/assets/images/loginPageBackground.jpg");
  height:100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.loginCard{
  height: 30vh;
  width: 50vh;
  display: grid;
  align-items: center;
  justify-content: center;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(5px);
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.signin-input {
  padding: 0%;
}
</style>