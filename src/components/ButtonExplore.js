import React from "react";
import styled from "styled-components";
import { useWindowScroll } from "react-use";
import { useRef, useLayoutEffect } from "react";

const Btn = styled.button`
    display: inline-block;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    outline: none;
    border: none;
    font-size: ${props => props.theme.fontl};
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
        transform: scale(0.9);
    }

    &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${props => props.theme.text};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`;

const ButtonExplore = () => {
    const ref = useRef(null);
    const {y} = useWindowScroll();

    const scrollToAbout = (id) => {
        const element = document.getElementById("about");
        element.scrollIntoView({behavior: "smooth",
        block: "start",
        inline: "nearest"});
    }

    useLayoutEffect(() => {
        if(y > 200) {
            ref.current.style.display = "flex";
        }else{
            ref.current.style.display = "none";
        }
    }, [y]);

    return (
        <Btn ref = {ref} onClick={() => scrollToAbout()}>
            Explore;
        </Btn>
    );
}

export default ButtonExplore;