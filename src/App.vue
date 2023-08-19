<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import CronEditor from '@/components/CronEditor.vue'
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
        CronEditor.mt-10(v-if="false")
</template>
