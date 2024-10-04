import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
font-style: italic;
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover {
    transform: scale(1.1);
}

@media (max-width: 64em) {
    font-size: ${props => props.theme.fontxl};
}
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const Logo = () => {
    return (
        <LogoText>
            <Link to="/">
                <BoldText>$AINFTMONKEY</BoldText>
            </Link>
        </LogoText>
    );
}

export default Logo;