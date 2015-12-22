<template>
  <div class="course-layout">
    <h1>{{ course.title }}</h1>
    <div class="course-nav">
      <a class="nav-link"
         v-link="{ name: 'course.info' }">
        Information
      </a>
      <a class="nav-link"
         v-link="{ name: 'course.members' }">
        Members
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
  .course-layout {
    flex-flow: column nowrap;
    padding: 2em;
  }
</style>
