import axios from "axios";
import jwtDefaultConfig from "./jwtDefaultConfig";

export default class JwtService {
  // ** jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtDefaultConfig };

  // ** For Refreshing Token
  isAlreadyFetchingAccessToken = false;

  // ** For Refreshing Token
  subscribers = [];

  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };
    // ** Request Interceptor
    axios.interceptors.request.use(
      (config) => {
        // ** Get token from localStorage
        const accessToken = this.getToken();
        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      (response) => {
        if (
          response &&
          response.data &&
          response.data.status === false &&
          response.data.message === "jwt expired"
        ) {
          const { config } = response;
          const originalRequest = config;
          if (!this.isAlreadyFetchingAccessToken) {
            if (this.getRefreshToken()) {
              this.isAlreadyFetchingAccessToken = true;
              this.refreshToken().then((r) => {
                this.isAlreadyFetchingAccessToken = false;

                // ** Update accessToken in localStorage
                if (r?.data?.data?.token) {
                  this.setToken(r.data.data.token);
                  this.setRefreshToken(r.data.data.refresh_token);
                  this.onAccessTokenFetched(r.data.data.token);
                }
              });
            } else {
              window.location.pathname = "/login";
              localStorage.clear();
            }
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken) => {
              // ** Make sure to assign accessToken according to your response.
              // ** Check: https://pixinvent.ticksy.com/ticket/2413870
              // ** Change Authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
              // resolve(this.axios(originalRequest))
              resolve(axios(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return response;
      },
      (error) => {
        // ** const { config, response: { status } } = error
        const { config, response } = error;
        const originalRequest = config;
        // ** if (status === 401) {
        if (response && response.status === 403) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true;

            this.refreshToken().then((r) => {
              this.isAlreadyFetchingAccessToken = false;

              // ** Update accessToken in localStorage
              if (r?.data?.data?.token) {
                this.setToken(r.data.data.token);
                this.setRefreshToken(r.data.data.refresh_token);
                this.onAccessTokenFetched(r.data.data.token);
              }
            });
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken) => {
              // ** Make sure to assign accessToken according to your response.
              // ** Check: https://pixinvent.ticksy.com/ticket/2413870
              // ** Change Authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
              // resolve(this.axios(originalRequest))
              resolve(axios(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return Promise.reject(error);
      }
    );
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter((callback) => {
      callback(accessToken);
    });
  }

  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  getToken() {
    return localStorage?.getItem(this?.jwtConfig?.storageTokenKeyName);
  }

  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
  }

  setToken(value) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
  }

  setRefreshToken(value) {
    localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
  }

  login(...args) {
    return axios.post(this.jwtConfig.loginEndpoint, ...args);
  }

  logout(...args) {
    return axios.post(this.jwtConfig.logoutEndpoint, ...args);
  }

  register(...args) {
    return axios.post(this.jwtConfig.registerEndpoint, ...args);
  }

  refreshToken() {
    const formData = new URLSearchParams();
    formData.append(
      this.jwtConfig.storageRefreshTokenKeyName,
      this.getRefreshToken()
    );
    return axios.post(this.jwtConfig.refreshEndpoint, formData);
  }
}
