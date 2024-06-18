<template>
  <div :class="mergeClass">Hello</div>
  <div class="bg-blue-500 text-center">World</div>
</template>

<script setup>
import { twMerge } from 'tailwind-merge';

const mergeClass = twMerge('bg-red-50 bg-blue-500 text-center text-left')
</script>