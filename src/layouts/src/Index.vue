<script lang="ts" setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div>
    <Header :showHomeBanner="true" />
    <RouterView />
    <Footer />
  </div>
</template>
