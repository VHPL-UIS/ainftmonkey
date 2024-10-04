import React from "react";
import styled from "styled-components";

const TwitterIcon = styled.img`
    width: 90px;
  height: 90px;
  filter: grayscale(100%);

  @media (max-width: 48em) {
    width: 40px; /* Adjust width for smaller screens */
    height: 40px; /* Adjust height for smaller screens */
  }
`;

const TwitterLink = styled.a`
  /* Add any additional styles for the link */
`;

const TwitterButton = ({ twitterUsername }) => {
  const twitterUrl = `https://twitter.com/${twitterUsername}`;

  return (
    <TwitterLink href={twitterUrl} target="_blank" rel="noopener noreferrer">
      <TwitterIcon
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Twitter_bird_logo_black.svg/1024px-Twitter_bird_logo_black.svg.png"
        alt="Twitter Logo"
      />
    </TwitterLink>
  );
};

export default TwitterButton;
