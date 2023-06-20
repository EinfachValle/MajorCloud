<template>
  <div id="app" :class="currentTheme ? 'dark' : 'light'">
      <div id="View">
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
// @import '../assets/sass/var';
@import './App.scss';
</style>

