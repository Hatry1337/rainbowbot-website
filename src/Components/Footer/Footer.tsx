import React, { ReactElement } from 'react';
import logo from '../../assets/logo512.png'
import { Col, Container } from 'react-bootstrap';
import { FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa";

interface FooterProps{
    children?: ReactElement | ReactElement[];
}

function Footer(props: FooterProps) {
    let children = props.children;

    if(!Array.isArray(children) && children) {
        children = [children];
    }
    children = children?.map(c => <li className="ms-3"> {c} </li>);

    return (
        <Container className='mt-5'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
                <Col md="4" className="d-flex align-items-center p-2">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={logo} alt="" height={48}/>
                    </a>
                    <span className="text-muted">© 2023 RainbowBOT Inc.</span>
                </Col>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    { children }
                    <li className="ms-3"><a className="text-muted" href="/tos">Terms of Service</a></li>
                    <li className="ms-3"><a className="text-muted" href="/privacy">Privacy Policy</a></li>

                    <li className="ms-3"><a className="text-muted" href="https://discord.gg/YpjBAc5"> <FaDiscord/> </a></li>
                    <li className="ms-3"><a className="text-muted" href="https://github.com/Hatry1337/RainbowBOTJS"> <FaGithub/> </a></li>
                    <li className="ms-3"><a className="text-muted" href="mailto:thomas@irisdev.xyz"> <FaEnvelope/> </a></li>
                </ul>
            </footer>
        </Container>
    );
}

export default Footer;