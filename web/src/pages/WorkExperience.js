import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Title } from "../components/Title";
import { ListPoint } from "../components/ListPoint";
import { SubTitle } from '../components/SubTitle';
import { FaGithub } from "react-icons/fa";

export function WorkExperience() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="edos">
            <hr />
            <Container>
                <h3>Work Experience</h3>
            </Container>
            <hr />
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="edos">
                                NLP Researcher <br />
                                (Pet Project) <br />
                                Dec 2022-Jan 2023 <br />
                            </Nav.Link>
                        </Nav.Item>
                        <hr />
                        <Nav.Item>
                            <Nav.Link eventKey="usc-isi">
                                Student Worker (AI/ML) <br />
                                Information Sciences Institute, USC <br />
                                June 2021-Dec 2022 <br />
                            </Nav.Link>
                        </Nav.Item>
                        <hr />
                        <Nav.Item>
                            <Nav.Link eventKey="usc-hal">
                                Directed Research Student <br />
                                Hardware Accelerated Learning Lab, USC <br />
                                Jan 2022-Dec 2022 <br />
                            </Nav.Link>
                        </Nav.Item>
                        <hr />
                        <Nav.Item>
                            <Nav.Link eventKey="thoughtworks">
                                Software Developer <br />
                                Thoughtworks Technologies India Pvt Ltd <br />
                                May 2016-Dec 2020 <br />
                            </Nav.Link>
                        </Nav.Item>
                        <hr />
                        <Nav.Item>
                            <Nav.Link eventKey="thoughtworks-intern">
                                Software Developer (Intern)<br />
                                Thoughtworks Technologies India Pvt Ltd <br />
                                May 2016-Dec 2020 <br />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <hr />
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="edos" >
                            <Container>
                                <Row>
                                    <Title title="Explainable Detection of Online Sexism, Individual NLP Researcher" comment="Dec 2022-Jan 2023" />
                                    <ListPoint point="Implemented classification pipeline on BERT/T5 models for K-fold CV, Semi-supervised learning, and ensemble methods." />
                                    <ListPoint point="Finetuned BERTweet over numbers of frozen layers, LR-scheduler & optimizers, improving detection macro F1 to 84.78%." />
                                    <ListPoint point="Skills: Pytorch, BERT finetuning, Semisupervised Learning, Ensemble methods" />
                                    <ListPoint
                                        point="Github Repo"
                                        link="https://github.com/abhinav-kumar-thakur/edos"
                                        icon={<FaGithub />}
                                    />
                                </Row>
                            </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="usc-isi" >
                            <Container>
                                <Row>
                                    <Title title="Center on Knowledge Graphs, Information Sciences Institute, USC [Student Researcher]" comment="June 2021-Present" />
                                    <ListPoint point="Implemented  Knowledge Graph Completion pipeline consisting of Wikipedia Document Retrieval and zero-shot fact validation stage. Created ground truth evaluation set for spouse fact verification, obtained an F1 score of 0.879 with a precision score of 0.957." />
                                    <ListPoint point="Improved tabular representation using contrastive learning over Graph-NN, obtained Table retrieval Mean Average Precision of 0.649 over WikiTables and 0.739 over Webquerry datasets." />
                                    <ListPoint
                                        point="Developed Python package to transfer tabular block annotation between structurally similar sheets using integer linear programming (Python-MIP) to fit constraints generated from source sheet block coordinates on the target sheet."
                                        link="https://github.com/usc-isi-i2/t2wml/tree/master/backend/copy_annotations"
                                        icon={<FaGithub />}
                                    />
                                </Row>
                            </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="usc-hal">
                            <Row>
                                <Title title="Relation Extraction from Financial Documents (Directed Research)" comment="Jan 2022-Present" />
                                <ListPoint point="Obtained a baseline F1 score of 59.36% using the SOTA SPERT model on the hand-labeled dataset (800+ samples). Implemented semi- supervised learning pipeline in Pytorch using high confidence predictions improving the evaluation F1 score to 64.47%." />
                                <ListPoint
                                    point="Created open-sourced web tool for Named Entity and Relation labeling (to be used in active learning setup) based on Docker, MongoDB, Flask, and ReactJS"
                                    link="https://github.com/abhinav-kumar-thakur/learning_e2e"
                                    icon={<FaGithub />}
                                />
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="thoughtworks">
                            <Row>
                                <Title title="Thoughtworks Technologies (India) Pvt Ltd, Bengaluru [Software Developer Engineer]" comment=" May 2016-Dec 2020" />
                                <ListPoint point="Collaborated with a team of 40+ members on developing a price recommendation and forecasting solution for one of the most prominent consultancy firms. It helped an annual increase in the sales of one of the biggest fashion retailers in the US by 7.48%." />
                                <ListPoint point="Implemented Spark ETL pipeline for weekly data-load with the recommendation, forecasting, aggregation, and summarization stages." />
                                <ListPoint point="Enabled end-users to perform real-time price edits and data visualizations through golang micro-services and React-based Web-UI." />
                                <ListPoint point="Led successful application deployments in the production environment on AWS, resolving various technical and data migration issues." />
                                <ListPoint point="Tuned spark cluster by simulating production like price-edits using Locust and decreased the computation time by 25-30%." />
                                <ListPoint point="Containerized Jenkins server and slaves using docker in order to support deployment across different cloud service providers." />
                                <ListPoint point="Led the team of 5 developers to design and develop the Alexa-enabled Stock-market Robo-advisor app for the machine learning model." />
                                <ListPoint point="Designed and implemented application features such as centralized application configuration management, policy-based functional and data access control, and GoCD continuous delivery pipeline." />
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="thoughtworks-intern">
                            <Row>
                                <Title title="Thoughtworks Technologies (India) Pvt Ltd, Bengaluru [Intern]" comment="Jan 2016-May 2016" />
                                <a target="_blank" rel="noopener noreferrer" href="https://www.ijert.org/research/aspect-based-sentiment-summarization-with-deep-neural-networks-IJERTV5IS050553.pdf">Publication: Aspect-based Sentiment Summarization with Deep Neural Networks (IJERT)</a>
                                <ListPoint point="Developed a restaurant recommendation system based on Aspect Based Sentiment Analysis using a deep neural network." />
                                <ListPoint point="Used gensim word2vec for embedding generation, fed to CNN for sentiment classification, and RNN for aspect extraction using IOB tagging. Handled multiple entity-sentiment pairs within a sentence using the Stanford CoreNLP parser library." />
                                <ListPoint point="Evaluated on SemEval-2014 subtasks, obtained an F1 score of 0.854 for Aspect category detection and accuracy of  0.761 for Aspect category polarity." />
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}