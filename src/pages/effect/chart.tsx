import * as React from 'react'
const { useEffect } = React
import echarts from 'echarts'
// 引入防抖函数debounce
import { debounce } from 'lib/untils'

interface Chart{
  resize: Function;
  [PropName: string]: any;
}

export const useChartEffect = (chartRef: any, option: any, otherInfo: Array<any> = []) => {
  // 基于准备好的dom，初始化echarts实例
  let chartInstance: Chart | null = null

  // 渲染eChart
  const renderEchart = (options: any) => {
    const renderInstance = echarts.getInstanceByDom(chartRef.current)
    if(renderInstance) {
      chartInstance = renderInstance
    } else {
      chartInstance = echarts.init(chartRef.current)
    }
    chartInstance.setOption(options)
  }

  useEffect(() => {
    renderEchart(option)
  }, [option, ...otherInfo])

  useEffect(() => {
    // 防抖渲染
    const func = debounce(()=>{
      chartInstance && chartInstance.resize()
    }, 20)
    window.addEventListener('resize', func, false)
    return () => {
      chartInstance && chartInstance.dispose()
      window.removeEventListener('resize', func, false)
    }
  }, [])
}

