import React from "react";
import styled from "styled-components";

const CmcIcon = styled.img`
    width: 90px;
  height: 90px;
  filter: grayscale(100%);

  @media (max-width: 48em) {
    width: 60px; /* Adjust width for smaller screens */
    height: 60px; /* Adjust height for smaller screens */
  }
`;

const CmcLink = styled.a`
  /* Add any additional styles for the link */
`;

const CoinMarketCapButton = ({ cmp, btnText }) => {
  const cmcUrl = `https://coinmarketcap.com/${cmp}`;

  return (
    <CmcLink href={cmcUrl} target="_blank" rel="noopener noreferrer">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <CmcIcon
        src="https://static.wixstatic.com/media/1f3f2b_614e05b6d3e84630b377c85d7ed33137~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cm c.png"
        alt="cmc Logo"
      />
      <span style={{ marginTop: "5px", fontSize: "1.5rem" }}>{btnText}</span>
      </div>
    </CmcLink>
  );
};

export default CoinMarketCapButton;





