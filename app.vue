<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
// Force light mode on mount
const colorMode = useColorMode()
colorMode.preference = 'light'
</script>
