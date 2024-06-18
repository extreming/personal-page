import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { twMerge } from 'tailwind-merge'
// import { transform } from 'esbuild'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // {
    //   name: 'vite-plugin-tailwind-merge',
    //   enforce: 'post', // 确保在其他插件之后运行
    //   transform(code, id) {
    //     if (id.endsWith('.vue')) {
    //       // 使用正则表达式查找并替换类名
    //       const classRegex = /class=["']([^"']+)["']/g
    //       code = code.replace(classRegex, (match, p1) => {
    //         const mergedClassNames = twMerge(p1)
    //         return `class=${mergedClassNames}`
    //       })
    //     }
    //     return { code }
    //   }
    // }
    {
      name: 'vite-plugin-tailwind-merge',
      enforce: 'post', // 确保在其他插件之后运行
      transform(code, id) {
        if (id.endsWith('.js') || id.endsWith('.jsx') || id.endsWith('.ts') || id.endsWith('.tsx') || id.endsWith('.vue')) {
          // 使用正则表达式查找并替换类名
          const classRegex = /class(Name)?=["']([^"']+)["']/g;
          code = code.replace(classRegex, (match, p1, p2) => {
            console.log(match)
            const mergedClassNames = twMerge(p2);
            console.log(mergedClassNames)
            return `class${p1 || ''}="${mergedClassNames}"`;
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
