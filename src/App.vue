<template>
  <div id="app">
    <router-view/>
    <MyVueInstagram/>
    <footer-prismic/>
  </div>
</template>

<script>
import MyVueInstagram from "./components/Instagram.vue";
import FooterPrismic from "./components/FooterPrismic.vue";

export default {
  name: "App",
  components: {
    MyVueInstagram,
    FooterPrismic
  }
};
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/prismic-edit-button.css";
</style>
