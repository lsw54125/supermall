import axios from "axios";
export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000,
  })
  instance.interceptors.request.use(config=> config ,error =>   error)
  instance.interceptors.response.use(res=> res.data ,err=> err)
  return instance(config)
}


