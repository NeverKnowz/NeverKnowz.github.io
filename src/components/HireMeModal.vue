<script>
import feather from 'feather-icons'
import Button from './reusable/Button.vue'
import CookieClicker from '@/components/games/CookieClicker.vue';


export default {
  props: ['showModal', 'modal', 'categories'],
  components: { Button, CookieClicker },
  data() {
    return {
      clickCount: 0
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
  <transition name='fade'>
    <div v-show='modal' class='font-general-regular fixed inset-0 z-30'>
      <div
        v-show='modal'
        @click='showModal()'
        class='bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20'
      ></div>
      <main class='flex flex-col items-center justify-center h-full w-full'>
        <transition name='fade-up-down'>
          <div v-show='modal' class='modal-wrapper flex items-center z-30'>
            <div
              class='modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative'
            >
              <div
                class='modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark'
              >
                <h5 class='text-primary-dark dark:text-primary-light text-xl'>
                  Back End is still being built, Here is a simple cookie clicker
                </h5>
                <button class='px-4 text-primary-dark dark:text-primary-light' @click='showModal()'>
                  <i data-feather='x'></i>
                </button>
              </div>
              <div class='modal-body p-5 w-full h-full'>
                <CookieClicker />
              </div>
              <!-- ... (existing modal footer) -->
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<style scoped>
</style>
