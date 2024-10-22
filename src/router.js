import { createWebHashHistory, createRouter } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import UploadImages from "./components/UploadImages.vue";
import SignupPage from "./pages/SignupPage.vue";
import AboutSimple from "./pages/AboutSimple.vue";
import Services from "./pages/Services.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/mainPage", component: MainPage },
    { path: "/admin", component: UploadImages },
    { path: "/signup", component: SignupPage },
    { path: "/simple", component: AboutSimple },
    { path: "/services", component: Services },
  ],
});

export default router;
