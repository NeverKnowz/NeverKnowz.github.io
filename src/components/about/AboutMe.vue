<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio:
            "Hello! I'm Brady Hession, a Salt Lake City, Utah native with a diverse range of passions. A tech enthusiast, " +
            'history buff, avid reader, and skilled programmer, my passions even span into the realms of ' +
            'infosec and music. Currently honing my skills and building towards my goal is to establish a thriving ' +
            "game company blending my many passions together to create the games I've always dreamed of. Alongside " +
            'my professional pursuits, I adventure with Esmeralda, my Dachshund, whenever possible!'
        },
        {
          id: 2,
          bio:
            "I'm all about writing solid code and simplifying the experience for my users. With a strong work ethic, " +
            'I dive into challenges head-on, ensuring security every step of the way. From simple bugs to high level ' +
            'architecture, from API integrations, to tool building, or from Penetration testing, to technical ' +
            'documentation, I got ya covered.'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.png" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
