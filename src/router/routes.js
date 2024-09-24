import MainPage from 'src/pages/MainPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: 'main'
      },
      { path: 'cakes', component: () => import('pages/CakesPage.vue') },
      { path: 'cake/:id', component: () => import('pages/CakeDetailsPage.vue') },
      { path: 'staff', component: () => import('pages/StaffPage.vue') },
      { path: 'order', component: () => import('pages/orderMenuPage.vue') }
      { path: 'main', component: ()=> import ('pages/MainPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
