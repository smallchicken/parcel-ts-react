import React from 'react'

import {
  BrowserRouter, 
  Switch
} from 'react-router-dom'

import routes from './router'
import { FrontendAuth } from './components/frontend-auth'
import { message } from 'antd'

message.config({
  maxCount: 1,
});

export default () => (
  <BrowserRouter>
      <Switch>
        <FrontendAuth config={routes} />
      </Switch>
  </BrowserRouter>
)