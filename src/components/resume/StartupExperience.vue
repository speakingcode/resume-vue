<template>
  <div class="section startup-experience">
    <b-button
      block
      v-b-toggle="'startup-experience'"
      class="section-header"
    >
      Startup Experience:
    </b-button>

    <b-collapse
      id="startup-experience"
      accordion="resume"
    >
      <div class="section-content">
        <StartupDetail
          v-for='(startup, index) in startupExperience'
          :key='index'
          :startup='startup'
        />
      </div>
    </b-collapse>
  </div>
</template>

<script>
import StartupDetail from './StartupDetail'

export default {
  components: {
    StartupDetail
  },
  props: {
    startupExperience: Array
  }
}
</script>
