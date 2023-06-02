import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Button',
      name: 'Button',
      component: () => import('../pages/Button/ButtonContainer.vue')
    },
    {
      path: '/Avatar',
      name: 'Avatar',
      component: () => import('../pages/Avatar/AvatarContainer.vue')
    },
    {
      path: '/Badge',
      name: 'Badge',
      component: () => import('../pages/Badge/BadgeContainer.vue')
    },
    {
      path: '/BreadCrumbs',
      name: 'BreadCrumbs',
      component: () => import('../pages/BreadCrumbs/BreadCrumbsContainer.vue')
    },
    {
      path: '/Cards',
      name: 'Cards',
      component: () => import('../pages/Cards/CardsContainer.vue')
    },
    {
      path: '/CircularProgress',
      name: 'CircularProgress',
      component: () => import('../pages/CircularProgress/CircularProgressContainer.vue')
    },
    {
      path: '/Dialog',
      name: 'Dialog',
      component: () => import('../pages/Dialog/DialogContainer.vue')
    },
    {
      path: '/Input',
      name: 'Input',
      component: () => import('../pages/Input/InputContainer.vue')
    },
    {
      path: '/Dropdown',
      name: 'Dropdown',
      component: () => import('../pages/Dropdown/DropdownContainer.vue')
    },
    {
      path: '/FileUpload',
      name: 'FileUpload',
      component: () => import('../pages/FileUpload/FileUploadContainer.vue')
    },
    {
      path: '/Form',
      name: 'Form',
      component: () => import('../pages/Form/FormContainer.vue')
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: () => import('../pages/Radio/RadioContainer.vue')
    },
    {
      path: '/Checkbox',
      name: 'Checkbox',
      component: () => import('../pages/Checkbox/CheckboxContainer.vue')
    },
    {
      path: '/Toggle',
      name: 'Toggle',
      component: () => import('../pages/Toggle/ToggleContainer.vue')
    },
    {
      path: '/QDate',
      name: 'QDate',
      component: () => import('../pages/Qdate/QdateContainer.vue')
    },
    {
      path: '/InnerLoading',
      name: 'InnerLoading',
      component: () => import('../pages/InnerLoading/InnerLoadingContainer.vue')
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: () => import('../pages/Menu/MenuContainer.vue')
    },
    {
      path: '/Pagination',
      name: 'Pagination',
      component: () => import('../pages/Pagination/PaginationContainer.vue')
    },
    {
      path: '/Stepper',
      name: 'Stepper',
      component: () => import('../pages/Stepper/StepperContainer.vue')
    },
    {
      path: '/Tabs',
      name: 'Tabs',
      component: () => import('../pages/Tabs/TabsContainer.vue')
    },
    {
      path: '/Tooltip',
      name: 'Tooltip',
      component: () => import('../pages/Tooltip/TooltipContainer.vue')
    },
    {
      path: '/InfiniteScroll',
      name: 'InfiniteScroll',
      component: () => import('../pages/InfiniteScroll/InfiniteScrollContainer.vue')
    },
    {
      path: '/Notify',
      name: 'Notify',
      component: () => import('../pages/Notify/NotifyContainer.vue')
    },
    {
      path: '/Table',
      name: 'Table',
      component: () => import('../pages/Table/TableContainer.vue')
    },
    {
      path: '/ApiTable(Pagination,filter)',
      name: 'ApiTable(Pagination,filter)',
      component: () => import('../pages/Table/ServerSideTableContainer.vue')
    },
    {
      path: '/PopupEditingTable(shorting)',
      name: 'PopupEditingTable(shorting)',
      component: () => import('../pages/Table/PopupEditingTableContainer.vue')
    },
    {
      path: '/ExportToCSVTable',
      name: 'ExportToCSVTable',
      component: () => import('../pages/Table/ExportToCSVTableContainer.vue')
    },
    {
      path: '/ExpensionItem',
      name: 'ExpensionItem',
      component: () => import('../pages/ExpensionItem/ExpensionItemContainer.vue')
    }
    
    
   
    
    
    

  ]
})

export default router
