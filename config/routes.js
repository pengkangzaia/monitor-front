import { SignalFilled } from '@ant-design/icons';
export default [
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     {
  //       path: '/user',
  //       routes: [
  //         {
  //           name: 'login',
  //           path: '/user/login',
  //           component: './user/Login',
  //         },
  //       ],
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  {
    path: '/monitor',
    name: 'monitor',
    icon: 'lineChart',
    routes: [
      {
        name: 'hostList',
        path: '/monitor/hostList',
        component: './ListTableList',
      },
      {
        name: 'config',
        path: '/monitor/config',
        component: './monitor/FormBasicForm',
      },
      {
        name: 'dashboard',
        path: '/monitor/dashboard',
        component: './monitor/DashboardMonitor',
      },
    ],
  },
  {
    path: '/alarm',
    name: 'alarm',
    icon: 'solution',
    routes: [
      {
        name: 'config',
        path: '/alarm/config',
        component: './ListTableList',
      },
      {
        name: 'history',
        path: '/alarm/history',
        component: './ListTableList',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
