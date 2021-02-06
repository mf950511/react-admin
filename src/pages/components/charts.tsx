import * as React from 'react'
const { useRef, useEffect } = React
import echarts from 'echarts'
// 引入防抖函数debounce
import { debounce } from 'lib/untils'
import Events from 'lib/events'
import { CallbackFunction } from 'types/common'

interface Chart{
  resize: CallbackFunction;
  [PropName: string]: any;
}
interface ChartProps{
  option: any;
  className?: string;
  [PropName: string]: any;
}

const Charts = (props: ChartProps) => {
  const { option, className } = props
  const charts = useRef(null)// 基于准备好的dom，初始化echarts实例
  let chartInstance: Chart | null = null

  // 渲染eChart
  const renderEchart = (options: any) => {
    const renderInstance = echarts.getInstanceByDom(charts.current)
    if(renderInstance) {
      chartInstance = renderInstance
    } else {
      chartInstance = echarts.init(charts.current)
    }
    chartInstance.setOption(options)
  }


  useEffect(() => {
    render()
    // 防抖渲染
    const func = debounce(()=>{
      chartInstance && chartInstance.resize()
    }, 20)
    window.addEventListener('resize', func, false)
    Events.$on('charts-resize', () => {
      resize()
    })
    return () => {
      chartInstance && chartInstance.dispose()
      window.removeEventListener('resize', func, false)
    }
  }, [])

  const render = () => {
    setTimeout(() => {
      renderEchart(option)
    }, 20)
  }

  const resize = () => {
    setTimeout(() => {
      renderEchart(option)
      // 部分条件下dom渲染时常100ms
      chartInstance && chartInstance.resize()
    }, 300)
  }
  return (
    <div className="chartWrapper">
      <div className={`charts ${className}`} ref={charts}>
      </div>
    </div>
  )
}

export default Charts