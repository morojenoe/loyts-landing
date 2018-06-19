import tree from './images/1-tree-new.png';
import world from './images/2-map_2.png';
import youtube from './images/4-voiceacting.png';
import phone from './images/phone.png';
import words from './images/words.png';

const sections = [
  {
    id: 'sign-up',
    title: 'LOYTS',
    text: "The best app to practice a language. Create an account now. It's free",
    nextSlideLinkText: '',
    imageSrc: '',
    imageAlt: '',
    color: '#262626',
  },
  {
    id: 'welcome',
    title: 'Choose Language',
    text: 'With LOYTS you can practice every language you want. Which apple do you like?',
    nextSlideLinkText: 'How it works',
    imageSrc: tree,
    imageAlt: 'tree',
    color: '#60bdfc',
  },
  {
    id: 'connect-peoples',
    title: 'Connect With People',
    text: "Record a short audio to draw peoples' attention. Listen their applications and choose the one you like",
    nextSlideLinkText: 'Learn with fun',
    imageSrc: world,
    imageAlt: 'world',
    color: '#fc9760',
  },
  {
    id: 'games',
    title: 'Fascinating Games',
    text: 'To make your practicing exciting play in games like Two-Truth-And-a-Lie or Would-You-Rather. With communicative games you will practice language with fun',
    nextSlideLinkText: 'Train pronunciation',
    imageSrc: words,
    imageAlt: 'games',
    color: '#76C961',
  },
  {
    id: 'voice-acting',
    title: 'Breathtaking Voice Acting',
    text: 'Make a voice over for a video from YouTube. Compare your prononication with original one. Try again if you are not satisfied. It helps to make your pronunciation clear',
    nextSlideLinkText: 'Install app on smartphone',
    imageSrc: youtube,
    imageAlt: 'man speaks on youtube',
    color: '#7C7AD2',
  },
  {
    id: 'install',
    title: 'Install Android or iOS app',
    text: 'Stay with LOYTS everywhere. Install an app on your device (Android, iOS) and practice language you want wherever you want',
    nextSlideLinkText: '',
    imageSrc: phone,
    imageAlt: 'mobile',
    color: '#DD6558',
  },
];

export default sections;
