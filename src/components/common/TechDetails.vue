<template>
  <div class="flex flex-col gap-4 items-center" @click="openUrl(url)">
    <img :src="logo" alt="">
    <span>{{label}}</span>
  </div>
</template>

<script setup>
defineProps(['logo', 'label', 'url']);

const openUrl = function(url) {
  window.open(url, '_blank')
}
</script>