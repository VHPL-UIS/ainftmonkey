import React from "react";
import styled from "styled-components";
import TypeWriterText from "../TypeWriterText";
import CoverImage from "../CoverImage";
import { keyframes } from "styled-components";

const Section = styled.section`
    min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    width: 100vw;
    position: relative;
    background-color: ${props => props.theme.body};
`;

const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    min-height: 80vh;
    // background-color: lightblue;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 64em) {
        width: 85%;
    }
    @media (max-width: 48em) {
        flex-direction: column-reverse;

        &>*:first-child {
            width: 100%;
            margin-top: 2rem;
        }

    }
`;

const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const rotate = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

const Round = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 90%;
    width: 6rem;
    height: 6rem;
    border: 1px solid ${props => props.theme.text};
    border-radius: 50%;

    img {
        width: 100%;
        height: auto;
        animation: ${rotate} 6s linear infinite reverse;
    }
`;

const Circle = styled.span`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    font-size: ${props => props.theme.fontxl};
`;

const Text = styled.p`
    text-align: center;
    font-size: ${props => props.theme.fontxl};
    margin-top: 1rem;
    background-color: orange; 
    border-radius: 10px; 
    padding: 0.5rem 1rem;
    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontsm};
    }
`;

const Home = () => {
    return (
        <Section id="home">
            <Container>
                <Box><TypeWriterText /></Box>
                <Box><CoverImage /></Box>
            </Container>
            <Text>CLugUBJDEjJoKBhgUBJtk1DwnCe46cTPgUBJQwrTDTgNnegkkNgUBJgk</Text>
        </Section>
    );
}

export default Home;