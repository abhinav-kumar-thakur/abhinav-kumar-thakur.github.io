import {Col, Row} from "react-bootstrap";
import React from "react";
import {GiBullseye} from "react-icons/gi";

export function ListPoint(props) {
    const {point, link, icon} = props;
    console.log(link);

    return (
        <Row>
            <Col sm={10}>
                <GiBullseye/> {point} {link ? <a target="_blank" rel="noopener noreferrer" href={link}> {icon} </a> : null}
            </Col>
        </Row>
    );
}