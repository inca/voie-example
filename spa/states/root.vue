<template>
  <div class="root">
    <topnav>
    </topnav>
    <v-view class="root-body">
      <div class="loading">Please wait...</div>
    </v-view>
  </div>
</template>

<script>
import Topnav from './topnav.vue';

export default {

  components: {
    topnav: Topnav
  }

};
</script>

<style>
  .root {
    display: flex;
    flex-flow: column nowrap;
  }

  .root-body {
    flex: 1;
    display: flex;
  }
</style>
