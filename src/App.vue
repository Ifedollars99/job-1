<template>
<main>
  <!-- Date -->
   <div class="text-center mb-6" >
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
      MOvies 
    </h1>
   </div>

    <!-- Search -->
     <div>
      <SearchField/>
     </div>

      <!-- ShowCase -->
       <div>
        <ShowCase />
       </div>
</main>

  <router-view class="text-transparent" ></router-view>
</template>

<script setup >
import SearchField from './components/SearchField.vue';
import ShowCase from './components/ShowCase.vue';
 

</script>

<style scoped>
 
</style> 

 