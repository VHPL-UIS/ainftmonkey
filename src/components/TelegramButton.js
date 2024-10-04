import React from "react";
import styled from "styled-components";

const TelegramIcon = styled.img`
    width: 90px;
  height: 90px;
  filter: grayscale(100%);

  @media (max-width: 48em) {
    width: 40px; /* Adjust width for smaller screens */
    height: 40px; /* Adjust height for smaller screens */
  }
`;

const TelegramLink = styled.a`
  /* Add any additional styles for the link */
`;

const TelegramButton = ({ channelUsername }) => {
  const telegramUrl = `https://t.me/${channelUsername}`;

  return (
    <TelegramLink href={telegramUrl} target="_blank" rel="noopener noreferrer">
      <TelegramIcon
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Telegram_font_awesome.svg/1024px-Telegram_font_awesome.svg.png" 
        alt="Telegram Logo"
      />
    </TelegramLink>
  );
};

export default TelegramButton;
