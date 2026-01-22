<template>
  <NuxtLink
    :to="`/projeler/${project.slug}`"
    class="group relative rounded-3xl overflow-hidden bg-gray-800 aspect-[4/5]"
  >
    <!-- Background Image -->
    <img
      :src="project.image"
      :alt="project.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <!-- Content -->
    <div class="absolute bottom-6 left-6 right-6">
      <h3 class="text-2xl font-bold text-white mb-2 tracking-tight">
        {{ project.title }}
      </h3>
      <p class="text-base text-white/90 font-medium">
        {{ project.category }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
  project: Project
}

defineProps<Props>()
</script>
