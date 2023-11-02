import { Portfolio, PortfolioContent, Box, 
Image, Img, Description, H3, Icon, H4 } from "./styled";
import portfolioImg1 from "../../assets/port-1.jpg"
import portfolioImg2 from "../../assets/port-2.jpg"
import portfolioImg3 from "../../assets/port-3.jpg"
import portfolioImg4 from "../../assets/port-4.jpg"
import portfolioImg5 from "../../assets/port-5.jpg"
import portfolioImg6 from "../../assets/port-6.jpg"
import { RiGithubFill } from "react-icons/ri";

export default function portfolio() {
    return(
        <Portfolio id="portfolio">
            <header className="heading" data-aos="fade-down">
                <h2>My <span>portfolio</span></h2>
            </header>
            <PortfolioContent data-aos="zoom-in-up">
                <Box>
                    <Image>
                        <Img src={portfolioImg1} alt="Portfolio image 1"/>
                    </Image>
                    <Description>
                        <H3>Website design</H3>
                        <Icon href="#">
                            <RiGithubFill/>        
                        </Icon>
                    </Description>
                    <H4>Website development for dark X</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={portfolioImg2} alt="Portfolio image 2"/>
                    </Image>
                    <Description>
                        <H3>Website design</H3>
                        <Icon href="#">
                            <RiGithubFill/>        
                        </Icon>
                    </Description>
                    <H4>Website development for dark X</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={portfolioImg3} alt="Portfolio image 3"/>
                    </Image>
                    <Description>
                        <H3>Website design</H3>
                        <Icon href="#">
                            <RiGithubFill/>        
                        </Icon>
                    </Description>
                    <H4>Website development for dark X</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={portfolioImg4} alt="Portfolio image 4"/>
                    </Image>
                    <Description>
                        <H3>Website design</H3>
                        <Icon href="#">
                            <RiGithubFill/>        
                        </Icon>
                    </Description>
                    <H4>Website development for dark X</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={portfolioImg5} alt="Portfolio image 5"/>
                    </Image>
                    <Description>
                        <H3>Website design</H3>
                        <Icon href="#">
                            <RiGithubFill/>        
                        </Icon>
                    </Description>
                    <H4>Website development for dark X</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={portfolioImg6} alt="Portfolio image 6"/>
                    </Image>
                    <Description>
                        <H3>Website design</H3>
                        <Icon href="#">
                            <RiGithubFill/>        
                        </Icon>
                    </Description>
                    <H4>Website development for dark X</H4>
                </Box>
            </PortfolioContent>
        </Portfolio>
    )
}