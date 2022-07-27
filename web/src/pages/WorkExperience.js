import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Title} from "../components/Title";

export function WorkExperience() {
    return (
        <div>
            <Container>
                <h3>Work Experience</h3>
            </Container>

            <Container>
                <Title title="Center on Knowledge Graphs, Information Sciences Institute, USC [Student Researcher]"  comment="June 2021-Present" />
                <Row>
                    <Col sm={10}>
                        <ul>
                            <li>
                                <p>
                                    Implemented  Knowledge Graph Completion pipeline consisting of Wikipedia Document Retrieval and zero-shot fact validation stage. Created ground truth evaluation set for spouse fact verification, obtained an F1 score of 0.879 with a precision score of 0.957.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Improved tabular representation using contrastive learning over Graph-NN, obtained Table retrieval Mean Average Precision of 0.649 over WikiTables and 0.739 over Webquerry datasets.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Developed <a href={"https://github.com/usc-isi-i2/t2wml/tree/master/backend/copy_annotations"}>Python package</a> to transfer tabular block annotation between structurally similar sheets using integer linear programming (Python-MIP) to fit constraints generated from source sheet block coordinates on the target sheet.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Title title="Thoughtworks Technologies (India) Pvt Ltd, Bengaluru [Software Developer Engineer]"  comment=" May 2016-Dec 2020" />
                <Row>
                    <Col sm={10}>
                        <ul>
                            <li>
                                <p>
                                    Collaborated with a team of 40+ members on developing a price recommendation and forecasting solution for one of the most prominent consultancy firms. It helped an annual increase in the sales of one of the biggest fashion retailers in the US by 7.48%.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Implemented Spark ETL pipeline for weekly data-load with the recommendation, forecasting, aggregation, and summarization stages.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Enabled end-users to perform real-time price edits and data visualizations through golang micro-services and React-based Web-UI.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Led successful application deployments in the production environment on AWS, resolving various technical and data migration issues.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Tuned spark cluster by simulating production like price-edits using Locust and decreased the computation time by 25-30%.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Containerized Jenkins server and slaves using docker in order to support deployment across different cloud service providers.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Led the team of 5 developers to design and develop the Alexa-enabled Stock-market Robo-advisor app for the machine learning model.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Designed and implemented application features such as centralized application configuration management, policy-based functional and data access control, and GoCD continuous delivery pipeline.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Title title="Thoughtworks Technologies (India) Pvt Ltd, Bengaluru [Intern]"  comment="Jan 2016-May 2016" />
                <Row>
                    <Col sm={10}>
                        <ul>
                            <li>
                                <p>
                                    Developed a restaurant recommendation system based on Aspect Based Sentiment Analysis using a deep neural network.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Used gensim word2vec for embedding generation, fed to CNN for sentiment classification, and RNN for aspect extraction using IOB tagging. Handled multiple entity-sentiment pairs within a sentence using the Stanford CoreNLP parser library.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Evaluated on SemEval-2014 subtasks, obtained an F1 score of 0.854 for Aspect category detection and accuracy of  0.761 for Aspect category polarity. Publication: <a href={"https://www.ijert.org/research/aspect-based-sentiment-summarization-with-deep-neural-networks-IJERTV5IS050553.pdf"}> Aspect-based Sentiment Summarization with Deep Neural Networks (IJERT)</a>
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}