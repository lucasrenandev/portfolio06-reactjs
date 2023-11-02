import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", Arial, Helvetica, sans-serif;
        list-style: none;
        text-decoration: none;
        border: none;
        outline: none;
    }

    :root {
        --text-color: #fff;
        --bg-color: #1b1f24;
        --second-bg-color: #22282f;
        --main-color: #13bbff;
        --other-color: #c3cad5;
        --h1-font: 7.2rem;
        --h2-font: 4.6rem;
        --p-font: 1.6rem;
        @media (max-width: 1090px) {
            --h1-font: 6rem;
            --h2-font: 3.6rem;
        }
        @media (max-width: 500px) {
            --h1-font: 5rem;
            --h2-font: 3rem;
            --p-font: 1.5rem;
        }
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        @media (max-width: 768px) {
            font-size: 55%;
        }
    }

    html::-webkit-scrollbar {
        width: 1.4rem;
    }

    html::-webkit-scrollbar-track {
        background-color: var(--text-color);
    }

    html::-webkit-scrollbar-thumb {
        background-color: var(--main-color);
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    section {
        width: 100%;
        padding: 12rem 8% 9rem;
        @media (max-width: 1250px) {
            padding: 10rem 2% 8rem;
        }
        @media (max-width: 992px) {
            padding: 8rem 2% 7rem;
        }
    }

    .heading {
        text-align: center;
    }

    .heading h2 {
        font-size: var(--h2-font);
        font-weight: 700;
        text-transform: capitalize;
        span {
            color: var(--main-color);
        }
    }

    .btn {
        display: inline-block;
        padding: 1rem 2.6rem;
        border: 0.2rem solid var(--main-color);
        background-color: transparent;
        color: var(--main-color);
        font-size: 1.5rem;
        font-weight: 600;
        border-radius: 0.8rem;
        transition: all 0.5s ease;
        &:hover {
            background-color: var(--main-color);
            color: var(--bg-color);
            box-shadow: 0 0 2rem var(--main-color);
            transform: scale(1.1);
        }
    }

`