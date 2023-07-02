// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Elysium Documentation',
    tagline: `Elysium | The Green Blockchain for AI, Metaverse and web3 Game Projects`,
    favicon: 'https://s3.amazonaws.com/cdn.elysiumchain.tech/elysium-icon-512x512.png',

    // Set the production url of your site here
    url: 'https://docs.elysiumchain.tech',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'BloxBytes', // Usually your GitHub org/user name.
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
                    googleAnalytics: {
                        trackingID: 'G-X8EQYCWFZE',
                        anonymizeIP: true
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
                items: [
                    {
                        position: 'left',
                        href: '/',
                        label: 'Home',
                    },
                    {
                        position: 'left',
                        href: '/docs/intro',
                        label: 'Getting Started',
                    },
                    {
                        type: 'dropdown',
                        position: 'right',
                        className: 'docuDropdown',
                        customIcon: 'img/my-icon.svg',
                        html: `
                              <svg  id="more" xmlns="http://www.w3.org/2000/svg" width="14.001" height="14.001" viewBox="0 0 14.001 14.001">
                                  <circle id="Ellipse_964" data-name="Ellipse 964" cx="2.555" cy="2.555" r="2.555" transform="translate(0 0)" fill="#ada7b7"/>
                                  <circle id="Ellipse_965" data-name="Ellipse 965" cx="2.555" cy="2.555" r="2.555" transform="translate(0 8.891)" fill="#ada7b7"/>
                                  <circle id="Ellipse_966" data-name="Ellipse 966" cx="2.555" cy="2.555" r="2.555" transform="translate(8.891 0)" fill="#ada7b7"/>
                                  <circle id="Ellipse_967" data-name="Ellipse 967" cx="2.555" cy="2.555" r="2.555" transform="translate(8.891 8.891)" fill="#ada7b7"/>
                              </svg>
                            `,
                        items: [
                            {
                                type: 'html',
                                value: `<a href='https://elysiumchain.tech'>
                                        <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                          <g id="Icon" transform="translate(-1.25 -1.25)">
                                            <path id="Path_49352" data-name="Path 49352" d="M19.76,26.422a12.038,12.038,0,1,1,6.685-6.717.976.976,0,0,0,1.814.723,13.99,13.99,0,1,0-7.767,7.806.977.977,0,0,0-.732-1.812Z" transform="translate(0 0)" fill="#fff" fill-rule="evenodd"/>
                                            <path id="Path_49353" data-name="Path 49353" d="M22.775,4.668a12.007,12.007,0,0,1-8.432,3.447A12.007,12.007,0,0,1,5.91,4.668.977.977,0,0,0,4.543,6.063a13.956,13.956,0,0,0,9.8,4.006,13.956,13.956,0,0,0,9.8-4.006.977.977,0,0,0-1.367-1.395Z" transform="translate(0.907 0.949)" fill="#fff" fill-rule="evenodd"/>
                                            <path id="Path_49354" data-name="Path 49354" d="M17.142,15.669a14.017,14.017,0,0,0-12.6,3.726A.976.976,0,1,0,5.91,20.788a12.068,12.068,0,0,1,10.843-3.2.977.977,0,1,0,.388-1.914Z" transform="translate(0.907 4.274)" fill="#fff" fill-rule="evenodd"/>
                                            <path id="Path_49355" data-name="Path 49355" d="M17.032,24.811c-.914,1.5-2.021,2.485-3.294,2.485-1.154,0-2.172-.819-3.037-2.088C9.17,22.964,8.2,19.334,8.2,15.25s.966-7.714,2.5-9.959C11.566,4.023,12.584,3.2,13.738,3.2s2.172.819,3.037,2.088c1.532,2.245,2.5,5.875,2.5,9.959a24.886,24.886,0,0,1-.125,2.506.977.977,0,0,0,1.943.2,26.838,26.838,0,0,0,.135-2.7c0-4.541-1.134-8.563-2.836-11.059C17.1,2.3,15.46,1.25,13.738,1.25S10.378,2.3,9.086,4.191c-1.7,2.5-2.836,6.518-2.836,11.059s1.134,8.563,2.836,11.059c1.292,1.894,2.93,2.941,4.652,2.941,1.86,0,3.627-1.231,4.962-3.421a.977.977,0,0,0-1.668-1.017Z" transform="translate(1.512 0)" fill="#fff" fill-rule="evenodd"/>
                                            <path id="Path_49356" data-name="Path 49356" d="M21.037,21.037l3.648-1.459a1.847,1.847,0,0,0-.055-3.451l-9.642-3.506a1.847,1.847,0,0,0-2.366,2.366l3.506,9.642a1.847,1.847,0,0,0,3.451.055ZM23.7,17.868l-3.432,1.373a1.841,1.841,0,0,0-1.029,1.029L17.868,23.7l-3.334-9.167Z" transform="translate(3.404 3.404)" fill="#fff" fill-rule="evenodd"/>
                                            <path id="Path_49357" data-name="Path 49357" d="M28.273,11.25H2.227a.977.977,0,0,0,0,1.953H28.273a.977.977,0,1,0,0-1.953Z" transform="translate(0 3.023)" fill="#fff" fill-rule="evenodd"/>
                                          </g>
                                        </svg>
                                         <span>Website</span>
                                    </a>`
                            },
                            {
                                type: 'html',
                                value: `<a href='https://elysiumchain.tech'>
                                        <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="25.107" height="24" viewBox="0 0 25.107 24">
                                          <g id="swap" transform="translate(-0.25 -4.229)">
                                            <path id="Path_49345" data-name="Path 49345" d="M7.407,2.281A1.2,1.2,0,0,0,5.717.576L3.411,2.862A29.046,29.046,0,0,0,1.328,5.056,4.408,4.408,0,0,0,.277,7.276,1.565,1.565,0,0,0,1.844,9.029h22a1.2,1.2,0,1,0,0-2.4H3.144l.055-.07A28.07,28.07,0,0,1,5.15,4.517Z" transform="translate(-0.013 4)" fill="#fff"/>
                                            <path id="Path_49346" data-name="Path 49346" d="M1.45,12.229a1.2,1.2,0,0,0,0,2.4H22.469l-.055.07a28.036,28.036,0,0,1-1.951,2.042l-2.257,2.236a1.2,1.2,0,0,0,1.689,1.7L22.2,18.4A29.07,29.07,0,0,0,24.285,16.2a4.409,4.409,0,0,0,1.051-2.22c0-.037.009-.074.013-.112a1.5,1.5,0,0,0-1.5-1.641Z" transform="translate(0 7.2)" fill="#fff"/>
                                          </g>
                                        </svg>
                                         <span>Swap</span>
                                    </a>
                                  `,
                            },
                            {
                                type: 'html',
                                value: `<a href='https://bridge.elysiumchain.tech/'>
                                        <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                          <g id="bridges" transform="translate(0 -118.698)">
                                            <g id="Group_25245" data-name="Group 25245" transform="translate(0 118.698)">
                                              <path id="Path_49347" data-name="Path 49347" d="M28,131.389a2.217,2.217,0,0,0-.72-1.549q-.331-.3-.674-.591v-4.3a.82.82,0,0,0-.266-.6,14.907,14.907,0,0,0-3.356-2.312v-.988a.82.82,0,1,0-1.641,0v.271c-.215-.08-.432-.158-.652-.23a19.225,19.225,0,0,0-3.164-.74v-.823a.82.82,0,1,0-1.641,0v.64q-.919-.069-1.877-.07-.991,0-1.939.075v-.645a.82.82,0,1,0-1.641,0v.832a19.216,19.216,0,0,0-3.1.73q-.361.119-.712.252v-.293a.82.82,0,1,0-1.641,0v1.018a14.835,14.835,0,0,0-3.295,2.283.82.82,0,0,0-.265.6l0,4.288q-.352.294-.692.606a2.232,2.232,0,0,0,3.019,3.287,15.328,15.328,0,0,1,1.191-.986,15.171,15.171,0,0,1,18.136,0,15.317,15.317,0,0,1,1.191.986A2.232,2.232,0,0,0,28,131.389Zm-5.016-7.5a13.207,13.207,0,0,1,1.981,1.42v2.7a19.58,19.58,0,0,0-1.981-1.173ZM17.526,122a16.565,16.565,0,0,1,3.816,1.073v3.018a19.552,19.552,0,0,0-3.816-1.1Zm-5.457-.191q.942-.078,1.939-.078.965,0,1.877.074v2.957q-.935-.09-1.885-.09-.972,0-1.932.1ZM6.612,123.1a16.485,16.485,0,0,1,3.816-1.089V125a19.551,19.551,0,0,0-3.816,1.114Zm-1.641.83v2.939A19.583,19.583,0,0,0,3.054,128l0-2.691A13.142,13.142,0,0,1,4.972,123.927ZM26.2,131.884a.591.591,0,0,1-.835.035,16.967,16.967,0,0,0-1.319-1.092,16.811,16.811,0,0,0-20.1,0,16.969,16.969,0,0,0-1.319,1.092.591.591,0,1,1-.8-.87,17.993,17.993,0,0,1,24.336,0,.591.591,0,0,1,.035.835Z" transform="translate(0 -118.698)" fill="#fff"/>
                                            </g>
                                          </g>
                                        </svg>
                                         <span>Bridges</span>
                                    </a>
                                  `,
                            },
                            {
                                type: 'html',
                                value: `<a href='https://market-dev.elysiumchain.tech/'>
                                       <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="28" height="26.133" viewBox="0 0 28 26.133">
                                          <path id="store_4_" data-name="store(4)" d="M27.133,26.267V14.358A4.2,4.2,0,0,0,29,10.867c0-.387-.965-4.428-1.524-6.691A2.8,2.8,0,0,0,24.746,2C20.693,2,9.306,2,5.253,2A2.8,2.8,0,0,0,2.528,4.177C1.965,6.439,1,10.479,1,10.867a4.2,4.2,0,0,0,1.867,3.492V26.267H1.933a.933.933,0,1,0,0,1.867H28.067a.933.933,0,1,0,0-1.867ZM25.267,15.041a4.056,4.056,0,0,1-.467.026,3.814,3.814,0,0,1-3.267-1.774,3.895,3.895,0,0,1-6.535,0,3.892,3.892,0,0,1-6.533,0A3.815,3.815,0,0,1,5.2,15.067a4.057,4.057,0,0,1-.467-.026V26.267h6.533V22.533a1.867,1.867,0,0,1,1.867-1.867h3.733a1.867,1.867,0,0,1,1.867,1.867v3.733h6.533ZM13.133,22.533h3.733v3.733H13.133Zm9.321-11.8a.933.933,0,0,0-1.842,0,4.333,4.333,0,0,1-.492,1.306,2.059,2.059,0,0,1-3.707,0,4.333,4.333,0,0,1-.492-1.306.934.934,0,0,0-1.842,0,4.358,4.358,0,0,1-.495,1.307,2.056,2.056,0,0,1-3.7,0,4.333,4.333,0,0,1-.492-1.306.934.934,0,0,0-1.842,0,4.358,4.358,0,0,1-.495,1.307A2.1,2.1,0,0,1,5.2,13.2a2.334,2.334,0,0,1-2.333-2.333c0-.362.949-4.136,1.475-6.248a.145.145,0,0,1,0-.021.931.931,0,0,1,.908-.728h0c4.052,0,15.439,0,19.491,0a.934.934,0,0,1,.911.73c0,.007,0,.013,0,.021.523,2.113,1.472,5.887,1.472,6.25A2.334,2.334,0,0,1,24.8,13.2a2.1,2.1,0,0,1-1.854-1.163,4.333,4.333,0,0,1-.492-1.306Z" transform="translate(-1 -2)" fill="#fff" fill-rule="evenodd"/>
                                        </svg>
                                         <span>MarketPlace</span>
                                    </a>
                                  `,
                            },
                            {
                                type: 'html',
                                value: `<a href='http://explorer.elysiumchain.tech/'>
                                      <svg class="mb-3" id="barcode-scanner" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                          <path id="Path_49337" data-name="Path 49337" d="M24.167,9.333A1.166,1.166,0,0,1,23,8.167V3.5a1.168,1.168,0,0,0-1.167-1.167H17.167a1.167,1.167,0,0,1,0-2.333h4.667a3.5,3.5,0,0,1,3.5,3.5V8.167A1.166,1.166,0,0,1,24.167,9.333Z" transform="translate(2.667)" fill="#fff"/>
                                          <path id="Path_49338" data-name="Path 49338" d="M21.833,25.333H17.167a1.167,1.167,0,0,1,0-2.333h4.667A1.168,1.168,0,0,0,23,21.833V17.167a1.167,1.167,0,0,1,2.333,0v4.667A3.5,3.5,0,0,1,21.833,25.333Z" transform="translate(2.667 2.667)" fill="#fff"/>
                                          <path id="Path_49339" data-name="Path 49339" d="M8.167,25.333H3.5a3.5,3.5,0,0,1-3.5-3.5V17.167a1.167,1.167,0,0,1,2.333,0v4.667A1.168,1.168,0,0,0,3.5,23H8.167a1.167,1.167,0,0,1,0,2.333Z" transform="translate(0 2.667)" fill="#fff"/>
                                          <path id="Path_49340" data-name="Path 49340" d="M1.167,9.333A1.166,1.166,0,0,1,0,8.167V3.5A3.5,3.5,0,0,1,3.5,0H8.167a1.167,1.167,0,1,1,0,2.333H3.5A1.168,1.168,0,0,0,2.333,3.5V8.167A1.166,1.166,0,0,1,1.167,9.333Z" fill="#fff"/>
                                          <path id="Path_49341" data-name="Path 49341" d="M20.167,12A1.166,1.166,0,0,1,19,10.833v-3.5H7.333v3.5a1.167,1.167,0,1,1-2.333,0v-3.5A2.336,2.336,0,0,1,7.333,5H19a2.336,2.336,0,0,1,2.333,2.333v3.5A1.166,1.166,0,0,1,20.167,12Z" transform="translate(0.833 0.833)" fill="#fff"/>
                                          <path id="Path_49342" data-name="Path 49342" d="M24,14.167a1.166,1.166,0,0,1-1.167,1.167H21.667v2.333A2.336,2.336,0,0,1,19.333,20H7.667a2.336,2.336,0,0,1-2.333-2.333V15.333H4.167a1.167,1.167,0,0,1,0-2.333H22.833A1.166,1.166,0,0,1,24,14.167Z" transform="translate(0.5 2.167)" fill="#fff"/>
                                        </svg>
                                         <span>Scan</span>
                                    </a>
                                  `,
                            },
                            {
                                type: 'html',
                                value: `<a href='https://wallet.elysiumchain.tech/'>
                                     <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0 0 28 28">
                                          <defs>
                                            <clipPath id="clip-path">
                                              <path id="path873" d="M0-682.665H28v28H0Z" transform="translate(0 682.665)"/>
                                            </clipPath>
                                          </defs>
                                          <g id="g867" transform="translate(0 682.665)">
                                            <g id="g869" transform="translate(0 -682.665)">
                                              <g id="g871" clip-path="url(#clip-path)">
                                                <g id="g877" transform="translate(18.995 12.651)">
                                                  <path id="path879" d="M0-25.318a1.349,1.349,0,0,1,1.349-1.349A1.349,1.349,0,0,1,2.7-25.318a1.349,1.349,0,0,1-1.349,1.349A1.349,1.349,0,0,1,0-25.318" transform="translate(0 26.667)" fill="#fff"/>
                                                </g>
                                                <g id="g881" transform="translate(1.094 3.063)">
                                                  <path id="path883" d="M-542.478-457.024h-14.875a5.481,5.481,0,0,1-5.475-5.475v-13.125a5.481,5.481,0,0,1,5.475-5.475h14.875a5.5,5.5,0,0,1,4.742,2.737,1.1,1.1,0,0,1-.4,1.5,1.1,1.1,0,0,1-1.5-.4,3.288,3.288,0,0,0-2.838-1.638h-14.875a3.279,3.279,0,0,0-3.275,3.275V-462.5a3.279,3.279,0,0,0,3.275,3.275h14.875a3.288,3.288,0,0,0,2.838-1.638,1.1,1.1,0,0,1,1.5-.4,1.1,1.1,0,0,1,.4,1.5A5.5,5.5,0,0,1-542.478-457.024Z" transform="translate(561.728 479.999)" fill="#fff"/>
                                                </g>
                                                <g id="g885" transform="translate(15.969 9.625)">
                                                  <path id="path887" d="M4.375-107.766H8.75a3.291,3.291,0,0,1,3.288,3.287v4.375A3.291,3.291,0,0,1,8.75-96.816H4.375A5.481,5.481,0,0,1-1.1-102.291,5.481,5.481,0,0,1,4.375-107.766Zm4.375,8.75A1.089,1.089,0,0,0,9.837-100.1v-4.375a1.089,1.089,0,0,0-1.087-1.088H4.375A3.279,3.279,0,0,0,1.1-102.291a3.279,3.279,0,0,0,3.275,3.275Z" transform="translate(0 106.666)" fill="#fff"/>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                         <span>CloudWallet</span>
                                    </a>
                                  `,
                            },

                            {
                                type: 'html',
                                value: `<a href='https://elysium-launchpad-investorpanel-nft-dev.vulcanforged.com/'>
                                          <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                              <g id="shuttle" transform="translate(0 0)">
                                                <path id="Path_49332" data-name="Path 49332" d="M27.967,2.09A2.176,2.176,0,0,0,25.909.033,21.614,21.614,0,0,0,15.074,2.2,21.272,21.272,0,0,0,8.863,7.352l-.066.08-4.1.317a2.165,2.165,0,0,0-1.649.971l-2.8,4.231A1.5,1.5,0,0,0,1.27,15.26l3.455.535c-.012.067-.024.134-.036.2a2.175,2.175,0,0,0,.61,1.892L10.111,22.7a2.181,2.181,0,0,0,1.539.639A2.144,2.144,0,0,0,12,23.31l.2-.036.535,3.455a1.5,1.5,0,0,0,2.309,1.021l4.231-2.8a2.164,2.164,0,0,0,.97-1.649l.317-4.1.08-.066A21.27,21.27,0,0,0,25.8,12.926,21.615,21.615,0,0,0,27.967,2.09ZM18.375,23.585l-4.047,2.676-.521-3.367a18.377,18.377,0,0,0,5.015-2.388l-.206,2.671a.534.534,0,0,1-.24.407Zm-7.1-2.044L6.459,16.728a.532.532,0,0,1-.152-.462,14.112,14.112,0,0,1,.641-2.437l7.22,7.22a14.171,14.171,0,0,1-2.435.642.532.532,0,0,1-.462-.152ZM4.823,9.385l2.671-.206a18.375,18.375,0,0,0-2.388,5.015l-3.367-.521L4.415,9.625A.534.534,0,0,1,4.823,9.385ZM19.6,17.877a18.808,18.808,0,0,1-3.8,2.483L7.639,12.2a19.133,19.133,0,0,1,2.484-3.8,19.577,19.577,0,0,1,5.706-4.744A19.954,19.954,0,0,1,25.82,1.671a.538.538,0,0,1,.509.509,19.952,19.952,0,0,1-1.988,9.992A19.577,19.577,0,0,1,19.6,17.877Z" transform="translate(0 0)" fill="#fff"/>
                                                <path id="Path_49333" data-name="Path 49333" d="M279.824,94.518a4.1,4.1,0,1,0-2.9-1.2A4.09,4.09,0,0,0,279.824,94.518Zm-1.74-5.84a2.461,2.461,0,1,1-.721,1.74A2.453,2.453,0,0,1,278.084,88.678Z" transform="translate(-260.645 -81.598)" fill="#fff"/>
                                                <path id="Path_49334" data-name="Path 49334" d="M1.122,347.283a.817.817,0,0,0,.58-.24l2.678-2.678a.82.82,0,0,0-1.16-1.16L.542,345.883a.82.82,0,0,0,.58,1.4Z" transform="translate(-0.285 -324.208)" fill="#fff"/>
                                                <path id="Path_49335" data-name="Path 49335" d="M6.55,388.086a.82.82,0,0,0-1.16,0L.241,393.235a.82.82,0,1,0,1.16,1.16l5.149-5.149A.82.82,0,0,0,6.55,388.086Z" transform="translate(-0.001 -366.635)" fill="#fff"/>
                                                <path id="Path_49336" data-name="Path 49336" d="M92.981,432.967,90.3,435.645a.82.82,0,1,0,1.16,1.16l2.678-2.678a.82.82,0,1,0-1.16-1.16Z" transform="translate(-85.137 -409.062)" fill="#fff"/>
                                              </g>
                                            </svg>
                                         <span>LaunchPad</span>
                                    </a>
                                  `,
                            },

                            {
                                type: 'html',
                                value: `<a href='https://faucet.atlantischain.network/'>
                                         <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="28" height="26.653" viewBox="0 0 28 26.653">
                                          <g id="Group_25262" data-name="Group 25262" transform="translate(-1536 -302.3)">
                                            <path id="Union_262" data-name="Union 262" d="M5.563,15.854a.968.968,0,0,1-.931-.935V7.526H.939a.965.965,0,0,1-.813-.5l-.014-.02L.1,6.986A.962.962,0,0,1,.18,6L.2,5.964,4.817.374A.876.876,0,0,1,5.563,0H22.435a.814.814,0,0,1,.746.374L27.822,6a.969.969,0,0,1,.077.988.909.909,0,0,1-.836.54H23.313V14.92a.968.968,0,0,1-.932.935Zm.932-1.92H21.449V5.84l-.766,1.914a.864.864,0,0,1-.861.59H8.122a.865.865,0,0,1-.86-.59L6.5,5.84Zm2.326-7.4h10.36l1.862-4.61H6.958ZM23.37,5.66h1.721L23.37,3.588Zm-20.46,0H4.633V3.588Z" transform="translate(1536 313.099)" fill="#fff"/>
                                            <path id="Union_263" data-name="Union 263" d="M.793,5.717.756,5.711A.955.955,0,0,1,.168,5.3a.937.937,0,0,1-.15-.7l.01-.05.01-.021a.117.117,0,0,1,.011-.033A6.458,6.458,0,0,1,4.4.063,1.015,1.015,0,0,1,4.742,0a.906.906,0,0,1,.867.634.936.936,0,0,1-.55,1.19l-.023.007A4.493,4.493,0,0,0,1.875,4.918v.013l-.01.037a.915.915,0,0,1-.924.749Z" transform="translate(1554.882 306.638)" fill="#fff"/>
                                            <path id="Union_264" data-name="Union 264" d="M4.72,5.71a.919.919,0,0,1-.925-.749l-.007-.037V4.911A4.5,4.5,0,0,0,.625,1.824l-.02-.007a.963.963,0,0,1-.513-.488A.905.905,0,0,1,.062.6.964.964,0,0,1,.948,0a.9.9,0,0,1,.313.057A6.812,6.812,0,0,1,4.848,2.739a5.172,5.172,0,0,1,.8,1.864.95.95,0,0,1-.742,1.1l-.037.006Z" transform="translate(1539.347 306.645)" fill="#fff"/>
                                            <g id="diamonds-token" transform="translate(1546.111 303)">
                                              <path id="Path_49352" data-name="Path 49352" d="M3.89-.7A4.573,4.573,0,0,1,7.976,1.8q.025.049.05.1c.032.066.063.134.092.2a4.578,4.578,0,0,1,.187.531c.02.072.04.146.057.22a4.622,4.622,0,0,1,0,2.071c-.017.074-.036.148-.057.22a4.576,4.576,0,0,1-.187.531c-.029.069-.06.137-.092.2q-.024.05-.05.1a4.59,4.59,0,0,1-8.173,0l-.049-.1c-.049-.1-.094-.2-.134-.308-.055-.139-.1-.283-.144-.427-.021-.072-.04-.146-.057-.22a4.623,4.623,0,0,1,0-2.071c.017-.074.036-.148.057-.22.041-.144.09-.288.144-.427C-.34,2.1-.295,2-.246,1.9c.016-.034.033-.067.05-.1A4.573,4.573,0,0,1,3.89-.7Zm0,7.778A3.179,3.179,0,0,0,6.73,5.34l.034-.069c.022-.046.044-.093.064-.141a3.17,3.17,0,0,0,.129-.367c.014-.05.027-.1.039-.153A3.222,3.222,0,0,0,7,3.168c-.012-.051-.025-.1-.039-.152a3.172,3.172,0,0,0-.129-.368c-.02-.048-.042-.1-.064-.141L6.73,2.438A3.179,3.179,0,0,0,3.89.7h0a3.179,3.179,0,0,0-2.84,1.738l-.035.07c-.033.069-.065.141-.093.213-.038.1-.072.2-.1.3-.014.05-.027.1-.039.153a3.223,3.223,0,0,0,0,1.442c.012.051.025.1.039.153.028.1.062.2.1.3.028.072.06.143.093.213l.034.069A3.179,3.179,0,0,0,3.89,7.078ZM3.89.9a.7.7,0,0,1,.557.276L6.191,3.465a.7.7,0,0,1,0,.848L4.447,6.6a.7.7,0,0,1-1.114,0L1.588,4.313a.7.7,0,0,1,0-.848L3.333,1.174A.7.7,0,0,1,3.89.9Zm.865,2.991L3.89,2.753,3.025,3.889,3.89,5.024Z" transform="translate(-0.001)" fill="#fff"/>
                                            </g>
                                          </g>
                                        </svg>
                                         <span>Faucet</span>
                                    </a>
                                  `,
                            },
                        ],
                    },
                ]
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
                                <a href="/" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
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
                                className: "comingSoon",
                            },
                            {
                                label: 'How it Works',
                                to: '/',
                                className: "comingSoon",
                            },
                            {
                                label: 'Support',
                                to: '/',
                                className: "comingSoon",
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
                                class: "comingSoon",
                            },
                            {
                                label: 'Elysium Cloudwallet',
                                to: '/',
                                className: "comingSoon",
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
                                className: "comingSoon",
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
                                className: "comingSoon",
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
                                className: "comingSoon",
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
