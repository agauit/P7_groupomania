<template>
  <div class="signup">
    <h1>Inscription à Groupomania</h1>

    <form id="form"
          @submit="sendForm">

      <div v-if="errors.length">
        <b>Merci de bien remplir les champs ci-dessous:</b>
        <p v-for="error in errors">{{ error }}</p>
      </div>

      <div>
        <label for="firstname"> Prénom </label>
        <input v-model="firstname" type="text" id="firstname" name="firstname">
      </div>

      <div>
        <label for="lastname"> Nom </label>
        <input v-model="lastname" type="text" id="lastname" name="lastname">
      </div>

      <div>
        <label for="email"> Email </label>
        <input v-model="email" type="email" id="email" name="email">
      </div>

      <div>
        <label for="password"> Mot de passe </label>
        <input v-model="password" type="password" id="password" name="password">
      </div>

      <input type="submit" value="S'inscrire">

    </form>

  </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from "../router";

Vue.use(VueAxios, axios);

export default {
  name: 'signup',
  data() {
    return {
      errors: [],
      firstname: null,
      lastname: null,
      email: null,
      password: null,
    }
  },
  methods: {
    sendForm(e) {
      e.preventDefault();

      this.errors = [];
      if (!this.firstname) {
        this.errors.push('Merci de renseigner votre prénom');
      }
      if (!this.lastname) {
        this.errors.push('Merci de renseigner votre nom');
      }
      if (!this.email) {
        this.errors.push('Merci de renseigner votre email');
      }

      if (!this.password) {
        this.errors.push('Merci de renseigner votre mot de passe');
      }

      if (this.errors.length > 0) {
        return;
      }

      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
      const body = {
        name: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      }

      axios.post("http://localhost:3000/api/auth/signup",
         JSON.stringify(body),
          {
            headers : headers,
          }
      )
          .then((response) => {
            console.log("données envoyées au back", response);
          })
          .catch((error) => {
            alert(error.status);
            console.log(error);
          })
    },
  }
}
</script>
