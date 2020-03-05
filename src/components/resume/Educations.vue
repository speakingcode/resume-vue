<template>
  <div class="educations">
    <h3>Education:</h3>
    <div
      v-for='(edu, index) in educations'
      :key='index'
      class="education"
    >
      <h4
        class="education-degree"
      >
        {{edu.degree}}, {{edu.department}}
      </h4>
      {{edu.institution}}, {{edu.year}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    educations: Array
  }
}
</script>
