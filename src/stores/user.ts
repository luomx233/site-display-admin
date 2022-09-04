import { defineStore } from "pinia";
import router from "@/router";
import login from "@/base/network/user/login";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    username: "",
    token: "",
    userid: "",
  }),
  actions: {
    getUser() {
      this.username = window.localStorage.getItem("username");
      this.token = window.localStorage.getItem("token");
      this.userid = window.localStorage.getItem("userid");
    },
    clearUser() {
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userid");
      this.getUser();
      router.push("/login");
    },
    async login(user) {
      const res = await login(user);
      if (res.id) {
        window.localStorage.setItem("username", res.username);
        window.localStorage.setItem("token", res.token);
        window.localStorage.setItem("userid", res.id);
      }
      router.push("/home");
    },
  },
});
