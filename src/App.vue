/* eslint-disable */
<template>
  <div id="app">
    <div :class="{'nav-open': NavbarStore.showNavbar}">
      <router-view name="header"/>
      <div>
        <router-view/>
      </div>
      <router-view name="footer"/>
      <FeedInstagram/>
      <footer-prismic/>
    </div>
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
