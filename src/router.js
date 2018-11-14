import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/NotFound.vue";
import Project from "./views/Project.vue";
import Projects from "./views/Projects.vue";
import Flashs from "./views/Flashs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: { name: "Projects" }
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/projects/:uid",
      name: "Project",
      component: Project
    },
    {
      path: "/flashs",
      name: "Flashs",
      component: Flashs
    },

    {
      path: "/not-found",
      name: "not-found",
      component: NotFound
    },
    {
      path: "*",
      redirect: { name: "not-found" }
    }
  ]
});
