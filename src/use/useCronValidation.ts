import { computed, unref, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import {
  isValidCronMinute,
  isValidCronHour,
  isValidCronDayOfMonth,
  isValidMonth,
  isValidDayOfWeek
} from '@/plugins/vuelidateValidators'

import type { ComputedRef } from 'vue'
import type { CronValues } from '@/components/CronBuilder/types'
import type { BaseValidation } from '@vuelidate/core'

export const useCronValidation = (cronValues: CronValues) => {
  const rules = computed(() => ({
    minute: {
      required: helpers.withMessage('Minute value is required.', required),
      isValidCronMinute: isValidCronMinute(cronValues.minute)
    },
    hour: {
      required: helpers.withMessage('Hour value is required.', required),
      isValidCronHour: isValidCronHour(cronValues.hour)
    },
    dayOfMonth: {
      required: helpers.withMessage(
        'Day of month value is required.',
        required
      ),
      isValidCronDayOfMonth: isValidCronDayOfMonth(cronValues.dayOfMonth)
    },
    month: {
      required: helpers.withMessage('Month value is required.', required),
      isValidMonth: isValidMonth(cronValues.month)
    },
    dayOfWeek: {
      required: helpers.withMessage('Day of week value is required.', required),
      isValidDayOfWeek: isValidDayOfWeek(cronValues.dayOfWeek)
    }
  }))

  const $v = useVuelidate(rules, cronValues)

  const minuteErrors = computed(() => {
    //@ts-ignore
    return $v.value.minute.$errors.map(e => e.$message)
  })

  const hourErrors = computed(() => {
    //@ts-ignore
    return $v.value.hour.$errors.map(e => e.$message)
  })

  const dayOfMonthErrors = computed(() => {
    //@ts-ignore
    return $v.value.dayOfMonth.$errors.map(e => e.$message)
  })

  const monthErrors = computed(() => {
    //@ts-ignore
    return $v.value.month.$errors.map(e => e.$message)
  })

  const dayOfWeekErrors = computed(() => {
    //@ts-ignore
    return $v.value.dayOfWeek.$errors.map(e => e.$message)
  })

  const errors = computed(() => {
    return $v.value.$errors.map(e => e.$message)
  })

  return {
    minuteErrors,
    hourErrors,
    dayOfMonthErrors,
    monthErrors,
    dayOfWeekErrors,
    errors,
    $v
  }
}
