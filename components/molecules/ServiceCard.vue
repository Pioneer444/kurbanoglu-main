<template>
  <UCard
    :ui="{
      root: 'bg-white rounded-2xl p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg',
      body: 'p-0'
    }"
  >
    <div class="flex flex-col items-center gap-6">
      <!-- Icon -->
      <div
        class="w-12 h-12 flex items-center justify-center"
        :class="iconColorClass"
      >
        <UIcon :name="service.icon" class="w-12 h-12" />
      </div>

      <!-- Title -->
      <h3
        class="text-2xl font-medium"
        :class="titleColorClass"
      >
        {{ service.title }}
      </h3>

      <!-- Description -->
      <p class="text-lg text-gray-700 font-medium leading-relaxed">
        {{ service.description }}
      </p>

      <!-- Link (optional) -->
      <UButton
        v-if="showLink"
        :to="`/hizmetler/${service.slug}`"
        variant="ghost"
        color="primary"
        trailing-icon="i-heroicons-arrow-right"
        class="mt-2"
      >
        İncele
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { Service } from '~/types'

interface Props {
  service: Service
  showLink?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showLink: false
})

const iconColorClass = computed(() => {
  return props.service.color === 'secondary' 
    ? 'text-red-600' 
    : 'text-primary-600'
})

const titleColorClass = computed(() => {
  return props.service.color === 'secondary' 
    ? 'text-red-600' 
    : 'text-primary-600'
})
</script>
