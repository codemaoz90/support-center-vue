<template>
  <nav class="menu">
    <!-- Links here -->
    <div>
      <b-navbar type="dark" variant="dark" class="mb-3 justify-content-center">
        <b-navbar-nav>
          <!-- This b-nav-item works like  router link-->
          <b-nav-item :to="{ name: 'home' }" exact>Home </b-nav-item>
          <b-nav-item :to="{ name: 'faq' }">FAQ</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style style="scss">
.router-link-active {
  border-bottom: 2px solid aqua;
}
</style>
