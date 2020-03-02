<template>
  <div class="startup-experience">
    <h3>Startup Experience:</h3>
    <StartupDetail
      v-for='(startup, index) in startupExperience'
      :key='index'
      :startup='startup'
    />
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
