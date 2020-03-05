<template>
  <div class="about">
    <h1>About</h1>
    <div>
    </div>
    <div>
      Resume-vue is a Vue.js app I built to show my resume and portfolio as an interactive web app. Although simple, the app fetches its data from the <a href="http://resume-api-rails.herokuapp.com">Resume API</a> service I also developed. It uses vue-router for routing, Babel for ES6 transpilation and Webpack for bundling.
    </div>
    <div>
      <GlareButton url="http://github.com/speakingcode/resume-vue">
      View on Github
      </GlareButton>
    </div>

  </div>
</template>

<script>
import GlareButton from '../components/GlareButton'

export default {
  components: {
    GlareButton
  }
}
</script>
