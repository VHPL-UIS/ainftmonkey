import React from "react";
import styled from "styled-components";
import bighead1 from "../../assets/monkey-4.webp";
import bighead2 from "../../assets/monkey-5.webp";

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;
`;

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 1px solid ${props => props.theme.text};
    width: fit-content;

    @media (max-width: 40em) {
        font-size: ${props => props.theme.fontxl};
    }
`;

const RoadmapPage = () => {
  return (
    <Section id="roadmap">
    <RoadmapContainer>
      <Title>Roadmap</Title>
      <PhasesContainer>
        <Phase>
          <PhaseTitle>Phase 1</PhaseTitle>
          <PhaseSubtitle>Website Creation</PhaseSubtitle>
          <PhaseSubtitle>Creation of $AINFTMONKEY</PhaseSubtitle>
          <PhaseSubtitle>Twitter Launch</PhaseSubtitle>
          <PhaseSubtitle>Telegram Launch</PhaseSubtitle>
          <PhaseSubtitle>LP Launch</PhaseSubtitle>

        </Phase>
        <Phase>
          <PhaseTitle>Phase 2</PhaseTitle>
          <PhaseSubtitle>List $AINFTMONKEY on Solana Dex</PhaseSubtitle>
          <PhaseSubtitle>First Callers airdrop</PhaseSubtitle>
          <PhaseSubtitle>Book trending</PhaseSubtitle>
          <PhaseSubtitle>Dex updates</PhaseSubtitle>
          <PhaseSubtitle>Marketing campaign</PhaseSubtitle>
        </Phase>
        <Phase>
          <PhaseTitle>Phase 3</PhaseTitle>
          <PhaseSubtitle>10K TG members</PhaseSubtitle>
          <PhaseSubtitle>50K Twitter followers</PhaseSubtitle>
          <PhaseSubtitle>CMC fast track application</PhaseSubtitle>
          <PhaseSubtitle>CG fast track application</PhaseSubtitle>
          <PhaseSubtitle>$1M volume</PhaseSubtitle>
        </Phase>
        {/* <Phase>
          <PhaseTitle>Phase 4</PhaseTitle>
          <PhaseSubtitle>Widespread marketing</PhaseSubtitle>
          <PhaseSubtitle>more airdrops</PhaseSubtitle>
          <PhaseSubtitle>CMC listing</PhaseSubtitle>
          <PhaseSubtitle>CG listing</PhaseSubtitle>
          <PhaseSubtitle>Cex listing (after $1M MCap)</PhaseSubtitle>
        </Phase> */}
      </PhasesContainer>
      <ImagesContainer>
        <Image src={bighead1} alt="Image 1" />
        <Image src={bighead2} alt="Image 2" />
      </ImagesContainer>
    </RoadmapContainer>
    </Section>
  );
};

const RoadmapContainer = styled.div`
width: 70%;
height: 100vh;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
margin: 0 auto;

  /* Add styles for the roadmap container */
`;

const PhasesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 48em) {
    flex-direction: column;
    align-items: center;
  }
`;

const Phase = styled.div`
  flex: 1;
//   width: 100%;
  width: 100%;
  padding: 20px; /* Add padding to create space around the content */
  border: 1px solid #ccc; /* Add border for visual separation */
  border-radius: 10px; /* Add rounded corners */
  margin: 20px; /* Add margin to create space between phases */
  background-color: darkgray;
  opacity: 0.8;
  text-align: center;
  box-shadow: 16px 8px 16px rgba(0, 0, 0, 0.4);
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const PhaseTitle = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    text-transform: UpperCase;
    color: ${props => props.theme.text};
    -webkit-text-stroke: 2px black;

    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontlg};
    }
`;

const PhaseSubtitle = styled.p`
    font-size: ${props => props.theme.fontlg};
    text-transform: UpperCase;
    color: ${props => props.theme.text};
    margin-left: 20px;
    position: relative;
    &:before {
        content: "•";
        position: absolute;
        left: -20px;
        color: ${props => props.theme.text};
    }

    @media (max-width: 48em) {
        font-size: ${props => props.theme.fontmd};
    }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* Add margin to create space between phases and images */
`;

const Image = styled.img`
  width: 48%;
  border-radius: 50%;
  @media (max-width: 48em) {
    display: none;
  }
`;

export default RoadmapPage;
