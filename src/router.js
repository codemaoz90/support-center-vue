import Vue from "vue"
import VueRouter from "vue-router"
// Importing components Home, Faq
import Home from "./components/Home.vue"
import FAQ from "./components/FAQ.vue"
Vue.use(VueRouter)
const routes = [
  // Routes will be here.
  { path: "/", name: "home", component: Home },
  { path: "/faq", name: "faq", component: FAQ }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
