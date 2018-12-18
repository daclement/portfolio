import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/NotFound.vue";
import Project from "./views/Project.vue";
import Projects from "./views/Projects.vue";
import Flashs from "./views/Flashs.vue";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

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
    },
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],

  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
