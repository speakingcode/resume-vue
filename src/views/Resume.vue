<template>
  <div class="resume">
    <h1>Resume</h1>
    <div class="resume-content">
      <Summary :summary="resume.summary"/>
      <WorkHistory :work-history='resume.workHistory'/>
      <SkillSet/>
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

export default {
  components: {
    Summary,
    WorkHistory,
    SkillSet
  },
  data: function () {
    return {
      resume: {
        name: 'Daniel Sean Lissner',
        title: 'Software Engineer/Developer',
        summary: 'Motivated, supportive, self-starting software engineer with deep experience throughout the stack and emphasis on quality, good practices, and simplicity',
        workHistory: [
          {
            title: 'Senior Software Engineer',
            companyName: 'WeighUp',
            location: 'Memphis, TN',
            startDate: 'November 2018',
            endDate: 'Present',
            highlights: [
              'Designed and developed hardware enabled SaaS product for restaurant/bar operators to monitor bar activity, events, and inventory in real time',
              'Built front-end single-page React web app using React 16, React Router for routing, Redux/Redux-ORM and Context API for state, Apollo for GraphQL-enabled components, Nivo Charts and Chart.js for data viz, Yup and Formik for validated forms, Bootstrap/Reactstrap for UI components, Jest and Enzyme for testing',
              'Developed RESTful API and GraphQL API microservices via Ruby on Rails and graphql-ruby, using RSpec, FactoryBot and Faker for BDD testing',
              'Designed and implemented data model in PostgreSQL database',
              'Managed environments and infrastructure via Docker containers',
              'Established and managed development processes, workflows and technology stackoversaw contractors and internal developers',
              'Worked with stakeholders to define product and features, establish requirements and set deliverables and timelines'
            ]
          }
        ]
      }
    }
  }
}
</script>
