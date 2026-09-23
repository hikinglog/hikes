import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://hikinglog.github.io',
  baseUrl: '/hikes',
  organizationName: 'hikes',
  projectName: 'hikes',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          numberPrefixParser: false,
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Hiking Log',

      items: [
        {
          type: 'dropdown',
          label: 'Hikes',
          position: 'left',

          items: [
            {
              label: 'All Hikes',
              to: '/',
            },
            {
              label: '5 Mile Hikes',
              to: '/category/5-mile-hikes',
            },
            {
              label: '10 Mile Hikes',
              to: '/category/10-mile-hikes',
            },
            {
              label: '15 Mile Hikes',
              to: '/category/15-mile-hikes',
            },
            {
              label: '20 Mile Hikes',
              to: '/category/20-mile-hikes',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',

      links: [
        {
          title: 'Explore',
          items: [
            {
              label: 'All Hikes',
              to: '/hikes/',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Hiking Log.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
