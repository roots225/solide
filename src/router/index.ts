// eslint-disable-next-line import/no-unresolved
import { createRouter, createWebHistory } from "vue-router";
// import { redirects, routes } from "./additional-routes";
import { useGuards } from "./guards";
import { routes } from "./routes";
import { App } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to: any) {
    if (to.hash) return { el: to.hash, behavior: "smooth", top: 60 };

    return { top: 0 };
  },
  routes: [...routes],
  // extendRoutes: (pages: any[]) => [...[...pages, ...routes]],
});

useGuards(router);
export { router };

export default function (app: App<Element>) {
  app.use(router);
}
