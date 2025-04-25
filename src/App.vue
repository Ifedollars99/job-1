<template>
<main>
  <!-- Date -->
   <div class="text-center text-green-600 text-xl mb-6" >
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
    <h1 class="text-2xl text-green-500" >
      SHops 
    </h1>
   </div>


    <!-- Search -->
     <div>
      <SearchField/>
     </div>

     <div>
      <ShowFor/>
     </div>

</main>

  <router-view class="text-transparent" ></router-view>
</template>

<script setup >
import SearchField from './components/SearchField.vue';
import ShowFor from './components/ShowFor.vue';

</script>

<style scoped>
 
</style> 

 