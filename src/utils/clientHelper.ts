import "client-only"
export const checkIsLogin = (() => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("access_token")
  }
})()