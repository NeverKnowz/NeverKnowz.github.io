<script>
import feather from 'feather-icons'
import ProjectHeader from './ProjectHeader.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectInfo from './ProjectInfo.vue'

import kvCore1 from '@/assets/images/KvCore-1.png'
import kvCore2 from '@/assets/images/Kv-Core-2.png'
import kvCoreLogin from '@/assets/images/kvcore-login.png'

export default {
  name: 'kvcore-project',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'Marketplace Engineer',
        singleProjectDate: '2023-2024',
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
              'The codebase is mature and has been touched by many developers over the years. While robust, understanding' +
              "it in it's entirety is a challenge. Along with that, working directly in a customer facing environment" +
              'has been a learning experience.  In the past, letting more technical issues bubble up to the top was ' +
              'less of a problem since it would just end up in the org instead of the hands of a customer that will' +
              'report it an an issue and potentially cost a subscription.'
          },
          {
            id: 2,
            details:
              'The number of products is not substantial, but each is unique in special ways, and the data structure has been' +
              'especially challenging.  More than anything, it has really stretched my full-stack claims.  Asking some front' +
              'end work one moment, back end work another, and then having a myriad of low level docker and environment issues' +
              'to solve. All having a deadline and paying customers as the end users.'
          },
          {
            id: 3,
            details:
              'Learning a new CMS, Storyblok, was another hurdle.  We were redesigning our Product Detail pages and were given' +
              'massive Figma templates as a base and asked to incorporate it with this new CMS that the higher ups decided' +
              'on using. The CMS itself is quite simple and functional, but the learning curve was a bit steep and documentation' +
              'could be better on Storybloks end.  Having never worked with Figma as well, it took a bit of learning to unlock' +
              'it\'s full potential as well.'
          },
          {
            id: 4,
            details:
            'In the end, my time at IRE came to an end in a familiar story, the position I was filling was closed. It was ' +
              'an interesting place to work for sure, but I was able to focus on a lot of front end work, and lead some' +
              'cool initiatives. The storyblok CMS I mentioned earlier was spearheaded by me, and after some learning time' +
              'on my end, I was able to teach other devs to contribute to it as well.  Leading the charge on my team to dockerize' +
              'our local environments was a fun hurdle as well.  Lots of interdependent systems that made me have to really' +
              'dig into docker at a lower level than usual.',
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
