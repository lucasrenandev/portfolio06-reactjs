import styled from "styled-components";

export const About = styled.section`
    background-color: var(--second-bg-color);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 4rem;
    @media (max-width: 1090px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`
export const AboutImage = styled.figure`
    text-align: center;
`
export const Image = styled.img`
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    object-fit: cover;
    border: 0.7rem solid var(--main-color);
    box-shadow: 0 0 2rem var(--main-color);
    @media (max-width: 500px) {
        width: 35rem;
        height: 35rem;
    }
    @media (max-width: 350px) {
        width: 28rem;
        height: 28rem;
    }
`
export const AboutText = styled.article`

`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
    line-height: 1.3;
    text-transform: capitalize;
    span {
        color: var(--main-color);
    }
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0 4rem;
`
export const Paragraph = styled.p`
    font-size: 1.9rem;
    font-weight: 600;
    span {
        color: var(--other-color);
        font-size: var(--p-font);
        font-weight: 400;
        text-transform: capitalize;
        margin-left: 1.2rem;
        &.email {
            text-transform: lowercase;
        }
    }
`