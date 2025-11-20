<template>
  <div id="app">
    <AppHeader />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default { components: { AppHeader } }
</script>

<style>
</style>
