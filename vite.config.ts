import reactRefresh from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import EnvironmentPlugin from 'vite-plugin-environment'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    host: 'brianmatthewsmith.local',
  },
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    svgrPlugin(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    EnvironmentPlugin('all', { prefix: 'REACT_APP_' }),
  ],
})
