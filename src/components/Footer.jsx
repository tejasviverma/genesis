import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';
import { SiProtonmail } from 'react-icons/si';

// Styled components for layout and styling
const FooterContainer = styled.footer`
  background-color: #141414;
  color: #bbb;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const LogoSection = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterLogo = styled.h1`
  color: #fff;
  font-size: 2em;
  margin-bottom: 20px;
`;

const MediaKit = styled.p`
  color: #999;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const IconLink = styled.a`
  color: #bbb;
  font-size: 1.5em;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const FooterLinks = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-width: 200px;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkTitle = styled.h3`
  color: #999;
  margin-bottom: 10px;
  font-size: 1.1em;
`;

const FooterLink = styled.a`
  color: #bbb;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    color: #fff;
  }
`;

const DesignCredit = styled.div`
  text-align: right;
  color: #555;
  font-size: 0.9em;
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

// Main Footer Component
function Footer() {
  return (
    <FooterContainer id='contact'>
      <LogoSection>
        <FooterLogo>Genesis</FooterLogo>
        <IconContainer>
          <IconLink href="#"><FaYoutube /></IconLink>
          <IconLink href="#"><FaTwitter /></IconLink>
          <IconLink href="#"><FaDiscord /></IconLink>
          <IconLink href="#"><SiProtonmail /></IconLink>
          <IconLink href="#"><FaGithub /></IconLink>
        </IconContainer>
        <MediaKit>Media Kit</MediaKit>
      </LogoSection>

      <FooterLinks>
        <LinkGroup>
          <LinkTitle>BUILD ON JUNO</LinkTitle>
          <FooterLink href="#">Contact us</FooterLink>
          <FooterLink href="#">Documentation</FooterLink>
        </LinkGroup>

        <LinkGroup>
          <LinkTitle>USE JUNO</LinkTitle>
          <FooterLink href="#">Overview</FooterLink>
          <FooterLink href="#">Wallets</FooterLink>
          <FooterLink href="#">Decentralized Exchanges</FooterLink>
        </LinkGroup>

        <LinkGroup>
          <LinkTitle>APPS ON JUNO</LinkTitle>
          <FooterLink href="#">Overview</FooterLink>
        </LinkGroup>
      </FooterLinks>

      <DesignCredit>
        DESIGNED BY TEAM GENESIS 
      </DesignCredit>
    </FooterContainer>
  );
}

export default Footer;
