<script>
import AboutClientSingle from './AboutClientSingle.vue'
import awsLogo from '@/assets/images/brands/aws-logo.svg'
import twilioLogo from '@/assets/images/brands/twilio.png'
import hsiLogo from '@/assets/images/brands/hsi-logo-wide.png'
import dockerLogo from '@/assets/images/brands/docker.png'
import atlassianLogo from '@/assets/images/brands/atlassianLogo.png'

export default {
  components: {
    AboutClientSingle
  },
  data: () => {
    return {
      clientsHeading: 'Some of the technology I have worked with',
      clients: [
        {
          id: 1,
          title: 'AWS',
          img: awsLogo
        },
        {
          id: 2,
          title: 'Twilio',
          img: twilioLogo
        },
        {
          id: 3,
          title: 'HighSpeedInternet.com',
          img: hsiLogo
        },
        {
          id: 4,
          title: 'Docker',
          img: dockerLogo
        },
        {
          id: 5,
          title: 'Atlassian Products',
          img: atlassianLogo
        }
      ]
    }
  }
}
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle v-for="client in clients" :key="client.id" :client="client" />
    </div>
  </div>
</template>
