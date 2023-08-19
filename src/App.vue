<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import CronParser from '@/components/CronParser'
</script>

<template lang="pug">
v-app
  v-layout
    v-app-bar(
      title="Cron expression parser"
      color="primary"
    )
    v-main
      PageContainer
        CronParser
</template>
