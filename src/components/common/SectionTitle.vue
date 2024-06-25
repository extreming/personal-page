<script setup>
import Typography from './Typography.vue'
</script>

<template>
  <div class="self-center">
    <div class="flex justify-center items-center rounded-xl bg-gray-200 px-5 py-1">
      <Typography variant="body3" class="font-medium">
        <slot></slot>
      </Typography>
    </div>
  </div>
</template>