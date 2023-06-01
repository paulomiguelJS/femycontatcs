import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(1000);
    const response = await fetch(`${this.baseURL}${[path]}`);

    if (response.ok) {
      return response.json();
    }
    throw new Error('API error');
  }
}

export default HttpClient;
