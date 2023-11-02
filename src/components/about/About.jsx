import { About, AboutImage, Image, AboutText, 
H2, Info, Paragraph } from "./styled";
import aboutImg from "../../assets/about.jpg";

export default function about() {
    return(
        <About id="about">
            <AboutImage data-aos="zoom-in-down">
                <Image src={aboutImg} alt="About image"/>
            </AboutImage>
            <AboutText data-aos="zoom-in-up">
                <H2>I am product <span>designer</span> & web developer</H2>
                <Info>
                    <Paragraph>
                        Experience:
                        <span>12 years</span>
                    </Paragraph>
                    <Paragraph>
                        Specialty:
                        <span>Product designer, developer</span>
                    </Paragraph>
                    <Paragraph>
                        Address:
                        <span>Sylhet, bangladesh</span>
                    </Paragraph>
                    <Paragraph>
                        Email:
                        <span className="email">tahmiddytyt.bg@gmail.com</span>
                    </Paragraph>
                    <Paragraph>
                        Phone:
                        <span>01758138866</span>
                    </Paragraph>
                    <Paragraph>
                        Freelance:
                        <span>Available</span>
                    </Paragraph>
                </Info>
                <a href="#" className="btn">View all projects</a>
            </AboutText>
        </About>
    )
}