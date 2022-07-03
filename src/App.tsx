import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import logo_glow from "./assets/logo_glow.png";
import { Button, Container, Nav } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<Header>
				<Nav.Link className="nav-texts" href="#home">Home</Nav.Link>
				<Nav.Link className="nav-texts" href="#link">Link</Nav.Link>
				<Nav.Link className="nav-texts" href="#home">Home</Nav.Link>
				<Nav.Link className="nav-texts" href="#link">Link</Nav.Link>
				<Nav.Link className="nav-texts" href="#home">Home</Nav.Link>
				<Nav.Link className="nav-texts" href="#link">Link</Nav.Link>
			</Header>
			<section style={{ backgroundColor: "#623FFF" }}>
				<img src={logo_glow} className="big-logo" alt="logo" draggable="false"/>
				<h1 className="big-text">Imagine a BOT...</h1>
			</section>
			
			
			<section style={{ height: "160rem" }}>
				<Container className='pt-2 pb-2 pl-2 pe-2'>
					<Button className='me-2' variant='primary'>Suck Dick</Button>
					<Button className='me-2' variant='secondary'>Lick Balls</Button>
					<Button className='me-2' variant='success'>Lick Balls</Button>
					<Button className='me-2' variant='danger'>Lick Balls</Button>
					<Button className='me-2' variant='warning'>Lick Balls</Button>
					<Button className='me-2' variant='info'>Lick Balls</Button>
					<Button className='me-2' variant='light'>Lick Balls</Button>
					<Button className='me-2' variant='dark'>Lick Balls</Button>

					<br></br>
					<br></br>

					<Button className='me-2' variant='outline-primary'>Suck Dick</Button>
					<Button className='me-2' variant='outline-secondary'>Lick Balls</Button>
					<Button className='me-2' variant='outline-success'>Lick Balls</Button>
					<Button className='me-2' variant='outline-danger'>Lick Balls</Button>
					<Button className='me-2' variant='outline-warning'>Lick Balls</Button>
					<Button className='me-2' variant='outline-info'>Lick Balls</Button>
					<Button className='me-2' variant='outline-light'>Lick Balls</Button>
					<Button className='me-2' variant='outline-dark'>Lick Balls</Button>
				</Container>
			</section>
		</div>
	);
}

export default App;
