import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../view/index/LoginPage.vue'
import RootPage from '../view/index/RootPage.vue'
import DeskTop from '../view/index/DeskTop.vue'
import PersonCenter from '../view/index/PersonCenter.vue'
import MenuManager from '../view/admin/menu/MenuManager.vue'
import RoleManager from '../view/admin/role/RoleManager.vue'
import PersonManager from '../view/admin/person/PersonManager.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: RootPage,
            children:[
                {  name:"工作台",path:"/desktop",component:DeskTop  },
                {  name:"个人信息",path:"/person",component:PersonCenter  },
                {  name:"菜单管理",path:"/menumanager",component:MenuManager  },
                {  name:"角色管理",path:"/rolemanager",component:RoleManager  },
                {  name:"用户管理",path:"/personmanager",component:PersonManager  }
            ]
        },
        { path: "/login", component: LoginPage }
    ]
})
export default router;