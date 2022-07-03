import React, {  } from 'react';
import './App.css';
import Header from './Components/Header/Header';

import logo from "./assets/logo512.png";
import logo_glow from "./assets/logo_glow.png";
import logo_v3 from "./assets/rbot-v3.svg";
import plug_icon from "./assets/cpu-plug-em.svg";
import new_icon from "./assets/new-em.svg";
import discord_icon from "./assets/discord-topgg-em.svg";

import { Col, Nav, Row, Container } from 'react-bootstrap';
import { FaDiscord, FaEnvelope, FaGithub } from 'react-icons/fa';

import InfoSection from './Components/InfoSection/InfoSction';

function App() {
	return (
		<div className="App" id="home" style={{ height: "160rem" }}>
			<Header>
				<Nav.Link className="nav-texts" href="#home">Home</Nav.Link>
				<Nav.Link className="nav-texts" href="#v3">v3</Nav.Link>
				<Nav.Link className="nav-texts" href="#synergy">Synergy</Nav.Link>
				<Nav.Link className="nav-texts" href="#whnew">What's new?</Nav.Link>
				<Nav.Link className="nav-texts" href="#discord">Discord</Nav.Link>
				<Nav.Link className="nav-texts" href="https://boost.rainbowbot.xyz">HourBoost</Nav.Link>
			</Header>
			<section style={{ paddingTop: 0, backgroundColor: "#623FFF" }}>
				<div>
					<img src={logo_glow} className="big-logo" alt="logo" draggable="false"/>
					<h1 className="big-text">Imagine a BOT...</h1>
				</div>
			</section>
			
			<section id="v3">
				<InfoSection icon={logo_v3}>
					<h1>RainbowBOT v3 is finally here!</h1>
					<h4>Slash Commands, Message Components, Upgraded Modules, Open Source BOT-Core and much much More!</h4>
				</InfoSection>
			</section>

			<section id="synergy">
				<InfoSection icon={plug_icon}>
					<h1>Synergy3 - Open Source BOT Framework</h1>
					<h4>Synergy3 is self developed framework for discord bots. It makes development much easier, faster and saves all flexibility of Discord.js library. GitHub page: <a href='https://github.com/Hatry1337/Synergy3'>*click*</a></h4>
				</InfoSection>
			</section>

			<section id="whnew">
				<InfoSection icon={new_icon}>
					<h1>So. What's new?</h1>
					<h4>First of all we just rewrited all the code from scratch. Yes, that's why this release was in development like 2 years. But it's not bad at all, during this time we learn many things and now can present this nicely developed product.</h4>
					<h4>And now let's dive into the newest features:</h4>
					<h4>
						<ul>
							<li className='mt-4'>Slash Commands - Now BOT make all interactions with user through Slash Commands, Interactive Buttons, Context Menus. Feel the ease with every pressed key.</li>
							<li className='mt-4'>Image Processing - Create quotes of messages, Make Demotivators, Draw ASCII Arts with 2 clicks of your mouse. Just click RMB on any message.</li>
							<li className='mt-4'>Powerful Math Utilities - Make almost any mathematical calculations using <b>/math</b> command. You can use LaTeX expressions, Draw functions' graphs, Convert numbers to different bases and much more!</li>
							<li className='mt-4'>.OBJ Rendering - Render .obj models straight from the BOT! We utilize our self developed 3D Engine <b>IgniRender</b> written on pure TypeScript.</li>
							<li className='mt-4'>Voice Stats - Track your server's voice activity. See how much time your members spend in voice channels and what channels are most popular!</li>
							<li className='mt-4'>Roles Management - Select join auto roles or manual selection using <b>/role</b> command.</li>
							<li className='mt-4'>Tic Tac Toe - Yes! Tic Tac Toe! You can play with your friends or with AI. OR EVEN MAKE AI PLAY VS AI!!</li>
						</ul>
					</h4>
				</InfoSection>
			</section>

			<section id="discord">
				<InfoSection icon={discord_icon}>
					<h1>Our Discord server and top.gg page</h1>
					<Col lg="6" className='m-auto mt-5'>
						<Row>
							<a href="https://top.gg/bot/571948993643544587">
								<img alt="" src="https://top.gg/api/widget/571948993643544587.svg"></img>
							</a>
						</Row>
						<Row className="mt-3">
							<iframe title="discord-server" src="https://canary.discord.com/widget?id=612220949206532106&theme=dark" width="350" height="500" allowTransparency={ true } frameBorder={ 0 } sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
						</Row>
					</Col>
				</InfoSection>
			</section>

			<Container className='mt-5'>
				<footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
					<Col md="4" className="d-flex align-items-center p-2">
						<a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
							<img src={logo} alt="" height={48}/>
						</a>
						<span className="text-muted">© 2022 RainbowBOT Inc.</span>
					</Col>

					<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
						<li className="ms-3"><a className="text-muted" href="https://discord.gg/YpjBAc5"> <FaDiscord/> </a></li>
						<li className="ms-3"><a className="text-muted" href="https://github.com/Hatry1337/Synergy3"> <FaGithub/> </a></li>
						<li className="ms-3"><a className="text-muted" href="mailto:thomas@rainbowbot.xyz"> <FaEnvelope/> </a></li>
					</ul>
				</footer>
			</Container>
		</div>
	);
}

export default App;
