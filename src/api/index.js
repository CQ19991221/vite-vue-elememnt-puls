import {
  axios
} from "axios";

import {
  ElNotification,
  ElMessageBox
} from 'element-plus'


const service = axios.create({
  baseUrl: import.meta.env.VITE_APP_BASEURL,
  timeout: 30000,
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    /*  let token = store.state.token;
     let lang = store.state.language;
     // if(lang!="zh"){
     //    lang ="en"
     // }
     if (token !== "") {
         config.headers.token = token;
     }
     config.headers.language = lang;
     let cancel
     // 设置cancelToken对象
     config.cancelToken = new axios.CancelToken(function (c) {
         cancel = c
     }) */
    // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
    // stopRepeatRequest(reqList, config.url, cancel, `${config.url} 请求被中断`);
    return config
  },
  err => Promise.reject(err)
)

// 添加响应拦截器
service.interceptors.response.use(response => {
  /*   // 对响应数据做点什么
    let data = response.data;
    const status = response.status;
    console.log(status,"响应状态")
    setTimeout(() => {
        allowRequest(reqList, response.config.url)
    }, 1000)
    if (!data.success) { // 当success为false弹出错误信息
        Message({
            message: data.feedback.msg,
            type: 'error'
        });
        return response;
        // return Promise.reject(data)
    } else {
        // Message.success('操作成功！')
        return response;
    } */
  return response;
}, error => {
  /*  let errstatus = error.response.status
   console.log(errstatus)
   if (errstatus === 401) {
       Message({
           message: '为了保证账号安全，请重新登录',
           type: 'info'
       });
       sessionStorage.clear();
       router.push("/login");
       // return false;
   } */
  // console.log(error)
  /* if (axios.isCancel(error)) {
      //     let config = error.config;
      //    // 创建延时器等待发送重试请求
      //     var backoff = new Promise(function (resolve) {
      //         setTimeout(function () {
      //             resolve();
      //         }, 1000);

      //     });

      //    // 返回调用AXIOS来重试请求
      //     return backoff.then(function () {
      //         return axios(config);
      //     });

  } else {
      // 增加延迟，相同请求不得在短时间内重复发送
      setTimeout(() => {
          allowRequest(reqList, error.config.url)
      }, 1000)
  }
  console.log(error) */
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service