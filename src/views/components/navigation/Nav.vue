<template>
  <div id="Navigation">
    <div class="navigation">
      <div class="logo">
        <router-link :to="`/home`">
          <img src="../../../assets/nb-logo.png" alt="logo" class="logo-icon" title="NeatBeat">
        </router-link>
      </div>
      <div class="nav">
        <nav>
          <ul class="nav-list">
            <li>
              <router-link :to="`/home`">{{ $t('nav.home') }}</router-link>
            </li>
            <li>
              <router-link :to="`/home`">{{ $t('nav.orders') }}</router-link>
            </li>
            <li>
              <router-link :to="`/home`">{{ $t('nav.job') }}</router-link>
            </li>
            <li>
              <router-link :to="`/home`">{{ $t('nav.new') }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="profile">
        <ul class="profile-list">
          <li>
            <router-link :to="`/home`">{{ $t('nav.signup') }}</router-link>
          </li>
          <li>
            <router-link :to="`/home`">{{ $t('nav.signin') }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <section class="view-section">
      <Home v-if="this.$route.name === 'HomePage'"></Home>
    </section>
  </div>
</template>

<script>
  import Navigation from './Nav';

  export default Navigation;

</script>

<style lang="scss" scoped>
  @import './Nav.scss';

</style>
