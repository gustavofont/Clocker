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
        :model-value="email"
        @update:model-value="(value) => email = value"
      />
      <InputComponent
        class="signin-input"
        :type="InputType.PASSWORD"
        icon="lock"
        :placeholder="'Password'"
        :model-value="password"
        @update:model-value="(value) => password = value"
      />
    </div>
    <ButtonComponent
      class="submit-button"
      :type="ButtonType.SECONDARY"
      :text="'Login'"
      :width="'250px'"
      @submit="signin"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonComponent from '@src/components/basicComponents/ButtonComponent.vue';
import InputComponent from '@src/components/basicComponents/InputComponent.vue';
import { ButtonType } from '@src/enums/buttonEnum';
import { InputType } from '@src/enums/inputEnum';
import useAuthStore from '@src/store/auth';
import request from '@src/utils/request';

const storeAuth = useAuthStore();

const email = ref('');
const password = ref('');

async function signin() {
  try {
    const payload = {
      userData: {
        email : email.value,
        password : password.value
      }
    };
    const res: {data: {token: string, user: object}} = await request.post('/signin', payload);

    const {token, user} = res.data;
    
    storeAuth.setToken(token);
    storeAuth.setUser(user);

  } catch (error) {
    // Notify
    console.log(error);
  }
}

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