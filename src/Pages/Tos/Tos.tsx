import React from 'react';

import { Nav } from 'react-bootstrap';

import Header from '../../Components/Header/Header';
import InfoSection from '../../Components/InfoSection/InfoSction';
import LogoBar from "../../Components/LogoBar/LogoBar";
import Footer from "../../Components/Footer/Footer";
import TooltippedText from "../../Components/TooltippedText/TooltippedText";

function Tos() {
    return (
        <div className="Tos" id="home">
            <Header>
                <Nav.Link className="nav-texts" href="/">Home</Nav.Link>
                <Nav.Link className="nav-texts" href="https://discord.gg/YpjBAc5">Discord</Nav.Link>
                <Nav.Link className="nav-texts" href="#tos">Terms of Service</Nav.Link>
                <Nav.Link className="nav-texts" href="/privacy">Privacy Policy</Nav.Link>
            </Header>

            <section style={ { paddingTop: 0 } }>
                <LogoBar/>
            </section>

            <section id="tos">
                <InfoSection>
                    <h1>
                        <TooltippedText text="Last updated at 17.01.2023" placement="right" tooltipStyle={{ marginLeft: "1rem" }}>
                            <span>Terms of Service</span>
                        </TooltippedText>
                    </h1>
                    <h4>
                        Our bot is open-source and free. It is published under MIT license,
                        so bot provided "AS IS", no warranties and special responsibilities from us.
                    </h4>
                    <h4>
                        However, as bot is working in Discord's environment you must comply and agree with their
                        {" "}
                        <a href={"https://discord.com/terms"}>Terms of Service</a>
                        {"."}
                    </h4>
                    <InfoSection>
                        <h2>Our hosted instance</h2>
                        <h4>
                            For official hosted instance (
                            <TooltippedText text="571948993643544587">
                                <b>RainbowBOT#2770</b>
                            </TooltippedText>
                            ) you must follow rules below:
                            <ul>
                                <li className='mt-4'>
                                    Do not exploit bot's weaknesses and/or interrupt bot workflow with malicious intent.
                                    If you found bugs or troubles then provide info about them in our
                                    {" "}
                                    <a href="https://github.com/Hatry1337/RainbowBOTJS/issues">github issues</a>
                                    {"."}
                                </li>
                                <li className='mt-4'>
                                    Respect other users, developers team, support and moderators teams.
                                </li>
                                <li className='mt-4'>
                                    Do not disturb bot's users, developers team, support and moderators teams with
                                    meaningless or harmful DMs, mentions, etc.
                                </li>
                                <li className='mt-4'>Be nice!</li>
                            </ul>
                            <u>If you violate any of rules listed above you will be permanently banned from using our bot.</u>
                        </h4>
                    </InfoSection>
                </InfoSection>
            </section>

            <Footer/>
        </div>
    );
}

export default Tos;
