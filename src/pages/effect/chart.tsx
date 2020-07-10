import * as React from 'react'
const { useEffect } = React
import echarts from 'echarts'
// 引入防抖函数debounce
import { debounce } from 'lib/untils'

interface Chart{
  resize: Function;
  [PropName: string]: any;
}

export const useChartEffect = (chartRef: any, option: any) => {
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
    render()
  }, [option])

  useEffect(() => {
    render()
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

  return {
    render,
    resize
  }
}

