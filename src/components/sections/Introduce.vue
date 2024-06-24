<template>
  <Container>
    <div class="flex items-center justify-center md:order-last md:flex-grow mad:justify-end">
      <div class="relative w-[280px] h-[300px] md:w-[320px] md:h-[360px]">
        <img src="../../assets/img/1.jpg" alt="阿伦的头像"
          class="absolute z-10 md:left-0 md:top-0 max-md:left-5 w-[240px] h-[280px] border-8 border-gray md:w-[280px] md:h-[320px] object-cover" />
        <div
          class="absolute max-md:top-5 md:bottom-0 md:right-0 w-[280px] h-[280px] border-8 border-tranparent bg-gray-200 md:w-[280px] md:h-[320px]">
        </div>
      </div>
    </div>
    <div
      class="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
      <div class="flex flex-col gap-2">
        <Typography variant="h1">
          你好，我是天伦
          <span className="inline-block animate-waving-hand">👋</span>
        </Typography>
        <Typography>
          这是我的自我介绍，请认真阅读，听到没有这是我的自我介绍，请认真阅读，听到没有这是我的自我介绍，请认真阅读，听到没有这是我的自我介绍，请认真阅读，听到没有这是我的自我介绍，请认真阅读，听到没有这是我的自我介绍，请认真阅读，听到没有这是我的自我介绍，请认真阅读，听到没有
        </Typography>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <MapPin />
          <Typography>顺义，北京</Typography>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 flex justify-center items-center">
            <span class="w-3 h-3 relative flex">
              <span
                class="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
              <span class="relative inline-flex w-3 h-3 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <p>Available for new projects</p>
        </div>
      </div>
      <div class="flex gap-1">
        <IconButton>
          <Github />
        </IconButton>
        <IconButton>
          <Wechat />
        </IconButton>
        <IconButton>
          <Mail />
        </IconButton>
      </div>
    </div>
  </Container>
</template>

<script setup>
import IconButton from '../common/IconButton.vue'
import Wechat from '../common/Wechat.vue'
import { MapPin, Github, Mail  } from 'lucide-vue-next'
import Container from '../common/Container.vue'
import Typography from '../common/Typography.vue'
</script>
