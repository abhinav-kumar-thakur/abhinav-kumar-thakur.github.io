import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Title } from "../components/Title";
import { ListPoint } from "../components/ListPoint";
import { FaGithub } from "react-icons/fa";
import { SubTitle } from "../components/SubTitle";
import { Publication } from "../components/Publication";

export function WorkExperience() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="usc-hal">
            <hr />
            <Container>
                <h3>Work Experience</h3>
            </Container>
            <hr />
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="cgg">
                                Seismic Imaging Analyst <br />
                                CGG, US <br />
                                May 2023-Present <br />
                            </Nav.Link>
                        </Nav.Item>
                        <hr />
                        <Nav.Item>
                            <Nav.Link eventKey="usc-hal-opt">
                                Machine Learning Researcher <br />
                                Hardware Accelerated Learning Lab, USC <br />
                                Feb 2023-May 2023 <br />
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
                <Col sm={8}>
                    <Tab.Content>

                        <Tab.Pane eventKey="cgg">
                            <Title title="Seismic Imaging Analyst, CGG [Full Time]" comment="May 2023-Present" />
                            <hr />
                            <Row>
                                <ListPoint point="Seismic Data Processing, Noise Attenuation, Seismic Imaging and Signal Processing." />
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="usc-hal-opt">
                            <Title title="Machine Learning Researcher, USC [OPT]" comment="Feb 2023-Present" />
                            <hr />
                            <Row>
                                <Title title="Training Convolutional Neural Networks using LNS" comment="Feb 2023-Present" />
                                <ListPoint point="Ongoing research to improve performance metrics for LNS based low precision DNN." />
                            </Row>
                        </Tab.Pane>


                        <Tab.Pane eventKey="usc-hal">
                            <Title title="NLP Researcher, USC [Directed Research]" comment="Jan 2022-Dec 2022" />
                            <hr />
                            <Row>
                                <SubTitle title="Named Entity and Relation Extraction Labeling tool"/>
                                <ListPoint
                                    point="Created open-sourced web tool for Named Entity and Relation labeling based on Docker, MongoDB, Flask, and ReactJS"
                                    link="https://github.com/abhinav-kumar-thakur/learning_e2e"
                                    icon={<FaGithub />}
                                />
                                <ListPoint point="Supervised volunteer contributors in order to develop and test new features." />
                                <ListPoint point="The tool empowers you to upload your raw or predicted data, which can be expertly labeled and analyzed by domain specialists. This enables the creation of new datasets, correction of labels, and efficient utilization of labeling resources through active learning." />
                            </Row>
                            <hr />
                            <Row>
                                <SubTitle title="Financial Relation Extraction Dataset Creation" />
                                <ListPoint point="Our objective is to perform a comprehensive relation extraction from SEC 10K documents to extract crucial information. To achieve this, we have meticulously devised 14 entities and 16 relationships, and subjected them to repeated annotation cycles to enforce strict guidelines and enhance inter-annotator agreement. Upon publication of our research, the resultant dataset and its accompanying performance metrics will be made publicly available." />
                                
                            </Row>
                            <hr />
                            <Row>
                                <SubTitle title="Semi-Supervised Learning (SSL) and Active Learning (ACL) for Relation Extraction" />
                                <ListPoint point="Conducted a study on SSL and ACL approaches for relation extraction and analyzed the results. Experimented with various prediction confidence metrics for SSL/ACL and evaluated their correlation with model accuracy and prediction uncertainties." />
                                <ListPoint point="Achieved a baseline F1 score of 59.36% utilizing the state-of-the-art SPERT model on a hand-labeled dataset of over 800 samples. Enhanced performance through the implementation of a semi-supervised learning pipeline in PyTorch using high confidence predictions, resulting in an improved evaluation F1 score of 64.47%." />
                            </Row>
                        </Tab.Pane>

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
                                <Title title="Information Sciences Institute, USC [Student Researcher]" comment="June 2021-Dec 2022" />
                                <hr />
                                <Row>
                                    <SubTitle title="Meme Understanding: Multimodal and Explainable Internet Meme Classification" comment="Aug 2022-Dec 2022" />
                                    <Publication
                                        title="Multimodal and Explainable Internet Meme Classification"
                                        authors="Abhinav Kumar Thakur, Filip Ilievski, Hông-Ân Sandlin, Alain Mermoud, Zhivar Sourati, Luca Luceri, Riccardo Tommasini"
                                        conference="AAAI-23 Artifical Intelligence for Social Good workshop"
                                        year="2023"
                                        link="https://arxiv.org/abs/2212.05612"
                                    />
                                    <ListPoint point="Developed example & prototype-based explanations for abusive meme detection and classification using a visualization tool." />
                                    <ListPoint point="Work accepted @ AAAI-23 AI for Social Good workshop: Multimodal and Explainable Internet Meme Classification." />
                                    <ListPoint point="Skills: Python, Pytorch, SKlearn, ReactJS, Flask, Docker, Nginx, Multi-modal Learning, Image (meme) search." />
                                    <ListPoint
                                        point="Github Repo"
                                        link="https://github.com/usc-isi-i2/meme-understanding"
                                        icon={<FaGithub />}
                                    />
                                </Row>
                                <hr />
                                <Row>
                                    <SubTitle title="Knowledge Graph (KG) Completion with Fact Validation" comment="June 2022-July 2022" />
                                    <ListPoint point="Implemented  Wikidata KG Completion pipeline consisting of Wikipedia Document Retrieval and the fact validation stages." />
                                    <ListPoint point="Finetuned unifiedQA using distant supervision over various data selection strategies, improving evaluation F1 score to 0.945." />
                                    <ListPoint point="Skills: Python, Pytorch, Document retrieval, Fact Verification, KGTK, Graph Database" />
                                    <ListPoint
                                        point="Github Repo"
                                        link="https://github.com/usc-isi-i2/wikidata-fact-verification"
                                        icon={<FaGithub />}
                                    />
                                </Row>
                                <hr />
                                <Row>
                                    <SubTitle title="Table Understanding" comment="June 2021-May 2022" />
                                    <ListPoint point="Analyzed information preserving tabular augmentation on embedding generation; used contrastive learning for stabilization." />
                                    <ListPoint point="Skills: Python, Pytorch, Matplotlib, Table Understanding, Contrastive Learning" />
                                    <ListPoint
                                        point="Developed a package to transfer tabular annotation between structurally similar tables using integer linear programming."
                                        link="https://github.com/usc-isi-i2/t2wml/tree/master/backend/copy_annotations"
                                        icon={<FaGithub />}
                                    />
                                </Row>
                            </Container>
                        </Tab.Pane>

                        <Tab.Pane eventKey="thoughtworks">
                            <Title title="Thoughtworks Technologies (India) Pvt Ltd, Bengaluru [Software Developer Engineer]" comment=" May 2016-Dec 2020" />
                            <hr />
                            <Row>
                                <SubTitle title="Price Advisor II" />
                                <ListPoint point="Tuned Spark cluster by simulating production like price-edits load using Locust, decreased computation time by 25-30%." />
                                <ListPoint point="Containerized microservices & Jenkins using docker to support deployment on different cloud service providers." />
                                <ListPoint point="Developed Jenkins pipeline to automate UI-based application (business) config management setup and synchronization." />
                                <ListPoint point="Developed New Relic-based instrumentation for SPARK and services for real-time application performance and load tracking." />
                                <ListPoint point="Improved end-to-end test coverage by adding Pytest-based integration tests and Cypress-based functional tests." />
                                <ListPoint point="Skills: Spark, ETL, Docker, Jenkins, Python, Scala, Docker, Golang, GoCD, Locust, Test Automation, Cypress, Pytest, TDD." />
                            </Row>
                            <hr />
                            <Row>
                                <SubTitle title="Price Advisor I" />
                                <ListPoint point="Led application deployments in the production environment on AWS, resolving various technical and data migration issues." />
                                <ListPoint point="Implemented ETL pipeline for weekly dataload for the recommendation, forecasting, aggregation, and summarization stages." />
                                <ListPoint point="Developed golang microservices and ReactJS Web-UI features enabling real-time price edits and data visualizations." />
                                <ListPoint point="Implemented policy-based functional and data access control on web-facing Golang service, restricting unauthorized edits." />
                                <ListPoint point="Deployed GoCD Master and agents using AWS cloud formation and maintained continuous delivery and integration pipelines." />
                                <ListPoint point="Skills: Golang, Scala, Python, Spark, PostgreSQL, Docker, ETL, ReactJS, GoCD, Access Control, AWS, Agile Methodologies" />
                            </Row>
                            <hr />
                            <Row>
                                <SubTitle title="POC - Stock Market Robo Advisor" />
                                <ListPoint point="Led 5 developers team to design and develop the Alexa-enabled Stock-market Robo-advisor app for the in-house ML model." />
                                <ListPoint point="Created cron-job-based ETL in Python to fetch and summarize daily stock market data; with the web-based user interface." />
                                <ListPoint point="Skills: Python, Django, ReactJS, Docker, Docker Compose, PostgreSQL, Information Retrieval" />
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="thoughtworks-intern">
                            <Row>
                                <Title title="Thoughtworks Technologies (India) Pvt Ltd, Bengaluru [Intern]" comment="Jan 2016-May 2016" />
                                <Publication
                                    title="Aspect-based sentiment summarization with deep neural networks"
                                    authors="D Dhanush, Abhinav Kumar Thakur, Narasimha Prasad Diwakar"
                                    conference="Internation Journal of Engineering Research & Technology (IJERT) Vol. 05, Issue 05 (May 2016)"
                                    year="2023"
                                    link="https://www.ijert.org/aspect-based-sentiment-summarization-with-deep-neural-networks"
                                />
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

