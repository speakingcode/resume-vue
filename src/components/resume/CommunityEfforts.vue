<template>
  <div class="section community-efforts">
    <b-button
      block
      v-b-toggle="'community-efforts'"
      class="section-header"
    >
    Community:
    </b-button>

    <b-collapse
      id="community-efforts"
      accordion="resume">
      <ul class="section-content">
        <li
          v-for='(comm, index) in communityEfforts'
          :key='index'
        >
          {{comm.description}}{{comm.date ? ' (' + comm.date + ')' : '' }}<br/>
          <a v-if="comm.url" :href="comm.url" target="_blank">{{comm.url}}</a>
        </li>
      </ul>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    communityEfforts: Array
  }
}
</script>
