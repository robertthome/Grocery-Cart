export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/foods`
    : 'http://localhost:3001/foods'
