import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`

`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 15px;
`;

const PageLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 10px;
  background: papayawhip;
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <PageLink to="/About">About</PageLink>
        <PageLink to="/Blog">Blog</PageLink>
        <ExternalLink href="https://github.com/naimiii">
          Github
        </ExternalLink>
        <ExternalLink href="https://twitter.com/NaimaShaykh">
          Twitter
        </ExternalLink>
        <ExternalLink href="mailto:naimashaikh550@gmail.com?subject=Contact Form">
          Contact
        </ExternalLink>
      </Nav>
    </Container>
  );
};

export default Navbar;
