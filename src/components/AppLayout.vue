<template>
  <div class="app-layout">
    <header class="header">
      <div><img class="img" src="../assets/svg/logo.svg" /></div>
      <div>My shirt shop</div>
    </header>
    <!-- Menu will be here -->
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  .img {
    width: 64px;
    height: 64px;
  }
}
</style>
