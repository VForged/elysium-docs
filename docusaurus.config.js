// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Elysium Documentation',
    tagline: `Dive into some of the key differences between Elysium, an Ethereum compatibile blockchain, and Ethereum itself..`,
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
    // themes: ['@docusaurus/theme-search-algolia'],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                logo: {
                    alt: 'Elysium Logo',
                    src: 'https://s3.amazonaws.com/cdn.elysiumchain.tech/elysium/Elysium-Docs-light.svg',
                    srcDark: 'https://s3.amazonaws.com/cdn.elysiumchain.tech/elysium/Elysium-Docs-dark.svg',
                    target: '_self',
                    width: 250,
                    height: 100,
                    className: 'custom-navbar-logo-class',
                },
                items:[
                    {
                        position: 'left',
                        href:'/',
                        label: 'Home',
                    },
                ]
            },
            colorMode: {
                defaultMode: 'light',
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
            algolia: {
                // The application ID provided by Algolia
                appId: 'KEGVM1MJGE',
                // Public API key: it is safe to commit it
                apiKey: '4dd917c759135e39c0e54e94fabcd021',
                indexName: 'elysiumchain',
                // Optional: see doc section below
                contextualSearch: true,
                // The application ID provided by Algolia
                // appId: 'YOUR_APP_ID',
                //
                // // Public API key: it is safe to commit it
                // apiKey: 'YOUR_SEARCH_API_KEY',
                //
                // indexName: 'YOUR_INDEX_NAME',
                //
                // // Optional: see doc section below
                // contextualSearch: true,
                //
                // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                // externalUrlRegex: 'external\\.com|domain\\.com',
                //
                // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
                // replaceSearchResultPathname: {
                //     from: '/docs/', // or as RegExp: /\/docs\//
                //     to: '/',
                // },
                //
                // // Optional: Algolia search parameters
                // searchParameters: {},
                //
                // // Optional: path for search page that enabled by default (`false` to disable it)
                // searchPagePath: 'search',
                // className:'mysearchBox'

                //... other Algolia params
            },
            typesense: {
                // Replace this with the name of your index/collection.
                // It should match the "index_name" entry in the scraper's "config.json" file.
                typesenseCollectionName: 'elysium-2',
                typesenseServerConfig: {
                    nodes: [
                        {
                            host: 'ju51mscqx64of8vbp-1.a1.typesense.net',
                            port: '443',
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
