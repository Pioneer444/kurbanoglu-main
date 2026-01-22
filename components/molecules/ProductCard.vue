<template>
  <div
    class="group bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"
  >
    <!-- Product Image -->
    <div class="aspect-[4/3] overflow-hidden bg-gray-100">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- Product Title -->
    <div class="p-6">
      <h3 class="text-xl font-medium text-primary-600 text-center leading-tight">
        {{ product.title }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'

interface Props {
  product: Product
}

defineProps<Props>()
</script>
