import { defineStore } from 'pinia';
import { ref } from 'vue';

const useAuthStore = defineStore('auth', ()=> {
  const token = ref(localStorage.getItem('token'));
  const user = ref(localStorage.getItem('user'));

  function setToken(newToken: string){
    localStorage.setItem('token', newToken);
    token.value = newToken;
  }

  function setUser(newUser: any) {
    localStorage.setItem('user', JSON.stringify(newUser));
    user.value = newUser;
  }

  return {
    setToken,
    setUser
  };
});

export default useAuthStore;