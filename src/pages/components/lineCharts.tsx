import * as React from 'react'
const { useRef, useEffect } = React
import { useChartEffect } from 'pages/effect/chart'
import { useNormalDispatchEffect } from 'pages/effect/reducer'

const option = {
  grid: {
    left: 60,
    right: 30
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
  const [collapsed, setCollapsed] = useNormalDispatchEffect('collapsed')
  const render = useChartEffect(charts, option)
  useEffect(() => {
    render()
  }, [collapsed])
  return (
    <div className="line-charts" ref={charts}>

    </div>
  )
}

export default LineCharts