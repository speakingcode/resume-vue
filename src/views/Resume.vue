<template>
  <div class="resume">
    <h1>Resume</h1>
    <div class="resume-content">
      <Summary
        :summary="resume.summary"
        :name="resume.name"
        :title="resume.title"
      />
      <WorkHistory :work-history='resume.workHistory'/>
      <StartupExperience :startup-experience='resume.startupExperience' />
      <CommunityEfforts :community-efforts='resume.communityEfforts' />
      <SkillSet
        v-for='(skillset, index) in resume.skillsets'
        :key='index'
        :skill-set='skillset'
      />
      <Educations :educations='resume.educations' />
    </div>
  </div>
</template>

<style>
.resume-content {
  text-align: left;
}

.section {
  margin-bottom: 10px;
}

.section-header {
  background-color: #fff !important;
  color: #2c3e50 !important;
  font-weight: bold !important;
  text-align: left !important;
}

.section-content {
  padding-top: 10px;
}
</style>

<script>
import Summary from '../components/resume/Summary'
import WorkHistory from '../components/resume/WorkHistory'
import StartupExperience from '../components/resume/StartupExperience'
import CommunityEfforts from '../components/resume/CommunityEfforts'
import SkillSet from '../components/resume/SkillSet'
import Educations from '../components/resume/Educations'

// import resume from '../data/resumeData.js'
const toCamel = str => str.replace(
  /([-_][a-z])/g,
  (group) => group.toUpperCase()
    .replace('-', '')
    .replace('_', '')
)

const isArray = function (a) {
  return Array.isArray(a)
}

const isObject = function (o) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function'
}

const keysToCamel = function (o) {
  if (isObject(o)) {
    const n = {}

    Object.keys(o)
      .forEach((k) => {
        n[toCamel(k)] = keysToCamel(o[k])
      })

    return n
  } else if (isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i)
    })
  }

  return o
}

export default {
  components: {
    Summary,
    WorkHistory,
    StartupExperience,
    SkillSet,
    CommunityEfforts,
    Educations
  },
  data: () => ({
    resume: {}
  }),
  mounted () {
    fetch('http://resume-api-rails.herokuapp.com/api/v1/resume.json')
      .then(response => response.json())
      .then(resume => { this.resume = keysToCamel(resume) })
  }
}
</script>
