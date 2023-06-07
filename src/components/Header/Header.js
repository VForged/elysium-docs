import React from 'react'
import Logo from '../../../static/images/logo.png'
import {ReactComponent as Eventicon} from '../../../static/images/icon-events.svg'
import FooterLogo from '../../../static/images/Footer Group 2.png'
export default function Header(){

    return(
        <>
            <header id="header" className="w-100">
                <nav className="navbar navbar-dark navbar-expand-xl py-2">
                    <div className="container position-relative custom-container">
                        <a className="navbar-brand me-5" href="https://elysiumchain.tech/">
                            <img src={Logo} alt="Logo" className="img-fluid no-filter"/>
                        </a>
                        <button className="navbar-toggler shadow-none border-0 collapsed" type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#Menu" aria-controls="Menu" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" id="toggler-icon" onClick="addCloseIcon()"></span>
                            <span className="icon-close d-none" id="close-icon" onClick="addTogglerIcon()"></span>
                        </button>
                        <div id="Menu" className="navbar-collapse collapse p-4 p-xl-0">
                            <ul className="navbar-nav align-items-xl-center ms-0 ms-lg-5">
                                <li className="nav-item dropdown me-2 me-lg-2 me-xl-4 pt-2 pt-xl-0">
                                    <a className="nav-link text-uppercase dropdown-toggle" href="javascript:void(0);"
                                       id="LearnDropdown"
                                       role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        LEARN
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="LearnDropdown">
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <div className="d-flex">
                                                    <svg id="how_it_works" data-name="how it works" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                                        <g id="Group_25233" data-name="Group 25233" transform="translate(15.752 13.523)">
                                                            <path id="Path_49941" data-name="Path 49941" d="M366.649,364.636h1.289v3.3h-1.289Z" transform="translate(-366.647 -362.491)" fill="#fff"/>
                                                            <path id="Path_49942" data-name="Path 49942" d="M367.247,316a.645.645,0,1,0-.645-.645A.652.652,0,0,0,367.247,316Z" transform="translate(-366.602 -314.712)" fill="#fff"/>
                                                        </g>
                                                        <g id="Group_25234" data-name="Group 25234" transform="translate(0)">
                                                            <path id="Path_49943" data-name="Path 49943" d="M17.535,10.964V0H2.833A2.8,2.8,0,0,0,0,2.8V19.251H.014A3.036,3.036,0,0,0,3.032,22H16.406a5.574,5.574,0,0,0,1.13-11.036Zm-1.291-.112a5.6,5.6,0,0,0-5.409,5.084H5.184V1.254h11.06ZM2.833,1.254h1.06V15.936H3.032a3.014,3.014,0,0,0-1.741.552V2.8A1.543,1.543,0,0,1,2.833,1.254Zm.2,19.455a1.741,1.741,0,1,1,0-3.482h7.835a5.547,5.547,0,0,0,.273,1.1l.665,1.291a5.64,5.64,0,0,0,.986,1.088H3.032Zm13.374.037a4.3,4.3,0,1,1,4.3-4.3A4.308,4.308,0,0,1,16.406,20.746Z" transform="translate(0)" fill="#fff"/>
                                                            <path id="Path_49944" data-name="Path 49944" d="M200.8,87.6h4.321v1.291H200.8Z" transform="translate(-192.168 -83.836)" fill="#fff"/>
                                                            <path id="Path_49945" data-name="Path 49945" d="M166.828,152.831h7.24v1.291h-7.24Z" transform="translate(-159.66 -146.264)" fill="#fff"/>
                                                        </g>
                                                    </svg>

                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16"><span
                                                            className="d-inline-block mb-1 opacity-50">How it Works</span>
                                                            <span
                                                                className="text-uppercase ms-1 coming-soon d-inline-block">Coming soon</span>
                                                        </h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Learn more about
                                                            the in
                                                            and out of the Elysium Blockchain

                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20.285" height="22" viewBox="0 0 20.285 22">
                                                        <path id="green" d="M7.35,22a.511.511,0,0,1-.361-.872L8.41,19.707V17.769l-1.5-.843A4.659,4.659,0,0,1,0,12.847,4.708,4.708,0,0,1,2.471,8.734a3.625,3.625,0,0,1,.7-4.162A3.676,3.676,0,0,1,5.73,3.507,4.431,4.431,0,0,1,8,.063.517.517,0,0,1,8.245,0a.511.511,0,0,1,.248.958A3.416,3.416,0,0,0,6.729,3.947l0,.094a.51.51,0,0,1-.173.4.516.516,0,0,1-.415.122,2.583,2.583,0,0,0-.39-.029A2.641,2.641,0,0,0,3.9,5.295a2.609,2.609,0,0,0-.282,3.372.511.511,0,0,1-.236.775,3.638,3.638,0,1,0,3.24,6.469l.606-1.538a.509.509,0,0,1,.723-.259l.853.474V12.618a.512.512,0,0,1,.511-.51h1.778a.511.511,0,0,1,.51.51v1.794l.519-.316a.515.515,0,0,1,.411-.052.509.509,0,0,1,.315.269l.735,1.543a3.638,3.638,0,0,0,5.682-3.009,3.657,3.657,0,0,0-2.358-3.406.51.51,0,0,1-.236-.775,2.61,2.61,0,0,0-.282-3.372,2.643,2.643,0,0,0-1.858-.766,2.571,2.571,0,0,0-.389.029.515.515,0,0,1-.415-.122.508.508,0,0,1-.173-.4V3.946A3.417,3.417,0,0,0,11.8.963a.511.511,0,0,1,.249-.957A.515.515,0,0,1,12.3.07a4.433,4.433,0,0,1,2.258,3.437A3.674,3.674,0,0,1,17.11,4.572a3.623,3.623,0,0,1,.7,4.162,4.659,4.659,0,0,1-2.187,8.772,4.649,4.649,0,0,1-2.285-.6L11.875,18v1.712L13.3,21.128a.511.511,0,0,1-.361.872Zm.273-5.845,1.548.87a.512.512,0,0,1,.261.446v2.448a.508.508,0,0,1-.149.361l-.7.7H11.7l-.7-.7a.509.509,0,0,1-.15-.361V17.738a.514.514,0,0,1,.207-.411l1.546-1.144-.438-.92-.812.493a.518.518,0,0,1-.516.008.511.511,0,0,1-.26-.444v-2.19H9.824v2.327a.513.513,0,0,1-.251.44.519.519,0,0,1-.508.006l-1.1-.612Z" fill="#fff"/>
                                                    </svg>

                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16"><span
                                                            className="d-inline-block mb-1 opacity-50">Our Green Commitment</span>
                                                            <span
                                                                className="text-uppercase ms-1 coming-soon d-inline-block">Coming soon</span>
                                                        </h6>

                                                        <p className="RobotoLight Fsize_13 GreyColor">You transact, we
                                                            plant
                                                            trees. Learn more about our green commitment
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                                        <g id="validator" transform="translate(-3 -3)">
                                                            <path id="Path_49938" data-name="Path 49938" d="M27.309,22.56l-5.28,5.276-2.61-2.594a.759.759,0,1,0-1.073,1.073l3.148,3.148a.759.759,0,0,0,1.073,0l5.815-5.834a.759.759,0,0,0-1.073-1.073Z" transform="translate(-9.387 -12)" fill="#fff"/>
                                                            <path id="Path_49939" data-name="Path 49939" d="M14,3A11,11,0,1,0,25,14,11,11,0,0,0,14,3Zm0,20.483A9.483,9.483,0,1,1,23.483,14,9.483,9.483,0,0,1,14,23.483Z" fill="#fff"/>
                                                        </g>
                                                    </svg>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16"><span
                                                            className="d-inline-block mb-1 opacity-50">Become a Validator</span>
                                                            <span
                                                                className="text-uppercase ms-1 coming-soon d-inline-block">Coming soon</span>
                                                        </h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Earn and Help us
                                                            run a
                                                            more decentralized and secure network
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14.517" viewBox="0 0 22 14.517">
                                                        <path id="dapps" d="M1.769,14.442A2.162,2.162,0,0,1,.4,13.166a7.487,7.487,0,0,1-.39-3.141,20.616,20.616,0,0,1,.6-3.957A13.978,13.978,0,0,1,1.843,2.731C2.9.851,4.091.013,5.691.013A11.2,11.2,0,0,1,8.349.473L8.6.534a15.8,15.8,0,0,0,2.267.434h.262A15.811,15.811,0,0,0,13.4.534l.213-.052A11.016,11.016,0,0,1,16.312,0c1.595,0,2.78.834,3.843,2.7A15,15,0,0,1,21.387,6.04a20.627,20.627,0,0,1,.6,3.957,7.35,7.35,0,0,1-.389,3.14,2.133,2.133,0,0,1-1.365,1.3,2.912,2.912,0,0,1-1.8-.193,12.61,12.61,0,0,1-3.508-2.491A5.824,5.824,0,0,0,11,10.562a5.825,5.825,0,0,0-3.923,1.194A12.6,12.6,0,0,1,3.57,14.247a3.034,3.034,0,0,1-1.208.269A2.313,2.313,0,0,1,1.769,14.442ZM2.362,14.418ZM15.74,10.936a10.874,10.874,0,0,0,3.116,2.232,1.787,1.787,0,0,0,1.051.132.983.983,0,0,0,.587-.623,6.254,6.254,0,0,0,.291-2.618,20.562,20.562,0,0,0-.567-3.729,12.335,12.335,0,0,0-1.131-3.042c-.789-1.422-1.694-2.056-2.932-2.056a9.427,9.427,0,0,0-2.2.379l-.054.013a15.75,15.75,0,0,1-2.7.518h-.424A15.991,15.991,0,0,1,8.1,1.626a9.267,9.267,0,0,0-2.247-.4A3.341,3.341,0,0,0,2.913,3.288,12.713,12.713,0,0,0,1.782,6.333a18.664,18.664,0,0,0-.567,3.727,6.394,6.394,0,0,0,.264,2.564.983.983,0,0,0,.589.623l.005,0a.779.779,0,0,0,.271.044,2.279,2.279,0,0,0,.774-.179,10.885,10.885,0,0,0,3.117-2.234A7.2,7.2,0,0,1,11,9.359,6.832,6.832,0,0,1,15.74,10.936ZM4.768,8.444a1.522,1.522,0,0,1-.484-.958A1.6,1.6,0,0,1,3.3,7,1.705,1.705,0,0,1,2.808,5.82,1.64,1.64,0,0,1,3.3,4.637l.03-.031a1.73,1.73,0,0,1,.953-.451A1.685,1.685,0,0,1,4.766,3.2,1.709,1.709,0,0,1,5.95,2.707,1.638,1.638,0,0,1,7.132,3.2l.028.028a1.65,1.65,0,0,1,.454.929,1.784,1.784,0,0,1,.954.479l0,0A1.7,1.7,0,0,1,9.062,5.82,1.637,1.637,0,0,1,8.573,7a1.527,1.527,0,0,1-.959.484,1.785,1.785,0,0,1-.479.953l0,0a1.7,1.7,0,0,1-1.183.491A1.637,1.637,0,0,1,4.768,8.444Zm-.6-2.983-.022.021a.458.458,0,0,0,.337.781h.381a.616.616,0,0,1,.614.615v.38a.471.471,0,1,0,.943,0V6.906a.615.615,0,0,1,.614-.614h.381a.471.471,0,1,0,0-.943H7.035a.615.615,0,0,1-.614-.614V4.353a.55.55,0,0,0-.112-.315l-.021-.022a.471.471,0,0,0-.809.337v.381a.615.615,0,0,1-.614.614H4.482A.55.55,0,0,0,4.168,5.461ZM14.676,7.748A1.049,1.049,0,1,1,15.724,8.8,1.049,1.049,0,0,1,14.676,7.748ZM16.6,5.82a1.05,1.05,0,1,1,1.05,1.049A1.051,1.051,0,0,1,16.6,5.82Zm-3.856,0A1.049,1.049,0,1,1,13.8,6.869,1.051,1.051,0,0,1,12.747,5.82Zm1.928-1.928a1.049,1.049,0,1,1,1.049,1.05A1.05,1.05,0,0,1,14.676,3.892Z" transform="translate(0)" fill="#fff"/>
                                                    </svg>

                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16"><span
                                                            className="d-inline-block mb-1 opacity-50">dApps</span>
                                                            <span
                                                                className="text-uppercase ms-1 coming-soon d-inline-block">Coming soon</span>
                                                        </h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Discover the
                                                            projects who
                                                            have chosen Elysium
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item dropdown me-2 me-lg-2 me-xl-4 pt-2 pt-xl-0">
                                    <a className="nav-link text-uppercase dropdown-toggle" href="javascript:void(0);"
                                       id="UseDropdown"
                                       role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        USE
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="UseDropdown">
                                        <li>
                                            <a className="dropdown-item" target="_blank"
                                               href="https://swap.elysiumchain.tech/exchange/swap">
                                                <div className="d-flex">
                                                    <div className="icon-swap-single-arrow Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16">Elysium
                                                            Swap</h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor"> Trade with ease
                                                            and
                                                            security on our cutting-edge DEX platform</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" target="_blank"
                                               href="https://bridge.elysiumchain.tech/">
                                                <div className="d-flex">
                                                    <div className="icon-bridge Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16">Bridge</h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Transfer crypto
                                                            and other
                                                            digital assets to and from Elysium</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <div className="d-flex">
                                                    <div className="icon-shop Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16"><span
                                                            className="d-inline-block mb-1 opacity-50">Agora Marketplace</span>
                                                            <span
                                                                className="text-uppercase ms-1 coming-soon d-inline-block">Coming
                                                        soon</span>
                                                        </h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Explore and
                                                            discover
                                                            one-of-a-kind digital assets on our premier NFT marketplace
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <div className="d-flex">
                                                    <div className="icon-wallet Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16"><span
                                                            className="d-inline-block mb-1 opacity-50">Elysium Cloudwallet</span>
                                                            <span
                                                                className="text-uppercase ms-1 coming-soon d-inline-block">coming-soon</span>
                                                        </h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Send and receive
                                                            your
                                                            crypto assets in a simple, secure, non-custodial wallet</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <div className="d-flex">
                                                    <div className="icon-shuttle-outline Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16"><span
                                                            className="d-inline-block mb-1 opacity-50">Launchpad</span>
                                                            <span
                                                                className="text-uppercase ms-1 coming-soon d-inline-block">coming-soon</span>
                                                        </h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Find the next big
                                                            blockchain project and connect with a community of crypto
                                                            enthusiasts</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" target="_blank"
                                               href="https://explorer.elysiumchain.tech/">
                                                <div className="d-flex">
                                                    <div className="icon-barcode-scanner Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16">Scan</h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Explore, analyze
                                                            and
                                                            verify transactions seamlessly on the Elysium blockchain</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown me-2 me-lg-2 me-xl-4 pt-2 pt-xl-0">
                                    <a className="nav-link text-uppercase dropdown-toggle" href="javascript:void(0);"
                                       id="DevelopDropdown"
                                       role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        DEVELOP
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="DevelopDropdown">
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <div className="d-flex">
                                                    <div className="icon-document Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16"><span
                                                            className="d-inline-block mb-1 opacity-50">Documentation</span>
                                                            <span
                                                                className="text-uppercase ms-1 coming-soon d-inline-block">Coming soon</span>
                                                        </h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">All you need to
                                                            know to
                                                            integrate to Elysium</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" target="_blank"
                                               href="https://faucet.atlantischain.network/">
                                                <div className="d-flex">
                                                    <div className="icon-facuet Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16">Faucet</h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Test, experiment
                                                            and
                                                            develop</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" target="_blank"
                                               href="https://explorer.elysiumchain.tech/">
                                                <div className="d-flex">
                                                    <div className="icon-barcode-scanner Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16">Scan</h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Explore, analyze
                                                            and
                                                            verify transactions seamlessly on the Elysium</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                <div className="d-flex">
                                                    <div className="icon-shuttle-outline Fsize_22"></div>
                                                    <div className="ms-2">
                                                        <h6 className="text-capitalize RobotoRegular Fsize_16"><span
                                                            className="opacity-50 d-inline-block mb-1">Launch your project</span>
                                                            <span
                                                                className="text-uppercase ms-1 coming-soon d-inline-block">Coming
                                                        soon</span></h6>
                                                        <p className="RobotoLight Fsize_13 GreyColor">Launch, fund and
                                                            market
                                                            your next project on Elysium</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>


                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}