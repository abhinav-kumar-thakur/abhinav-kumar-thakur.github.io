import React from "react";
import {Col, Row} from "react-bootstrap";

export function SubTitle(props) {
    const {title, comment} = props;

    return (
        <Row>
            <Col sm={8}>
                <h6>{title}</h6>
            </Col>
            <Col sm={4}>
                <h6>{comment}</h6>
            </Col>
        </Row>
    );
}