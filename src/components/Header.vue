<template>
  <header
    class="sticky z-20 w-full top-0 border-b border-transparent bg-gray-50 dark:bg-slate-700 max-md:border-gray-100 transition-colors"
    :class="{ 'bg-gray-50/50 backdrop-blur-xl md:border-gray-100': y > 40 }">
    <div class="mx-auto max-w-7xl flex items-center justify-between p-4 md:px-8">
      <a href="/" target="_self" class="font-bold text-2xl text-gray-600 dark:text-gray-100 transition-colors">Tryon</a>
      <div class="hidden md:flex items-center gap-6">
        <ul class="list-none flex items-center gap-6">
          <li v-for="item in navList" :key="item.en">
            <a href="#about" target="_self"
              class="text-base font-bold text-gray-600 hover:text-gray-900 active:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 dark:active:text-gray-100 transition-colors">{{
              item.name }}</a>
          </li>
        </ul>
        <div class="h-6 w-0.5 bg-gray-600 dark:bg-gray-100 transition-colors"></div>
        <div class="flex items-center gap-4">
          <ThemeSwitcher />
          <button
            class=" rounded-lg bg-gray-900 text-base font-bold text-gray-50 hover:bg-gray-600 p-2 px-4 dark:bg-gray-400 dark:hover:bg-gray-300 dark:text-gray-100">Download
            CV</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ThemeSwitcher from './common/ThemeSwitcher.vue'
import { useWindowScroll } from '@vueuse/core'

const navList = [
  {
    name: '关于我',
    en: 'About'
  },
  {
    name: '工作',
    en: 'About'
  },
  {
    name: '评价',
    en: 'About'
  },
  {
    name: '联系',
    en: 'About'
  }
]

const { y } = useWindowScroll();
</script>