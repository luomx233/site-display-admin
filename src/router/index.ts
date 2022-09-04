import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/home/",
          redirect: "/home/list",
        },
        {
          path: "/home/add",
          name: "add",
          component: () => import("../views/Add.vue"),
        },
        {
          path: "/home/list",
          name: "list",
          component: () => import("../views/List.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});
router.beforeEach((to, from) => {
  if (to.path != "/login") {
    const token = window.localStorage.getItem("token");
    console.log(token);
    if (!token) {
      return "/login";
    }
  }
});
export default router;
