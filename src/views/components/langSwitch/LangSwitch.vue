<template>
  <div id="langSwitch">
    <div class="dropdown">
      <div @click="openLangSwitch()" class="dropbtn bi bi-translate" title="Change Language"></div>
      <div id="myDropdown" class="dropdown-content">
        <router-link to="" @click.prevent="changeLanguage('de')">
          <i class="flag-germany flag"></i>
          <p>Deutsch</p>
        </router-link>

        <router-link to="" @click.prevent="changeLanguage('en')">
          <i class="flag-england flag"></i>
          <p>English</p>
        </router-link>

        <router-link to="" @click.prevent="changeLanguage('es')">
          <i class="flag-spain flag"></i>
          <p>Español</p>
        </router-link>

        <router-link to="" @click.prevent="changeLanguage('jp')">
          <i class="flag-japan flag"></i>
          <p>Japanese</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'langSwitch',
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE,
    };
  },
  methods: {
    openLangSwitch() {
      document.getElementById('myDropdown').classList.toggle('show');
    },
    hideDropdown() {
      this.isDropdownOpened = false;
    },
    changeLanguage(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.$router.push({
          params: {
            lang: this.$i18n.locale,
          },
        });
      }
      this.hideDropdown();
      localStorage.setItem('locale', locale);
    },
  },
  async mounted() {
    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName('dropdown-content');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
#langSwitch {
  .dropbtn {
    color: var(--nav-color);
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: fixed;
    background-color: var(--background);
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 2%;
    right: 26px;
    z-index: 1;
  }

  .dropdown-content a {
    color: var(--color);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown a:hover {
    background-color: var(--backgroundHover);
  }

  .dropdown-content a .flag {
    float: left;
    position: relative;
    top: 6px;
  }

  .dropdown-content a p {
    display: flex;
    position: relative;
    left: 15px;
    margin-bottom: 0;
  }

  .show {
    display: block;
  }
}

.dark {
  #langSwitch {
    --backgroundHover: #3c4042;
  }
}

.light {
  #langSwitch {
    --backgroundHover: #ddd;
  }
}

</style>
