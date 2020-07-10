import * as React from 'react'
const { useRef, useEffect } = React
import { useChartEffect } from 'pages/effect/chart'
import { useNormalDispatchEffect } from 'pages/effect/reducer'

interface ChartProps{
  option: any;
  className?: string;
  [PropName: string]: any;
}

const LineCharts = (props: ChartProps) => {
  const { option, className } = props
  const charts = useRef(null)
  const [collapsed, setCollapsed] = useNormalDispatchEffect('collapsed')
  const { resize } = useChartEffect(charts, option)
  useEffect(() => {
    resize()
  }, [collapsed])
  return (
    <div className="chartWrapper">
      <div className={`charts ${className}`} ref={charts}>
      </div>
    </div>
  )
}

export default LineCharts