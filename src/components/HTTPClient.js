class HTTPClient {
  constructor(){}

  static get(data) {
    return data.url === null ? data.dummy : 'httpget';
  }
}

export default HTTPClient;
