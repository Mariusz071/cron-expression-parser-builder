# Cron Expression parser / builder like component

## How to run?

- open up termminal within project directory
- run `npm i` to install required dependencies
- to spin up SPA dev server run `npm run dev` command
- to open up Storybook run `npm run storybook`

## What is cron expression?

A cron expression is a string format used to define schedules for tasks in Unix-like operating systems. It is named after the "cron" daemon, which is responsible for executing scheduled tasks automatically at specified intervals. Cron expressions consist of five (or six) fields that define the timing of a task's execution:

- Minute (0-59): Specifies the minute of the hour when the task should run.
- Hour (0-23): Specifies the hour of the day when the task should run.
- Day of the month (1-31): Specifies the day of the month when the task should run.
- Month (1-12): Specifies the month when the task should run.
- Day of the week (0-6): Specifies the day of the week when the task should run (Sunday is typically 0 or 7).

Additionally, there's an optional sixth field, which is often included in cron expressions (not included in this component, yet):

- Year: Specifies the year when the task should run. This field is not supported in all cron implementations.

## What this component does?

- helps to build valid cron expression
- validates provided cron expression
