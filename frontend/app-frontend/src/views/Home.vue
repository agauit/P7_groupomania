<template>
  <div id="app">
  <h1> Bienvenue sur Groupomania </h1>

    <div class="d-flex flex-column">
      <router-link to="/login">
        <button type="button" class="btn btn-success"> Se connecter </button>
      </router-link>

      <router-link to="/signup">
      <button type="button" class="btn btn-link"> Vous n'avez pas de compte ? S'inscrire </button>
      </router-link>
    </div>
  </div>


</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>

@import'~bootstrap/dist/css/bootstrap.css';
</style>