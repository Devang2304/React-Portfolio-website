import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'; //importing global components which  have been created for everywhere to use
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Welcome To <br/>
      My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I am a Front End Developer with experience building web based projects. One of my biggest strengths is the development and delivering big ideas that amaze people's minds.
      </SectionText>
      <Button onClick={()=>window.location='https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;