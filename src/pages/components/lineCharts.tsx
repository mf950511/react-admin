import * as React from 'react'
const { useRef, useEffect } = React
import { useChartEffect } from 'pages/effect/chart'
import { useNormalDispatchEffect } from 'pages/effect/reducer'

const option = {
  baseOption: {
    grid: {
      top: 40,
      left: 30,
      right: 30,
      containLabel: true
    },
    tooltip: {
      trigger: 'axis'
    },
    legend:{
      data: ['直接访问', '搜索引擎', '联盟广告']
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
        smooth: true
      },
      {
        name: '搜索引擎',
        type: 'line',
        data: [40, 80, 91, 154, 162, 140, 145],
        smooth: true
      },
      {
        name: '联盟广告',
        type: 'line',
        data: [160, 100, 130, 120, 60, 80, 70],
        smooth: true
    },
    ],
    dataset: {
      source: [
        ['Mon', 100, 120],
        ['Tue', 120, 80],
        ['Wed', 161, 91],
        ['Thu', 134, 154],
        ['Sat', 105, 162],
        ['Mon', 160, 140],
        ['Sun', 165, 145]
      ]
    }
  }
};
const LineCharts = () => {
  const charts = useRef(null)
  const [collapsed, setCollapsed] = useNormalDispatchEffect('collapsed')
  const { resize } = useChartEffect(charts, option)
  useEffect(() => {
    resize()
  }, [collapsed])
  return (
    <div className="line-charts" ref={charts}>
    </div>
  )
}

export default LineCharts