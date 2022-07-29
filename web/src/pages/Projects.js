import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Title} from "../components/Title";
import {ListPoint} from "../components/ListPoint";
import {FaGithub} from "react-icons/fa";

export function Projects() {
    return (
        <div>
            <hr/>
                <Container>
                    <h3>Projects</h3>
                </Container>
            <hr/>
            <Container>
                <Row>
                    <Title title="Relation Extraction from Financial Documents (Directed Research)"  comment="Jan 2022-Present" />
                    <ListPoint point="Obtained a baseline F1 score of 59.36% using the SOTA SPERT model on the hand-labeled dataset (800+ samples). Implemented semi- supervised learning pipeline in Pytorch using high confidence predictions improving the evaluation F1 score to 64.47%." />
                    <ListPoint
                        point="Created open-sourced web tool for Named Entity and Relation labeling (to be used in active learning setup) based on Docker, MongoDB, Flask, and ReactJS"
                        link="https://github.com/abhinav-kumar-thakur/learning_e2e"
                        icon={<FaGithub />}
                    />
                </Row>
                <hr/>
                <Row>
                    <Title title="Potential Relation and Global Correspondence (PRGC) based Joint Relational Triple Extraction"  comment="Aug 2021-Dec 2021" />
                    <ListPoint
                        point="Implemented 3-stage model (Potential relation detection, Relation specific entity extraction, and Subject-Object alignment using global correspondence) using Pytorch (referring PRGC paper)  and obtained F1 score of 85% on the WebNLG dataset."
                        link="https://github.com/abhinav-kumar-thakur/csci662-project"
                        icon={<FaGithub />}
                    />
                    <ListPoint point="Used Bert-base-uncased pre-trained model for encoding text and generated embeddings from scratch for encoding 216 relations." />
                    <ListPoint point="Performed computational analysis to calculate the number of parameters and total FLOPs using ptflops package." />
                </Row>
            </Container>
        </div>
    );
}