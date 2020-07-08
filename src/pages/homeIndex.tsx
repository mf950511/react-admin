import * as React from 'react'
const { useState } = React
import { Row, Col } from 'antd'
import NumberAnimation from './components/numberAnimation'

interface Statictics{
  number: number;
  icon: string;
  title: string;
}

const statisticsArray: Array<Statictics> = [
  {
    number: 102400,
    icon: '#iconlianxiren15',
    title: '访客'
  },
  {
    number: 81212,
    icon: '#iconxiaoxi',
    title: '消息'
  },
  {
    number: 9280,
    icon: '#iconqian',
    title: '收入'
  },
  {
    number: 13600,
    icon: '#icongouwuchekong',
    title: '购物车'
  }
]

const HomeIndex = () => {
  return (
    <div className="guide">
      <Row gutter={40} justify="space-around"  align="middle" className="statistics-wrapper">
        {
          statisticsArray.map(item => (
            <Col xs={24} sm={24} md={12} lg={12} xl={6}>
              <div className="statistics">
                <div className="statistics-icon flex-center">
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref={ item.icon }></use>
                  </svg>
                </div>
                <div className="statistics-show">
                  <div className="statistics-title">{ item.title }</div>
                  <NumberAnimation number={ item.number } duration={1000} className='statistics-number'/>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default HomeIndex