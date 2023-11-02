import styled from "styled-components";

export const Services = styled.section`

`
export const ServicesContent = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    align-items: center;
    gap: 3.5rem;
    margin-top: 6.5rem;
    @media (max-width: 350px) {
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
`
export const Box = styled.div`
    background-color: #2d343f;
    padding: 7rem 4rem 6rem;
    border-radius: 3rem;
    border: 0.1rem solid transparent;
    box-shadow: 0 0 0.5rem var(--main-color);
    transition: all 0.5s ease;
    &:hover {
        border: 0.1rem solid var(--main-color);
        transform: scale(1.03) translateY(-0.5rem);
    }
`
export const Image = styled.img`
    width: 7rem;
    height: auto;
`
export const H3 = styled.h3`
    font-size: 3rem;
    font-weight: 700;
    margin: 1.5rem 0;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.8;
    color: var(--other-color);
    margin-bottom: 2.5rem;
`
export const Link = styled.a`
    position: relative;
    display: inline-flex;
    color: var(--text-color);
    font-size: 2.2rem;
    font-weight: 700;
    padding-block-end: 0.8rem;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background-color: #5d6c83;
        transition: background-color 0.5s ease;
    }
    &:hover::before {
        background-color: var(--main-color);
    }
    span {
        color: var(--main-color);
        margin-left: 0.7rem;
        font-size: 2.5rem;
    }
`