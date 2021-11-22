<template>
  <div class="login">
    <h1> Connexion à Groupomania </h1>

    <form
        id="form"
        @submit="sendForm">

      <div>
        <label for="email"> Email </label>
        <input type="email" id="email" name="email">
      </div>

      <div>
        <label for="password"> Mot de passe </label>
        <input type="text" id="password" name="password">
      </div>

      <input type="submit" value="Se connecter">
    </form>

  </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
export default {
  name: 'login',
  data() {
    return {
      errors: [],
      email: null,
      password: null,
    }
  },
  methods: {
    sendForm(e) {
      if (this.email && this.password) {
        return true;
      }

      if (!this.email) {
        this.errors.push('Merci de renseigner votre email');
      }

      if (!this.password) {
        this.errors.push('Merci de renseigner votre mot de passe');
      }
      e.preventDefault();

      axios.post("http://localhost:3000/api/auth/login", {
        email : this.email,
        password : this.password,
      })

    }
  }
}
</script>
