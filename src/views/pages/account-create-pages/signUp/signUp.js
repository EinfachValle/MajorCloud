export default {
  name: 'SignUp',
  data() {
    return {
      text: "",
    }
  },
  props: {
    toggleTheme: {
      type: Function,
      default: () => {},
    },
    currentTheme: {
      type: Boolean,
      default: () => true
    },
  },
  mounted() {
    const togglePassword = document.querySelector("#togglePassword");
    const togglePasswordRepeat = document.querySelector("#togglePasswordRepeat");
    const password = document.querySelector("#password");
    const passwordRepeat = document.querySelector("#password-repeat");

    togglePassword.addEventListener("click", function () {
      // toggle the type attribute
      const type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);

      // toggle the icon
      this.classList.toggle("bi-eye");
    });

    togglePasswordRepeat.addEventListener("click", function () {
      // toggle the type attribute
      const type = passwordRepeat.getAttribute("type") === "password" ? "text" : "password";
      passwordRepeat.setAttribute("type", type);

      // toggle the icon
      this.classList.toggle("bi-eye");
    });

    // prevent form submit
    const form = document.querySelector("form");
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }
}
