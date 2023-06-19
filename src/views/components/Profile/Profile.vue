<template>
  <div id="Profile">
    <!-- <h1>mail Profile</h1> -->
    <div id="search">
      <i class="bi bi-search"></i>
      <input class="searchInput" type="text" v-model="input" placeholder="Search" />
    </div>
    <div id="message">
      <div class="box">
        <div class="message">
          <i class="bi bi-envelope-fill"></i>
        </div>
      </div>
    </div>
    <div id="ProfileMenu"></div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import './Profile.scss';
</style>
