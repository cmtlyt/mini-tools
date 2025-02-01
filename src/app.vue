<script setup lang="ts">
import { ref } from 'vue';

const projectName = ref('mini-tools');
</script>

<template>
  <section>
    <h1>{{ projectName }}</h1>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
