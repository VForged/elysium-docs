import React from 'react';
import Logo from '../../../static/images/Footer Group 2.png'
import LightLogo from '../../../static/images/lightLogo.png'
import {ReactComponent as Eventicon} from '../../../static/images/icon-events.svg'
import ThemedImage from '@theme/ThemedImage';
export default function Footer(){

    return(
        <>
            <footer id="footer" className="Fsize_14 RobotoLight text-white">
                    <div className="container">
                        <div className="border-top py-5">
                            <div className="row pt-5">
                                <div className="col-lg-3 mb-5 mb-lg-0 d-flex flex-column">
                                    <a href="https://elysiumchain.tech/">
                                        <ThemedImage
                                            alt="Docusaurus themed image"
                                            sources={{
                                                dark: Logo,
                                                light:LightLogo ,
                                            }}
                                        />
                                        {/*<img src={Logo} alt="Logo"*/}
                                        {/*     className="img-fluid d-block mb-2 mb-md-4"/>*/}
                                    </a>
                                    <div>
                                        {/*<a target="_blank" href="https://www.facebook.com/ElysiumBlockchain/">*/}
                                        {/*    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">*/}
                                        {/*        <g id="icon-facebook" transform="translate(-1.244 -73.989)">*/}
                                        {/*            <rect id="Rectangle_8889" data-name="Rectangle 8889" width="48" height="48"*/}
                                        {/*                  transform="translate(1.244 73.989)" fill="none"/>*/}
                                        {/*            <g id="Group_20409" data-name="Group 20409">*/}
                                        {/*                <g id="Group_20408" data-name="Group 20408">*/}
                                        {/*                    <path id="Path_44107" data-name="Path 44107"*/}
                                        {/*                          d="M28.473,113.46h-7.15V100.525H16.646V93.78h4.677V90.425a8.151,8.151,0,0,1,2.107-5.857A7.688,7.688,0,0,1,29,82.519a20.946,20.946,0,0,1,2.927.18c.758.1,1.184.16,1.274.168l.628.056.016.63V88.8h-3A2.089,2.089,0,0,0,28.473,91V93.78h5.251l-1.016,6.745H28.473ZM22.7,112.085h4.4V99.15h4.427l.6-4H27.1V91a3.6,3.6,0,0,1,.857-2.41,3.525,3.525,0,0,1,2.868-1.164h1.645V84.16l-.733-.1A19.682,19.682,0,0,0,29,83.894a6.278,6.278,0,0,0-4.6,1.654,6.84,6.84,0,0,0-1.7,4.888v4.719H18.021v4H22.7Z"*/}
                                        {/*                          fill="#fff"/>*/}
                                        {/*                </g>*/}
                                        {/*            </g>*/}
                                        {/*        </g>*/}
                                        {/*    </svg>*/}
                                        {/*</a>*/}
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

                                    <div className="mt-5 GrayColor">© 2023 Elysium. All rights reserved.</div>
                                </div>
                                <div className="col-lg-2 col-sm-6 mb-5 mb-lg-0">
                                    <h6 className="mb-2 mb-md-3">LEARN</h6>
                                    <ul className="list-unstyled mb-0 ">
                                        <li className="py-1"><a href="javascript:void(0);">
                                            <span className="">About</span> <span
                                            className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                        <li className="py-1"><a href="javascript:void(0);"><span className="">How it Works</span>
                                            <span
                                                className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                        <li className="py-1"><a href="javascript:void(0);"><span
                                            className="">Support</span> <span
                                            className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                        <li className="py-1"><a
                                            href="https://elysiumchain.tech/disclaimer.html" target="_blank"
                                        >Disclaimer</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-6 mb-5 mb-lg-0">
                                    <h6 className="mb-2 mb-md-3">USE</h6>
                                    <ul className="list-unstyled mb-0 ">
                                        <li className="py-1"><a target="_blank"
                                                                href="https://swap.elysiumchain.tech/exchange/swap"
                                        >Elysium Swap</a></li>
                                        <li className="py-1"><a target="_blank"
                                                                href="https://bridge.elysiumchain.tech/">Bridge</a>
                                        </li>
                                        <li className="py-1"><a href="javascript:void(0);"><span className="">Agora Marketplace</span>
                                            <span
                                                className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                        <li className="py-1"><a href="javascript:void(0);"><span className="">Elysium Cloudwallet</span>
                                            <span
                                                className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                        <li className="py-1"><a href="javascript:void(0);"><span
                                            className="">Launchpad</span> <span
                                            className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                        <li className="py-1"><a target="_blank"
                                                                href="https://explorer.elysiumchain.tech/">Scan</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-6 mb-5 mb-lg-0">
                                    <h6 className="mb-2 mb-md-3">DEVELOP</h6>
                                    <ul className="list-unstyled mb-0">
                                        <li className="py-1"><a href="javascript:void(0);"><span
                                            className="">Documentation</span> <span
                                            className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                        <li className="py-1"><a target="_blank" href="https://faucet.atlantischain.network/"
                                        >Faucet</a></li>
                                        <li className="py-1"><a target="_blank"
                                                                href="https://explorer.elysiumchain.tech/">Scan</a>
                                        </li>
                                        <li className="py-1"><a href="javascript:void(0);"><span className="">Launch Your Project</span>
                                            <span
                                                className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <h6 className="mb-2 mb-md-3">COMMUNITY</h6>
                                    <ul className="list-unstyled mb-0">
                                        <li className="py-1"><a target="_blank"
                                                                href="https://vulcanforged.com/vulcon/index">Events</a></li>
                                        <li className="py-1"><a href="javascript:void(0);"><span className="">Become a Validator</span>
                                            <span
                                                className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                        <li className="py-1"><a target="_blank"
                                                                href="https://twitter.com/Elysium_VF">Twitter</a></li>
                                        <li className="py-1"><a target="_blank"
                                                                href="https://discord.gg/vulcan-forged">Discord</a></li>
                                        <li className="py-1"><a href="javascript:void(0);"><span className="">Brand Assets</span>
                                            <span
                                                className="coming-soon ms-1 text-uppercase d-inline-block">Coming soon</span></a>
                                        </li>
                                        <li className="py-1"><a target="_blank"
                                                                href="https://blog.vulcanforged.com/category/elysium/">Blog</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    )
}
