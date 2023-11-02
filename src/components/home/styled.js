import styled from "styled-components";
import background from "../../assets/background.png";

export const Home = styled.section`
    height: 100vh;
    background: url(${background}) 
    no-repeat center top / cover;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 1250px) {
        background: url(${background}) 
        no-repeat right top / cover;
        height: 90vh;
    }
    @media (max-width: 500px) {
        height: 100vh;
    }
`
export const HomeText = styled.main`

`
export const H3 = styled.h3`
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: capitalize;
`
export const H1 = styled.h1`
    font-size: var(--h1-font);
    font-weight: 900;
    text-transform: capitalize;
    line-height: 1.2;
    margin: 2rem 0;
    span {
        color: var(--main-color);
    }
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    color: var(--other-color);
    line-height: 1.8;
    max-width: 62rem;
`
export const SocialIcons = styled.ul`
    margin: 1.5rem 0 4rem;  
    display: flex;
    align-items: center;
    gap: 2.5rem;
`
export const Icon = styled.a`
    width: 4rem;
    height: 4rem;
    background-color: transparent;
    backdrop-filter: brightness(88%);
    -webkit-backdrop-filter: brightness(88%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--main-color);
    font-size: 2rem;
    transition: all 0.5s ease;
    &:hover {
        box-shadow: 0 0 2rem var(--main-color);
        transform: scale(1.1);
    }
`
export const Btns = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    :first-child {
        background-color: var(--main-color);
        color: var(--bg-color);
        &:hover {
            background-color: transparent;
            color: var(--main-color);
        }
    }
`