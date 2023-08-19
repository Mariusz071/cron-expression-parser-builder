<script setup lang="ts">
// imports
import { reactive, computed } from 'vue'
import { useCronValidation } from '@/use/useCronValidation'
import { minutesHint, hoursHint, dayOfMonthHint, monthHint } from './consts'
import type { CronValues } from './types'
///

const onParse = () => {
  console.log('parse expression')
}

const cronValues: CronValues = reactive({
  minute: '',
  hour: '',
  dayOfMonth: '',
  month: '',
  dayOfWeek: ''
})

//validations
const { minuteErrors, hourErrors, dayOfMonthErrors, monthErrors, errors, $v } =
  useCronValidation(cronValues)
///
</script>

<template lang="pug">
v-card(flat)
  v-card-title Cron Builder
  v-card-text
    v-form.mb-10
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
    v-alert(
      v-if="!!errors.length"
      dense
      type="error"
    )
      code.d-block(v-for="error in errors") {{  error }}
  v-card-actions.py-0
    v-btn.mx-auto(
      color="primary"
      variant="elevated"
      :disabled="errors.length || !Object.values(cronValues).length"
      @click="onParse"
    ) Parse expression
  
</template>
