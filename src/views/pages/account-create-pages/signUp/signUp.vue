<template>
  <div id="signUp">
    <div class="background">
      <div class="content-box">
        <div class="content-left">
          <i class="bi bi-person-circle"></i>
        </div>
        <div class="content-right">
          <div class="txt">
            <h1><b>{{ $t('signup.sign') }}</b></h1>
            <h2>{{ $t('signup.createMessage') }}</h2>
          </div>

          <form method="post">
            <p>
              <label for="email">{{ $t('signup.email') }}</label>
              <!-- <br> -->
              <input type="email" id="email" name="email" placeholder="example@example.com" required>
            </p>

            <p>
              <label for="password">{{ $t('signup.password') }}</label>
              <input type="password" placeholder="**********" name="password" id="password" required>
              <i class="bi bi-eye-slash" id="togglePassword"></i>
            </p>

            <p>
              <label for="password-repeat">{{ $t('signup.repeatPassword') }}</label>
              <input type="password" placeholder="**********" name="password-repeat" id="password-repeat" required>
              <i class="bi bi-eye-slash" id="togglePasswordRepeat"></i>
            </p>

            <label for="remindPassword" class="checkboxTxt">{{ $t('signup.remindPassword') }}
              <input type="checkbox" id="remindPassword" name="remindPassword">
              <span class="checkmark"></span>
            </label>

            <label for="assignPrivacy" class="checkboxTxt" id="lastChild">{{ $t('signup.agreePrivacy') }}
              <input type="checkbox" id="assignPrivacy" checked="checked" name="assignPrivacy" required>
              <span class="checkmark"></span>
            </label>

            <button type="submit" id="submit" class="submit">{{ $t('signup.create') }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import signUp from './signUp';

  export default signUp;

</script>

<style lang="scss" scoped>
  @import './signUp.scss';

</style>
