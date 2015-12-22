<template>
  <div class="root">
    <topnav>
    </topnav>
    <v-view class="root-body">
      <div class="loading">Please wait...</div>
    </v-view>
    <debug>
    </debug>
  </div>
</template>

<script>
import Topnav from './topnav.vue';
import Debug from './debug.vue';

export default {

  components: {
    topnav: Topnav,
    debug: Debug
  }

};
</script>

<style lang="stylus">
  @import 'spa/stylesheets/commons.styl';

  .root {
    display: flex;
    flex-flow: column nowrap;
  }

  .root-body {
    flex: 1;
    display: flex;
  }
</style>
