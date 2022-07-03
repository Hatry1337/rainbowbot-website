import React, { ReactElement } from 'react';
import '../../App.css';

import { Container, Row, Col } from 'react-bootstrap';

interface InfoSectionProps{
    icon: string;
    children?: ReactElement | ReactElement[];
}

function InfoSection(props: InfoSectionProps) {
	return (
        <Container className='pt-2 pb-2 pl-2 pe-2'>
            <Row>
                <Col xl="4">
                    <img src={props.icon} width={"100%"} alt="" draggable="false"/>
                </Col>
                <Col xl="8" className="d-flex align-items-center justify-content-center">
                    <div>
                        {props.children}
                    </div>
                </Col>
            </Row>
        </Container>
	);
}

export default InfoSection;