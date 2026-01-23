<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
// Force light mode on mount (client-side only)
onMounted(() => {
  const colorMode = useColorMode()
  colorMode.preference = 'light'
})
</script>
