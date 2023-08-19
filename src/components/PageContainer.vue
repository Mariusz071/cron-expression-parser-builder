<script lang="ts" setup>
// imports
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { APP_BAR_HEIGHT } from '@/common/constants'

const { name } = useDisplay()

const containerWidth = computed(() => {
  switch (name.value) {
    case 'xs':
      return '100%'
    case 'sm':
      return '80%'
    case 'md':
      return '60%'
    case 'lg':
      return '50%'
    case 'xl':
      return '50%'
    case 'xxl':
      return '50%'
    default:
      return '50%'
  }
})
</script>
<template lang="pug">
v-container(
  :style="{ maxWidth: containerWidth, height: `calc(100vh - ${APP_BAR_HEIGHT}px)`}"
)
  slot
</template>
