<template>
  <IconButton @click="toggleTheme">
    <Sun v-if="isDarkMode" />
    <MoonStar v-else />
  </IconButton>
</template>

<script setup>
import { Sun, MoonStar } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';
import IconButton from './IconButton.vue';

const isDarkMode = ref(false);

const toggleTheme = function () {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('dark', 'true');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('dark', 'false');
  }
};

onMounted(() => {
  isDarkMode.value = JSON.parse(localStorage.getItem('dark'));
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>