import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    padding: 2rem 8%;
    transition: all 0.5s ease;
    &.sticky {
        background-color: var(--bg-color);
        padding: 1.5rem 8%;
        box-shadow: 0 0.2rem 1.6rem rgba(0, 0, 0, 0.2);
        @media (max-width: 1250px) {
            padding: 1.5rem 2%;
        }
    }
    @media (max-width: 1250px) {
        padding: 1.5rem 2%;
    }
    @media (max-width: 350px) {
        .btn {
            display: none;
        }
    }
`
export const Logo = styled.a`
    color: var(--text-color);
    font-size: 3rem;
    font-weight: 600;
    span {
        color: var(--main-color);
        margin-left: 0.7rem;
    }
`
export const MenuIcon = styled.i`
    font-size: 3.3rem;
    cursor: pointer;
    z-index: 1010;
    display: none;
    @media (max-width: 992px) {
        display: inline-flex;
    }
`
export const NavBar = styled.nav`
    @media (max-width: 992px) {
        position: absolute;
        top: 100%;
        right: -100%;
        width: 28rem;
        height: 100vh;
        background-color: var(--bg-color);
        padding: 1rem 0;
        transition: right 0.5s ease;
        &.open {
            right: 0;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`
export const List = styled.li`
    margin: 0 2rem;
    @media (max-width: 992px) {
        margin: 2rem 0;
    }
    .nav-link {
        color: var(--other-color);
        font-size: var(--p-font);
        font-weight: 500;
        transition: all 0.5s ease;
        &:hover {
            color: var(--main-color);
            text-shadow: 0.3rem 0.3rem 2rem var(--main-color),
            -0.2rem 0.1rem 3rem var(--main-color);
        }
        @media (max-width: 992px) {
            display: block;
        }
    }
`