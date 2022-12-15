<template>
  <div class="header">
    <div class="logo">
      <blinking
        :name="`logo`"
        :deg="50"
        :radial="110"
        :maxDelay="4000"
        :minDelay="2000"
      />
    </div>
  </div>
</template>
<script>
import Blinking from "../components/Blinking.vue";
export default {
  components: {
    Blinking,
  },
};
</script>
<style lang="scss" scoped>
.header {
  margin-bottom: 12px;
}
.logo {
  width: 308px;
  img {
    display: block;
    max-width: 100%;
  }
}
</style>
