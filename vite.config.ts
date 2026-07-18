import { createRequire } from 'node:module';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);
const reactNativeWeb = require.resolve('react-native-web/dist/index.js');

export default defineConfig(({ mode }) => ({
  define: {
    __DEV__: JSON.stringify(mode !== 'production'),
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: /^react-native$/, replacement: reactNativeWeb }],
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
      '.json',
    ],
  },
}));
