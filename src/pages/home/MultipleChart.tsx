import { useEffect, useRef } from "react"
import * as echarts from 'echarts';


const option = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [0, 200, 504, 324, 401, 200, 50, 87, 164, 324, 401, 200,],
      type: 'line',
      smooth: true,
      areaStyle: {}
    }
  ]
};
// 柱状图
const MultipleChart = () => {
  const echartsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(echartsRef.current);
    myChart.setOption(option);
  }, [])
  return <div ref={echartsRef} style={{ width: '100%', height: 300 }}>
  </div>
}

export default MultipleChart;