import styled from "styled-components";

export const Footer = styled.footer`
    background-color: var(--second-bg-color);
    padding: 2.2rem 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .arrow {
        width: 4.5rem;
        height: 4.5rem;
        background-color: #075fe4;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 5rem;
        color: var(--text-color);
    }
    @media (max-width: 1250px) {
        padding: 2.2rem 2%;
    }
`
export const CopyRight = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--other-color);
    text-transform: capitalize;
`