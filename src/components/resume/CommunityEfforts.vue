<template>
  <div class="community-efforts">
    <h3>Community:</h3>
    <ul>
      <li
        v-for='(comm, index) in communityEfforts'
        :key='index'
      >
        {{comm.description}}{{comm.date ? ' - ' + comm.date : '' }}<br/>
        {{comm.url ? '(' + comm.url + ')' : '' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    communityEfforts: Array
  }
}
</script>
