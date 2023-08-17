<script setup lang="ts">
import Container from '@/components/Container.vue'
</script>

<template lang="pug">
v-app
  v-layout
    v-app-bar(
      title="Datapane Task"
      color="primary"
    )
    v-main
      Container
        h2 test
</template>
