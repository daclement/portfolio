<template>
  <vue-instagram token="18475323.4d9d0c6.08144b9dd7ae46d3b1ecef403cd5bd2c" :count="5" :tags="['tattoo']" mediaType="image">
    <template slot="feeds" slot-scope="props">
        <li class="instagram-media fancy-list"> {{ props.feed.link }} </li>
        <img :src=" props.feed.images.standard_resolution.url " alt="">
    </template>
    <template slot="error" slot-scope="props">
      <div class="fancy-alert">{{ props.error.error_message }}</div>
    </template>
  </vue-instagram>
</template>
 
<script>
import VueInstagram from "vue-instagram";

export default {
  name: "FeedInstagram",
  components: {
    VueInstagram
  }
};
</script>