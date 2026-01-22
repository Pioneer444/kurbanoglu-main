<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>

<script setup lang="ts">
// Default layout with Header + Main content + Footer + global WhatsApp button
import WhatsAppButton from '~/components/molecules/WhatsAppButton.vue'
</script>
