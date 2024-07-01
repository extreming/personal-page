<script setup>
import Container from '../common/Container.vue'
import SectionTitle from '../common/SectionTitle.vue'
import Typography from '../common/Typography.vue';
</script>

<template>
  <Container>
    <div class="flex flex-col items-center gap-4">
      <SectionTitle>Skills</SectionTitle>
      <Typography variant="subtitle" class="text-center">
        The skills, tools and technologies I am really good at:
      </Typography>
      <!-- 技能图标链接 -->
      <div class="grid grid-cols-3 gap-y-4 md:grid-cols-6 lg:grid-cols-8 lg:gap-y-12">
        <div class="w-[150px] h-[100px] border" v-for="item in 16"></div>
      </div>
    </div>
  </Container>
</template>