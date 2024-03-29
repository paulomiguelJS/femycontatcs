import delay from '../../utils/delay';
import APIError from '../../error/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(1000);
    const response = await fetch(`${this.baseURL}${[path]}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(
      body?.error || `#{response.status} - ${response.status}`,
    );
  }
}

export default HttpClient;
