<template>
  <div id="app">
    <router-view/>
    <footer-prismic/>
  </div>
</template>

<script>
import FooterPrismic from "./components/FooterPrismic.vue";
import VueInstagram from "./components/Instagram.vue";

export default {
  name: "App",
  components: {
    FooterPrismic,
    VueInstagram
  }
};
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/prismic-edit-button.css";
</style>
