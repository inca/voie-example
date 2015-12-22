import app from './app';
import './states';

app.start();

// Export app to window for console usage
window.app = app;
console.log('%c Welcome to Voie :)', 'font-size: 2em; color: #53676c');
console.log('Glad you\'re here! We\'ve exposed %c app %c ' +
  ' so that you could play with it here. For example, try %c app.go(\'users\') %c.',
  'background: #eee', '', 'background: #eee', '');
console.log('To see Voie debug logs type %c localStorage.debug = \'voie*\' %c,' +
  ' hit Enter and reload the page.', 'background: #eee', '');
console.log('Have fun!');
