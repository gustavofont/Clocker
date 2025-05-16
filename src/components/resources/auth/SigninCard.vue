<template>
  <div class="signinForm">
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
  import InputComponent from '@src/components/basicComponents/SigninInput.vue';
  import { ButtonType } from '@src/enums/buttonEnum';
  import { InputType } from '@src/enums/inputEnum';
  import useAuthStore from '@src/store/auth';
  import request from '@src/utils/request';
  import notify from '@src/notifications/notify';
  import { NotificationType } from '@src/enums/notificationEnum';

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

      window.location.href = import.meta.env.BASE_URL;

    } catch (error: any) {
    // Notify
      notify(NotificationType.ERROR, error.response.data);
      console.log(error);
    }
  }
</script>

<style>
.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.signin-input {
  padding: 0%;
}

.logoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logoContainer .logo{
  width: 200px;
}

.signinForm {
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
</style>