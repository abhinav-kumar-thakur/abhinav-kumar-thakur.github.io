import {Col, Row} from "react-bootstrap";
import React from "react";
import {GiBullseye} from "react-icons/gi";

export function ListPoint(props) {
    const {point, link, icon} = props;
    console.log(link);

    return (
        <span><GiBullseye/> {point} {link ? <a target="_blank" rel="noopener noreferrer" href={link}> {icon} </a> : null}</span>
    );
}