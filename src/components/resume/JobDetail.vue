<template>
  <div class="job-detail">

    <h4>{{job.title}}</h4>
    <h5>{{job.companyName}}, {{teamName}} {{job.location}}</h5>
    <h5>{{job.startDate}} - {{job.endDate}}</h5>
    <ul>
      <li
        v-for='highlight in job.highlights'
        v-bind:key='highlight'
      >
        {{highlight}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    job: Object
  },
  computed: {
    teamName () { return this.job.teamName ? this.job.teamName + ',' : '' }
  }
}
</script>
