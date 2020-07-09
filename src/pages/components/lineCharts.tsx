import * as React from 'react'
const { useRef } = React
import { useChartEffect } from 'pages/effect/chart'

const option = {
  grid: {
    left: 60,
    right: 60
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    smooth: true
  }]
};
const LineCharts = () => {
  const charts = useRef(null)
  useChartEffect(charts, option)
  return (
    <div className="line-charts" ref={charts}>

    </div>
  )
}

export default LineCharts