import axios from 'axios';

export class UnsplashAPI {
  static BASE_URL = 'https://api.unsplash.com';
  static API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.page = null;
    this.query = null;
  }

  fetchPhotosByQuery() {
    const searchParams = {
      params: {
        query: this.query,
        page: this.page,
        per_page: 20,
        orientation: 'portrait',
        client_id: UnsplashAPI.API_KEY,
      },
    };

    return axios.get(`${UnsplashAPI.BASE_URL}/search/photos`, searchParams);
  }
}
