<script>
import feather from 'feather-icons'
import ProjectHeader from './ProjectHeader.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectInfo from './ProjectInfo.vue'

import hsiHero from '@/assets/images/hsi-hero.png'
import hsiMap from '@/assets/images/hsi-map-demo.png'
import hsiDemo from '@/assets/images/hsi-demo-1.png'

export default {
  name: 'his-project',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'DB Management Tool',
        singleProjectDate: '2018-2022',
        singleProjectTag: 'Back end / API Design'
      },
      projectImages: [
        {
          id: 1,
          title: 'HighSpeedInternet Hero',
          img: hsiHero
        },
        {
          id: 2,
          title: 'HighSpeedInternet Map',
          img: hsiMap
        },
        {
          id: 3,
          title: 'HighSpeedInternet demo',
          img: hsiDemo
        }
      ],
      projectInfo: {
        clientHeading: 'About Client',
        companyInfos: [
          {
            id: 1,
            title: 'Name',
            details: 'Clearlink LLC'
          },
          {
            id: 2,
            title: 'Services',
            details: 'Back end development and API design'
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://www.highspeedinternet.com/'
          },
          {
            id: 4,
            title: 'Phone',
            details: '801-424-0018'
          }
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
          'Decouple from existing monolithic service and built a microservice to service that functionality.' +
          'Also, create a front end DB management tool to allow our data team to easily update availability information.',
        technologies: [
          {
            title: 'Tools & Technologies',
            techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'REST', 'AWS', 'Laravel', 'Docker']
          }
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
          {
            id: 1,
            details:
              'The functionality was built into an in-house lead data system that never saw widespread adoption in ' +
              'the company, so when we decided to deprecate that massive dead tool, we needed to break out the ' +
              '"chunks" that people were using into their own microservices. So the first major challenge was decoupling.' +
              'Laravel was a simple choice, the existing "monolith" was a laravel project, and seeing how data management' +
              'was the second big ask, it just made sense.'
          },
          {
            id: 2,
            details:
              'After the initial pain of "drag-droppping" was sorted out, wiring up the functionality was as simple as ' +
              'recreating all of the "laravel" stuff using mainly artisan commands. Models, migrations, views and the like.' +
              " The spaghetti showed up in tables.  To be fair, it wasn't a simple data problem, but let me try and " +
              'express it.  Given a zip code, we want to know what internet providers are available, what' +
              'speeds they offer, what technology is being used, what percentage of the zip code is covered, and a ' +
              'few other marketing tags and things. Simple enough at the surface, but notice something.  If you enter ' +
              'your email on the page, you are routed to a specific page for your city and state. Now, if you have ever worked ' +
              'deeply with census block data or zip codes, you will start to notice a lot of edge cases all over the ' +
              'place where zip codes fall into multiple cities, sometime states. So, if you have a zip code that falls' +
              'in 2 different cities, what page do we take you too? Well...lets go ahead and just use a weighted value.' +
              '0-1 indicating "how much" that zip code is in one city vs the other.  It became very complex very quickly'
          },
          {
            id: 3,
            details:
              'The other major issue, was how long it took to update that "availability" information. The old process required' +
              'the data team to submit a ticket into our team (Marketing Technology, Martech) containing a CSV of the ' +
              'updated data. We had built an artisan command a LONG time ago to take care of it, and it was one of those' +
              '"Just run it, it should work as long as they formatted the csv right" things.  It wasn\'t great.  Turnover' +
              "was 2-4 weeks (1-2 sprints), so our data was always a month behind.  You'd be surprised how often that" +
              'data changes. We were losing out on valuable partnerships because of how "slow and out of date", our data' +
              'was, so this became a priority.'
          },
          {
            id: 4,
            details:
              'In the end, the ability to update the data themselves resulted in dozens of new partnerships, leading to ' +
              'hundreds of thousands of dollars in revenue. The tool was built mainly using Laravel nova and even included' +
              'a deployment process so they could push to both their staging and production environments. I was reluctant' +
              'to give that kind of power to a front end tool, so to make myself feel better about it, I designed a process ' +
              'to enforce a deploy to staging first, so they could log into their staging environment and verify that' +
              'the cards on the front end were actually showing the updated values before pushing to production. Then' +
              'a LOT of back end validation and transactions to ensure a happy death if anything goes wrong, and clean' +
              'rollbacks to ensure no potential downtime rolling back.'
          }
        ],
        socialSharingsHeading: 'Share This',
        socialSharings: [
          {
            id: 1,
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com'
          },
          {
            id: 2,
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://www.instagram.com/hession_sessions/'
          },
          {
            id: 3,
            name: 'Facebook',
            icon: 'facebook',
            url: 'https://facebook.com/'
          },
          {
            id: 4,
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://www.instagram.com/hession_sessions/'
          },
          {
            id: 5,
            name: 'Youtube',
            icon: 'youtube',
            url: 'https://www.youtube.com/'
          }
        ]
      },
    }
  },
  mounted() {
    feather.replace()
  },
  updated() {
    feather.replace()
  },
  methods: {}
}
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />
  </div>
</template>

<style scoped></style>
