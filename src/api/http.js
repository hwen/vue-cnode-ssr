import axios from 'axios';

const logSome = console.log;

// 创建 request 实例
const ax = axios.create({
  timeout: 5000 // 请求超时时间
});

// request拦截器
ax.interceptors.request.use(
  config => {
    // set common config
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export const get = (url, config) => {
  return ax
    .get(url, config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      logSome(`====== get error for url: [${url}] ======`);
      logSome(err);
      throw err;
    });
};

export const post = (url, data, config) => {
  return ax
    .post(url, data, config)
    .then(res => {
      resolve(res.data);
      return res.data;
    })
    .catch(err => {
      logSome(`====== post error for url: [${url}] ======`);
      logSome(err);
      throw err;
    });
};
