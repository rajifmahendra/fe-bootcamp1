export function authMiddleware(to, from, next) {
    const isAuthenticated = !!localStorage.getItem('access_token');  // Check if token exists in localStorage
  
    // Check if the route requires authentication and the user is not authenticated
    if (to.meta.requiresAuth && !isAuthenticated) {
      return next('/login');  // Redirect to login if not authenticated
    }
  
    // Check if the route should be for guests only and the user is authenticated
    if (to.meta.guestOnly && isAuthenticated) {
      return next('/');  // Redirect to home page if user is already logged in
    }
  
    next();  // Allow navigation if no issues
  }
  