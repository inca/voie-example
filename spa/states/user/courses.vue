<template>
  <div class="user-courses">
    <ul v-if="courses.length">
      <li v-for="course in courses">
        <a v-link="{ name: 'user.enrollment', params: { courseId: course.id }}">
          {{ course.title }}
        </a>
      </li>
    </ul>
    <p v-else>Not enrolled on any courses.</p>
  </div>
</template>
