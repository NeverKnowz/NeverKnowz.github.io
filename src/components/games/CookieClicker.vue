<template>
  <div id="cookie-clicker">
    <div id="cookie-container">
      <button @click="clickCookie" id="cookie"></button>
    </div>
    <div id="cookie-count">Cookies: {{ cookieCount }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookieCount: 0,
    };
  },
  methods: {
    clickCookie() {
      this.cookieCount++;
    },
  },
};
</script>

<style scoped>
#cookie-clicker {
  text-align: center;
}

#cookie-container {
  position: relative;
  margin-top: 50px;
}

#cookie {
  width: 100px;
  height: 100px;
  background-image: url('@/assets/images/cookie.png');
  background-size: cover;
  border: none;
  cursor: pointer;
}

#cookie-count {
  margin-top: 20px;
  font-size: 18px;
}
</style>
