import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { twMerge } from 'tailwind-merge'
// import { transform } from 'esbuild'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'vite-plugin-tailwind-merge',
      enforce: 'post', // 确保在其他插件之后运行
      transform(code, id) {
        if (id.endsWith('.vue')) {
          // 使用正则表达式查找并替换类名
          const classRegex = /class:\s["']([^"']+)["']/g;
          code = code.replace(classRegex, (match, p1) => {
            console.log(match);
            const mergedClassNames = twMerge(p1);
            return `class: "${mergedClassNames}"`;
          });
        }
        return { code };
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
