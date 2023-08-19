import { helpers } from '@vuelidate/validators'
import cronParser from 'cron-parser'

export const isValidCronMinute = val => {
  // this way cronParser will throw only errors related to minutes part
  const expression = `${val} * * * *`

  try {
    const parsed = cronParser.parseExpression(expression)
    return true
  } catch (e: any) {
    const errorMessage = `Invalid minutes value. Error: ${e.message}.`
    return helpers.withMessage(errorMessage, () => false)
  }
}

export const isValidCronHour = val => {
  // this way cronParser will throw only errors related to hour part
  const expression = `* ${val} * * *`

  try {
    const parsed = cronParser.parseExpression(expression)
    return true
  } catch (e: any) {
    const errorMessage = `Invalid hour value. Error: ${e.message}.`
    return helpers.withMessage(errorMessage, () => false)
  }
}

export const isValidCronDayOfMonth = val => {
  // this way cronParser will throw only errors related to day of month part
  const expression = `* * ${val} * *`

  try {
    const parsed = cronParser.parseExpression(expression)
    return true
  } catch (e: any) {
    const errorMessage = `Invalid day of month value. Error: ${e.message}.`
    return helpers.withMessage(errorMessage, () => false)
  }
}

export const isValidMonth = val => {
  // this way cronParser will throw only errors related to month part
  const expression = `* * * ${val} *`

  try {
    const parsed = cronParser.parseExpression(expression)
    return true
  } catch (e: any) {
    const errorMessage = `Invalid month value. Error: ${e.message}.`
    return helpers.withMessage(errorMessage, () => false)
  }
}

export const isValidDayOfWeek = val => {
  // this way cronParser will throw only errors related to day of week part
  const expression = `* * *  * ${val}`

  try {
    const parsed = cronParser.parseExpression(expression)
    return true
  } catch (e: any) {
    const errorMessage = `Invalid day of week value. Error: ${e.message}.`
    return helpers.withMessage(errorMessage, () => false)
  }
}
