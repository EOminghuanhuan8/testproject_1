// 菜单 侧边栏
import basicInformation from './city/basic-information'
export default [
  {
    title: '基础信息管理',
    icon: 'folder-o',
    children: [
      { path: '/basic_information_management/page1', title: '附件管理' },
    ]
  },
  basicInformation
  // {
  //   title:"基础信息管理",
  //   children:[
  //     {
  //       title:"附件管理",
  //       path:'/basic_information_management/page1'
  //     }
  //   ]
  // }
]
