import { USER_JWT_KEY } from "shared/config";

class LocalStorage {
  static getUserJWT() {
    return localStorage.getItem(USER_JWT_KEY);
  }
  static clearUserJWT() {
    localStorage.removeItem(USER_JWT_KEY);
  }
  static setUserJWT(jwtKey: string) {
    localStorage.setItem(USER_JWT_KEY, jwtKey);
  }
}

export { LocalStorage };
