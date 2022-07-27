import React from 'react';
import {Row, Container, Col} from "react-bootstrap";
import {Title} from "../components/Title";
import {SubTitle} from "../components/SubTitle";

export function Home() {
    return (
        <div>
            <Container>
                <h3>Education</h3>
            </Container>
            <Container>
                <Title title="University of Southern California, Los Angeles, California"  comment="Jan 2021-Dec 2022" />
                <SubTitle title="MS in Electrical and Computer Engineering - Machine Learning and Data Science" comment="GPA: 3.84/4.0" />
                <Row>
                    <Col sm={10}>
                        <p>
                            <b>Coursework:</b> Foundations and Applications of Data Mining, Advanced Natural Language
                            Processing, Advanced Computer Vision, Mathematical Pattern Recognition (ML-1), Probability for
                            Electrical and Computer Engineers, Linear Algebra for Engineering
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}