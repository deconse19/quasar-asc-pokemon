const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'), // Main layout for most pages
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: '/items', component: () => import('pages/ItemPage.vue') }, // other pages under MainLayout
       // other pages under MainLayout
    ]
  },
  
  // Pages without MainLayout (e.g., login, signup)
  {
    path: '/',
    component: () => import('src/pages/LoginPage.vue') // No MainLayout applied here
  },
  {
    path: '/signup',
    component: () => import('pages/SignUpPage.vue') // No MainLayout applied here
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
