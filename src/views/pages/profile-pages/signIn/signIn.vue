<template>
  <div id="signIn">
    <h1>Sign In To an Account</h1>
    <p><input type="email" placeholder="Email" v-model="email" required></p>
    <p><input type="password" placeholder="Password" v-model="password" required></p>
    <p v-if="errorMsg">{{ errorMsg }}</p>
    <p><button @click="register">Sign In</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  </div>
</template>

<script setup>
  import {
    ref
  } from "vue";
  import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
  } from "firebase/auth";
  import {
    useRouter
  } from 'vue-router';

  const email = ref("");
  const password = ref("");
  const router = useRouter();
  const errorMsg = ref();

  const register = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        // eslint-disable-next-line
        console.log("Successfully Signed In!");
        router.push('/home')
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            errorMsg.value = `Invalid Email`;
            break;
          case "auth/user-not-found":
            errorMsg.value = "No account with that email was found";
            break;
          case "auth/wrong-password":
            errorMsg.value = "Incorrect Password";
            break;
          default:
            errorMsg.value = "Email or Password was incorrect";
        }
      })
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        // eslint-disable-next-line
        console.log(result.user);
        router.push("/home");
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error.code);
      });
  };

</script>

<style lang="scss" scoped>
  @import './signIn.scss';

</style>
