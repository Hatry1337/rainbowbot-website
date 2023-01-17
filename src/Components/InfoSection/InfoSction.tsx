import React, { ReactElement } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

interface InfoSectionProps{
    icon?: string;
    children?: ReactElement | ReactElement[];
}

function InfoSection(props: InfoSectionProps) {
    let icon;
	if(props.icon) {
        icon =
        <Col xl="4">
            <img src={props.icon} width={"100%"} alt="" draggable="false"/>
        </Col>
    }
    return (
        <Container className='pt-2 pb-2 pl-2 pe-2'>
            <Row>
                { icon }
                <Col xl={ icon ? "8" : "12" } className="d-flex align-items-center justify-content-center">
                    <div>
                        {props.children}
                    </div>
                </Col>
            </Row>
        </Container>
	);
}

export default InfoSection;