import React from "react";
import styled from "styled-components";
import TypeWriter from "typewriter-effect";
// import Button from "./Button";
import ButtonExplore from "./ButtonExplore";
import TwitterButton from "./TwitterButton";
import TelegramButton from "./TelegramButton";
import CoinMarketCapButton from "./CoinMarketCapButton";
import BirdeyeButton from "./BirdeyeButton";


const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${props => props.theme.text};
    align-self: flex-start;


span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
}
.text-1 {
    color: blue;
}
.text-2 {
    color: orange;
}
.text-3 {
    color: red;
}

@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
}
@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}

`;

const SubTitle = styled.h3`
    font-size: ${(props) => props.theme.fontlg};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;

    @media (max-width: 40em) {
        font-size: ${props => props.theme.fontmd};
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
`;

const ButtonContainer = styled.div`
    // background-color: lightblue;
    width: 50%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
        width: 40%;

        botton {
            margin: 0 auto;
        }
    }
`;

const TypeWriterText = () => {
    return (
        <>
        <Title>
            Discover a new era of cool AI-generated NFT Monkies.
            <TypeWriter
            options={{
                autoStart: true,
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter.typeString('<span class="text-1">No TAX at all!</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">LP tokens burnt!</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">No Bullshit!</span>')
                .start();
            }}
            />
        </Title>
        <SubTitle>Bored of ShibaCumGMElonKishu<br />TurboAssFlokiMoon Inu coins? Try Something New.</SubTitle>
        <ButtonContainer>
        <TwitterButton twitterUsername="" />
        <TelegramButton channelUsername="" />
        <BirdeyeButton birdeyeUsername="token/CLugUBuJDEjJoKBhdtk1DwnCe46UBJDEjcdTPQwrTDTgNneUBJDEjgzkkNgk?chain=solana" />
        {/* <CoinMarketCapButton cmp=""  btnText="Soon" /> */}
        </ButtonContainer>
        </>
    );
}

export default TypeWriterText;