<template>
  <div id="app" :class="currentTheme ? 'dark' : 'light'">
    <div id="Page404" v-if="this.$route.path.startsWith('/404')">
        <page-404>
          <div></div>
        </page-404>
      </div>

      <div id="View" v-else>
          <Navigation :toggleTheme="toggleTheme" :currentTheme="currentTheme">
            <div>
              <router-view></router-view>
            </div>
          </Navigation>
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

