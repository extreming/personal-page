<script setup>
import Container from '../common/Container.vue'
import SectionTitle from '../common/SectionTitle.vue'
import Typography from '../common/Typography.vue';
</script>

<template>
  <Container class="bg-gray-50" id="about">
    <SectionTitle>About me</SectionTitle>
    <div class="flex flex-col md:flex-row justify-between gap-12">
      <!-- 图片 -->
      <div class="flex justify-center">
        <div class="relative w-[320px] h-[380px] md:w-[380px] md:h-[460px] lg:w-[440px] lg:h-[520px]">
          <img
            class="absolute z-10 w-[280px] h-[360px] md:w-[340px] md:h-[420px] lg:w-[400px] lg:h-[480px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 object-cover"
            alt="" src="../../assets/img/1.jpg">
          <div
            class="absolute w-[280px] h-[360px] md:w-[340px] md:h-[420px] lg:w-[400px] lg:h-[480px] border-8 border-transparent bg-gray-200 max-md:top-5 md:left-0 md:bottom-0">
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="flex max-w-xl flex-col gap-6">
        <Typography variant="h3">
          Curious about me? Here you have it:
        </Typography>
        <Typography>
          I&apos;m a passionate,
          who specializes in full stack development (React.js & Node.js). I am
          enthusiastic about bringing the technical and visual aspects of
          digital products to life. User experience, pixel perfect design, and
          writing clear, readable, highly performant code matters to me.
        </Typography>
        <Typography>
          I began my journey as a web developer in 2015, and since then,
          I&apos;ve continued to grow and evolve as a developer, taking on new
          challenges and learning the latest technologies along the way. Now,
          in my early thirties, 7 years after starting my web development
          journey, I&apos;m building cutting-edge web applications using
          modern technologies such as Next.js, TypeScript, Nestjs,
          Tailwindcss, Supabase and much more.
        </Typography>
        <Typography>
          I am very much a progressive thinker and enjoy working on products
          end to end, from ideation all the way to development.
        </Typography>
        <Typography>
          When I&apos;m not in full-on developer mode, you can find me
          hovering around on twitter or on indie hacker, witnessing the
          journey of early startups or enjoying some free time. You can follow
          me on
          where I share tech-related bites and build in public, or you can
          follow me on.
        </Typography>
        <Typography>Finally, some quick bits about me.</Typography>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <ul className="flex list-inside list-disc flex-col gap-2">
            <Typography variant="li">
              B.E. in Computer Engineering
            </Typography>
            <Typography variant="li">Full time freelancer</Typography>
          </ul>
          <ul className="flex list-inside list-disc flex-col gap-2">
            <Typography variant="li">Avid learner</Typography>
            <Typography variant="li">Aspiring indie hacker</Typography>
          </ul>
        </div>
        <Typography>
          One last thing, I&apos;m available for freelance work, so feel free
          to reach out and say hello! I promise I don&apos;t bite 😉
        </Typography>
      </div>
    </div>

  </Container>
</template>