import { loadFonts } from './webFontLoader'
import { vuetify } from './vuetify'

export function registerPlugins(app) {
  loadFonts()
  app.use(vuetify)
}
