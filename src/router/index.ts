import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../view/index/LoginPage.vue'
import RootPage from '../view/index/RootPage.vue'
import DeskTop from '../view/index/DeskTop.vue'
import PersonCenter from '../view/index/PersonCenter.vue'
import { MenuModel } from '../view/admin/menu/class/MenuModel'
// import MenuManager from '../view/admin/menu/MenuManager.vue'
// import RoleManager from '../view/admin/role/RoleManager.vue'
// import PersonManager from '../view/admin/person/PersonManager.vue'
import { getUserMenus } from '../http/index'
let routes = [
    {
        path: "/", component: RootPage,
        children: [
            { name: "工作台", path: "/desktop", component: DeskTop },
            { name: "个人信息", path: "/person", component: PersonCenter },
            // {  name:"菜单管理",path:"/menumanager",component:MenuManager  },
            // {  name:"角色管理",path:"/rolemanager",component:RoleManager  },
            // {  name:"用户管理",path:"/personmanager",component:PersonManager  }
        ]
    },
    { path: "/login", component: LoginPage }
]
//通过json渲染路由
// const list = [{
//     "id": 1,
//     "index": "rolemanager",
//     "name": "角色管理",
//     "filePath": "../view/admin/role/RoleManager",
//     "parent": "rolemanager",
//     "order": 99,
//     "date": "2016-05-02",
//     "isEnable": false,
//     "children": null
// },
// {
//     "id": 2,
//     "index": "personmanager",
//     "name": "人员管理",
//     "filePath": "../view/admin/person/PersonManager",
//     "parent": "rolemanager",
//     "order": 99,
//     "date": "2016-05-02",
//     "isEnable": false,
//     "children": null
// },
// {
//     "id": 3,
//     "index": "menumanager",
//     "name": "菜单管理",
//     "filePath": "../view/admin/menu/MenuManager",
//     "parent": "rolemanager",
//     "order": 99,
//     "date": "2016-05-02",
//     "isEnable": false,
//     "children": null
// }]
if (localStorage["nickname"] != undefined) {
    //读取webapi，获取路由列表
    const list: MenuModel[] = await getUserMenus() as any as MenuModel[]
    let data = []
    if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
            //PS1：这里import动态路由导入，需要通过string+变量的方式导入，如果直接传入一个变量，编译器无法成功解析！ 
            //PS2：动态导入提示警告 需要加上/* @vite-ignore */才能消除警告
            data.push({ name: list[i].name, path: list[i].index, component: () => import(/* @vite-ignore */`${list[i].filePath}.vue`) })
        }
        routes[0].children = routes[0].children?.concat(data as []) as []
    }
}


//创建路由
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router;