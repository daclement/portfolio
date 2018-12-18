
<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-md-4">
        <div class="img-wrapper">
          <prismic-image :field="fields.image" class="img"/>
        </div>
      </div>
      <div class="col-md-8">
        <prismic-edit-button :documentId="documentId"/>
        <h1 class="title">{{ $prismic.richTextAsPlain(fields.project_title) }}</h1>
        <prismic-rich-text :field="fields.project_description" class="description"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      documentId: "",
      fields: {
        project_title: null,
        project_description: null,
        image: null
      }
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getByUID("project", uid).then(document => {
        if (document) {
          this.documentId = document.id;
          this.fields.project_title = document.data.project_title;
          this.fields.project_description = document.data.project_description;
          this.fields.image = document.data.image;
        } else {
          this.$router.push({ name: "not-found" });
        }
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