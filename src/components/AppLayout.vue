<template>
  <div class="app-layout">
    <header class="header">
      <div class="text-center">
        <img class="img" src="../assets/svg/logo.svg" />
      </div>
      <div class="text-center">My shirt shop</div>
    </header>
    <NavMenu />
    <!-- Menu will be here -->
    <router-view />
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue"
export default {
  components: {
    NavMenu
  }
}
</script>

<style lang="scss">
.header {
  .img {
    width: 64px;
    height: 64px;
  }
}
</style>
