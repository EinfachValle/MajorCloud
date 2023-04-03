<template>
  <div id="Home">
    <section id="sec1">
      <div class="background-video">
      </div>
      <div class="content">
        <div class="text">
          <div class="t1">
            <h1>Die neue Art zum Musik machen</h1>
          </div>
          <div class="t2">
            <h2>Die Plattform für Produzenten</h2>
          </div>
          <div class="hr">
            <span class="line"></span>
          </div>
          <div class="t3">
            <h1>NEATBEAT</h1>
          </div>
        </div>
        <div class="buttons">
          <ul class="button-list">
            <li>
              <a href="#sec2">Mehr erfahren</a>
            </li>
            <li>
              <router-link :to="`/signin`">Konto erstellen</router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="sec2">
      <div class="content">
        <div class="swiper">
          <Slider></Slider>
        </div>
        <div class="text-block">
          <div class="text">
            <div class="t1">
              <h1>Finde deinen Artist!</h1>
            </div>
            <div class="t2">
              <h2>Gib deinen Text deine eigene Stimme. Durch unseren
                Artists auf unserer
                Plattform hast du die Möglichkeit für jede
                Songrichtung den Richtigen Sänger zu finden.</h2>
            </div>
          </div>
          <div class="buttons">

          </div>
        </div>
      </div>
    </section>
    <section id="sec3">
      <h1>Section 3</h1>
    </section>
  </div>
</template>

<script>
  import {
    SwiperContainer,
    SwiperSlide
  } from 'swiper/element';
  import Home from './home';

  export default Home;

</script>

<style lang="scss" scoped>
  @import './home.scss';

</style>
