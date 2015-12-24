<template>
  <div class="user-layout">
    <h1>{{ user.name }}</h1>
    <div class="user-nav">
      <a class="nav-link"
         v-link="{ name: 'user.info' }">
        Information
      </a>
      <a class="nav-link"
         v-link="{ name: 'user.courses' }">
        Courses
      </a>
    </div>
    <v-view>
      <div class="loading">
        Please wait...
      </div>
    </v-view>
  </div>
</template>

<style>
  .user-layout {
    flex-flow: column nowrap;
    justify-content: flex-start;
    padding: 2em;
  }
</style>
