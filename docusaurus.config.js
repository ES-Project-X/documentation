// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Project X',
  tagline: 'Community collaboration platform for bicycle users',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://es-project-x.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'es-project-x', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Project X',
        logo: {
          alt: 'Project X Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/ES-Project-X',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Stories',
                to: '/docs/category/user-stories',
              },
              {
                label: 'Sprints',
                to: '/docs/category/sprints',
              },
              {
                label: 'Architecture',
                to: '/docs/architecture',
              },
            ],
          },
          {},
          {
            title: 'Team',
            items: [
              {
                label: 'Diogo Paiva',
                href: 'https://github.com/DiogoPaiva21'
              },
              {
                label: 'Gonçalo Silva',
                href: 'https://github.com/GoncaloSilva25',
              },
              {
                label: 'Guilherme Antunes',
                href: 'https://github.com/SysteM1922',
              },
              {
                label: 'João Fonseca',
                href: 'https://github.com/joaompfonseca',
              },
              {
                label: 'Pedro Rasinhas',
                href: 'https://github.com/r4sinhas',
              }
            ],
          },
          {},
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Documentation',
                href: 'https://es-project-x.github.io/documentation/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ES-Project-X',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project X, Software Engineering 2023/24, Universidade de Aveiro. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
