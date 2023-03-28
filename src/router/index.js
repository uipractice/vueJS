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
      path: '/button',
      name: 'button',
      component: () => import('../pages/Button/ButtonContainer.vue')
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: () => import('../pages/Avatar/AvatarContainer.vue')
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import('../pages/Badge/BadgeContainer.vue')
    },
    {
      path: '/breadCrumbs',
      name: 'breadCrumbs',
      component: () => import('../pages/BreadCrumbs/BreadCrumbsContainer.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../pages/cards/CardsContainer.vue')
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
      path: '/FileUpload',
      name: 'FileUpload',
      component: () => import('../pages/FileUpload/FileUploadContainer.vue')
    },
    {
      path: '/FileUpload',
      name: 'FileUpload',
      component: () => import('../pages/FileUpload/FileUploadContainer.vue')
    },
    

  ]
})

export default router
