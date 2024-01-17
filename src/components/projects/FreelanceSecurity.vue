<script>
import feather from 'feather-icons'
import ProjectHeader from './ProjectHeader.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectInfo from './ProjectInfo.vue'
import ProjectRelatedProjects from './ProjectRelatedProjects.vue'

import anon from '@/assets/images/anon.png'
import reportDemo from '@/assets/images/report-demo.png'
import reportDemo2 from '@/assets/images/report-demo-2.png'
import otherProject1 from '@/assets/images/mobile-project-1.jpg'
import otherProject2 from '@/assets/images/web-project-1.jpg'
import otherProject3 from '@/assets/images/ui-project-2.jpg'
import otherProject4 from '@/assets/images/mobile-project-2.jpg'

export default {
  name: 'freelancer-project',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'Freelance Security Analyst',
        singleProjectDate: '2023-Present',
        singleProjectTag: 'Security'
      },
      projectImages: [
        {
          id: 1,
          title: 'MLS Listings',
          img: anon
        },
        {
          id: 2,
          title: 'Marketplace products',
          img: reportDemo
        },
        {
          id: 3,
          title: 'KvCore login',
          img: reportDemo2
        }
      ],
      projectInfo: {
        clientHeading: 'About Client',
        companyInfos: [
          {
            id: 1,
            title: 'Name',
            details: 'RuneWerkz Security'
          },
          {
            id: 2,
            title: 'Services',
            details: 'Penetration Testing, Reporting.'
          },
          {
            id: 3,
            title: 'Website',
            details: 'N/A'
          },
          {
            id: 4,
            title: 'Phone',
            details: 'N/A'
          }
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
          'I offered security auditing for small-medium sized businesses that otherwise couldn\'t afford it.',
        technologies: [
          {
            title: 'Tools & Technologies',
            techs: [
              'Kali',
              'BurpSuite',
              'Nmap',
              'OWASP ZAP',
              'CIS Compliance Standards',
              'PCI Compliance Standards',
              'HIPPA Compliance Standards',
            ]
          }
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
          {
            id: 1,
            details:
              'Security is important, and only getting more-so every year.  The amount of attacks and breaches both increase' +
              'every year, and many small-medium sized companies simply do not have the resources to dedicate to it. So' +
              'I offered a robust package that includes training materials and a detailed report with action plans. During this time' +
              'I performed multiple audits on a wide variety of tech stacks.  Wordpress was the major one I encountered, ' +
              'but the medium sized businesses had a lot of custom systems that needed special attention.'
          },
          {
            id: 2,
            details:
              'I really enjoyed presenting to the teams and being able to be present to answer any questions they had,' +
              'and a lot came up.  People are curious and most never have the opportunity to speak to a "Hacker" directly.' +
              'It also gives me the chance to stress that their personal security is at risk, just as much as the companies.' +
              'It\'s in everyones best interest to be security minded.  A breach affects the entire company.'
          },
          {
            id: 3,
            details:
              'The physical side of security is often overlooked by management, even though it\'s by far the most important.' +
              'Why would I hack your stuff, when I can just sneak in?  I focus on the physical security of the office just as much' +
              'as the digital, and I tend to find a good number of things that can be addressed.'
          },
          {
            id: 4,
            details:
              'Security is truly a passion of mine.  It\'s always been just ONE of the hats I wear, but any opportunity that comes' +
              'along to chase it full time and give it the dedication it needs, would be amazing.'
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
