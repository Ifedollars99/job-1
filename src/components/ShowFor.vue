<template>
  <div>
    <div v-if="showSuggestedItems" class="flex flex-row" >
      <h1 class="text-gray-500 text-2xl mt-5">Suggested...</h1>
      <h1 class="text-green-600 text-2xl mt-5"> Items</h1>
    </div>
    <div class="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(product, index) in items"
        :key="index"
        class="border rounded-xl p-2 flex gap-4 shadow hover:shadow-lg transition "
      >
        <img
          :src="product.image"
          alt="product image"
          class="w-24 h-24 object-cover rounded-md"
        />
        <div>
          <button class="text-lg font-semibold text-green-700">
            {{ product.name }}
          </button>
          <p class="text-sm text-gray-500">{{ product.description }}</p>
          <p class="mt-1 text-base font-bold">${{ product.price }}</p>
          <button
            @click="addToCart(product)"
            class="text-white bg-green-700 px-2 py-1 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Props & Emits to communicate with parent component
const emit = defineEmits(["update-cart"]);

const showSuggestedItems = ref(false);

// Product and cart logic
const items = ref([]);
const API_URL = "http://localhost:5000/products";

onMounted(async () => {
  try {
    const res = await fetch(API_URL);
    items.value = await res.json();
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }
});

// Notify parent to update cart
function addToCart(product) {
  emit("update-cart", product);
  showSuggestedItems.value = true; // Show the suggested items after adding to cart
}
</script>
