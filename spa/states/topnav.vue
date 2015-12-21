<template>
  <div class="topnav">
    <a class="topnav-link logo"
       href="https://github.com/inca/voie"
       target="_blank">
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
</template>

<style lang="stylus">
  .topnav {
    background: hsl(192, 20%, 20%);
  }

  .topnav-link {
    display: inline-block;
    padding: .25em .5em;
    color: hsl(192, 66%, 50%);
    text-decoration: none;

    &.active {
      color: hsl(192, 60%, 85%);
      text-shadow: 0 0 16px rgba(255,255,255,.5);
    }

    &.logo {
      color: hsl(48, 100%, 67%);
    }

    img {
      vertical-align: middle;
      margin: 0 .25em;
    }
  }
</style>
