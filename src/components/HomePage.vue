<template>
  <div class="w-full p-6">
    <div class="py-2">
      <h1>Welcome back, Rose</h1>
      <p>here's what's happening today</p>
    </div>
    <div class="flex gap-x-2">
      <div class="flex-1 p-6 bg-gray-500 text-white">
        <p>Total Sales</p>
      </div>
      <div class="flex-1 p-6 bg-gray-500 text-white">
        Visitors
      </div>
      <div class="flex-1 p-6 bg-gray-500 text-white">
        Total Orders
      </div>
      <div class="flex-1 p-6 bg-gray-500 text-white">
        Refunded
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-3/4">
        <OrderTable class="py-6" />
      </div>
    </div>
  </div>
</template>

<script setup>
import OrderTable from './OrderTable.vue';

</script>
