<template>
  <div class="container">
    <span class="logo" />
    <div class="SwitcherContainer">
      <div class="switcherHearder">
        <div
          :class="`switchBlock${selectedBlock === 'Signin' ? ' selected': ''}`"
          @click="selectBlock('Signin')"
        >
          Signin
        </div>
        <div
          :class="`switchBlock${selectedBlock === 'Signup' ? ' selected': ''}`"
          @click="selectBlock('Signup')"
        >
          Signup
        </div>
      </div>
      <div class="blockContent">
        <SigninView v-if="selectedBlock === 'Signin'" />
        <SignupCard v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import SigninView from '@src/components/SigninCard.vue';
  import SignupCard from '@src/components/SignupCard.vue';

  type SwitchOption = 'Signin' | 'Signup';

  const selectedBlock = ref<SwitchOption>('Signin');

  function selectBlock(option: SwitchOption) {
    selectedBlock.value = option;
  }
</script>

<style>
body {
  background-image: url("/src/assets/images/Background.jpg");
  height:100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.SwitcherContainer {
  height: 40vh;
  width: 50vh;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(216, 216, 216);
  backdrop-filter: blur(5px);
}

.switcherHearder {
  display: flex;
  width: 100%;
  height: 7vh;
  align-items: center;
  justify-content: center;
}

.switchBlock {
  font-size: 16px;
  font-weight: 600;
  opacity: 0.9;
  border: 0px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0,0.22);
  font-family: Monospace;
  color: white;
}

.switchBlock.selected {
  background-color: rgb(216, 216, 216);
  color: black;
}

.blockContent {
  width: 100%;
  height: 100%;
}
</style>