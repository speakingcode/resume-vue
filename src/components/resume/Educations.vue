<template>
  <div class="educations">
    <b-button
      block
      v-b-toggle="'educations'"
      class="section-header"
    >
      Education:
    </b-button>
    <b-collapse
      id="educations"
      accordion="resume"
    >
      <div
        v-for='(edu, index) in educations'
        :key='index'
        class="section-content education"
      >
        <h4
          class="education-degree"
        >
          {{edu.degree}}, {{edu.department}}
        </h4>
        {{edu.institution}}, {{edu.year}}
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    educations: Array
  }
}
</script>
