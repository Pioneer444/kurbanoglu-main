// Handle .well-known requests silently to prevent Vue Router warnings
export default defineEventHandler((event) => {
  const path = event.node.req.url || ''
  
  // Handle Chrome DevTools .well-known requests silently
  if (path.includes('/.well-known/')) {
    setResponseStatus(event, 404)
    return null
  }
})
