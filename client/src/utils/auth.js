// jwt token authorization
import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    // return token && !this.isTokenExpired(token) ? true : false;
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    try {
      // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      // If token hasn't passed its expiration time, return `false`
      return false;

    }
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.reload();
    window.location.assign("/");

  }
}

export default new AuthService();
