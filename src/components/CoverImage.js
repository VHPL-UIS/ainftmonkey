import React from "react";
import styled from "styled-components";
import aimonkey2 from "../assets/monkey-2.webp";

const ImageContainer = styled.div`
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

const CoverImage = ({ image }) => {
    return (
        <ImageContainer>
            <img src={aimonkey2}/>
        </ImageContainer>
    );
}

export default CoverImage;