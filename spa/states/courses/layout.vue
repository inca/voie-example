<template>
  <div class="courses-layout">
    <ul class="courses-list side-list">
      <li>
        <input type="search"
               v-model="q"
               debounce="50"
               placeholder="Filter courses"/>
      </li>
      <li v-for="course in filteredCourses">
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

<script>
import app from 'spa/app';

export default {

  data() {
    return {
      q: this.$options.params.q
    };
  },

  computed: {
    filteredCourses() {
      return this.q ?
        this.courses.filter(c => c.title.indexOf(this.q) > -1) :
        this.courses;
    }
  },

  watch: {
    q() {
      app.update({ q: this.q }, true);
    }
  }

}
</script>

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
