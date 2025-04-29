<template>
<main>
  <!-- Date -->
   <div class="text-center text-indigo-700 hover:text-blue-700 text-xl mb-6" >
    {{ 
      new Date().toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
       }}
   </div>

   <div class=" flex flex-row justify-start" >
    <h1 class="text-2xl text-gray-400" >
      Ifedollars...
    </h1>
    <h1 class="text-2xl text-indigo-700 hover:text-blue-700" >
      Auth 
    </h1>
   </div>

   <div>
    <nav class="flex justify-center space-x-4 p-4 bg-gray-200">
      <router-link to="/signin" class="text-indigo-700 hover:text-blue-700 hover:underline">Sign In</router-link>
      <router-link to="/signup" class="text-indigo-700 hover:text-blue-700 hover:underline">Sign Up</router-link>
    </nav>

    <router-view />
  </div>

</main>
</template>

<script setup >
</script>

<style scoped>
 
</style> 

 