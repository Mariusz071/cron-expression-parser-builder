<script setup lang="ts">
import Container from '@/components/Container.vue'
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
      Container
        CronParser
        CronEditor.mt-10(v-if="false")
</template>
