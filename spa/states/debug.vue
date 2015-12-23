<template>
  <div class="debug"
       :class="{ shown: shown }">
    <div class="debug-handle"
         @click="toggleDebug">
      <span v-if="!shown">Show debug</span>
      <span v-if="shown">Hide debug</span>
    </div>
    <div class="debug-body"
         v-if="shown">
      <div class="debug-column">
        <pre>ctx.state.name = {{ app.context.state.name }}</pre>
        <pre>ctx.params = {{ app.context.params | json 2 }}</pre>
      </div>
      <div class="debug-column">
        <p>
          Data fetching delay:
          <label>
            <input type="radio"
                   number
                   :value="0"
                   v-model="app.fakeDataDelay"/>
            no delay
          </label>
          <label>
            <input type="radio"
                   number
                   :value="1000"
                   v-model="app.fakeDataDelay"/>
            1 second
          </label>
          <label>
            <input type="radio"
                   number
                   :value="3000"
                   v-model="app.fakeDataDelay"/>
            3 seconds
          </label>
        </p>
        <small>
          This delay is hooked to our mock data services.<br/>
          Use positive delays to watch state transitions and
          loading placeholders.
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import app from 'spa/app';

export default {

  data: function() {
    return {
      app,
      shown: !!localStorage.debugShown
    };
  },

  methods: {

    toggleDebug() {
      this.shown = !this.shown;
      localStorage.debugShown = this.shown ? true : '';
    }

  }

};
</script>

<style lang="stylus">
  @import 'spa/stylesheets/variables.styl';

  .debug {
    position: relative;
  }

  .debug-body, .debug-handle {
    background: color-dark;
    color: #fff;
  }

  .debug-handle {
    position: absolute;
    bottom:100%;
    left: 1em;
    padding: .25em 1em;
    cursor: pointer;
    text-align: center;
    border-radius: 8px 8px 0 0;
  }

  .debug-body {
    padding: .5em 1em;
  }

  @media (min-width: 640px) {
    .debug-body {
      display: flex;
      flex-flow: row nowrap;
    }

    .debug-column {
      flex: 1;
    }
  }
</style>
