<script>
import AboutClientSingle from './AboutClientSingle.vue'

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
          img: import('@/assets/images/brands/aws-logo.svg')
        },
        {
          id: 2,
          title: 'Twilio',
          img: import('@/assets/images/brands/twilio.png')
        },
        {
          id: 3,
          title: 'HighSpeedInternet.com',
          img: import('@/assets/images/brands/hsi-logo-wide.png')
        },
        {
          id: 4,
          title: 'Docker',
          img: import('@/assets/images/brands/hsi-logo-wide.png')
        },
        {
          id: 5,
          title: 'Atlassian Products',
          img: import('@/assets/images/brands/hsi-logo-wide.png')
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
