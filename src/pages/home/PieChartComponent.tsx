import { useEffect, useRef } from "react"
import * as echarts from 'echarts';


const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '10%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '80%'],
      avoidLabelOverlap: false,
      top: 80,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
// 饼状图
const PieChart = () => {
  const echartsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(echartsRef.current);
    myChart.setOption(option);
  }, [])
  return <div ref={echartsRef} style={{ width: 300, height: 330 }}>
  </div>
}

export default PieChart;