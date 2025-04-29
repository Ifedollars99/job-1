<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-4xl font-bold mb-6 text-gray-700">{{ username }} 🚀</h1>
      <h1 class="text-4xl font-bold mb-6 text-gray-700">Welcome to Ifedollars Auth🚀</h1>
      <p class="text-lg text-gray-700">You have successfully signed in!</p>
  
      <button
        @click="handleSignOut"
        class="mt-6 px-4 py-2 bg-indigo-700 hover:bg-blue-500 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'
  import { useRouter } from 'vue-router'
  
  const username = ref('') // <-- create a reactive username
  const router = useRouter()
  

  onMounted(() => {
  username.value = localStorage.getItem('username') || 'Guest'
})


  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/signin')
  }
  </script>
  