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
                    {
                        position: 'left',
                        href:'/docs/intro',
                        label: 'Getting Started',
                    },
                    {
                        type: 'dropdown',
                        position: 'right',
                        className:'mydropdown',
                        customIcon: 'img/my-icon.svg',
                        html: `
                              <svg id="more" xmlns="http://www.w3.org/2000/svg" width="14.001" height="14.001" viewBox="0 0 14.001 14.001">
                          <circle id="Ellipse_964" data-name="Ellipse 964" cx="2.555" cy="2.555" r="2.555" transform="translate(0 0)" fill="#ada7b7"/>
                          <circle id="Ellipse_965" data-name="Ellipse 965" cx="2.555" cy="2.555" r="2.555" transform="translate(0 8.891)" fill="#ada7b7"/>
                          <circle id="Ellipse_966" data-name="Ellipse 966" cx="2.555" cy="2.555" r="2.555" transform="translate(8.891 0)" fill="#ada7b7"/>
                          <circle id="Ellipse_967" data-name="Ellipse 967" cx="2.555" cy="2.555" r="2.555" transform="translate(8.891 8.891)" fill="#ada7b7"/>
                      </svg>
                            `,

                        items: [],
                    },
                ]
            },

            async fetchDropdownData() {
                try {
                    const response = await fetch('https://s3.amazonaws.com/cdn.elysiumchain.tech/elysium-apps-icons/apps.json');
                    const data = await response.json();

                    const items = data.map(item => ({
                        to: `/custom-page/${item.url}`,
                        label: item.title,
                    }));


                    const navbar = document.querySelector('.navbar__inner');
                    const dropdownIndex = navbar.childNodes.length - 1; // Assuming the dropdown is the last item in the navbar
                    navbar.childNodes[dropdownIndex].items = items;
                } catch (error) {
                    console.error('Error fetching dropdown data:', error);
                }
            },
            colorMode: {
                defaultMode: 'light',
            },
            footer: {
                style: 'dark',
                // logo: {
                //     alt: 'Your Brand Logo',
                //     src: 'https://s3.amazonaws.com/cdn.elysiumchain.tech/elysium/Elysium-Docs-light.svg',
                //     width: '200px'
                // },
                links: [
                    {
                        items: [
                            {
                                html: `
                                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                                  <div class="footerLogoBg"></div>
                                </a>
                              `,
                            },
                            {
                                html: `
                            <div class="flex FooterIcon">
                                 <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                                                                                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                                                            <g id="icon-facebook" transform="translate(-1.244 -73.989)">
                                                                                <rect id="Rectangle_8889" data-name="Rectangle 8889" width="48" height="48"
                                                                                      transform="translate(1.244 73.989)" fill="none"/>
                                                                                <g id="Group_20409" data-name="Group 20409">
                                                                                    <g id="Group_20408" data-name="Group 20408">
                                                                                        <path id="Path_44107" data-name="Path 44107"
                                                                                              d="M28.473,113.46h-7.15V100.525H16.646V93.78h4.677V90.425a8.151,8.151,0,0,1,2.107-5.857A7.688,7.688,0,0,1,29,82.519a20.946,20.946,0,0,1,2.927.18c.758.1,1.184.16,1.274.168l.628.056.016.63V88.8h-3A2.089,2.089,0,0,0,28.473,91V93.78h5.251l-1.016,6.745H28.473ZM22.7,112.085h4.4V99.15h4.427l.6-4H27.1V91a3.6,3.6,0,0,1,.857-2.41,3.525,3.525,0,0,1,2.868-1.164h1.645V84.16l-.733-.1A19.682,19.682,0,0,0,29,83.894a6.278,6.278,0,0,0-4.6,1.654,6.84,6.84,0,0,0-1.7,4.888v4.719H18.021v4H22.7Z"
                                                                                              fill="#fff"/>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                            </a>
                                 <a target="_blank" href="https://twitter.com/Elysium_VF">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                                <g id="icon-twitter" transform="translate(0 -81.182)">
                                                    <rect id="Rectangle_8885" data-name="Rectangle 8885" width="48" height="48"
                                                          transform="translate(0 81.182)" fill="none"/>
                                                    <g id="Group_20396" data-name="Group 20396">
                                                        <g id="Group_20395" data-name="Group 20395">
                                                            <path id="Path_44097" data-name="Path 44097"
                                                                  d="M18.716,118.939a17.264,17.264,0,0,1-9.367-2.732.688.688,0,0,1,.431-1.262c.429.036.873.053,1.338.053a11.305,11.305,0,0,0,5.463-1.414,6.164,6.164,0,0,1-2.036-1.034,6.44,6.44,0,0,1-2.242-3.177.689.689,0,0,1,.453-.869,6.47,6.47,0,0,1-1.054-1.027,6.641,6.641,0,0,1-1.495-4.154v-.13a.688.688,0,0,1,1.028-.6l.026.015A7.15,7.15,0,0,1,10.208,99.1a6.937,6.937,0,0,1,.929-3.338.687.687,0,0,1,1.127-.087,15.965,15.965,0,0,0,5.081,4.118,15.614,15.614,0,0,0,5.653,1.7c-.013-.2-.02-.39-.02-.584a6.616,6.616,0,0,1,1.866-4.6,6.554,6.554,0,0,1,9.141-.16A11.247,11.247,0,0,0,37.152,94.9a.687.687,0,0,1,.993.823,7.092,7.092,0,0,1-.885,1.73c.248-.091.493-.19.736-.3a.687.687,0,0,1,.847,1.017,13.615,13.615,0,0,1-2.8,2.987c.012.144.018.283.018.415a17.534,17.534,0,0,1-2.028,8.067,16.876,16.876,0,0,1-15.321,9.3Zm-6.28-2.642a16.389,16.389,0,0,0,6.274,1.267,15.5,15.5,0,0,0,14.1-8.544,16.157,16.157,0,0,0,1.88-7.444,4.706,4.706,0,0,0-.049-.631.686.686,0,0,1,.271-.646,12.271,12.271,0,0,0,1.28-1.094q-.582.132-1.173.209a.679.679,0,0,1-.734-.448.688.688,0,0,1,.277-.814,5.651,5.651,0,0,0,1.308-1.135,12.809,12.809,0,0,1-1.979.549.687.687,0,0,1-.632-.2,5.175,5.175,0,0,0-7.434-.1,5.2,5.2,0,0,0-1.472,3.657,7.421,7.421,0,0,0,.1,1.21.687.687,0,0,1-.167.573.677.677,0,0,1-.553.226,17.161,17.161,0,0,1-7.026-1.919,17.357,17.357,0,0,1-4.8-3.652,5.669,5.669,0,0,0-.322,1.729,5.341,5.341,0,0,0,2.329,4.323.687.687,0,0,1-.449,1.247,7.214,7.214,0,0,1-1.777-.359,5.131,5.131,0,0,0,4.039,4.076.688.688,0,0,1,.01,1.342,7.635,7.635,0,0,1-1.71.185,5.081,5.081,0,0,0,4.418,2.585.688.688,0,0,1,.406,1.228A12.292,12.292,0,0,1,12.436,116.3Z"
                                                                  fill="#fff"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                            </div>
                            <p class="copyRight">Copyright © 2023 Elysium Documentation.</p>
                            `,
                            },
                        ],
                    },
                    {
                        title: 'LEARN',
                        items: [
                            {
                                label: 'About ',
                                to: '/',
                                className:"comingSoon",
                            },
                            {
                                label: 'How it Works',
                                to: '/',
                                className:"comingSoon",
                            },
                            {
                                label: 'Support',
                                to: '/',
                                className:"comingSoon",
                            },
                            {
                                label: 'Disclaimer',
                                to: 'https://elysiumchain.tech/disclaimer.html',
                            },
                        ],
                    },
                    {
                        title: 'USE',
                        items: [
                            {
                                label: 'Elysium Swap',
                                to: 'https://swap.elysiumchain.tech/exchange/swap',
                            },
                            {
                                label: 'Bridge',
                                to: 'https://bridge.elysiumchain.tech/',
                            },
                            {
                                label: 'Agora Marketplace',
                                to: '/',
                                class:"comingSoon",
                            },
                            {
                                label: 'Elysium Cloudwallet',
                                to: '/',
                                className:"comingSoon",
                            },
                            {
                                label: 'Scan',
                                to: 'https://explorer.elysiumchain.tech/',
                            },
                        ],
                    },
                    {
                        title: 'DEVELOP',
                        items: [
                            {
                                label: 'Documentation',
                                to: 'docs/intro',
                            },
                            {
                                label: 'Faucet',
                                to: 'https://faucet.atlantischain.network/',
                            },
                            {
                                label: 'Scan',
                                to: 'https://explorer.elysiumchain.tech/',
                            },
                            {
                                label: 'Launch Your Project',
                                to: '/',
                                className:"comingSoon",
                            },
                        ],
                    },
                    {
                        title: 'COMMUNITY',
                        items: [
                            {
                                label: 'Events',
                                to: 'https://vulcanforged.com/vulcon/index',
                            },
                            {
                                label: 'Become a Validator',
                                to: '/',
                                className:"comingSoon",
                            },
                            {
                                label: 'Twitter',
                                to: 'https://twitter.com/Elysium_VF',
                            },
                            {
                                label: 'Discord',
                                to: 'https://discord.com/invite/vulcan-forged',
                            },
                            {
                                label: 'Brand Asset',
                                to: '/',
                                className:"comingSoon",
                            },
                            {
                                label: 'Blog',
                                to: 'https://blog.vulcanforged.com/category/elysium/',
                            },
                        ],
                    },
                ],
                // copyright: `Copyright © ${new Date().getFullYear()} Elysium Documentation.`,
            },
            prism: {
                // theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
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
