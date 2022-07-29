import React from 'react';
import {Row, Container, Col, Image} from "react-bootstrap";
import {Title} from "../components/Title";
import {SubTitle} from "../components/SubTitle";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiGooglescholar} from "react-icons/si";

export function Home() {
    const iconSize = 50;

    return (
        <div>
            <hr/>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Container>
                            <Row>
                                <Col>
                                    <Image src="/profile.jpg" fluid roundedCircle/>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <hr/>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abhinav-kumar-thakur/"> <FaLinkedin size={iconSize}/> </a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/abhinav-kumar-thakur/"> <FaGithub size={iconSize}/> </a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://scholar.google.com/citations?user=ksGBoUkAAAAJ&hl=en"> <SiGooglescholar size={iconSize}/> </a>
                                    <hr/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={7}>
                        <Container>
                            <h3>Education</h3>
                        </Container>
                        <Container>
                            <hr/>
                            <Title title="University of Southern California, Los Angeles, California"
                                   comment="Jan 2021-Dec 2022"/>
                            <SubTitle
                                title="MS in Electrical and Computer Engineering - Machine Learning and Data Science"
                                comment="GPA: 3.84/4.0"/>
                            <Row>
                                <Col sm={10}>
                                    <p>
                                        <b>Coursework:</b> Foundations and Applications of Data Mining, Advanced Natural
                                        Language
                                        Processing, Advanced Computer Vision, Mathematical Pattern Recognition (ML-1),
                                        Probability for
                                        Electrical and Computer Engineers, Linear Algebra for Engineering
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                        <hr/>
                        <Container>
                            <Title title="R V College of Engineering, Bengaluru, India" comment="Aug 2012-May 2016"/>
                            <SubTitle title="Bachelor of Engineering in Electronics and Communication Engineering"
                                      comment=" GPA: 8.74/10.0"/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}