<script setup lang="ts">
// imports
import { reactive, ref, watch } from 'vue'
import cronstrue from 'cronstrue'
import debounce from 'lodash.debounce'

import { useCronValidation } from '@/use/useCronValidation'
import {
  minutesHint,
  hoursHint,
  dayOfMonthHint,
  monthHint,
  dayOfWeekHint
} from './consts'

import type { Ref } from 'vue'
import type { CronValues, CronValueKey, InputEvent } from './types'
///

// commmon
const cronValues: CronValues = reactive({
  minute: '',
  hour: '',
  dayOfMonth: '',
  month: '',
  dayOfWeek: ''
})
///

//validations
const {
  minuteErrors,
  hourErrors,
  dayOfMonthErrors,
  monthErrors,
  dayOfWeekErrors,
  errors,
  $v
} = useCronValidation(cronValues)

const onValueInput = debounce((e: InputEvent, valueKey: CronValueKey) => {
  $v.value[valueKey].$touch()
  cronValues[valueKey] = e.target.value
}, 500)
///

// expression parsing
const parsedExpression: Ref<string> = ref('')

const onParse = () => {
  const expressionValues = Object.values(cronValues)
  const expressionString = expressionValues.join(' ')

  parsedExpression.value = cronstrue.toString(expressionString)
  // isParseEnabled.value = false
}
///

// UI
// watch(parsedExpression, () => {
//   isParseEnabled.value = true
// })

// const isParseEnabled = ref(false)
///
</script>

<template lang="pug">
v-card
  v-card-text
    v-form.mb-10(@submit="onParse")
      v-text-field.mb-5(
        :model-value="cronValues.minute"
        label="Minutes"
        dense
        autofocus
        required
        :hint="minutesHint"
        :class="{'v-field--error': minuteErrors.length}"
        @input="e => onValueInput(e, 'minute')"
      )
      v-text-field.mb-5(
        :model-value="cronValues.hour"
        label="Hours"
        dense
        required
        :hint="hoursHint"
        :class="{'v-field--error': hourErrors.length}"
        @input="e => onValueInput(e, 'hour')"
      )

      v-text-field.mb-5(
        :model-value="cronValues.dayOfMonth"
        label="Day of month"
        dense
        required
        :hint="dayOfMonthHint"
        :class="{'v-field--error': dayOfMonthErrors.length}"
        @input="e => onValueInput(e, 'dayOfMonth')"
      )
      v-text-field.mb-5(
        :model-value="cronValues.month"
        label="Month"
        dense
        required
        :hint="monthHint"
        :class="{'v-field--error': monthErrors.length}"
        @input="e => onValueInput(e, 'month')"
      )
      v-text-field.mb-5(
        :model-value="cronValues.dayOfWeek"
        label="Day of week"
        dense
        required
        :hint="dayOfWeekHint"
        :class="{'v-field--error': dayOfWeekErrors.length}"
        @input="e => onValueInput(e, 'dayOfWeek')"
      )
    v-alert(
      v-if="!!errors.length"
      dense
      type="error"
    )
      code.d-block(v-for="error in errors") {{  error }}
    v-alert(
      v-if="!$v.$invalid && !!parsedExpression"
      type="success"
    )
      v-alert-title.mb-1 Parsed cron expression:
      code {{  parsedExpression }}
  v-card-actions.py-0
    v-btn.mx-auto(
      color="primary"
      variant="elevated"
      :disabled="$v.$invalid"
      @click="onParse"
    ) Parse expression
  
</template>
