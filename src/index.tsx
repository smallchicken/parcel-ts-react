import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'
import App from './app'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';


const rootElement = document.getElementById('root')

render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  rootElement
)