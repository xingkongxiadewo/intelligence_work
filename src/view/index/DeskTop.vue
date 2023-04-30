<template>
    <div class="cardContent">
        <el-card class="box-card" v-for="item in list">
            <CardCom :info="item"></CardCom>
        </el-card>     
      <div class="card-header">
        <el-form :inline="true"  class="demo-form-inline" :rules="rules" ref="ruleFormRef">
          <el-form-item label="名称" prop="name">
            <el-input  placeholder="请输入名称" />
          </el-form-item>
          <el-form-item>

          </el-form-item>
          <el-form-item>
            <el-button type="primary" >
              <el-icon>
                <search />
              </el-icon>查询
            </el-button>
            <el-button >
              <el-icon>
                <refresh-right />
              </el-icon>重置
            </el-button>
          </el-form-item>
        </el-form>
        <p>
          <el-button type="primary" >新增</el-button>
        </p>
      </div>
        <el-card class="daijieshou">
            
  <el-table
  
    :data="tableData"
    stripe
    style="width: 100%"
    max-height="700">
    <el-table-column
      fixed
      prop="number"
      label="序号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="style"
      label="类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="telNum"
      label="来文字号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="content"
      label="内容"
      width="500">
    </el-table-column>
    <el-table-column
      prop="degree"
      label="紧急程度"
      sortable
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300">
      <template #default="scope">
        <el-button
          @click.native.prevent="handleReceive(scope.$index, scope.row)"
          type="text"
          size="small">
          接收
        </el-button>
        <el-button size="small" type="danger" @click="handleWatch(scope.$index, scope.row)">下载查看</el-button>
      </template>
    </el-table-column>
  </el-table>

        </el-card>
        <!-- <el-card class="left">
            <Bar></Bar>
        </el-card> -->
        <!-- <el-card class="right">
            <pie></pie>
        </el-card> -->
        <el-card class="lineCard">
            <Line></Line>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import CardCom from '../../components/CardCom.vue'
import { DsInfo} from './class/DsInfo'
// import {DsInfo} from './class/DsInfo'
const handleReceive = async (index:Number, rows:DsInfo) => {
    rows.isEnable
  }
  const handleWatch = async (index:Number, rows:DsInfo) => {
    rows.isEnable
  }


// import Bar from '../../components/Echarts/Bar.vue'
// import * as echarts from 'echarts';
// type EChartsOption = echarts.EChartsOption;
// var chartDom = document.getElementById('main')!;
// var myChart = echarts.init(chartDom as HTMLElement, 'dark');
// var option: EChartsOption;
// option = {
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [120, 200, 150, 80, 70, 110, 130],
//       type: 'bar',
//       showBackground: true,
//       backgroundStyle: {
//         color: 'rgba(180, 180, 180, 0.2)'
//       }
//     }
//   ]
// };

// option && myChart.setOption(option);
// import Pie from '../../components/Echarts/Pie.vue'
// import Histogram from '../../components/Echarts/Histogram.vue'
// import Line from '../../components/Echarts/Line.vue'

const tableData=[{
          number: '1',
          style: '段文件',
          telNum: '津机',
          content: '提职司机实作考试',
          degree: '中等',
          
        },
        ]    
const list = ref([
    {
        "Title": "当前任务",
        "Icon": "CoffeeCup",
        "Count": 4
    },
    {
        "Title": "待接收任务",
        "Icon": "Apple",
        "Count": 2
    },
    {
        "Title": "已完成任务",
        "Icon": "Drizzling",
        "Count": 3
    },
    {
        "Title": "年度工作清单",
        "Icon": "Headset",
        "Count": 67
    }
])
</script>
<style lang="scss" scoped>
.cardContent {
    width: 100%;
    margin: 0px auto;

    .box-card {
        float: left;
        width: 24%;
        margin-right: 5px;
        margin-bottom: 20px;
    }

    .left,
    .right {
        float: left;
        width: 48%;
        margin-bottom: 20px;
    }

    .daijieshou{
        width: 97.5%;
        height: 30%;
    }

    .right {
        margin-left: 20px;
    }

}
</style>