<script setup lang="ts">
// imports
import { reactive, ref } from 'vue'
import cronstrue from 'cronstrue'

import { useCronValidation } from '@/use/useCronValidation'
import {
  minutesHint,
  hoursHint,
  dayOfMonthHint,
  monthHint,
  dayOfWeekHint
} from './consts'
import type { CronValues } from './types'
///

const cronValues: CronValues = reactive({
  minute: '',
  hour: '',
  dayOfMonth: '',
  month: '',
  dayOfWeek: ''
})

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
///

const parsedExpression = ref('')

const onParse = () => {
  const expressionValues = Object.values(cronValues)
  const expressionString = expressionValues.join(' ')

  parsedExpression.value = cronstrue.toString(expressionString)
}

///
</script>

<template lang="pug">
v-card
  v-card-title Cron Builder
  v-card-text
    v-form.mb-10(@submit="onParse")
      v-text-field.mb-5(
        v-model="cronValues.minute"
        label="Minutes"
        dense
        autofocus
        required
        max-width="150px"
        :hint="minutesHint"
        :class="{'v-field--error': minuteErrors.length}"
        @input="$v.minute.$touch"
      )
      v-text-field.mb-5(
        v-model="cronValues.hour"
        label="Hours"
        dense
        required
        max-width="150px"
        :hint="hoursHint"
        :class="{'v-field--error': hourErrors.length}"
        @input="$v.hour.$touch"
      )

      v-text-field.mb-5(
        v-model="cronValues.dayOfMonth"
        label="Day of month"
        dense
        required
        max-width="150px"
        :hint="dayOfMonthHint"
        :class="{'v-field--error': dayOfMonthErrors.length}"
        @input="$v.dayOfMonth.$touch"
      )
      v-text-field.mb-5(
        v-model="cronValues.month"
        label="Month"
        dense
        required
        max-width="150px"
        :hint="monthHint"
        :class="{'v-field--error': monthErrors.length}"
        @input="$v.month.$touch"
      )
      v-text-field.mb-5(
        v-model="cronValues.dayOfWeek"
        label="Day of week"
        dense
        required
        max-width="150px"
        :hint="dayOfWeekHint"
        :class="{'v-field--error': dayOfWeekErrors.length}"
        @input="$v.dayOfWeek.$touch"
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
