import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
        {
          find: './runtimeConfig',
          replacement: './runtimeConfig.browser', // ensures browser compatible version of AWS JS SDK is used
        },
      ]
    }
  })

function vue(): import("vite").PluginOption {
    throw new Error('Function not implemented.');
}
