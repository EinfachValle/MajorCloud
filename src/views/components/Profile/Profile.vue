<template>
  <div id="Profile">
    <div id="search">
      <div class="search-box">
        <label for="search"><i class="bi bi-search"></i></label>
        <input type="text" id="search" name="search" placeholder="Profil Suchen..." required>
      </div>
    </div>
    <div id="message">
      <div class="message">
        <router-link :to="`/messages`" title="Nachrichten">
          <i class="bi bi-envelope-fill"></i>
        </router-link>
      </div>
    </div>
    <div id="ProfileMenu">
      <div class="dropdown">
        <a class="showDropdown" href="#" v-on:click.prevent="showDropDown=!showDropDown">
          <img src="../../../assets/img/svg/profile-circle.svg" alt="avatar">
          <i :class="{ 'bi-caret-up-fill': showDropDown, 'bi-caret-down-fill': !showDropDown }" class="bi" aria-hidden="true"></i>
        </a>
        <div v-if="showDropDown" class="dropdown-content">
          <router-link v-for="link in links" :key="link.name" :to="`${ link.route }`" class="dd-link">
            <i :class="`${ link.icon }`" class="bi"></i>
            {{link.name}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      showDropDown: false,
      links: [
        {
          name: "What's New",
          icon: "bi-newspaper",
          route: `/new`
        },
        {
          name: "My Profile",
          icon: "bi-person-fill",
          route: `/profile`
        },
        {
          name: "Settings",
          icon: "bi-sliders",
          route: `/profile/settings`
        },
        {
          name: "Logout",
          icon: "bi-door-closed-fill",
          route: `/home`
        }
      ]
    };
  },
}

</script>

<style lang="scss" scoped>
  @import './Profile.scss';

</style>
