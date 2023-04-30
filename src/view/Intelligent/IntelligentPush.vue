<script lang="ts" setup>
import { reactive, ref, onMounted, toRaw } from "vue";
import type { ElTable } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { Search, RefreshRight } from "@element-plus/icons-vue";
import Resultvue from "./components/Result.vue";
import { ResultModel } from "./class/ResultModel";
const addVisible = ref(false);
const CloseAdd = () => {
  addVisible.value = false;
};
const handleEdit = (index: number, row: ResultModel) => {
  console.log("点击");
  addVisible.value = true;
};
const ruleFormRef = ref<FormInstance>();
const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const tableData = [
  {
    number: "1",
    style: "段文",
    telNum: "【2023】23号",
    content: "提职司机实作考试",
    degree: "中等",
  },
 
];
</script>
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-form
          :inline="true"
          class="demo-form-inline"
          ref="ruleFormRef"
        >
          <el-form-item
            label="名称"
            prop="name"
          >
            <el-input placeholder="请输入名称" />
          </el-form-item>
          <el-form-item>

          </el-form-item>
          <el-form-item>
            <el-button type="primary">
              <el-icon>
                <search />
              </el-icon>查询
            </el-button>
            <el-button>
              <el-icon>
                <refresh-right />
              </el-icon>重置
            </el-button>
          </el-form-item>
        </el-form>
        <p>
          <el-button type="primary">新增</el-button>
          <el-button type="danger">删除</el-button>
        </p>
      </div>
    </template>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      max-height="700"
    >
      <el-table-column
        fixed
        prop="number"
        label="序号"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="style"
        label="类型"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="来文字号"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        width="500"
      >
      </el-table-column>
      <el-table-column
        prop="degree"
        label="紧急程度"
        sortable
        width="120"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300"
      >
        <template #default="scope">
          <el-button
            @click="handleEdit(scope.$index, scope.row)"
            type="text"
            size="small"
          >
            智能推送
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <Resultvue
    :addVisible="addVisible"
    @CloseAdd="CloseAdd"
  ></Resultvue>
</template>
<style lang="scss" scoped>
.el-pagination {
  margin-top: 50px;
}

.cell {
  text-align: center !important;
}

.queryTable {
  width: 500px;
  border-collapse: collapse;

  tr {
    height: 50px;

    td {
      padding: 10px;
    }

    .left {
      width: 30%;
      background-color: #f5f7fa;
    }

    .right {
      width: 80%;
    }
  }
}
</style>