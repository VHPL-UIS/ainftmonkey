import React from "react";
import styled from "styled-components";

const BirdeyeIcon = styled.img`
    width: 85px;
  height: 85px;
//   filter: grayscale(100%);

  @media (max-width: 48em) {
    width: 40px; /* Adjust width for smaller screens */
    height: 40px; /* Adjust height for smaller screens */
  }
`;

const BirdeyeLink = styled.a`
    /* Add any additional styles for the link */
    `;

const BirdeyeButton = ({ birdeyeUsername }) => {
    const birdeyeUrl = `https://birdeye.so/${birdeyeUsername}`;

    return (
        <BirdeyeLink href={birdeyeUrl} target="_blank" rel="noopener noreferrer">
            <BirdeyeIcon
                src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*FMXUm-9hy_L7xiQrQihREw.png"
                alt="Birdeye Logo"
            />
        </BirdeyeLink>
    );
};

export default BirdeyeButton;