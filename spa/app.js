import { StateManager } from 'voie';

let app = new StateManager({
  el: '#app'
});

app.fakeDataDelay = 0;

export default app;


