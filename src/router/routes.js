import ItemPage from 'src/pages/ItemPage.vue'
import ItemsPage from 'src/pages/ItemsPage.vue'


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/items', component: ItemPage  },
      { path: '/signup', component: () => import('pages/SignUpPage.vue') },
   


    ]
  },
  // {
  //   path: '/',
  //   component: () => import('layouts/IndexPage.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') },
  //     { path: 'items', component: ItemPage  },
  //     // { path: 'practice', component: ItemsPage  }


  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
