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
      <pre>ctx.state.name = {{ app.context.state.name }}</pre>
      <pre>ctx.params = {{ app.context.params | json 2 }}</pre>
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
</style>
