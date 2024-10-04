import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";
import Telegram from "../Icons/Telegram";

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;
    color: ${props => props.theme.text};
    display: flex;
    // justify-content: center;
    // align-items: center;
    flex-direction: column;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.text};
    @media (max-width: 48em) {
      width: 90%;
    }

    h1{
      font-size : ${props => props.theme.fontxxxl};
    }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  aligh-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.text};
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: spce-between;
  align-items: center;

  a{
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
  }

  span {
    margin: 1rem;
  }
`;

const Footer = () => {

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"});
  }

  return (
    <Section>
      <Banner />
      <Container>
      <Left>
        <Logo />
      </Left>
      <MenuItems>
        <Item onClick={() => scrollTo('home')}>Home</Item>
        <Item onClick={() => scrollTo('about')}>About</Item>
        <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
        <Item onClick={() => scrollTo('tokenomics')}>Tokenomics</Item>
      </MenuItems>
      </Container>
      <Bottom>
        <span style={{fontWeight: "bold"}}>
        $AINFTMONKEY has no association with any monkey. This NFT is simply paying homage to an animal we all love and recognize and the power of AI created art.
        </span>
        <span>
          &copy; {new Date().getFullYear()} $AINFTMONKEY. All rights reserved
        </span>
      </Bottom>
    </Section>
  );
}

export default Footer;