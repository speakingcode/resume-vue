<template>
  <div class="about">
    <h1>About</h1>
    <div>
      <HelloButton/>
    </div>
    <div>
      This webpage is a simple application to show my understanding of Vue.js. It uses vue-router for routing, Babel for ES6 transpilation and Webpack for bundling. I also created a Dockerfile to run the application in a containerized development server.
    </div>
    <div>
      The source code is available at <a href='http://github.com/speakingcode/resume-vue'>github.com/speakingcode/resume-vue</a>
    </div>
  </div>
</template>

<script>
import HelloButton from '../components/HelloButton'

export default {
  components: {
    HelloButton
  }
}
</script>
