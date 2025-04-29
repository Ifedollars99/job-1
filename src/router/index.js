import { createRouter, createWebHashHistory } from 'vue-router'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
import NextPage from '@/components/NextPage.vue'
import { supabase } from '@/supabase'


const routes = [
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/nextpage', // <-- updated path
    name: 'NextPage',
    component: NextPage
  },
  {
    path: '/',
    redirect: '/signin' // Default to SignIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const { data: { session } } = await supabase.auth.getSession()

  if (to.path === '/nextpage' && !session) { // <-- protect 'nextpage'
    next('/signin')
  } else {
    next()
  }
})

export default router
