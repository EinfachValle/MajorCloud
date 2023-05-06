<template>
  <div id="signUp">
    <div class="background">
      <div class="content-box">
        <div class="content-left">
          <i class="bi bi-person-circle"></i>
        </div>
        <div class="content-right">
          <h1><b>Registrierung</b></h1>
          <h2>Erstelle dein Benutzerkonto um Zugriff auf Neatbeat zu bekommen.</h2>

          <form method="post">
            <p>
              <label for="email">Deine E-Mail Adresse</label>
              <!-- <br> -->
              <input type="email" id="email" name="email" placeholder="example@example.com" required>
            </p>

            <p>
              <label for="password">Dein Passwort</label>
              <input type="password" placeholder="**********" name="password" id="password" required>
              <i class="bi bi-eye-slash" id="togglePassword"></i>
            </p>

            <p>
              <label for="password-repeat">Dein Passwort Wiederholen</label>
              <input type="password" placeholder="**********" name="password-repeat" id="password-repeat" required>
              <i class="bi bi-eye-slash" id="togglePasswordRepeat"></i>
            </p>

            <label for="remindPassword" class="checkboxTxt">Passwort Merken
              <input type="checkbox" id="remindPassword" name="remindPassword">
              <span class="checkmark"></span>
            </label>

            <label for="assignPrivacy" class="checkboxTxt" id="lastChild">Ich stimme den Datenschutzbestimmungen sowie den Allgemeinen
              Geschäftsbedingungen zu.
              Dazu bestätige ich, dass ich über 16 Jahre Alt bin. Ich stimme zu, dass die Anmeldedaten über eine
              SSL-Verbindung an NeatBeat übertragen werden.
              <input type="checkbox" id="assignPrivacy" checked="checked" name="assignPrivacy" required>
              <span class="checkmark"></span>
            </label>

            <button type="submit" id="submit" class="submit">Account Erstellen</button>
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
