<template>
  <div class="users-layout">
    <ul class="users-list side-list">
      <li v-for="user in users">
        <a v-link="{ name: 'user', params: { userId: user.id }}">
          {{ user.name }}
        </a>
      </li>
    </ul>
    <v-view class="users-view">
      <div class="loading">
        Please wait...
      </div>
    </v-view>
  </div>
</template>

<style lang="stylus">
  .users-layout {
    display: flex;
    flex-flow: row nowrap;
  }

  .users-view {
    flex: 1;
    display: flex;
  }
</style>
