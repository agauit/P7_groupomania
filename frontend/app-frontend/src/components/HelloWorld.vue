<template>
  <h1> Il faut afficher :  {{this.texte}}</h1>

</template>

<script>
import Vue from "vue";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  name : "axios",

  data() {
    return {
      errored: false,
      texte: "",
      id: this.id,
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/api/test')
        .then(response => {
          console.log(response.data.texte);
          this.texte = response.data.texte;
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
