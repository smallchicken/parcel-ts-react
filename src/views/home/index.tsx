import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import styles from './index.less'
 
export default class Home extends Component {
  render () {
    return (
      <div className={styles['text-center']}>
        <Icon type="info" />欢迎使用此脚手架<br/>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    )
  }
}