import React from "react";
import styled, { ThemeProvider } from "styled-components";
// import Carousel from "../Carousel";
// import Button from "../Button";
// import {dark} from "../../styles/Themes";
import bighead1 from "../../assets/monkey-1.webp";

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.text};
    // color: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    // background-color: lightblue;
    // min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 70em) {
        width: 85%;
    }

    @media (max-width: 64em) {
        width: 100%;
        flex-direction: column;

        &>*:last-child {
            width: 80%;
        }
    }

    @media (max-width: 40em) {
        &>*:last-child {
            width: 90%;
        }
    }
`;

const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    min-height: 60vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 40em) {
        min-height: 50vh;
    }
`;

const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 64em) {
        width: 100%;
        text-align: center;
    }

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontxl};
    }
    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontlg};
    }
`;

const SubText = styled.p`
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;

    @media (max-width: 64em) {
        width: 100%;
        text-align: center;
        font-size: ${props => props.theme.fontmd};
    }

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontmd};
    }
    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontsm};
    }
`;

const SubTextLight = styled.p`
    font-size: ${props => props.theme.fontmd};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;

    @media (max-width: 64em) {
        width: 100%;
        text-align: center;
        font-size: ${props => props.theme.fontsm};
    }

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontsm};
    }
    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontxs};
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    margin: 1rem auto;
    aligh-self: flex-start;
    // display: flex;

    @media (max-width: 64em) {
        width: 100%;
        text-align: center;
        botton {
            margin: 0 auto;
        }
    }
`;

const ImagesContainer = styled.div`
    width: 100%;
    border-radius: 50%;
    hox-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const About = () => {
    return (
        <Section id="about">
            <Container>
            {/* <Box><Carousel /></Box> */}
            <Box>
                <ImagesContainer>
                    <img src={bighead1} alt="Image 1" />
                </ImagesContainer>
            </Box>
            <Box>
                <Title>
                    AI generated NFT Monkey is here. Hurray!
                </Title>
                <SubText>
                    Monkies are tired of watching the world burn. They're here to save the day. With the power of AI, they're going to make the world a better place.
                </SubText>
                <SubText>
                    $AINFTMONKEY is here to make the NFT great again. Launched stealth with no presale, zero taxes, LP burnt and ownership renounced. $AINFTMONKEY is an NFT for the people, forever. 
                </SubText>
                {/* <ButtonContainer>
                <ThemeProvider theme={dark}>
                <Button text="CoinMarketCap" link="#" />
                </ThemeProvider>
                </ButtonContainer> */}
            </Box>
            </Container>
        </Section>
    );
}

export default About;