<template>
  <div id="Navigation">
    <loader v-if="this.loading" class="loader"></loader>
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
              <router-link :to="`/orders`">{{ $t('nav.orders') }}</router-link>
            </li>
            <li>
              <router-link :to="`/job`">{{ $t('nav.job') }}</router-link>
            </li>
            <li>
              <router-link :to="`/new`">{{ $t('nav.new') }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="profile">
        <ul class="profile-list">
          <li>
            <router-link class="signUp" :to="`/signup`">{{ $t('nav.signup') }}</router-link>
          </li>
          <li>
            <router-link class="signIn" :to="`/signin`">{{ $t('nav.signin') }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <section class="view-section">
      <Home v-if="this.$route.name === 'HomePage'"></Home>
      <OrdersPage v-if="this.$route.name === 'OrdersPage'"></OrdersPage>
      <JobPage v-if="this.$route.name === 'JobPage'"></JobPage>
      <NewPublicPage v-if="this.$route.name === 'NewPublicPage'"></NewPublicPage>
      <SignInPage v-if="this.$route.name === 'SignInPage'"></SignInPage>
      <SignUpPage v-if="this.$route.name === 'SignUpPage'"></SignUpPage>
      <AgbPage v-if="this.$route.name === 'AgbPage'"></AgbPage>
      <ImprintPage v-if="this.$route.name === 'ImprintPage'"></ImprintPage>
      <ParentsInfoPage v-if="this.$route.name === 'ParentsInfoPage'"></ParentsInfoPage>
      <PrivacyPage v-if="this.$route.name === 'PrivacyPage'"></PrivacyPage>
      <RightOfRecallPage v-if="this.$route.name === 'RightOfRecallPage'"></RightOfRecallPage>
    </section>
    <footer>
      <Footer></Footer>
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
