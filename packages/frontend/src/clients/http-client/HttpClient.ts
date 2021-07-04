class HttpClient {
  constructor(private readonly fetch: any) {}

  async post(url: string, body: { [key: string]: any }) {
    return this.fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async get() {}
}

export default new HttpClient(window.fetch.bind(window));
export { HttpClient };
