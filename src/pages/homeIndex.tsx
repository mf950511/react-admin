import * as React from 'react'
const { useEffect } = React
import { Row, Col, Table, Tag, List } from 'antd'
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
  legend: {
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    left: 'center',
    top: 20
  },
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

// 柱状图数据
const stackBar = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    left: 'center',
    top: 20
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '直接访问',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '邮件营销',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: '搜索引擎',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
}
{/* <Tag color="green">green</Tag> */}
// 表单渲染项
const tableColumns = [
  { title: '订单号', dataIndex: 'order_no', key: 'order_no' },
  { title: '价格', dataIndex: 'price', key: 'price' },
  { 
    title: '状态', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <>
        { status === 'success' ? <Tag color="green">success</Tag> : <Tag color="volcano">fail</Tag>}
      </>
      
    )
  },
]

// 表单值
const tableData = [
  {
    key: '1',
    order_no: '9EAaDdA4-De8c-2b05-3ef5-4bDD13',
    price: '$223.00',
    status: 'success'
  },
  {
    key: '2',
    order_no: '9EAaDdA4-De8c-2b05-3ef5-4bDD13',
    price: '$423.00',
    status: 'fail'
  },
  {
    key: '3',
    order_no: '9EAaDdA4-De8c-2b05-3ef5-4bDD13',
    price: '$549.00',
    status: 'success'
  },
  {
    key: '4',
    order_no: '9EAaDdA4-De8c-2b05-3ef5-4bDD13',
    price: '$664.00',
    status: 'success'
  },
  {
    key: '5',
    order_no: '9EAaDdA4-De8c-2b05-3ef5-4bDD13',
    price: '$330.00',
    status: 'fail'
  },
  {
    key: '6',
    order_no: '9EAaDdA4-De8c-2b05-3ef5-4bDD13',
    price: '$110.00',
    status: 'success'
  },
  {
    key: '7',
    order_no: '9EAaDdA4-De8c-2b05-3ef5-4bDD13',
    price: '$159.00',
    status: 'fail'
  }
]



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
        <Col sm={24} md={24} lg={24} xl={8}>
          <Charts option={pieChartsOption} className="line-charts"/>
        </Col>
        <Col sm={24} md={24} lg={24} xl={8}>
          <Charts option={radarChartsOption} className="line-charts"/>
        </Col>
        <Col sm={24} md={24} lg={24} xl={8}>
          <Charts option={stackBar} className="line-charts"/>
        </Col>
        <Col lg={24} xl={12}>
          <Table columns={tableColumns} dataSource={tableData} pagination={false}/>
        </Col>
        <Col lg={12} xl={6}>
          {/* <List/> */}占位符
        </Col>
        <Col lg={12} xl={6}>
        占位符
        </Col>
      </Row>
      
    </div>
  )
}

export default HomeIndex