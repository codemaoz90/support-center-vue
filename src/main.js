import Vue from "vue"
import router from "./router"
import AppLayout from "./components/AppLayout"

Vue.config.productionTip = false

new Vue({
  render: (h) => h(AppLayout),
  router
}).$mount("#app")
