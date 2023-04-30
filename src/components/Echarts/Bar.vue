<script lang="ts" setup>
import * as echarts from 'echarts'
//页面加载完成后加载我们的图标
import { onMounted } from 'vue'
onMounted(async () => {
    
    var chartDom = document.getElementById('main')!;
    type EChartsOption = echarts.EChartsOption;
    var myChart = echarts.init(chartDom as HTMLElement,'dark');
    var option: EChartsOption;
    myChart.resize({
        width: 700,
        height: 400
    });

  option = {
    title: {
    text: '工作清单',
    subtext: '月份工作清单'
  },
    
  xAxis: {
    type: 'category',
    data: ['一月份', '二月份', '三月份', '四月份',  ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      
      data: [3, 4, 4, 5, ],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

option && myChart.setOption(option);

})
</script>
<template>
    <div id="main"></div>
</template>