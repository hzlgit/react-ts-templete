/*
 * @Descripttion:
 * @Author: huangjun
 * @Date: 2021-03-08 10:29:07
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 12:36:37
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
