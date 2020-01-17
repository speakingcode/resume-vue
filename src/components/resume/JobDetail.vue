<template>
  <div class="job-detail">
    <h4>{{job.title}}, {{job.startDate}} - {{job.endDate}}</h4>
    <div>{{job.companyName}}, {{teamName}} {{job.location}}</div>
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
