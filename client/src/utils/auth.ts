import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return jwtDecode<JwtPayload>(token);

  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    const jwtToken = JSON.parse(localStorage.getItem(token)!);
    const current = Date.now()
    if (  jwtToken!.exp == undefined || current >= jwtToken!.exp * 1000) {
      return false;
    }
    else  
      return true;
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem("idToken") || "";
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem("idToken", idToken);
    // TODO: redirect to the home page
    window.location.href = "/";
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem("idToken");
    // TODO: redirect to the login page
    window.location.href = "/login";
  }
}

export default new AuthService();
