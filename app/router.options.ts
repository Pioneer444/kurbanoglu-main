// Router options to suppress warnings for .well-known paths
export default {
  // Suppress warnings for Chrome DevTools .well-known requests
  scrollBehavior(to, from, savedPosition) {
    // Ignore .well-known paths
    if (to.path.includes('/.well-known/')) {
      return false
    }
    
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
}
