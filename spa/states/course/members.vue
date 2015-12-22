<template>
  <div class="course-members">
    <ul v-if="members.length">
      <li v-for="user in members">
        <a v-link="{ name: 'user', params: { userId: user.id }}">
          {{ user.name }}
        </a>
      </li>
    </ul>
    <p v-else>No members yet.</p>
  </div>
</template>
