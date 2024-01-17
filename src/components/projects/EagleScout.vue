<script>
import feather from 'feather-icons'
import ProjectHeader from './ProjectHeader.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectInfo from './ProjectInfo.vue'

import eagleScout from '@/assets/images/eagle-scout.png'
import eagleScout2 from '@/assets/images/EagleScout.jpg'
import eagleScout3 from '@/assets/images/eagle-scout-3.jpg'

export default {
  name: 'eagle-scout-project',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'Eagle Scout',
        singleProjectDate: '2012-Present',
        singleProjectTag: 'Eagle Scout'
      },
      projectImages: [
        {
          id: 1,
          title: 'Eagle',
          img: eagleScout
        },
        {
          id: 2,
          title: 'Scout',
          img: eagleScout2
        },
        {
          id: 3,
          title: 'BSA',
          img: eagleScout3
        }
      ],
      projectInfo: {
        clientHeading: 'About Client',
        companyInfos: [
          {
            id: 1,
            title: 'Name',
            details: 'Boy Scouts of America'
          },
          {
            id: 2,
            title: 'Services',
            details: 'Eagle Scout - Order of the Arrow'
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://www.scouting.org/'
          },
          {
            id: 4,
            title: 'Phone',
            details: '801-479-5460'
          }
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
          'I grew up in the scouting program, and sure, my parents may have made it a requirement to get a car. But that was' +
          'just extra incentive.',
        technologies: [
          {
            title: 'Tools & Technologies',
            techs: [
              'Survivalist',
              'First Aid',
              'Buchcrafting',
              'Knot Tying',
              'Hunting',
              'Camping',
              'Fishing',
            ]
          }
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
          {
            id: 1,
            details:
            'I was very fortunate growing up to have amazing scout leaders.  They took us on some of the most incredible ' +
              'trips I still think about to this day. Also helps that I grew up in Utah, where cool adventures are only ' +
              '1-3 hours away in any direction. Goblin Valley, Bryce, Zions, Escalante, the list never ends. Once a year' +
              'we would do a week long campout somewhere amazing, and we would try to do an overnighter at least once a month'
          },
          {
            id: 2,
            details:
            'I will admit to procrastinating my eagle scout project, but in the end it was worth it.  We volunteered to' +
              'repaint a US map and the playground lines at a local elementary school. We asked around and managed to get ' +
              'all the different materials we needed donated from local businesses.  We had a great turnout and the school' +
              'still has some of it left.  Although, a few younger siblings may have used the idea and touched it up over the years.'
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
