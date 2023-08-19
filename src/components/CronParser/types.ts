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
