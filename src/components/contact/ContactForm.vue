<script>
import Button from '../reusable/Button.vue'
import FormInput from '../reusable/FormInput.vue'
import FormTextarea from '../reusable/FormTextarea.vue'

export default {
  components: { Button, FormInput, FormTextarea },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submit() {
      alert('No Back end present, Please open your email provider to contact me.')
    }
  }
}

</script>

<template>
  <div class='w-full md:w-1/2'>
    <div
      class='leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left'
    >
      <p class='font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8'>
        Contact Form
      </p>
      <form @submit.prevent='submit' class='font-general-regular space-y-7'>
        <FormInput v-model='formData.name' label='Full Name' inputIdentifier='name' />
        <FormInput v-model='formData.email' label='Email' inputIdentifier='email' inputType='email' />
        <FormInput v-model='formData.subject' label='Subject' inputIdentifier='subject' />
        <FormTextarea v-model='formData.message' label='Message' textareaIdentifier='message' />

        <div>
          <Button
            title='Send Message'
            class='px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500'
            type='submit'
            aria-label='Send Message'
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang='scss' scoped></style>