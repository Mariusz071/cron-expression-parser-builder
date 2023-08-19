<script setup lang="ts">
// imports
import { ref } from 'vue'
import debounce from 'lodash.debounce'
import { oneDark } from '@codemirror/theme-one-dark'
import cronstrue from 'cronstrue'

import { Codemirror } from 'vue-codemirror'

import type { Ref } from 'vue'

// expression related
const expression: Ref<string> = ref('')
const parsedExpression: Ref<string> = ref('')
const expressionError: Ref<string> = ref('')
///

// codemirror related
const extensions = [oneDark]
const change = debounce((text: string) => {
  try {
    const asText = cronstrue.toString(text)
    parsedExpression.value = asText
    expressionError.value = ''
  } catch (e: any) {
    parsedExpression.value = ''
    expressionError.value = e
  }
}, 500)
///
</script>

<template lang="pug">
v-card
  v-card-title Cron Editor
  v-card-text
    Codemirror(
      v-model="expression"
      v-bind="{ extensions }"
      :autofocus="true"
      height='auto'
      border
      placeholder="Enter cron expression"
      @change="change"
    )
    div.mt-4
      v-alert(
        v-if="!!parsedExpression"
        type="success"
        :text="parsedExpression"
      )

      v-alert(
        v-if="!!expressionError"
        type="error"
        :text="expressionError"
      )
</template>

<style scoped lang="scss">
:deep(.cm-editor) {
  font-family: monospace !important;
  min-height: 100px;
}
</style>
