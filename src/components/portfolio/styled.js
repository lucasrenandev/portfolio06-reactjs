import styled from "styled-components";

export const Portfolio = styled.section`
    background-color: var(--second-bg-color);
`
export const PortfolioContent = styled.article`
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
    padding: 2rem 2rem 4rem;
    border-radius: 3rem;
    border: 0.1rem solid transparent;
    box-shadow: 0 0 0.5rem var(--main-color);
    transition: all 0.5s ease;
    &:hover {
        border: 0.1rem solid var(--main-color);
        transform: scale(1.03) translateY(-0.5rem);
    }
`
export const Image = styled.figure`

`
export const Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: 3rem;
`
export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2.5rem 0 2rem;
`
export const H3 = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--other-color);
`
export const Icon = styled.a`
    width: 5rem;
    height: 5rem;
    background-color: #075fe4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    font-size: 2.5rem;
`
export const H4 = styled.h4`
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: capitalize;
`