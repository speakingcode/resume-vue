<template>
  <div class="section skill-set">
    <b-button
      block
      v-b-toggle="`skillset-${skillSet.id}`"
      class="section-header"
    >
      {{skillSet.title}}:
    </b-button>

    <b-collapse
      :id="`skillset-${skillSet.id}`"
      accordion="resume"
    >
      <ul class="section-content skill-list">
        <li
          v-for='skill in skillSet.skills'
          :key='skill'
        >
          {{skill}}
        </li>
      </ul>
    </b-collapse>
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
