// Handle .well-known requests silently to prevent Vue Router warnings
export default defineEventHandler((event) => {
  // Cloudflare Workers compatible way to get URL
  const url = getRequestURL(event)
  const path = url.pathname || ''
  
  // Handle Chrome DevTools .well-known requests silently
  if (path.includes('/.well-known/')) {
    setResponseStatus(event, 404)
    return null
  }
})
