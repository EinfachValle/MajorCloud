<template>
  <div id="Home">
    <div class="HomePage" v-if="!isLoggedIn">
      <UnRegister></UnRegister>
    </div>
    <div class="dashboard" v-if="isLoggedIn">
      <Dashboard></Dashboard>
    </div>
  </div>
</template>

<script>
  import Home from './home';

  export default Home;

</script>

<style lang="scss" scoped>
  @import './home.scss';

</style>
