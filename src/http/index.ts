import axios from 'axios'
//需要拦截器的地方使用instance对象， 有自定义返回逻辑的地方沿用axios，在组件内部处理返回结果即可
import instance from './filter'
const http = "/api";
export const getRoleData = (parms: {}) => { }
export const delRole = (id: number) => { }
export const batchDelRole = (ids: string) => { }


// getMenuDataNew,settingMenu
export const getMenuDataNew = (parms: {}) => { }
export const settingMenu = (roleId: string, ids: string) => { }


//用户管理

// getUserData, delUsers, batchDelUsers
export const getUserData = (parms: {}) => { }
export const delUsers = (id: number) => { }
export const batchDelUsers = (ids: string) => { }


export const settingRole = (pid: string, rids: string) => { }


//获取token
export const getToken = (name: string, password: string) => {
    return axios.get(http + "/Login/GetToken?name=" + name + "&password=" + password);
}