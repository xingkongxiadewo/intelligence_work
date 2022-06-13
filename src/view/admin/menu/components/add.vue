<template>
    <el-dialog v-model="addVisible" :title="info == undefined ? '新增' : '修改'" width="30%" :before-close="handleClose">
        <el-form :model="form" label-width="120px" class="form">
            <el-form-item label="菜单路由" prop="index">
                <el-input v-model="form.index" />
            </el-form-item>
            <el-form-item label="菜单名称" prop="name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="文件路径" prop="filePath">
                <el-input v-model="form.filePath" />
            </el-form-item>
            <el-form-item label="父级菜单" prop="parentId">
                <el-tree-select :props="{ value: 'id', label: 'name', children: 'children' }" v-model="form.parentId"
                    :data="treedata" check-strictly />
            </el-form-item>
            <el-form-item label="菜单顺序" prop="order">
                <el-input v-model="form.order" />
            </el-form-item>
            <el-form-item label="是否启用" prop="isEnable">
                <el-switch v-model="form.isEnable" />
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="form.description" />
            </el-form-item>
            <!-- 按钮操作组 -->
            <el-form-item class="btn">
                <el-button type="primary" @click="submit()">确定</el-button>
                <el-button @click="close()">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { MenuModel } from '../class/MenuModel'
const props = defineProps({
    addVisible: Boolean,
    info: MenuModel
})
const form = ref({
    id: props.info?.id,
    index: '',
    name: '',
    filePath: '',
    parentId: 0,
    order: 99,
    isEnable: false,
    description: ""
})
const treedata = ref([])
const handleClose = () => { }
const submit = () => { }
const close = () => { }
</script>