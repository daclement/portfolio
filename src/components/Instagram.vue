<template>
  <vue-instagram token="18475323.4d9d0c6.08144b9dd7ae46d3b1ecef403cd5bd2c" :count="5" :tags="['#tattoo']" mediaType="image">
    <template slot="feeds" slot-scope="props">
      <li class="fancy-list"> {{ props.feed.link }} </li>
    </template>
    <template slot="error" slot-scope="props">
      <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
  </vue-instagram>
</template>
 
<script>
export default {
  name: "VueInstagram"
};
</script>