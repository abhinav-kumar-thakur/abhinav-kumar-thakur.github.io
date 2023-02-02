import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Title } from "../components/Title";
import { ListPoint } from "../components/ListPoint";
import { FaGithub } from "react-icons/fa";
import { SubTitle } from "../components/SubTitle";

export function Education() {
    return (
        <Container>
            <hr />
            <Container>
                <h3>Education</h3>
            </Container>
            <hr />
            <Container>
                <Title title="University of Southern California, Los Angeles, California"
                    comment="Jan 2021-Dec 2022" />
                <SubTitle
                    title="MS in Electrical and Computer Engineering - Machine Learning and Data Science"
                    comment="GPA: 3.85/4.0" />
                <Row>
                    <Col sm={10}>
                        <p>
                            <b>Coursework:</b> Advanced Natural Language Processing, Advanced Computer Vision, Mathematical Pattern Recognition (ML-1), Foundations and Applications of Data Mining, Computing Principles for Electrical Engineers (C++ / Data structures and Algorithms), Probability for Electrical and Computer Engineers, Linear Algebra for Engineering
                        </p>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Title title="R V College of Engineering, Bengaluru, India" comment="Aug 2012-May 2016" />
                <SubTitle title="Bachelor of Engineering in Electronics and Communication Engineering"
                    comment=" GPA: 8.74/10.0" />
            </Container>
        </Container>
    );
}