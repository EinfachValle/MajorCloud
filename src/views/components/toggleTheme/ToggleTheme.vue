<template>
  <div id="ToggleTheme">
    <div class="toggle">
      <div v-if="currentTheme" @click="toggleTheme()" title="Change to Light" id="toggleBtn"><i
          class="bi bi-brightness-high toggle"></i></div>
      <div v-else @click="toggleTheme()" title="Change to Dark" id="toggleBtn"><i class="bi bi-moon toggle"></i></div>
    </div>

  </div>
</template>

<script>
import ToggleTheme from './ToggleTheme';

export default ToggleTheme;
</script>

<style lang="scss" scoped>
@import './ToggleTheme.scss';
</style>
