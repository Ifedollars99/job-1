<template>
  <!-- header -->
   <header class="p-4 w-full border border-neutral-400 bg-white items-center
    gap-4 md:justify-between flex flex-col md:flex-row " >
    <!-- logo -->
    <div class="flex flex-row gap-1" >
      <i class="bi bi-stack-overflow text-2xl text-green-700"></i>
      <h1 class="text-green-700 text-2xl" >Raw</h1>
    </div>
    <!-- search -->
    <div class="bg-gray-200 p-2 rounded-3xl space-x-3 " >
      <i class="bi bi-search text-green-700 text-xl"></i>
      <input type="text" class="placeholder-green-700 bg-gray-200 " placeholder="Search" >
    </div>
    <!-- person -->
    <div class="flex flex-row gap-4" >
      <i class="bi bi-bell-fill text-green-700 text-2xl"></i>
      <img class="rounded-full w-[50px] h-[50px]" src="https://i.pinimg.com/736x/2c/83/c3/2c83c316d17b750d5f41bfe51d059bb2.jpg">
      <div class="flex flex-col" >
        <h1 class="text-black text-xl" >Ralph Edwards</h1>
        <h1 class="text-black text-sm" >Admin</h1>
      </div>
    </div>
   </header>
   <!-- nav -->
  <div class="flex h-screen">
    <!-- Overlay (Mobile) -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      @click="toggleSidebar"
    ></div>

    <!-- Sidebar -->
    <div
      :class="[
        'fixed top-0 left-0 h-full w-64 md:w-10 bg-white p-4 z-50 transition-transform duration-300',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'md:static md:translate-x-0',
      ]"
    >
      <!-- X button -->
      <div class="flex justify-between items-center mb-6 md:hidden">
        <button @click="toggleSidebar" class="text-black text-2xl">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      

      <!-- Sidebar nav -->
      <nav class="space-y-10">
        <h2 class="text-lg font-bold text-gray-500">MAIN MENU</h2>
        <div class="flex flex-row gap-3 ml-3">
          <i class="bi bi-house text-black text-xl font-bold"></i>
          <a
            href="#"
            class="block text-xl font-bold text-black no-underline"
            >Dashboard</a
          >
        </div>
        <div class="flex flex-row gap-3 bg-green-700 p-3 w-40 rounded-lg">
          <i class="bi bi-people text-white text-xl font-bold"></i>
          <a
            href="#"
            class="block text-xl text-white no-underline font-bold"
            >Workers</a
          >
        </div>
        <div class="flex flex-row gap-3 ml-3">
          <i class="bi bi-list-ul text-black text-xl font-bold"></i>
          <a
            href="#"
            class="block text-xl text-black font-bold  no-underline"
            >Orders</a
          >
        </div>
        <div class="flex flex-row gap-3 ml-3">
          <i class="bi bi-cart text-black text-xl font-bold"></i>
          <a
            href="#"
            class="block text-xl text-black font-bold  no-underline"
            >Products</a
          >
        </div>
        <div class="flex flex-row gap-3 ml-3">
          <i
            class="bi bi-layout-text-window-reverse text-black text-xl font-bold"
          ></i>
          <a
            href="#"
            class="block text-xl text-black font-bold no-underline"
            >Reports</a
          >
        </div>

         <!-- line -->
        <div class="w-full h-px bg-gray-300 my-4 md:w-[90%] mx-auto"></div>

        <i class="text-gray-400" >PREFERENCES</i>

        <div class="flex flex-row gap-3 ml-3">
          <i class="bi bi-gear text-black text-2xl font-bold"></i>
          <a
            href="#"
            class="block text-xl text-black font-bold no-underline"
            >Settings</a
          >
        </div>

        <div class="flex flex-row gap-3 ml-3">
          <i class="bi bi-power text-red-600 text-2xl font-bold"></i>
          <a
            href="#"
            class="block text-xl text-red-600 font-bold no-underline"
            >Log Out</a
          >
        </div>

       
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-sky-100 p-6 h-[2000px] md:h-[1250px] ml-0 md:ml-64 ">
      <!-- Hamburger menu -->
      <button class="md:hidden mb-4 text-2xl text-black" @click="toggleSidebar">
        <i class="bi bi-list"></i>
      </button>

      <!-- M Content -->
       <div class="flex flex-row justify-between p-2" >
        <!-- work -->
       <div class="flex flex-row gap-2" >
       <i class="bi bi-arrow-left-circle text-xl md:text-3xl text-green-700 font-bold"></i>
      <h1 class=" text-xl md:text-3xl font-bold ">Workers Review</h1>
    </div>
    <!-- bin -->
     <i class="bi bi-trash3 text-red-600 text-lg md:text-2xl"></i>
    </div>
    
    <!-- second main -->
    <section class="bg-white w-full p-8 shadow-md rounded-xl" >
      <h1 class="text-black text-2xl font-bold" >Basic Details</h1>
    </section>
    <!-- submain -->
    <section class="bg-white w-full h-[1700px] md:h-[1100px] p-4 shadow-md rounded-xl mt-2" >
     <div class="flex justify-center" >
        <img class=" w-[150px] h-[150px] border-2 border-black rounded-full "
        src="https://i.pinimg.com/736x/f6/71/48/f67148f5d94a0a381a34cd13332d77ff.jpg">
     </div>
     <div class="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5" >
      <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">First Name:</label>
    <input
      type="text"
      class="w-full placeholder-black border border-gray-400 p-2 rounded-xl bg-white placeholder:font-bold"
      placeholder="Joseph"
    />
  </div>
  
   <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">Surname:</label>
    <div class="border border-gray-400 flex flex-row" >
    <input
      type="text"
      class="w-full placeholder-black  p-2 rounded-xl bg-white placeholder:font-bold"
      placeholder="Dan"
    />
    <i class="bi bi-person-check text-3xl text-green-700"></i>
    </div>
  </div>

  <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">Phone number:</label>
    <input
      type="number"
      class="w-full placeholder-black border border-gray-400 p-2 rounded-xl bg-white placeholder:font-bold"
      placeholder="+234-912-461-223"
    />
  </div>

  <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">Email:</label>
    <input
      type="email"
      class="w-full placeholder-black border border-gray-400 p-2 rounded-xl bg-white placeholder:font-bold"
      placeholder="Jamesodoh23@gmail.com"
    />
  </div>

  <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">City:</label>
    <input
      type="text"
      class="w-full placeholder-black border border-gray-400 p-2 rounded-xl bg-white placeholder:font-bold"
      placeholder="Umuahia"
    />
  </div>

  <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">Date of birth:</label>
    <div class="border border-gray-400 flex flex-row" >
    <input
      type="text"
      class="w-full placeholder-black  p-2 rounded-xl bg-white placeholder:font-bold"
      placeholder="DD/MM/YR"
    />
    <i class="bi bi-arrow-down-short text-3xl "></i>
    </div>
  </div>

   <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">Skill:</label>
    <input
      type="text"
      class="w-full placeholder-black border border-gray-400 p-2 rounded-xl bg-white placeholder:font-bold"
      placeholder="Electrician"
    />
  </div>

   <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">Date Verified:</label>
    <input
      type="text"
      class="w-full placeholder-black border border-gray-400 p-2 rounded-xl bg-white placeholder:font-bold"
      placeholder="11 Aug, 2023"
    />
  </div>

   <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">Home Adress:</label>
    <input
      type="text"
      class="w-full placeholder-black border border-gray-400 p-2 rounded-xl bg-white placeholder:font-bold"
      placeholder="23 Olokoro, beside God is good motor park, umuahia."
    />
  </div>

   <div class="flex flex-col">
    <label class="text-lg text-gray-500 mb-1">Store Adress (Optional):</label>
    <input
      type="text"
      class="w-full placeholder-black placeholder:font-bold border border-gray-400 p-2 rounded-xl bg-white"
      placeholder="23 Olokoro, beside God is good motor park, umuahia."
    />
  </div>

       <div class="flex flex-col gap-3">
    <label class="text-lg text-gray-500 mb-1">Add Social accounts</label>
    <div class="border border-gray-400 flex flex-row items-center rounded-xl p-2 gap-2" >
      <i class="bi bi-list text-black text-xl font-bold"></i>
      <input
      type="text"
      class="w-full placeholder-black  bg-white placeholder:font-bold"
      placeholder="Instagram"
    />
    <div class="border border-gray-400 p-2 rounded-3xl" >
    <i class=" text-black font-bold text-xs" >add Username</i>
    </div>
    </div>

    <div class="border border-gray-400 flex flex-row items-center p-2 rounded-xl gap-2" >
      <i class="bi bi-list text-black text-xl font-bold"></i>
      <input
      type="text"
      class="w-full placeholder-black  bg-white placeholder:font-bold"
      placeholder="FaceBook"
    />
    <div class="border border-gray-400 p-2 rounded-3xl" >
    <i class=" text-black font-bold text-xs" >james services</i>
    </div>
    </div>
    
  </div>
     </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarLayout",
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>


<style scoped>

</style>