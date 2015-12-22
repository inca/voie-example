<template>
  <div class="courses-layout">
    <ul class="courses-list side-list">
      <li v-for="course in courses">
        <a v-link="{ name: 'course', params: { courseId: course.id }}">
          {{ course.title }}
        </a>
      </li>
    </ul>
    <v-view class="courses-view">
      <div class="loading">
        Please wait...
      </div>
    </v-view>
  </div>
</template>

<style lang="stylus">
  .courses-layout {
    display: flex;
    flex-flow: row nowrap;
  }

  .courses-view {
    flex: 1;
    display: flex;
  }
</style>
