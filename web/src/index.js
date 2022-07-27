import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {WorkExperience} from "./pages/WorkExperience";
import {Projects} from "./pages/Projects";
import {Home} from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Abhinav Kumar Thakur</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#/experience">Work Experience</Nav.Link>
                        <Nav.Link href="#/projects">Projects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/experience" element={<WorkExperience/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();