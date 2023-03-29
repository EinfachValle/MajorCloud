<template>
  <div id="Home">
    <section class="sec1">
      <div class="background-video">
        <div class="content">
          <div class="text">
            <div class="t1">
              <h1>Die neue Art zum Musik machen</h1>
            </div>
            <div class="t2">
              <h2>Die Plattform für Produzenten</h2>
            </div>
          </div>
          <div class="buttons">
            <ul>
              <li>
                <a href="#sec2">Mehr erfahren</a>
              </li>
              <li>
                <router-link :to="`/signup`">Konto erstellen</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="sec2">

    </section>
    <section class="sec3">

    </section>
  </div>
</template>

<script>
  import Home from './home';

  export default Home;

</script>

<style lang="scss" scoped>
  @import './home.scss';

</style>
