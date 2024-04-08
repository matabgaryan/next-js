interface AuthState {
  token: string | null;
}

class AuthService {
  private authState: AuthState = {
    token: null,
  };

  getToken(): string | null {
    return this.authState.token;
  }

  setToken(token: string): void {
    this.authState.token = token;
  }

  clearToken(): void {
    this.authState.token = null;
  }

  isAuthenticated(): boolean {
    return this.authState.token !== null;
  }
}

const authService = new AuthService();

export default authService;
