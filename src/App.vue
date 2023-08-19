<script setup lang="ts">
import Container from '@/components/Container.vue'
import CronEditor from '@/components/CronEditor.vue'
import CronBuilder from '@/components/CronBuilder'
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
        CronEditor
        CronBuilder
</template>
