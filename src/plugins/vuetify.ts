import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    aliases,
    defaultSet: 'fa',
    sets: {
      mdi
    }
  },
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