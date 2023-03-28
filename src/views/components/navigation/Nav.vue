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
            <router-link class="signUp" :to="`/home`">{{ $t('nav.signup') }}</router-link>
          </li>
          <li>
            <router-link class="signIn" :to="`/home`">{{ $t('nav.signin') }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <section class="view-section">
      <Home v-if="this.$route.name === 'HomePage'"></Home>
    </section>
    <footer>
      <div class="footer">
        <div class="footer-content">
          <div class="content-left">
            <div class="logo">
              <img src="../../../assets/nb-logo-quadrat.png" alt="logo" class="logo-icon" title="NeatBeat">
            </div>
          </div>
          <div class="content-middle">
            <div class="top-content">
              <span>&copy; 2023 NeatBeat - ISC License</span>
            </div>
            <div class="bottom-content">
              <ul class="footer-list">
                <li>
                  <router-link :to="`/home`">{{ $t('footer.agb') }}</router-link>
                </li>
                <li>
                  <span>|</span>
                </li>
                <li>
                  <router-link :to="`/home`">{{ $t('footer.impressum') }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="content-right">
            <ul>
              <li><a href="https://www.instagram.com/einfachvalle.png/" title="Instagram" target="_blank"
                  rel="noopener noreferrer"><i class="bi bi-instagram" id="insta"></i></a></li>
              <li><a href="https://www.linkedin.com/in/einfachvalle" title="LinkedIn" target="_blank"
                  rel="noopener noreferrer"><i class="bi bi-discord" id="linkedin"></i></a></li>
              <li><a href="https://github.com/EinfachValle" title="GitHub" target="_blank" rel="noopener noreferrer"><i
                    class="bi bi-github" id="github"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Navigation from './Nav';

  export default Navigation;

</script>

<style lang="scss" scoped>
  @import './Nav.scss';

</style>
