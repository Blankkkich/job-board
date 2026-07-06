<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()

useHead({
  titleTemplate: (title) => title ? title : appConfig.site.name,
  meta: [{name: 'description', content: appConfig.site.description}],
})
</script>