export const useLayoutManager = () => {
  const route = useRoute();

  const currentLayout = computed(() => {
    if (route.path.startsWith("/admin")) {
      return "admin";
    }else if (route.path.startsWith("/account")){
      return "account";
    }
    return "default";
  });

  return currentLayout;
};
