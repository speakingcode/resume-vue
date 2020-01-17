<template>
  <div class="skill-set">
    <h3>{{skillSet.title}}</h3>
    <ul class="skill-list">
      <li
        v-for='skill in skillSet.skills'
        :key='skill'
      >
        {{skill}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.skill-list {
  column-count: 3;
  column-width: 165px;
  column-gap: 12px;
}
</style>

<script>
export default {
  props: {
    skillSet: Object
  }
}
</script>
