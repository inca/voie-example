<template>
  <div class="users-layout">
    <ul class="users-list">
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

  .users-list {
    display: block;
    list-style: none;
    padding: 0;
    margin: 0;
    background: hsl(192, 25%, 95%);

    li {
      margin: 0;
    }

    a {
      display: block;
      padding: .5em 1em;
      color: hsl(192, 50%, 25%);
      text-decoration: none;

      &.active {
        background: hsl(192, 25%, 85%);
      }
    }
  }

  .users-view {
    flex: 1;
    display: flex;
  }
</style>
