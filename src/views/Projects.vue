<!-- Create file src/views/Page.vue -->

<template>
  <div class="wrapper">
    <b-alert show>Default Alert</b-alert>
    <prismic-rich-text :field="fields.projects_description" class="description"/>
        <div v-for="project in fields.projects" :key="project.uid">
        <a v-bind:href="'/projects/'+ project.uid">{{ $prismic.richTextAsPlain(project.data.project_title) }}
        </a>
    </div> 
  </div>   
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      documentId: "",
      fields: {
        projects_description: null,
        projects: []
      }
    };
  },
  methods: {
    getContent() {
      var that = this;
      return Promise.all([this.getPage(), this.getDisplayProjects()]);
    },
    getPage() {
      return this.$prismic.client
        .getByUID("projects", "pageprojects")
        .then(document => {
          if (document) {
            this.documentId = document.id;
            this.fields.projects_description =
              document.data.projects_description;
          } else {
            this.$router.push({ name: "not-found" });
          }
          return document;
        });
    },
    getDisplayProjects() {
      var that = this;
      return this.$prismic
        .getApi(this.$prismic.endpoint)
        .then(api => {
          return api.query(
            this.$prismic.Predicates.at("document.type", "project")
          );
        })
        .then(function(response) {
          if (!response) return Promise.reject();
          that.fields.projects = response.results;
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