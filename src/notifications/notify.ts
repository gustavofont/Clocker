import { useToast } from 'vue-toastification';
import { TYPE } from 'vue-toastification';
import { defaultNotificationConfig } from './config';

const toast = useToast();

export default function notify(notificatiionType: TYPE, mss: string, config?: object) {
  const notificationConfig = {...defaultNotificationConfig, ...config, ...{ type: notificatiionType }};
  toast(mss, notificationConfig);
}