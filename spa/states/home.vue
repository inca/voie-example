<template>
  <div class="home">
    <div class="home-wrap">
      <h1>Welcome to Voie.js example!</h1>
      <p>
        This is a single-page application written
        using awesome <a href="http://vuejs.org" target="_blank">Vue.js</a>
        and <a href="https://inca.github.io/voie" target="_blank">Voie.js</a>.
      </p>
      <p>
        To start just click on some navigation links above and continue exploring.
      </p>
      <p>
        Note how some screens show you "Please wait..." —
        this is done intentionally to demonstrate the ability to render
        fallback content while state data is not ready.
      </p>
      <h2>Enjoying Vue + Voie?</h2>
      <p>
        Then you can continue browsing
        <a href="https://github.com/inca/voie-example">source code at GitHub</a>.
        Be sure to give me some stars while you're at it :D
      </p>
    </div>
    <div class="author">
      Made with <3 by <a href="https://github.com/inca">Boris Okunskiy</a>
    </div>
  </div>
</template>

<style lang="stylus">
  .home {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .home-wrap {
    max-width: 480px;
  }

  .author {
    padding: 4em 0;
    color: #aaa;

    a {
      text-decoration: none;
    }
  }
</style>
