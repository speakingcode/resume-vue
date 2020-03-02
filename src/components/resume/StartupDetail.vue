<template>
  <div class="startup-detail">
    <h4>{{startup.title}}, {{startup.startDate}} - {{startup.endDate}}</h4>
    <div>{{startup.companyName}}, {{startup.location}}</div>
    <ul>
      <li
        v-for='highlight in startup.highlights'
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
    startup: Object
  }
}
</script>
