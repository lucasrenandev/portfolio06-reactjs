import { Home, HomeText, H3, H1, Paragraph,
SocialIcons, Icon, Btns } from "./styled";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

export default function home() {
    return(
        <Home id="home">
            <HomeText data-aos="fade-in">
                <H3>Hi, there!</H3>
                <H1>I'm <span>Tahmid Hamim</span></H1>
                <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti maiores aperiam provident fuga autem sint labore voluptatibus?</Paragraph>
                <SocialIcons>
                    <Icon href="#">
                        <RiFacebookBoxFill/>
                    </Icon>
                    <Icon href="#">
                        <RiInstagramFill/>
                    </Icon>
                    <Icon href="#">
                        <RiTwitterFill/>
                    </Icon>
                    <Icon href="#">
                        <RiYoutubeFill/>
                    </Icon>
                </SocialIcons>
                <Btns>
                    <a href="#" className="btn">Hire me</a>
                    <a href="#" className="btn">Download CV</a>
                </Btns>
            </HomeText>
        </Home>
    )
}