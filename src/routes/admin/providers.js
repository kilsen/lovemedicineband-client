import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider(process.env.REACT_APP_serverURL + '/api/v1');

export const authProvider = {
  async login({username, password}) {
    if (username !== process.env.REACT_APP_adminUser || password !== process.env.REACT_APP_adminPassword) {
      throw new Error("Login failed");
    }
    localStorage.setItem("username", username);
  },
  async checkError(error) {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      throw new Error("Session expired");
    }
    // other error codes (404, 500, etc): no need to log out
  },
  async checkAuth() {
    if (!localStorage.getItem("username")) {
      throw new Error("Not authenticated");
    }
  },
  async logout() {
    localStorage.removeItem("username");
  },
  async getIdentity() {
    const username = localStorage.getItem("username");
    return {id: username, fullName: username};
  },
};
