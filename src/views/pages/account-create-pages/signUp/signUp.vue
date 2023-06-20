<template>
  <div id="signUp">
    <h1>Create an Account</h1>
    <p><input type="email" placeholder="Email" v-model="email" required></p>
    <p><input type="password" placeholder="Password" v-model="password" required></p>
    <p><button @click="register">Register</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { useRouter } from 'vue-router';

  const email = ref("");
  const password = ref("");
  const router = useRouter();

  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        // eslint-disable-next-line
        console.log("Successfully Registered!");
        router.push('/home')
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error.code);
        // eslint-disable-next-line
        alert(error.message);
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
  @import './signUp.scss';
</style>
