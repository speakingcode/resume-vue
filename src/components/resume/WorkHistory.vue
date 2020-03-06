<template>
  <div
    class="section work-history"
  >
    <b-button
      block
      v-b-toggle="'work-history'"
      class="section-header"
    >
      Work History:
    </b-button>

    <b-collapse
      id="work-history"
      accordion="resume">
      <div class="section-content">
        <JobDetail
          v-for='(job, index) in workHistory'
          :key='index'
          :job='job'
        />
      </div>
    </b-collapse>
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
