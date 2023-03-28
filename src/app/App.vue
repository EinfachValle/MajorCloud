<template>
  <div id="app">
    <div id="Page404" v-if="this.$route.path.startsWith('/404')">
        <page-404>
          <div></div>
        </page-404>
      </div>

      <div id="View" v-else>
        <div :toggleTheme="toggleTheme" :currentTheme="currentTheme">
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import App from './App';

export default App;
</script>

<style lang="scss">
@import './App.scss';
</style>

