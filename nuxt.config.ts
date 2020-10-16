import path from 'path';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: ['plugins/bind-context-to-container'],
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true,
      },
    ],
    '@nuxtjs/router',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv'],
  axios: {},
  build: {
    extend(config) {
      config!.resolve!.alias!['@mamby'] = path.resolve(__dirname, '.');
    },
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
  routerModule: {
    path: 'src/_shared/infrastructure/router',
    fileName: 'create-router.ts',
  },
  dir: {
    middleware: 'src/_shared/infrastructure/middleware',
    pages: 'ui/pages',
    layouts: 'ui/layouts',
  },
  render: {
    bundleRenderer: {
      runInNewContext: false,
    },
  },
};

export default config;
