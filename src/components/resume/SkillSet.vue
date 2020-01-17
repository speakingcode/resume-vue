<template>
  <div class="skill-set">
    <h3>{{skillSet.title}}</h3>
    <ul class="skil-list">
      <li
        v-for='skill in skillSet.skills'
        v-bind:key='skill'
      >
        {{skill}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.skill-list {
  -webkit-columns: 2 200px;
     -moz-columns: 2 200px;
          columns: 2 200px;
}
</style>

<script>
export default {
  props: {
    skillSet: Object
  }
}
</script>
