<template>
  <div>
    <div class="p-3">
      <!-- Search bar section -->
      <div class="flex flex-row gap-4 justify-between items-center bg-gray-300 rounded-lg w-auto md:w-full h-24 p-2">
        <div><i class="bi bi-incognito text-3xl text-green-600"></i></div>

        <div class="flex flex-row space-x-2 md:space-x-10">
          <div class="flex flex-col gap-2">
            You Searched: {{ searchTerm.query }}
            <div class="bg-white border border-indigo-600/30 rounded-lg shadow-lg flex items-center">
              <i class="bi bi-search p-2 font-bold text-green-600"></i>
              <input
                type="text"
                placeholder="Search for an item"
                class="rounded-r-lg px-10 py-1 md:py-2 border-0 outline-0 focus:ring-2 focus:ring-indigo-600 ring-inset w-full"
                v-model="searchTerm.query"
                @input="handleSearch"
              />
            </div>
          </div>

          <!-- Cart icon -->
          <div class="flex flex-col">
            <h1 class="animate-bounce text-green-600 text-lg hover:text-green-400">Cart</h1>
            <i
              @click="viewCart"
              class="bi bi-backpack4 text-green-600 text-3xl animate-bounce hover:text-green-400 cursor-pointer"
            ></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Search results header -->
    <div v-if="searchTerm.results" class="flex flex-row justify-start gap-2 mt-4">
      <h1 class="text-2xl text-gray-400">Your Search</h1>
      <h1 class="text-2xl text-green-500">results...</h1>
    </div>

    <!-- Search results list -->
    <div v-if="searchTerm.results?.length" class="mt-6 space-y-4">
      <div
        v-for="product in searchTerm.results"
        :key="product.id"
        class="border rounded-xl p-4 flex gap-4 shadow hover:shadow-lg transition"
      >
        <img :src="product.thumbnail || product.image" alt="product" class="w-24 h-24 object-cover rounded-md" />
        <div>
          <button @click="addProduct(product)" class="text-lg font-semibold text-green-700">
            {{ product.title }}
          </button>
          <p class="text-sm text-gray-500">{{ product.description }}</p>
          <p class="mt-1 text-base font-bold">${{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>

    <!-- Selected product display -->
    <div v-if="selectedProduct" class="mt-6 border p-4 rounded-xl shadow-md">
      <h3 class="text-xl font-bold text-green-500 mb-2">Selected Product</h3>
      <img :src="selectedProduct.thumbnail || selectedProduct.image" alt="selected" class="w-32 h-32 object-cover rounded-md mb-2" />
      <h4 class="text-lg font-semibold">{{ selectedProduct.title }}</h4>
      <p class="text-sm text-gray-500">{{ selectedProduct.description }}</p>
      <p class="text-base font-bold mt-1">${{ selectedProduct.price.toFixed(2) }}</p>
      <button
        @click="addCart"
        :disabled="!selectedProduct"
        class="text-white text-sm bg-green-700 p-2 rounded-xl mt-2 disabled:opacity-50"
      >
        Add to Cart
      </button>
    </div>

    <!-- Cart view -->
    <div v-if="showCart" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      <div
        v-for="(cartItem, index) in cartProduct"
        :key="cartItem.id"
        class="border-2 border-gray-300 shadow-lg rounded-lg p-4"
      >
        <img :src="cartItem.thumbnail || cartItem.image" alt="cart item" class="w-32 h-32 object-cover rounded-md mb-2" />
        <h4 class="text-lg font-semibold">{{ cartItem.title }}</h4>
        <p class="text-base font-bold mt-1">${{ cartItem.price.toFixed(2) }}</p>

        <div class="flex items-center gap-4 mt-2">
          <button v-if="cartItem.quantity > 1" @click="decrease(index)">-</button>
          <i
            v-else
            @click="removeItem(index)"
            class="bi bi-trash-fill text-red-500 text-xl cursor-pointer"
          ></i>
          <span class="text-xl font-bold">{{ cartItem.quantity }}</span>
          <button @click="increase(index)">+</button>
        </div>
      </div>

      <!-- Cart summary -->
      <div v-if="cartProduct.length" class="mt-10 col-span-full">
        <h1 class="text-black text-4xl font-bold">Summary</h1>
        <h1 class="text-black text-lg">SubTotal: ${{ subtotal.toFixed(2) }}</h1>
        <h1 class="text-black text-lg">Estimated Delivery & Handling: $250.00</h1>
        <h1 class="text-black text-lg">Total = ${{ (subtotal + 250).toFixed(2) }}</h1>

        <div class="flex gap-4 mt-4">
          <button class="bg-green-700 text-white py-2 px-6 rounded-xl hover:opacity-90">Checkout</button>
          <button @click="reloadPage" class="bg-red-600 text-white py-2 px-4 rounded-xl hover:opacity-90">Reset</button>
        </div>
      </div>
    </div>

    <ShowFor @update-cart="handleAddToCart" />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import ShowFor from './ShowFor.vue';

const reloadPage = () => window.location.reload();

const showCart = ref(false);
const selectedProduct = ref(null);
const cartProduct = ref([]);

const subtotal = computed(() =>
  cartProduct.value.reduce((total, item) => total + item.price * item.quantity, 0)
);

const searchTerm = reactive({
  query: '',
  timeout: null,
  results: null,
});

const handleSearch = () => {
  clearTimeout(searchTerm.timeout);
  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query.trim()) {
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm.query)}`);
        const data = await res.json();
        searchTerm.results = data.products;
      } catch (err) {
        console.error('API Fetch Error:', err);
        searchTerm.results = [];
      }
    } else {
      searchTerm.results = null;
    }
  }, 500);
};

const addProduct = (product) => {
  selectedProduct.value = product;
  searchTerm.results = null;
};

const increase = (index) => {
  cartProduct.value[index].quantity++;
};

const decrease = (index) => {
  if (cartProduct.value[index].quantity > 1) {
    cartProduct.value[index].quantity--;
  }
};

const removeItem = (index) => {
  cartProduct.value.splice(index, 1);
};

const viewCart = () => {
  showCart.value = !showCart.value;
};

const addCart = () => {
  if (selectedProduct.value) {
    const exists = cartProduct.value.find(item => item.id === selectedProduct.value.id);
    if (exists) {
      exists.quantity++;
    } else {
      cartProduct.value.push({ ...selectedProduct.value, quantity: 1 });
    }
    selectedProduct.value = null;
    searchTerm.query = '';
    searchTerm.results = null;
  }

   // Add alert here
   window.alert('Product added to cart!! Click on the cart icon on the top right corner to acess your Carts.');
};

const handleAddToCart = (product) => {
  const existing = cartProduct.value.find(p => p.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cartProduct.value.push({ ...product, quantity: 1 });
  }
  showCart.value = true;
};
</script>
