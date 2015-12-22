<template>
  <div class="user-enrollment">
    <p>
      <strong>{{ user.name }}</strong>
      is
      <strong v-if="!isMember">not</strong>
      enrolled on course
      <strong>{{ course.title }}</strong>.
    </p>
  </div>
</template>
