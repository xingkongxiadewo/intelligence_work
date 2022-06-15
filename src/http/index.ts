import axios from 'axios'
//需要拦截器的地方使用instance对象， 有自定义返回逻辑的地方沿用axios，在组件内部处理返回结果即可
import instance from './filter'
const http = "/api";
export const getRoleData = (parms: {}) => { }
export const delRole = (id: number) => { }
export const batchDelRole = (ids: string) => { }

 

//用户管理

// getUserData, delUsers, batchDelUsers
export const getUserData = (parms: {}) => { }
export const delUsers = (id: number) => { }
export const batchDelUsers = (ids: string) => { }


export const settingRole = (pid: string, rids: string) => { }


//获取token
export const getToken = (name: string, password: string) => {
    return instance.get(http + "/Login/GetToken?name=" + name + "&password=" + password);
}
//获取列表
export const getMenuDataNew = async (parms: {}) => {
    instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return instance.post(http + "/Menu/GetMenus", parms)
}
//添加
export const addMenu = async (parms: {}) => {
    instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return instance.post(http + "/Menu/Add", parms)
}
//修改
export const editMenu = async (parms: {}) => {
    instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return instance.post(http + "/Menu/Edit", parms)
}
//删除
export const delMenu = async (id: number) => {
    instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return instance.get(http + "/Menu/Del?id=" + id)
}
//BatchDel
export const batchDelMenu = async (ids: string) => {
    instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return instance.get(http + "/Menu/BatchDel?ids=" + ids)
}
//分配菜单
export const settingMenu = async (rid: string,mids: string) => {
    instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return instance.get(`${http}/Menu/SettingMenu?rid=${rid}&mids=${mids}`)
}