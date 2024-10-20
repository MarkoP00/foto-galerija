import { createWebHashHistory, createRouter } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import UploadImages from "./components/UploadImages.vue";
import SignupPage from "./pages/SignupPage.vue";
import About from "./pages/About.vue";
import AboutSimple from "./components/AboutSimple.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/mainPage", component: MainPage },
    { path: "/admin", component: UploadImages },
    { path: "/signup", component: SignupPage },
    { path: "/about", component: About },
    { path: "/simple", component: AboutSimple },
  ],
});

export default router;
