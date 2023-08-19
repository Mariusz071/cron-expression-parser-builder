import type { Validation, BaseValidation } from '@vuelidate/core';

export interface CronValues {
  minute: String
  hour: String
  dayOfMonth: String
  month: String
  dayOfWeek: String
}

export type CronValueKey =
  | 'minute'
  | 'hour'
  | 'dayOfMonth'
  | 'month'
  | 'dayOfWeek'

  export interface CronValidations extends Validation {
    minute: BaseValidation;,
    hour: BaseValidation,
    dayOfMonth: BaseValidation,
    month: BaseValidation,
    isValidDayOfWeek: BaseValidation
  }