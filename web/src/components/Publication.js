// React component to show publication details
// Path: web/src/components/Publication.js
// Shows the title, authors, conference, year and link to the publication in IEEE format

import React from 'react';
import { Container } from 'react-bootstrap';
import { GiBullseye } from 'react-icons/gi';

export function Publication({ title, authors, conference, year, link }) {
    return <Container>
        <GiBullseye />
        <b> {authors}</b>,
        <i> {title}</i>,
        {` ${conference}, ${year} `}
        <a href={link} target="_blank" rel="noopener noreferrer">
            <i> [{link}] </i>
        </a>
    </Container>
}
