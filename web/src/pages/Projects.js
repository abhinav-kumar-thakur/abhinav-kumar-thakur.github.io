import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Title} from "../components/Title";

export function Projects() {
    return (
        <div>
            <Container>
                <h3>Projects</h3>
            </Container>
            <Container>
                <Title title="Relation Extraction from Financial Documents (Directed Research)"  comment="Jan 2022-Present" />
                <Row>
                    <Col sm={10}>
                        <ul>
                            <li>
                                <p>
                                    Obtained a baseline F1 score of 59.36% using the SOTA SPERT model on the hand-labeled dataset (800+ samples). Implemented semi- supervised learning pipeline in Pytorch using high confidence predictions improving the evaluation F1 score to 64.47%.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Created open-sourced web tool for Named Entity and Relation labeling (to be used in active learning setup) based on Docker, MongoDB, Flask, and ReactJS (<a href="https://github.com/abhinav-kumar-thakur/learning_e2e"> Github </a>).
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Title title="Potential Relation and Global Correspondence (PRGC) based Joint Relational Triple Extraction"  comment="Aug 2021-Dec 2021" />
                <Row>
                    <Col sm={10}>
                        <ul>
                            <li>
                                <p>
                                    Implemented <a href={"https://github.com/abhinav-kumar-thakur/csci662-project"}>(CSCI662-project)</a> 3-stage model (Potential relation detection, Relation specific entity extraction, and Subject-Object alignment using global correspondence) using Pytorch (referring <a href={"https://aclanthology.org/2021.acl-long.486/"}>PRGC paper</a>)  and obtained F1 score of 85% on the WebNLG dataset.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Used Bert-base-uncased pre-trained model for encoding text and generated embeddings from scratch for encoding 216 relations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Performed computational analysis to calculate the number of parameters and total FLOPs using ptflops package.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}