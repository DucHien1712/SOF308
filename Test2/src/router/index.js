import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../components/EntryPage.vue";

const routes = [
  {
    path: "/",
    name: "EntryPage",
    component: EntryPage
  }
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;
