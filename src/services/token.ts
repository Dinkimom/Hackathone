const tokenKey = 'authorization_token';

export function setAuthToken(token: string) {
  try {
    localStorage.setItem(tokenKey, token);
  } catch (err) {
    console.error(err);
  }
}

export function getAuthToken() {
  try {
    return localStorage.getItem(tokenKey);
  } catch (err) {
    console.error(err);
  }
}

export function deleteAuthToken() {
  try {
    return localStorage.removeItem(tokenKey);
  } catch (err) {
    console.error(err);
  }
}
