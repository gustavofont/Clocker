<template>
  <div class="signup-form">
    <InputComponent
      class="signin-input"
      :type="InputType.TEXT"
      :icon="'alternate_email'"
      :placeholder="'Email'"
      :model-value="email"
      @update:model-value="(value) => email = value"
    />
    <InputComponent
      class="signin-input"
      :type="InputType.TEXT"
      icon="badge"
      :placeholder="'Name'"
      :model-value="name"
      @update:model-value="(value) => name = value"
    />
    <InputComponent
      class="signin-input"
      :type="InputType.PASSWORD"
      icon="password"
      :placeholder="'Password'"
      :model-value="password"
      @update:model-value="(value) => password = value"
    />
    <InputComponent
      class="signin-input"
      :type="InputType.PASSWORD"
      icon="password_2"
      :placeholder="'Confirm password'"
      :model-value="confirmPassword"
      @update:model-value="(value) => confirmPassword = value"
    />
    <ButtonComponent
      class="submit-button"
      :type="ButtonType.SECONDARY"
      :text="'Signup'"
      :width="'250px'"
      @submit="signup"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ButtonComponent from '@src/components/basicComponents/ButtonComponent.vue';
  import InputComponent from '@src/components/basicComponents/InputComponent.vue';
  import { ButtonType } from '@src/enums/buttonEnum';
  import { InputType } from '@src/enums/inputEnum';
  import notify from '@src/notifications/notify';
  import request from '@src/utils/request';
  import { NotificationType } from '@src/enums/notificationEnum';

  const email = ref<string>('');
  const name = ref<string>('');
  const password = ref<string>('');
  const confirmPassword = ref<string>('');

  async function signup() {
    if(password.value !== confirmPassword.value) {
      // notify
      console.log('email and confirm email neet to be equals');
      return;
    }
    try {
      const payload = {
        userData: {
          email : email.value,
          name: name.value,
          password : password.value
        }
      };
      const res = await request.post('/signup', payload);
      if(res.status === 200) {
        notify(NotificationType.SUCCESS, 'Account created !');
      } else {
        notify(NotificationType.INFO, res.data);
      }

    } catch (error: any) {
      notify(NotificationType.ERROR, error.response.data);
      console.log(error);
    }
  }

</script>

<style>
  .signup-form {
    margin-top: 5px;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .signin-input {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>