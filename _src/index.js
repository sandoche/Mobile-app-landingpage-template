// CSS and SASS files
import './index.scss';

import Tobi from 'rqrauhvmra__tobi'
import FloatingPrompt from 'producthunt-floating-prompt'

const tobi = new Tobi()

if (window.location.search.substr(1) === 'contact') {
  const UserVoice = window.UserVoice||[];
  UserVoice.push(['show']);
}

FloatingPrompt({name:'Mobile App Name', url:'https://telegra.ph/Replace-this-link-07-23', bottom: '64px'})