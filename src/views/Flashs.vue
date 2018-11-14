<template>
  <div class="wrapper">
    <prismic-rich-text :field="fields.flashs_description" class="description"/>
        <div v-for="flash in fields.flashs" :key="flash.uid">
        <a v-bind:href="'/flashs/'+ flash.uid">{{ $prismic.richTextAsPlain(flash.data.flash_title) }}
        </a>
    </div> 
  </div>   
</template>

<script>
export default {
  name: "Flashs",
  data() {
    return {
      documentId: "",
      fields: {
        flashs_description: null,
        flashs: []
      }
    };
  },
  methods: {
    getContent() {
      var that = this;
      return Promise.all([this.getPage(), this.getDisplayflashs()]);
    },
    getPage() {
      return this.$prismic.client
        .getByUID("flashs", "pageflashs")
        .then(document => {
          if (document) {
            this.documentId = document.id;
            this.fields.flashs_description = document.data.flashs_description;
          } else {
            this.$router.push({ name: "not-found" });
          }
          return document;
        });
    },
    getDisplayflashs() {
      var that = this;
      return this.$prismic
        .getApi(this.$prismic.endpoint)
        .then(api => {
          return api.query(
            this.$prismic.Predicates.at("document.type", "flash")
          );
        })
        .then(function(response) {
          if (!response) return Promise.reject();
          that.fields.flashs = response.results;
          console.log(response.results);
          return response;
        });
    }
  },
  created() {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};
</script>

<style>
</style>