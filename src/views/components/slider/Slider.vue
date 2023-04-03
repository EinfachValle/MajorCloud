<template>
  <div id="Slider">
    <div class="slider-component">
      <div class="slider-container">
        <div class="slider">
          <div class="front"></div>
          <div class="back"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <p />
      </div>
      <div id="swipe-elements">
        <button @click="LeftSide">
          <i class="bi bi-chevron-left chevron"></i>
        </button>
        <button @click="RightSide">
          <i class="bi bi-chevron-right chevron"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Slider from './Slider';

  export default Slider;

</script>

<style lang="scss" scoped>
  @import './Slider.scss';

</style>
