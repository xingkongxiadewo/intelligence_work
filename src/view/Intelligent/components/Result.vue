<template>
  <el-dialog
    v-model="addVisible"
    width="45%"
    :before-close="handleClose"
  >
    <el-form
      :model="form"
      label-width="120px"
      class="form"
      :rules="rules"
      ref="ruleFormRef"
    >
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
        prop="teacher"
        label="老师姓名"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="match"
        label="匹配度"
        width="120"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200"
      >
        <template #default="scope">
          <el-button
            @click="push()"
            type="text"
            size="small"
          >
            推送
          </el-button>
        </template>
      </el-table-column>
    </el-table>
      <!-- 按钮操作组 -->
      <el-form-item class="btn">
        <el-button
          type="primary"
          @click="submit(ruleFormRef)"
        >确定</el-button>
        <el-button @click="close(ruleFormRef)">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  defineProps,
  computed,
  defineEmits,
  onMounted,
  watch,
  toRaw,
} from "vue";

import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
const ruleFormRef = ref<FormInstance>();
const props = defineProps({
  addVisible: Boolean,
});
const form = ref({
  id: 1,
  index: "",
  name: "",
  filePath: "",
  parentId: 0,
  order: 99,
  isEnable: false,
  description: "",
});
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入名称", trigger: "blur" }],
});

//defineEmits用于定义回调事件，里面是数组，可以定义多个事件
const emits = defineEmits(["CloseAdd"]);
const handleClose = (done: () => void) => {
  emits("CloseAdd");
};
const tableData = [
  {
    number: "1",
    teacher: "张文艺",
    match: "90%",
  },
  {
    number: "2",
    teacher: "张君恒",
    match: "85%",
  },
  {
    number: "3",
    teacher: "宋雪梅",
    match: "80%",
  },
  
];
//读取下拉数据
const treedata = ref();
onMounted(() => {

});

const submit = async (ruleFormRef: FormInstance | undefined) => {};
const close = (ruleFormRef: FormInstance | undefined) => {
    emits("CloseAdd")
};
const push=()=>{
    emits("CloseAdd")
}
</script>
<style lang="scss" scoped>
.form {
  min-height: 500px;

  .btn {
    position: absolute;
    bottom: 20px;
  }
}
</style>
