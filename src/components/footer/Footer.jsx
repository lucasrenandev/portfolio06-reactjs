import { Footer, CopyRight } from "./styled";
import { RiArrowDropUpFill } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";

export default function footer() {
    return(
        <Footer>
            <CopyRight>2023 Tahmid Ahmed. All rights reserved.</CopyRight>
            <Link className="arrow" smooth to={"#home"}>
                <RiArrowDropUpFill/>
            </Link>
        </Footer>
    )
}