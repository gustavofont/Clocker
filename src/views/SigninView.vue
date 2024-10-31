<template>
  <div class="container">
    <span class="logo" />
    <div class="loginCard">
      <div class="logoContainer">
        <img
          class="logo"
          src="/src/assets/images/fullLogo.png"
          alt=""
        >
      </div>
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
    </div>
    <ButtonComponent
      class="submit-button"
      :type="ButtonType.SECONDARY"
      :text="'Login'"
      :width="'250px'"
    />
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
  background-image: url("/src/assets/images/Background.jpg");
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
  background-color: rgba(0, 0, 0, 0.50);
  backdrop-filter: blur(5px);
  padding-bottom: 35px;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.signin-input {
  padding: 0%;
}
.logoContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logoContainer .logo{
  width: 200px;
}
</style>