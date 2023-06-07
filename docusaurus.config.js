// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Elysium Documentation',
    tagline: `Elysium documentation includes \n conceptual, procedural, and reference \n information for blockchain builders and parachain project teams`,
    favicon: 'https://s3.amazonaws.com/cdn.elysiumchain.tech/elysium-icon-512x512.png',

    // Set the production url of your site here
    url: 'http://blog.elysiumchain.tech',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Elysium', // Usually your GitHub org/user name.
    projectName: 'elysium-docs', // Usually your repo name.

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
            (
                {
                    docs: {
                        sidebarPath: require.resolve('./sidebars.js'),
                        // Please change this to your repo.
                        // Remove this to remove the "edit this page" links.
                        editUrl: 'https://github.com/BloxBytes/elysium-docs/tree/master/',
                    },
                    theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                }
            )
        ],
    ],
    themes: ['docusaurus-theme-search-typesense'],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {},
            colorMode: {
                defaultMode: 'dark',
            },
            // footer: {
            //     style: 'dark',
            //     // items: [
            //     //     {
            //     //         title: 'Docs',
            //     //         items: [
            //     //             {
            //     //                 label: 'Tutorial',
            //     //                 to: '/docs/intro',
            //     //             },
            //     //         ],
            //     //     },
            //     //     {
            //     //         title: 'Community',
            //     //         items: [
            //     //             {
            //     //                 label: 'Stack Overflow',
            //     //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //     //             },
            //     //             {
            //     //                 label: 'Discord',
            //     //                 href: 'https://discordapp.com/invite/docusaurus',
            //     //             },
            //     //             {
            //     //                 label: 'Twitter',
            //     //                 href: 'https://twitter.com/docusaurus',
            //     //             },
            //     //         ],
            //     //     },
            //     //     {
            //     //         title: 'More',
            //     //         items: [
            //     //             {
            //     //                 label: 'Blog',
            //     //                 to: '/blog',
            //     //             },
            //     //             {
            //     //                 label: 'GitHub',
            //     //                 href: 'https://github.com/BloxBytes/elysium-docs',
            //     //             },
            //     //         ],
            //     //     },
            //     // ],
            //     copyright: `Copyright © ${new Date().getFullYear()} Elysium Documentation.`,
            // },
            // prism: {
            //     // theme: lightCodeTheme,
            //     darkTheme: darkCodeTheme,
            // },
            typesense: {
                // Replace this with the name of your index/collection.
                // It should match the "index_name" entry in the scraper's "config.json" file.
                typesenseCollectionName: 'elysium-2',
                typesenseServerConfig: {
                    nodes: [
                        {
                            host: 'typesense.vulcanforged.com',
                            port: '',
                            protocol: 'https',
                        },
                    ],
                    apiKey: 'A0a4QJEb0kS9yrW',
                },
                // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
                typesenseSearchParameters: {},
                // Optional
                contextualSearch: true,
            },
        }),
};

module.exports = config;
