<template>
  <Tag>
    <slot></slot>
  </Tag>
</template>

<script setup>
import { cva } from 'class-variance-authority'
import { computed, h } from 'vue'

const props = defineProps(['variant'])

const typographyVariants = cva('text-gray-600 text-normal', {
  variants: {
    variant: {
      h1: 'text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900',
      h2: 'text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900',
      h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900',
      subtitle: 'text-lg md:text-xl',
      body1: 'text-base md:text-lg',
      body2: 'text-base',
      body3: 'text-sm',
    }
  },
  defaultVariants: {
    variant: 'body2'
  }
})

const className = computed(() => typographyVariants({ variant: props.variant }))

const tagName = props.variant || 'p';
const Tag = h(tagName, { class: className.value });

</script>