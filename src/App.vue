<template>
  <div class="h-full flex flex-row">
    <div class="bg-black h-full w-48 p-8 text-white">
      <li>Overview</li>
      <li>Products</li>
      <li>Customers</li>
      <li>Orders</li>
      <li>Checkout</li>
      <li>Settings</li>
    </div>
    <HomePage />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #222121; */
}
</style>
