<template>
  <div class="topnav">
    <div class="topnav-group">
      <a class="topnav-link logo"
         v-link="{ name: 'home' }">
        <img src="/logo.svg"
             width="24"
             height="24"/>
        <span>Voie.js</span>
      </a>
      <a class="topnav-link"
         v-link="{ name: 'users' }">
        Users
      </a>
      <a class="topnav-link"
         v-link="{ name: 'courses' }">
        Courses
      </a>
    </div>
    <div class="topnav-group">
      <a class="topnav-link"
         href="https://github.com/inca/voie-example"
         target="_blank">
        Source on GitHub
      </a>
    </div>
  </div>
</template>

<style lang="stylus">
  @import 'spa/stylesheets/variables.styl';

  .topnav {
    background: color-dark;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .topnav-link {
    display: inline-block;
    line-height: 2.5em;
    padding: 0 .5em;
    color: color-link;
    text-decoration: none;

    &.logo {
      color: color-logo;
    }

    &.active {
      color: color-link-active;
      text-shadow: 0 0 16px rgba(255,255,255,.5);
    }

    img {
      position: relative;
      top: -2px;
      vertical-align: middle;
      margin: 0 .25em;
    }
  }
</style>
