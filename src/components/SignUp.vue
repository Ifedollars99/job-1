<template>
  <div class="flex flex-col items-center justify-start mt-20 min-h-screen bg-gray-100">
    <h1 class="text-2xl font-bold mb-6">Sign Up</h1>
    <form @submit.prevent="handleSignUp" class="flex flex-col w-80 space-y-4">
      <input v-model="email" type="email" placeholder="Email" class="p-2 border rounded" required />

      <div class="relative">
        <input 
          v-model="password" 
          :type="showPassword ? 'text' : 'password'" 
          placeholder="Password" 
          class="p-2 border rounded w-full" 
          required 
        />
        <button 
          type="button" 
          @click="togglePassword" 
          class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
        >
          {{ showPassword ? 'Hide' : 'Show' }}
        </button>
      </div>

      <button type="submit" class="bg-indigo-700 hover:bg-blue-700 text-white p-2 rounded">Sign Up</button>
    </form>

    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    <p v-if="message" class="text-green-500 mt-4">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const email = ref('')
const password = ref('')
const error = ref('')
const message = ref('')
const showPassword = ref(false)

async function handleSignUp() {
  error.value = ''
  message.value = ''

  const { error: signupError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (signupError) {
    error.value = signupError.message
  } else {
    message.value = 'Check your email to confirm your account!'
    email.value = ''
    password.value = ''
  }
}

function togglePassword() {
  showPassword.value = !showPassword.value
}
</script>
