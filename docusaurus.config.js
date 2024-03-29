// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LM Commons',
  tagline: 'Community developed packages for the Laminas MVC',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lm-commons.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LM-Commons', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/lm-commons/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/lm-commons/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/LMC-social-card.jpg',
      navbar: {
        title: 'LM Commons',
        logo: {
          alt: 'LM Commons Logo',
          src: 'img/LMC-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Docs',
          },
          /*
          {
            type: 'dropdown',
            label: 'Packages',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'lmcUser',
                label: 'LmcUser'
              },
              {
//                type: 'docSidebar',
//                sidebarId: 'lmcRbacMvc',
                to: '/docs/LmcRbacMvc',
                label: 'LmcRbacMvc'
              },
              {
                type: 'docSidebar',
                sidebarId: 'lmcCors',
                label: 'LmcCors'
              },
              {
                type: 'docSidebar',
                sidebarId: 'lmcRbac',
                label: 'LmcRbac'
              },
              {
                type: 'docSidebar',
                sidebarId: 'lmcMail',
                label: 'LmcMail'
              },
            ]
          },

           */
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/lm-commons',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Packages',
            items: [
              {
                label: 'LmcUser',
                to: '/docs/lmc-user/introduction',
              },
              {
                label: 'LmcRbacMvc',
                to: 'https://lm-commons.github.io/LmcRbacMvc/',
              },
              {
                label: 'LmcRbac',
                to: '/docs/lmc-rbac/introduction',
              },
              {
                label: 'LmcCors',
                to: '/docs/lmc-cors/introduction',
              },
              {
                label: 'LmcAdmin',
                to: '/docs/lmc-admin/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/T8vJ3ukPm7',
              },
              {
                label: 'Gitter',
                href: 'https://gitter.im/LM-Commons/community',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LM-Commons',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LM Commons Organization. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
