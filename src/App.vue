<template>
  <div id="app">
    <router-view/>
    <FeedInstagram/>
    <footer-prismic/>
  </div>
</template>

<script>
import FeedInstagram from "./components/Instagram.vue";
import FooterPrismic from "./components/FooterPrismic.vue";

export default {
  name: "App",
  components: {
    FeedInstagram,
    FooterPrismic
  }
};
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/prismic-edit-button.css";
</style>
