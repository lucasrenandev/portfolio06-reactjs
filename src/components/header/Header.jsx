import { useEffect, useRef, useState } from "react";
import { Header, Logo, MenuIcon, NavBar, NavList, List } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export default function header() {
    const [menuIcon, seMenuIcon] = useState(<BiMenu/>);
    const headerRef = useRef(null);
    const navRef = useRef(null);

    function toggleMenu() {
        if(!navRef.current.classList.contains("open")) {
            navRef.current.classList.add("open")
            seMenuIcon(<IoClose/>)
        }
        else {
            navRef.current.classList.remove("open");
            seMenuIcon(<BiMenu/>)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", function() {
            headerRef.current.classList.toggle("sticky", this.window.scrollY > 120);
            navRef.current.classList.remove("open");
            seMenuIcon(<BiMenu/>)
        });
    }, []);

    return(
        <Header ref={headerRef}>
            <Logo href="/">
                Developer
                <span>X.</span>
            </Logo>
            <MenuIcon onClick={toggleMenu}>
                {menuIcon}
            </MenuIcon>
            <NavBar ref={navRef}>
                <NavList>
                    <List>
                        <Link className="nav-link" smooth to={"#home"}>Home</Link>
                    </List>
                    <List>
                        <Link className="nav-link" smooth to={"#about"}>About</Link>
                    </List>
                    <List>
                        <Link className="nav-link" smooth to={"#services"}>Services</Link>
                    </List>
                    <List>
                        <Link className="nav-link" smooth to={"#portfolio"}>Portfolio</Link>
                    </List>
                    <List>
                        <Link className="nav-link" smooth to={"#contact"}>Contact</Link>
                    </List>
                </NavList>
            </NavBar>
            <a href="#" className="btn">Contact me</a>
        </Header>
    )
}