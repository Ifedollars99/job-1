<template>
  <div class="bg-slate-950 py-4 w-full  h-full text-white" >
    <div id="app">
    <!-- Navbar -->
    <nav class="bg-slate-950  p-4 shadow-md">
      <div class="max-w-7xl mx-auto flex items-center justify-around">
        <!-- Logo -->
        <a href="#" class="text-white text-2xl font-bold">HelioCode</a>

        <!-- Menu Toggle Button (for mobile) -->
        <button @click="toggleMenu" class="text-white md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Navbar Links (Desktop) -->
        <div class="hidden md:flex space-x-6">
          <a href="#" class="text-white hover:text-blue-200">Home</a>
          <a href="#" class="text-white hover:text-blue-200">About</a>
          <a href="#" class="text-white hover:text-blue-200">Services</a>
          <a href="#" class="text-white hover:text-blue-200">Contact</a>  
        </div>
        <button class="p-2 pl-10 rounded-xl bg-purple-600 hidden md:flex items-center justify-center text-white border-purple-400 font-bold border-2 " >Apply Now ></button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden flex flex-col bg-slate-900 p-4 space-y-4">
      <a href="#" class="text-white hover:text-blue-200">Home</a>
      <a href="#" class="text-white hover:text-blue-200">About</a>
      <a href="#" class="text-white hover:text-blue-200">Services</a>
      <a href="#" class="text-white hover:text-blue-200">Contact</a>
    
    </div> 

    <div class="grid grid-cols-1 px-4" >
      <div class="p-20 bg-gradient-to-b from-slate-950 flex flex-col justify-center items-center gap-3 rounded-xl to-violet-900 border-0 border-purple-400 text-white" >
        <h1 class="text-sm" >A school made for the future</h1>
        <h1>Build Your Dreams</h1>
        <h1 class="text-sm" >Kickstart your web3 carrer and build real world projects, guided by insdustry experts. </h1>
        <button class="p-2 pl-10 rounded-xl bg-purple-600 flex items-center justify-center text-white border-purple-400 font-bold border-2" >Apply Now ></button>
      </div>
    </div>

    <div class="text-white flex flex-col justify-center items-center px-4 gap-2 mt-20" >
      <h1 class="font-bold" >Begin Your Web3 Journey Today</h1>
     <div class="flex flex-col items-center justify-center"  >
      <h1 class="text-sm font-bold" >Discover Endless possibilities with helicode. Whether you are a newbie or expert.
         We provide the tools programs, </h1>
         <h1 class="text-sm font-bold">community and support you need to master new skills and achieve your goals.</h1>
     </div>
    </div>


<div class=" grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-8 pt-10" >
<div class="card-wrapper p-40 md:p-44">
  <div class="card-content flex items-center justify-center">
    <div class="flex flex-col text-white" >
      <img class="rounded-xl h-52" src="https://i.pinimg.com/736x/81/78/4e/81784e304f80f3f9801d17335717ea13.jpg">
      <h1 class="font-bold text-xl px-4 mt-2" >Advance your knowledge</h1>
      <h2 class="text-sm px-4" >Learn everything from basic to advanced topics for FREE in Web3 with resources from 
        industry leading experts such as Layer Two Blockchains, Bitcoin  Basics and much more.
      </h2>
    </div>
  </div>
</div>
<div class="card-wrapper p-40 md:p-44">
  <div class="card-content flex items-center justify-center">
    <div class="flex flex-col text-white" >
      <img class="rounded-xl h-52" src="https://i.pinimg.com/736x/6b/56/11/6b5611a98cd8787de790ec9dfacc54bc.jpg">
      <h1 class="font-bold text-xl px-4 mt-2" >Build A Skill</h1>
      <h2 class="text-sm px-4" >Learn Advanced skills such as Smart Contract Development, Web3 Data Analysis, Cybersecurity, Technical Writing
        and so much more!
      </h2>
    </div>
  </div>
</div>
<div class="card-wrapper p-40 md:p-44">
  <div class="card-content flex items-center justify-center">
    <div class="flex flex-col text-white" >
      <img class="rounded-xl h-52" src="https://i.pinimg.com/736x/ff/08/5b/ff085b413e35a11f54215e142e8ad130.jpg">
      <h1 class="font-bold text-xl px-4 mt-2" >Mentorship</h1>
      <h2 class="text-sm px-4" >Join a community of like-minded Web3 enthausists. Get ideas from a global network of Web3 experts.
      </h2>
    </div>
  </div>
</div>
<div class="card-wrapper p-40 md:p-44">
  <div class="card-content flex items-center justify-center">
    <div class="flex flex-col text-white" >
      <img class="rounded-xl h-52" src="https://i.pinimg.com/736x/61/b0/a0/61b0a09d85df47791d6663ba63823242.jpg">
      <h1 class="font-bold text-xl px-4 mt-2" >Job Placement</h1>
      <h2 class="text-sm px-4" >Get Hired through our job placements services leveraging our global 
        partners building real world projects in Web3.
      </h2>
    </div>
  </div>
</div>
</div>
</div>


<div class="grid grid-cols-1 px-4 mt-5" >
      <div class="p-8 bg-gradient-to-t from-slate-950 flex flex-col justify-center items-center gap-3 rounded-xl to-violet-900 border-0 border-purple-400 text-white" >
        <div class="flex flex-col md:flex-row gap-3 justify-between text-white" >
          <h1>Be part of <br> something big</h1>
          <h1>2000+ <br> Learners</h1>
          <h1>25+ <br> Countries</h1>
          <h1>5+ <br> Courses</h1>
        </div>
      </div>
    </div>


    <div class="text-white flex flex-col justify-center items-center px-4 gap-2 mt-20" >
      <h1 class="font-bold" >Reach Your Full Potential</h1>
     <div class="flex flex-col items-center justify-center">
      <h1 class="text-sm font-bold" >Build technical expertise and hands-on experience across your team with interactive courses and top resources <br>
      from leading experts. </h1>
     </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 px-4 mt-5 gap-5" >
      <div class=" bg-slate-900 rounded-xl flex flex-col gap-3 px-4 py-4 text-white" >
        <img src="https://i.pinimg.com/736x/56/de/f7/56def70e84a4f3e8eabc488eb95817b9.jpg" class="h-36 w-32 rounded-2xl">
       <h1 class="font-bold" >For Businesses</h1>
       <h2 class="text-sm" > Tailored Solutions for business seeking to <br>
      harness the power of blockchain technology to <br>
      drive innovation, efficiency and growth. </h2>
       <button class="p-2 pl-10 w-32 rounded-xl bg-purple-600 items-center justify-center text-white border-purple-400 font-bold border-2 " >Learn More ></button>
      </div>


      <div class=" bg-slate-900 rounded-xl flex flex-col gap-3 px-4 py-4 text-white" >
        <img src="https://i.pinimg.com/736x/73/bf/0d/73bf0d9b9c06af41985b60fef11750ad.jpg" class="h-36 w-32  rounded-2xl">
       <h1 class="font-bold" >For Talents</h1>
       <h2 class="text-sm" > unclock your full potential with a wide range <br>
        career paths and opportunities for carrer <br>
      devlopment and growth </h2>
       <button class="p-2 pl-10 w-32 rounded-xl bg-purple-600 items-center justify-center text-white border-purple-400 font-bold border-2 " >Learn More ></button>
      </div>
    </div>


    <div class="text-white flex justify-center items-center px-4 mt-20" >
      <h1 class="font-bold" >What Our Students Say About US</h1>
    </div>



    <div class="grid grid-cols-1 sm:grid-cols-2 px-4 mt-5 gap-5" >
      <div class=" bg-slate-950 border-white border-2 rounded-xl flex flex-col gap-3 px-4 py-4 text-white" >
        <img src="https://i.pinimg.com/736x/0c/ad/e3/0cade34ae815c75bbc7c3cb034a3cbd1.jpg" class="w-32 h-36 bg-slate-950">
       
       <h2 class="text-sm" >Helicode is a Web3 Academy that is designed <br>
      to train and give you practical insight on <br> 
      different skill set in the blockchain space. it <br>
      was a great Opportunity for me to be part of it.
   </h2>
       <div class="flex flex-row gap-2" >
          <img src="https://i.pinimg.com/736x/73/a6/c5/73a6c5c6c50237f3b4e050ea738a6a03.jpg" class="h-14 w-14 rounded-full">
          <div>
            <h1 class="text-lg">Olaolu ifeoluwa </h1>
            <h1 class="text-sm" >Front end enginnering</h1>
          </div>
       </div>
      </div>


      <div class=" bg-slate-950 border-white border-2 rounded-xl flex flex-col gap-3 px-4 py-4 text-white" >
        <img src="https://i.pinimg.com/736x/0c/ad/e3/0cade34ae815c75bbc7c3cb034a3cbd1.jpg" class="w-32 h-36 bg-slate-950">
       
       <h2 class="text-sm" >Helicode is a Web3 Academy that is designed <br>
      to train and give you practical insight on <br> 
      different skill set in the blockchain space. it <br>
      was a great Opportunity for me to be part of it.
   </h2>
       <div class="flex flex-row gap-2" >
          <img src="https://i.pinimg.com/736x/78/3f/f7/783ff7fc9d5b842d2adccbf64e4d9363.jpg" class="h-14 w-14 rounded-full">
          <div>
            <h1 class="text-lg">Sean D </h1>
            <h1 class="text-sm" >Blockchain Basics</h1>
          </div>
       </div>
      </div>


      <div class=" bg-slate-950 border-white border-2 rounded-xl flex flex-col gap-3 px-4 py-4 text-white" >
        <img src="https://i.pinimg.com/736x/0c/ad/e3/0cade34ae815c75bbc7c3cb034a3cbd1.jpg" class="w-32 h-36 bg-slate-950">
       
       <h2 class="text-sm" >Helicode is a Web3 Academy that is designed <br>
      to train and give you practical insight on <br> 
      different skill set in the blockchain space. it <br>
      was a great Opportunity for me to be part of it.
   </h2>
       <div class="flex flex-row gap-2" >
          <img src="https://i.pinimg.com/736x/75/c1/34/75c13456016242b457dfd1bc5a599d00.jpg" class="h-14 w-14 rounded-full">
          <div>
            <h1 class="text-lg">Odun Adekunle </h1>
            <h1 class="text-sm" >UI/UX Design</h1>
          </div>
       </div>
      </div>
    </div>


    <div class="bg-gradient-to-b from-purple-600 to-purple-300 w-full h-80 gap-2 mt-20 flex flex-col justify-center items-center p-4 text-white" >
      <div class="border-white border-2 rounded-2xl p-1.5 flex justify-center items-center" >
        <h1 class="text-sm font-bold" >Get Updated</h1>
      </div>
      <h1>Join Our NewsLetter</h1>
      <h2 class="text-sm" >Sign Up to our mailing list below and be the <br>
         first to know about new Updates. 
         Dont <br> Worry we wont  spam you.
        </h2>
        <div class="flex flex-col sm:flex-row gap-4" >
          <input type="email" placeholder="Email Adress" class=" bg-purple-900 p-2 rounded-xl placeholder-white placeholder:ml-10" >
          <button class="p-2 bg-purple-400 flex justify-center items-center border-white border-2 rounded-xl" >Subscribe ></button>
        </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 p-4" >
      <div class="text-3xl font-bold" >Helicode</div>
      <div class="text-2xl font-bold flex flex-col"  >
        <h1 class="text-2xl font-bold" >Featured Courses</h1>
        <h1 class="text-2xl font-bold" >Blockchain Cybersecurity</h1>
        <h1 class="text-2xl font-bold" >Web3 technical Writing</h1>
        <h1 class="text-2xl font-bold" >Web3 Marketing</h1>
      </div>
      <div class="text-2xl font-bold flex flex-col"  >
        <h1 class="text-2xl font-bold" >Company</h1>
        <h1 class="text-2xl font-bold" >About Us</h1>
        <h1 class="text-2xl font-bold" >Contact US</h1>
      </div>
      <div class="text-2xl font-bold flex flex-col"  >
        <h1 class="text-2xl font-bold" >Resources</h1>
        <h1 class="text-2xl font-bold" >Blog</h1>
      </div>
      <div class="text-2xl font-bold flex flex-col"  >
        <h1 class="text-2xl font-bold" >Policy</h1>
        <h1 class="text-2xl font-bold" >Terms & Conditions</h1>
        <h1 class="text-2xl font-bold" >Privacy Policy</h1> 
      </div>
    </div>

    <div class="mt-5 text-white text-sm p-4" >2024 @ All right reserved taofeeq ifedollars</div>

<!-- ending -->
</div>



  
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
 
</style> 

 