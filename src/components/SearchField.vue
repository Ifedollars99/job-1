 <template>
  <div class="p-3">
    You Searched : {{ searchTerm.query }}
    <div
      class="bg-white border border-indigo-600/30 rounded-lg shadow-lg flex items-center"
    >
      <i class="bi bi-search p-2 font-bold text-indigo-600"></i>
      <input
        type="text"
        placeholder="Search for a movie"
        class="rounded-r-lg p-2 border-0 outline-0 focus:ring-2 focus:ring-indigo-600 ring-inset w-full"
        v-model="searchTerm.query"
        @input="handleSearch"
      />
    </div>
    <div class="bg-white my-2 rounded-lg shadow-lg">
      <div v-if="searchTerm.results !== null">
        <div
          v-for="(movie, index) in searchTerm.results"
          :key="index"
          class="flex gap-3 items-start border-b border-gray-200 p-3"
        >
          <img
            v-if="movie.poster_path"
            :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
            class="w-10 h-auto rounded shadow"
          />
          <div>
            <button class="font-bold text-indigo-600" @click="getMovie(movie.id)">
              {{ movie.title }}
            </button>
            <p class="text-sm text-gray-700">OVERVIEW: {{ movie.overview }}</p>
            <p class="text-xs text-gray-500 mt-1">
              RELEASE DATE: {{ movie.release_date }}
            </p>
          </div>
        </div>
      </div>
    </div>

     <!-- Display selected movie details -->
    <div v-if="selectedMovie.title" class="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 class="font-bold text-xl text-indigo-600">{{ selectedMovie.title }}</h2>
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
    <!-- ending -->
  </div>
</template>

<script setup>
import { reactive } from "vue";

const searchTerm = reactive({
  query: "",
  timeout: null,
  results: null,
});

const selectedMovie = reactive({
  title: "",
  overview: "",
  release_date: "",
  poster_path: "",
});

const handleSearch = () => {
  clearTimeout(searchTerm.timeout);
  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query !== "") {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${`2c2d1c5fa04533775bfee1e0491429f2`}&query=${
          searchTerm.query
        }`
      );
      const data = await res.json();
      searchTerm.results = data.results;
   } else {
      searchTerm.results = null;

      // 👇 Clear selected movie when input is cleared
      selectedMovie.title = "";
      selectedMovie.overview = "";
      selectedMovie.release_date = "";
      selectedMovie.poster_path = "";
    }
  }, 500);
};

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=2c2d1c5fa04533775bfee1e0491429f2`
  );
  const data = await res.json();
  
  // Update the selectedMovie state with the fetched movie details
  selectedMovie.title = data.title;  // Changed this line from 'movie.title' to 'selectedMovie.title'
  selectedMovie.overview = data.overview;  // Changed this line from 'movie.overview' to 'selectedMovie.overview'
  selectedMovie.release_date = data.release_date;  // Changed this line from 'movie.release_date' to 'selectedMovie.release_date'
  selectedMovie.poster_path = data.poster_path;  // Changed this line from 'movie.poster_path' to 'selectedMovie.poster_path'

  // Hide search results after selecting a movie
  searchTerm.results = null;
};

</script>