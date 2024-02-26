import { extend } from 'umi-request';
import { notification } from 'antd';
import { history } from 'umi';
import { stringify } from 'qs';

const codeMessage = {
200: 'OK - The server successfully returned the requested data.',
201: 'Created - New or modified data was successfully created.',
202: 'Accepted - A request has been received, but is being queued for processing (asynchronous task).',
204: 'No Content - The data was successfully deleted.',
400: 'Bad Request - The server could not understand the request due to invalid syntax.',
401: 'Unauthorized - The user is not authenticated and needs proper credentials.',
403: 'Forbidden - The user is authenticated but not allowed to access the resource.',
404: 'Not Found - The requested resource does not exist on the server.',
406: 'Not Acceptable - The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
410: 'Gone - The requested resource is no longer available and will not be available again.',
422: 'Unprocessable Entity - The request was well-formed but was unable to be followed due to semantic errors.',
500: 'Internal Server Error - The server encountered an unexpected condition that prevented it from fulfilling the request.',
502: 'Bad Gateway - The server received an invalid response from the upstream server.',
503: 'Service Unavailable - The server is currently unable to handle the request due to temporary overloading or maintenance of the server.',
504: 'Gateway Timeout - The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.'

};

/**
 * 异常处理程序
 */
const errorHandler = error => {
  const { response = {} } = error;
  const errortext = codeMessage[response.status] || response.statusText;
  const { status, url } = response;
  let verifyUserFail = false;

  if (status === 400) {
    const api = url.split('/').pop();

    if (api === 'login') {
      notification.error({
        message: 'Username or password incorrect',
      });
      return;
    }

    if (api === 'token-verify') {
      verifyUserFail = true;
    }
  }

  if (status === 401 || verifyUserFail) {
    notification.error({
      message: 'Not logged in or session expired, please log in again',
    });

    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: window.location.href,
      }),
    });
    return;
  }

  if (status === 409) {
    const api = url.split('/').pop();
    if (api === 'register') {
      notification.error({
        message: 'The email address or organization name already exists.',
      });
      return;
    }
  }

  notification.error({
    message: `Request error ${status}: ${url}`,
    description: errortext,
  });
  // environment should not be used
  if (status === 403) {
    history.push('/exception/403');
    return;
  }
  if (status <= 504 && status >= 500) {
    history.push('/exception/500');
    return;
  }
  if (status >= 404 && status < 422) {
    history.push('/exception/404');
  }
};

const request = extend({
  errorHandler,
  credentials: 'include',
});

request.interceptors.request.use(async (url, options) => {
  const token = window.localStorage.getItem('cello-token');
  if (url.indexOf('api/v1/login') < 0 && url.indexOf('api/v1/register') < 0 && token) {
    // 如果有token 就走token逻辑
    const headers = {
      Authorization: `JWT ${token}`,
    };

    return {
      url,
      options: { ...options, headers },
    };
  }
  return {
    url,
    options,
  };
});

// 第一个拦截器有可能返回Promise,那么Promise由第二个拦截器处理
request.interceptors.request.use(async (url, options) => {
  const token = localStorage.getItem('cello-token');
  if (url.indexOf('api/v1/login') < 0 && url.indexOf('api/v1/register') < 0 && token) {
    // 如果有token 就走token逻辑
    const headers = {
      Authorization: `JWT ${token}`,
    };
    return {
      url,
      options: { ...options, headers },
    };
  }
  return {
    url,
    options,
  };
});

export default request;
