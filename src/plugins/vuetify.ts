import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: true,
        colors: {
          primary: '#6941C6',
          secondary: '#1F2937',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          disabled: '#BBBBBB'
        }
      }
    }
  }
})
