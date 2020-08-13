// CSS and SASS files
import './index.scss';

import Tobi from 'rqrauhvmra__tobi'
const tobi = new Tobi()

// Remove the two following lines to remove the product hunt floating prompt
import FloatingPrompt from 'producthunt-floating-prompt'
FloatingPrompt({ name: 'Mobile App Name', url: 'https://telegra.ph/Replace-this-link-07-23', bottom: '64px' })

// Remove the following lines to remove the darkmode js
import Darkmode from 'darkmode-js'
function addDarkmodeWidget() {
  new Darkmode().showWidget()
}
window.addEventListener('load', addDarkmodeWidget)
