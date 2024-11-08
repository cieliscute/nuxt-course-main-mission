// export const useLayoutManager = () => {
//   return ref()
// }
export const useLayoutManager = () => {
  const route = useRoute()
  
  const currentLayout = computed(() => {
    if (route.path.startsWith('/admin')) {
      return 'admin'
    }
    return 'default'
  })
  
  return {
    currentLayout
  }
}