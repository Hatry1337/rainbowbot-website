import React from 'react';

import { Nav } from 'react-bootstrap';

import Header from '../../Components/Header/Header';
import InfoSection from '../../Components/InfoSection/InfoSction';
import LogoBar from "../../Components/LogoBar/LogoBar";
import Footer from "../../Components/Footer/Footer";
import TooltippedText from "../../Components/TooltippedText/TooltippedText";

function Privacy() {
    return (
        <div className="Privacy" id="home">
            <Header>
                <Nav.Link className="nav-texts" href="/">Home</Nav.Link>
                <Nav.Link className="nav-texts" href="https://discord.gg/YpjBAc5">Discord</Nav.Link>
                <Nav.Link className="nav-texts" href="/tos">Terms of Service</Nav.Link>
                <Nav.Link className="nav-texts" href="#privacy">Privacy Policy</Nav.Link>
            </Header>

            <section style={ { paddingTop: 0 } }>
                <LogoBar/>
            </section>

            <section id="privacy">
                <InfoSection>
                    <h1>
                        <TooltippedText text="Last updated at 17.01.2023" placement="right" tooltipStyle={{ marginLeft: "1rem" }}>
                            <span>Privacy Policy</span>
                        </TooltippedText>
                    </h1>

                    <InfoSection>
                        <h2>What data do we store?</h2>
                        <h4>
                            <ul>
                                <li className='mt-4'>
                                    <b>User info</b>
                                    <ul>
                                        <li className='mt-4'>
                                            User IDs for user profile identification
                                        </li>
                                        <li className='mt-4'>
                                            User profile: Tag, avatar url, banner url, language, registration date
                                        </li>
                                    </ul>
                                </li>
                                <li className='mt-4'>
                                    <b>Guild info</b>
                                    <ul>
                                        <li className='mt-4'>
                                            Guild IDs for guild profile identification
                                        </li>
                                        <li className='mt-4'>
                                            Guild profile: Name, Owner, icon url, banner url, language
                                        </li>
                                        <li className='mt-4'>
                                            <b>VoiceStats Module</b>
                                            <ul>
                                                <li className='mt-4'>
                                                    Time spend by guild members in voice channels
                                                </li>
                                                <li className='mt-4'>
                                                    Channels' names and IDs
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='mt-4'>
                                            <b>RoleManager Module</b>
                                            <ul>
                                                <li className='mt-4'>
                                                    Configured roles names and IDs
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className='mt-4'>
                                    <b>Logs</b>
                                    <ul>
                                        <li className='mt-4'>
                                            In verbose mode logs can contain events and structures dumps
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </h4>

                        <br/><br/>

                        <h2>Dataflow</h2>
                        <h4>
                            All your data is stored on our platform and never escapes it.
                            Your data is never sent to 3rd parties or sold.
                        </h4>

                        <br/><br/>

                        <h2>How do we use your data?</h2>
                        <h4>
                            First of all necessary data used to provide you our service (some bot commands can't work
                            at all without some kind of data). Log dumps are very helpful for debugging and that's only
                            reason why we logging this data. Also we collecting usage statistics to know what features
                            you like the most.
                        </h4>
                    </InfoSection>
                </InfoSection>
            </section>

            <Footer/>
        </div>
    );
}

export default Privacy;
