import Link from 'next/link'; //this will allow us to link different pages
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di'; //importing icons

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles'; //these are the components that i have used in style

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{display:"flex", alignItems:"Center" ,color:'white',marginBottom:'20px'}}>
        <DiCssdeck size="3rem"/><Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Devang2304">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/devang-vartak-604095224/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_devang_23_/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
