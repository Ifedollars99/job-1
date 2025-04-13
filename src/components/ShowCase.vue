<template>
  <div class=" flex flex-row justify-start" >
    <h1 class="text-2xl text-gray-400" >
      SUggested...
    </h1>
    <h1 class="text-2xl text-green-500" >
      MOvies 
    </h1>
   </div>
  <div
    v-if="!hasSearched"
    class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
  >
    <div
      v-for="(movie, index) in movieList"
      :key="index"
      class="flex flex-row gap-2"
    >
      <img
        :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
        class="w-auto h-32 rounded shadow"
      />

      <button class="font-bold text-indigo-600" @click="getMovie(movie.id)">
        {{ movie.title }}
      </button>
      <p class="text-xs text-gray-500 mt-1">
        RELEASED DATE: {{ movie.release_date }}
      </p>
    </div>
  </div>

   <!-- Display selected movie details -->
   <div v-if="hasSearched && selectedMovie.title" class="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 class="font-bold text-xl text-indigo-600">{{ selected.title }}</h2>
      <img
        v-if="selectedMovie.poster_path"
        :src="`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`"
        alt="Movie Poster"
        class="mt-4 w-40 h-auto rounded"
      />
      <p class="mt-4 text-sm text-gray-700">OVERVIEW: {{ selectedMovie.overview }}</p>
      <p class="text-xs text-gray-500 mt-1">
        RELEASED DATE: {{ selectedMovie.release_date }}
      </p>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const selected = computed(() => selectedMovie.value);


const movieList = ref([]);        // all movies
const selectedMovie = ref({}); // Now initialized as an empty object
const hasSearched = ref(false);   // control what shows

const fetchRandomMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=2c2d1c5fa04533775bfee1e0491429f2&page=${Math.floor(Math.random() * 10) + 1}`
    );
    const data = await res.json();
    const shuffled = data.results.sort(() => 0.19 - Math.random());
    movieList.value = shuffled.slice(0, 19); // 19 movies
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=2c2d1c5fa04533775bfee1e0491429f2`
  );
  const data = await res.json();

  selectedMovie.value = {
  title: data.title,
  overview: data.overview,
  release_date: data.release_date,
  poster_path: data.poster_path,
};


  hasSearched.value = true;
};



// Fetch on component mount
onMounted(fetchRandomMovies);
</script>
