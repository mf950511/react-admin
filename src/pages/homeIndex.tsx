import * as React from 'react'
const { useState } = React
import { Row, Col } from 'antd'
import NumberAnimation from './components/numberAnimation'
import Charts from './components/charts'

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

const lineChartsOption: any = {
  baseOption: {
    grid: {
      top: 60,
      left: 30,
      right: 30,
      containLabel: true
    },
    tooltip: {
      trigger: 'axis'
    },
    legend:{
      data: ['直接访问', '搜索引擎', '联盟广告'],
      top: 20
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
    },
    series: [
      {
        name: '直接访问',
        type: 'line',
        data: [100, 120, 161, 134, 105, 160, 165],
        smooth: true,
        animation: true,
        animationEasing: 'quadraticIn',
        animationDuration: 1000,
        animationDelay: function (idx: number) {
          return idx * 10 + 100;
        }
      },
      {
        name: '搜索引擎',
        type: 'line',
        data: [40, 80, 91, 154, 162, 140, 145],
        smooth: true,
        animationDelay: function (idx: number) {
          return idx * 10;
        }
      },
      {
        name: '联盟广告',
        type: 'line',
        data: [160, 100, 130, 120, 60, 80, 70],
        smooth: true,
        animationDelay: function (idx: number) {
          return idx * 10;
        }
      },
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx: number) {
        return idx * 5;
    }
  }
};

const HomeIndex = () => {
  return (
    <div className="guide">
      <Row gutter={40} justify="space-around"  align="middle" className="statistics-wrapper">
        {
          statisticsArray.map(item => (
            <Col xs={24} sm={24} md={12} lg={12} xl={6} key={item.icon}>
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
        <Col span={24}>
          <Charts option={lineChartsOption} className="line-charts"/>
        </Col>
        <Col span={8}>
          <Charts option={lineChartsOption} className="line-charts"/>
        </Col>
        <Col span={8}>
          <Charts option={lineChartsOption} className="line-charts"/>
        </Col>
        <Col span={8}>
          <Charts option={lineChartsOption} className="line-charts"/>
        </Col>
      </Row>
      
    </div>
  )
}

export default HomeIndex