const API_URL = 'https://api.gitter.im/v1';

class Api {
  token = null;

  setToken = (token) => {
    this.token = token;
  }

  fetchResource = (resource) => {
    const url = `${API_URL}/${resource}`;
    const options = {
      method: 'get',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.token}`,
      }
    };

    return fetch(url, options)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Unauthorized');
          }

          throw new Error('Unknown');
        }

        return response.json();
      });
  }

  fetchUser = () => this.fetchResource('user');

  fetchRooms = () => this.fetchResource('rooms');

  fetchData = () => {
    // Promise all - for parallelly promise resolving
    return Promise.all([
      this.fetchUser(),
      this.fetchRooms(),
    ]);
  }
}

export default Api;
