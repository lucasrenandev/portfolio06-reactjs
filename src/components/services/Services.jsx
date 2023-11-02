import { Services, ServicesContent, Box, 
Image, H3, Paragraph, Link } from "./styled";
import serviceImg1 from "../../assets/s-1.svg";
import serviceImg2 from "../../assets/s-2.svg";
import serviceImg3 from "../../assets/s-3.svg";
import { RiArrowRightLine } from "react-icons/ri";

export default function services() {
    return(
        <Services id="services">
            <header className="heading" data-aos="fade-down">
                <h2>My <span>services</span></h2>
            </header>
            <ServicesContent data-aos="zoom-in-up">
                <Box>
                    <Image src={serviceImg1} alt="Service image 1"/>
                    <H3>UI/UX Design</H3>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur modi provident voluptatibus!</Paragraph>
                    <Link href="#">
                        Download
                        <span>
                            <RiArrowRightLine/>
                        </span>
                    </Link>
                </Box>
                <Box>
                    <Image src={serviceImg2} alt="Service image 2"/>
                    <H3>UI/UX Design</H3>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur modi provident voluptatibus!</Paragraph>
                    <Link href="#">
                        Download
                        <span>
                            <RiArrowRightLine/>
                        </span>
                    </Link>
                </Box>
                <Box>
                    <Image src={serviceImg3} alt="Service image 3"/>
                    <H3>UI/UX Design</H3>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur modi provident voluptatibus!</Paragraph>
                    <Link href="#">
                        Download
                        <span>
                            <RiArrowRightLine/>
                        </span>
                    </Link>
                </Box>
            </ServicesContent>
        </Services>
    )
}