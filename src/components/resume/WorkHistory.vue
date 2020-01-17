<template>
  <div class="work-history">
    <h3>Work History:</h3>
    <JobDetail
      v-for='(job, index) in workHistory'
      :key='index'
      :job='job'
    />
  </div>
</template>

<script>
import JobDetail from './JobDetail'

export default {
  components: {
    JobDetail
  },
  props: {
    workHistory: Array
  }
}
</script>
