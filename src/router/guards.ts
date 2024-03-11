export const useGuards = (router: any) => {
  router.beforeEach((to: any) => {
    return;
  });

  router.afterEach((to: any) => {
    window.document.title = to.meta?.title ?? "Admin";
  });
};
