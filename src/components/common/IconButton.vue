<template>
  <button class="hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-600 dark:active:bg-gray-500 rounded-lg p-1.5 transition-colors duration-300 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-900 [&_svg]:active:stroke-gray-600 dark:[&_svg]:stroke-gray-100 dark:[&_svg]:hover:stroke-gray-300 dark:[&_svg]:active:stroke-gray-100">
    <slot></slot>
  </button>
</template>

<script setup></script>