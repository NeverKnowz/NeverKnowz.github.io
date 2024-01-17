<script>
import feather from 'feather-icons'
import ProjectHeader from './ProjectHeader.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectInfo from './ProjectInfo.vue'
import ProjectRelatedProjects from './ProjectRelatedProjects.vue'

import gameJam from '@/assets/images/game-jam.png'
import kvCore2 from '@/assets/images/Kv-Core-2.png'
import kvCoreLogin from '@/assets/images/kvcore-login.png'

export default {
  name: 'game-jam-project',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'Game Developer/Musician',
        singleProjectDate: '1994-Present',
        singleProjectTag: 'Full Stack'
      },
      projectImages: [
        {
          id: 1,
          title: 'Project Aether',
          img: gameJam
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
            details: 'RuneWerkz Software'
          },
          {
            id: 2,
            title: 'Services',
            details: 'Full Stack Engineer'
          },
          {
            id: 3,
            title: 'Website',
            details: 'N/A...yet'
          },
          {
            id: 4,
            title: 'Phone',
            details: '385-414-5721'
          }
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
          'I was invited to participate in a game jam with a group of close friends. The objective was to make a game in' +
          '24 hours, and the theme was traveling.',
        technologies: [
          {
            title: 'Tools & Technologies',
            techs: [
              'Unity',
              'C#',
              'Ableton Pro',
              'Adobe Audition',
              'Yamaha PSR-SX900',
            ]
          }
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
          {
            id: 1,
            details:
            'Like most nerds, i\'ve always dreamed of opening my own game studio. From the early days on my parents carpet' +
              'playing the Sega Genesis, I knew it was something I WANTED to do. The pragmatic part of my brain always kept' +
              'me out of chasing it professionally though. The AAA industry space never really appealed to me outside of a ' +
              'handful of examples. (Valve? Call me.) The loss of creative control is something that always worried me.'
          },
          {
            id: 2,
            details:
            'I decided ultimately to chase programming as a profession, since it\'s adjacent, and in my free time I could' +
              'begin learning the other skills I would need.  Online resources are plentiful, and the amount of courses offered' +
              'through sites like Udemy allowed me to get my feet wet and start working on little vertical slices of different' +
              'game ideas I had. After a little while, I began to feel confident enough to play around with other game engines' +
              'and familiarize myself with all aspects of game creation.'
          },
          {
            id: 3,
            details:
            'The game jam was a fun way of taking it all the way to it\'s conclusion.  It\'s easy to make a bunch of demos,' +
              'it\'s much harder to finish a game.  Engineering wise, I took a backseat and let my friend take the lead.' +
              'I wanted to focus on the music.  I\'ve played piano for most of my life, but sound design, mastering, ' +
              'and all the other intricacies were new to me.  Realized pretty early on I bit off a lot. But I managed' +
              'to chew through it and turn out something im proud of.'
          },
          {
            id: 4,
            details:
            'The game itself, is really simple. Top down "Fish.io" type game.  Eat smaller things, get bigger, don\'t get' +
              'eaten by something bigger. You are a black hole, consuming smaller matter, growing bigger, until all' +
              'matter is consumed and you implode into a new big bang. Birthing a new universe.  The music was meant to ' +
              'start eerie, and end hopeful. But that end state never made it in the 24 hours we had.  It was a great experience' +
              'and I look forward to more in the future.'
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
