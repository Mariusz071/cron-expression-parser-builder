import { setup } from '@storybook/vue3'
import { registerPlugins } from '../src/plugins/registerPlugins'
import { withVuetify } from './withVuetify.decorator'

import type { Preview } from '@storybook/vue3'

setup(app => {
  registerPlugins(app)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export const decorators = [withVuetify]
export default preview
