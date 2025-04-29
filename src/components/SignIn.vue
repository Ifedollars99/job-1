<template>
  <div class="flex flex-col items-center justify-start mt-20 min-h-screen bg-gray-100">
    <h1 class="text-2xl font-bold mb-6">Sign In</h1>
    <form @submit.prevent="handleSignIn" class="flex flex-col w-80 space-y-4">
      <input v-model="name" type="na,me" placeholder="Username" class="p-2 border rounded" required />
      <input v-model="email" type="email" placeholder="Email" class="p-2 border rounded" required />

      <div class="relative">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Password"
          class="p-2 border rounded w-full"
          required
        />
        <button
          type="button"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"
          @click="togglePasswordVisibility"
        >
          {{ showPassword ? 'Hide' : 'Show' }}
        </button>
      </div>

      <button type="submit" class="bg-indigo-700 hover:bg-blue-700 text-white p-2 rounded">Sign In</button>
    </form>

    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '../supabase'

const email = ref('')
const name = ref('')
const password = ref('')
const error = ref('')
const message = ref('')
const showPassword = ref(false) // <-- For password toggle
const router = useRouter()


function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}

async function handleSignIn() {
  error.value = ''
  message.value = ''

  const { data, error: signInError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  console.log('Signin data:', data)
  console.log('Signin error:', signInError)

  if (signInError) {
    error.value = signInError.message
  } else {
    message.value = 'Sign in successful!'
     // Save the username to localStorage
     localStorage.setItem('username', name.value)
    setTimeout(() => {
      router.push('/nextpage') // 👈 redirect after successful sign in
    }, 500) // small delay so user sees "Sign in successful!" for half a second
  }
}
</script>
