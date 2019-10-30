/*挂载激活vue实例*/
import { createApp } from "./app";

const { app, router } = createApp();
router.onReady(() => {
  app.$mount("#app");
});
