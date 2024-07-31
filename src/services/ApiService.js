import axios from "axios";

const ERRORS = {
  500: "O servidor não conseguiu processar a requisição, tente novamente mais tarde",
  404: "Item não encontrado",
  400: "Dados inválidos, verifique os dados e tente novamente",
  401: "Você não tem permissão para realizar essa ação",
  0: "Parece que você esta offline, verifique a sua conexão e tente novamente",
};

export class ApiService {
  apiUrl;

  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  get http() {
    return this.initHttp();
  }

  handleErrors(httpError) {
    const status = httpError.response.status;
    const error = httpError.message || ERRORS[status] || ERRORS[500];
    const summary = httpError.response.statusText;
    // handle unauthorized 401
    return Promise.reject({
      severity: "error",
      detail: error,
      summary,
      status,
    });
  }

  initHttp() {
    const config = {};

    const http = axios.create({
      baseURL: `${this.apiUrl}`,
      headers: config?.headers,
    });

    http.interceptors.response.use(
      (res) => res.data,
      (err) => this.handleErrors(err)
    );

    return http;
  }

  async get(endpoint) {
    return this.http.get(endpoint);
  }

  async post(endpoint, body) {
    return this.http.post(endpoint, body);
  }

  async put(endpoint, body) {
    return this.http.put(endpoint, body);
  }

  async delete(endpoint) {
    return this.http.delete(endpoint);
  }

  async patch(endpoint, body) {
    return this.http.patch(endpoint, body);
  }
}
