import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',//相对路径
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/assets/'),
      'src': resolve(__dirname, './src'),
      '/icon': '/src/assets/icon',//静态资源配置
    }
  },

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境移除console
        drop_console: true,
        drop_debugger: true,
      }
    },
    //打包文件分配
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      }
    }
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
