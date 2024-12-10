import { POSITION } from 'vue-toastification';

export const defaultNotificationConfig = {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
};

export const toastConfig = {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true
};