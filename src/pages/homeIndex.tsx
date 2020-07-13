import * as React from 'react'
const { useEffect } = React
import { Row, Col } from 'antd'
import NumberAnimation from './components/numberAnimation'
import Charts from './components/charts'
import Events from 'lib/events'

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

// 折线图数据
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

// 南瓜图数据
const pieChartsOption: any = {
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      roseType: 'angle',
      data: [
        { value: 100, name: '视频广告' },     
        { value: 140, name: '搜索引擎' },
        { value: 170, name: '联盟广告' },
        { value: 240, name: '邮件营销' },
        { value: 260, name: '直接访问' },
      ]
    }
  ]
}


// 雷达图数据
const radarChartsOption: any = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    left: 'center',
    top: 20
  },
  radar: [
    {
      indicator: [
        { text: '外观', max: 100 },
        { text: '拍照', max: 100 },
        { text: '系统', max: 100 },
        { text: '性能', max: 100 },
        { text: '屏幕', max: 100 },
      ],
      radius: 120,
      center: ['50%', '60%']
    }
  ],
  series: [
    {
      type: 'radar',
      radarIndex: 0,
      areaStyle: {},
      data: [
        {
          value: [85, 90, 90, 95, 95],
          name: '三星'
        },
        {
          value: [95, 80, 95, 90, 93],
          name: '苹果'
        }
      ]
    }
  ]
}





const HomeIndex = () => {
  useEffect(() => {
    Events.$on('home-chart-resize', () => {
      Events.$emit('charts-resize')
    })
  }, [])

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
          <Charts option={pieChartsOption} className="line-charts"/>
        </Col>
        <Col span={8}>
          <Charts option={radarChartsOption} className="line-charts"/>
        </Col>
        <Col span={8}>
          <Charts option={radarChartsOption} className="line-charts"/>
        </Col>
      </Row>
      
    </div>
  )
}

export default HomeIndex