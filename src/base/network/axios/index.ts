import axios from "axios";
const net = axios.create({
  baseURL: "http://localhost:7749",
});
net.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default net;
