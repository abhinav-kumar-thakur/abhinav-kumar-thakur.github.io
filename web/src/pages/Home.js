import React from 'react';
import { Row, Container, Col, Image } from "react-bootstrap";
import { Title } from "../components/Title";
import { Publication } from "../components/Publication";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export function Home() {
    const iconSize = 50;

    return (
        <div>
            <hr />
            <Container>
                <Row>
                    <Col sm={3}>
                        <h3> Abhinav Kumar Thakur </h3>
                        <hr />
                        <Container>
                            <Row>
                                <Col>
                                    <Image src="/profile.jpg" fluid roundedCircle />
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <hr />
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abhinav-kumar-thakur/"> <FaLinkedin size={iconSize} /> </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/abhinav-kumar-thakur/"> <FaGithub size={iconSize} /> </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://scholar.google.com/citations?user=ksGBoUkAAAAJ&hl=en"> <SiGooglescholar size={iconSize} /> </a>
                                    <hr />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={7}>
                        <Container>
                            <Row>
                                <Title title="About Me" />
                                <p>
                                    With a Master of Science in Electrical Engineering from the esteemed University of Southern California, 
                                    I bring specialized knowledge in the cutting-edge fields of Machine Learning and Data Science to the table. 
                                    My five years of industry experience in software development have honed my skills and given me a comprehensive understanding of the software development life cycle. I am eager to apply my expertise and make a significant impact as a Software Development professional,
                                     particularly in the exciting fields of Machine Learning and Data Engineering. I am now seeking a full-time opportunity to continue my growth and contribute to the success of a reputable organization.
                                </p>
                            </Row>
                            <hr />
                            <Row>
                                <Title title="Skills" />
                                <p><b>Programming Languages & Tools:</b> Python, C++, Golang, Scala, JavaScript<br/>
                                <b>Tools:</b> Git, Make, Splunk, New Relic, Postman<br/>
                                <b>Frameworks:</b> Spark, Pytorch, Flask, ReactJS, Django, Matlab, Docker, Pytest, Cypress, Locust, GoCD, PostgreSQL, MongoDB <br/>
                                <b>Domain Experience:</b> Machine Learning, Natural Language Processing, Data Mining, Pricing, Knowledge Graphs, ETL, CI/CD <br/>
                                </p>
                            </Row>
                            <hr />
                            <Row>
                                <Title title="Publications" />
                                <Publication 
                                    title="Multimodal and Explainable Internet Meme Classification"
                                    authors="Abhinav Kumar Thakur, Filip Ilievski, Hông-Ân Sandlin, Alain Mermoud, Zhivar Sourati, Luca Luceri, Riccardo Tommasini"
                                    conference="AAAI-23 Artifical Intelligence for Social Good workshop"
                                    year="2023"
                                    link="https://arxiv.org/abs/2212.05612"
                                />
                                <Publication
                                    title="Aspect-based sentiment summarization with deep neural networks"
                                    authors="D Dhanush, Abhinav Kumar Thakur, Narasimha Prasad Diwakar"
                                    conference="Internation Journal of Engineering Research & Technology (IJERT) Vol. 05, Issue 05 (May 2016)"
                                    year="2023"
                                    link="https://www.ijert.org/aspect-based-sentiment-summarization-with-deep-neural-networks"
                                />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}