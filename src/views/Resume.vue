<template>
  <div class="resume">
    <h1>Resume</h1>
    <div class="resume-content">
      <Summary :summary="resume.summary"/>
      <WorkHistory :work-history='resume.workHistory'/>
      <SkillSet
        v-for='(skillSet, index) in resume.skillSets'
        :key='index'
        :skill-set='skillSet'
      />
    </div>
  </div>
</template>

<style>
.resume-content {
  text-align: left;
}
</style>

<script>
import Summary from '../components/resume/Summary'
import WorkHistory from '../components/resume/WorkHistory'
import SkillSet from '../components/resume/SkillSet'

import resume from '../data/resumeData.js'

export default {
  components: {
    Summary,
    WorkHistory,
    SkillSet
  },
  data: () => ({
    resume
  })
}
</script>
