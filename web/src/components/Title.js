import React from "react";
import {Col, Row} from "react-bootstrap";

export function Title(props) {
    const {title, comment} = props;

    return (
        <Row>
            <Col sm={8}>
                <h5>{title}</h5>
            </Col>
            <Col sm={4}>
                <h5> {comment} </h5>
            </Col>
        </Row>
    );
}