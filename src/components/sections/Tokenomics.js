import React from "react";
import styled from "styled-components";
import bighead from "../../assets/monkey-3.webp";

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.text};
    // color: ${props => props.theme.body};
    border-top: 2px solid ${props => props.theme.text};
    border-top: 2px solid ${props => props.theme.text};

    // display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    text-transform: capitalize;
    color: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 1px solid ${props => props.theme.body};
    width: fit-content;

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontxl};
    }
`;

const Container = styled.div`
    width: 75%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    // background-color: lightblue;

    @media (max-width: 70em) {
        width: 85%;
    }

    @media (max-width: 64em) {
        width: 100%;
        flex-direction: column;
    }
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
`;

const TokenomicsContainer = styled.div`
    flex: 1;
    width: 50%;
    padding: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 40px;
    background-color: white;
    opacity: 0.8;
    text-align: center;
    box-shadow: 16px 8px 16px rgba(0, 0, 0, 0.4);
`;

const SubText = styled.p`
    font-size: ${props => props.theme.fontxxl};
    color: ${props => props.theme.text};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    -webkit-text-stroke: 2px black;
    text-transform: capitalize;

    @media (max-width: 70em) {
        justify-content: center;
        align-self: center;
        align-items: center;
    }

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontlg};
        align-items: center;
    }
`;

const ImagesContainer = styled.div`
    width: 40%;
    border-radius: 50%;
    hox-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const Tokenomics = () => {
    return (
        <Section id="tokenomics">
            <Container>
            <Title>
                Tokenomics
            </Title>  
            <Box>
            <TokenomicsContainer>
            <SubText>
                Total supply: 10,000 $AINFTMONKEY.
            </SubText>
            <SubText>
                Liquidity pool: 50%.
            </SubText>
            <SubText>
                Airdrop: 40%.
            </SubText>
            <SubText>
                Marketing: 10%.
            </SubText>
            <SubText>
                Tax: 0%.
            </SubText>
            </TokenomicsContainer>
            </Box>
            <Box>
                <ImagesContainer>
                    <img src={bighead} alt="placeholder" />
                </ImagesContainer>
            </Box>
            </Container>
        </Section>
    );
}

export default Tokenomics;