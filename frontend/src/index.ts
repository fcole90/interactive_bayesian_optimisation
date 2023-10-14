// Main entrypoint
import { ui } from './legacy/libs/ui.js'

// Import jQuery globally
import './3rd/jquery/dist/jquery.js'


export const main = {
  bootstrap: () => {
    console.log('Bootstrapping app')
    const app = new ui.Application()
    app.exec()
  },
}


