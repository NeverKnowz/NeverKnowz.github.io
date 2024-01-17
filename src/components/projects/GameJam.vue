<script>
import feather from 'feather-icons'
import ProjectHeader from './ProjectHeader.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectInfo from './ProjectInfo.vue'
import ProjectRelatedProjects from './ProjectRelatedProjects.vue'

import kvCore1 from '@/assets/images/KvCore-1.png'
import kvCore2 from '@/assets/images/Kv-Core-2.png'
import kvCoreLogin from '@/assets/images/kvcore-login.png'
import otherProject1 from '@/assets/images/mobile-project-1.jpg'
import otherProject2 from '@/assets/images/web-project-1.jpg'
import otherProject3 from '@/assets/images/ui-project-2.jpg'
import otherProject4 from '@/assets/images/mobile-project-2.jpg'

export default {
  name: 'game-jam-project',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'Marketplace Engineer',
        singleProjectDate: '2023-Present',
        singleProjectTag: 'Full Stack'
      },
      projectImages: [
        {
          id: 1,
          title: 'MLS Listings',
          img: kvCore1
        },
        {
          id: 2,
          title: 'Marketplace products',
          img: kvCore2
        },
        {
          id: 3,
          title: 'KvCore login',
          img: kvCoreLogin
        }
      ],
      projectInfo: {
        clientHeading: 'About Client',
        companyInfos: [
          {
            id: 1,
            title: 'Name',
            details: 'InsideRealEstate'
          },
          {
            id: 2,
            title: 'Services',
            details: 'Full Stack Engineer'
          },
          {
            id: 3,
            title: 'Website',
            details: 'https://www.insiderealestate.com/'
          },
          {
            id: 4,
            title: 'Phone',
            details: '801-424-0018'
          }
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
          'I joined the marketplace engineering team.  Our responsibilities revolve around upkeeping and designing products' +
          'for our CRM customers.',
        technologies: [
          {
            title: 'Tools & Technologies',
            techs: [
              'HTML',
              'CSS',
              'JavaScript',
              'Vue.js',
              'REST API',
              'AWS',
              'Laravel',
              'Docker',
              'NUXT'
            ]
          }
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
          {
            id: 1,
            details:
            ''
          },
          {
            id: 2,
            details:
            ''
          },
          {
            id: 3,
            details:
            ''
          },
          {
            id: 4,
            details:
            ''
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
      relatedProject: {
        relatedProjectsHeading: 'Related Projects',
        relatedProjects: [
          {
            id: 1,
            title: 'Mobile UI',
            img: otherProject1
          },
          {
            id: 2,
            title: 'Web Application',
            img: otherProject2
          },
          {
            id: 3,
            title: 'UI Design',
            img: otherProject3
          },
          {
            id: 4,
            title: 'Kabul Mobile App UI',
            img: otherProject4
          }
        ]
      }
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

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
