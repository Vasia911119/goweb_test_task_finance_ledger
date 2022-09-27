import { Container, List, Text, Icon } from './Footer.styled';
import facebook from '../../images/facebook.svg';
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import linkedin from "../../images/linkedin.svg";

const Footer = () => {
    return (
        <Container>
            <List>
                <li><a href="#.">
                    <Icon
                        src={facebook}
                        width="35"
                        height="35"
                    />
                </a></li>
                <li><a href="#.">
                    <Icon
                        src={twitter}
                        width="35"
                        height="35"
                    />
                </a></li>
                <li><a href="#.">
                    <Icon
                        src={youtube}
                        width="40"
                        height="35"
                    />
                </a></li>
                <li><a href="#.">
                    <Icon
                        src={linkedin}
                        width="31"
                        height="35"
                        />
                </a></li>
            </List>
            <Text>Copyright © 2021 - FinanceLedger</Text>
        </Container>
)
 };

export default Footer;