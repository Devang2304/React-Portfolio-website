import React from 'react';
import { DiAndroid, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world from Back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br/>
          React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Experience with <br/>
          Node,mongodb & express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size="3rem"/>
        <ListContainer>
          <ListTitle>Android</ListTitle>
          <ListParagraph>Beginner Experience with 
          React-Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
