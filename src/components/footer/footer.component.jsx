import { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/Logo.png';
import { Divider, FooterWrapper, IconContainer, IconWrapper, List, Logo } from "./footer.styles";

const Footer = () => {
    // Mobile view - The scroll stays at same position on routes hence scroll to top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <FooterWrapper>
            <Logo src={logo} alt="Logo" />
            <List>
                <li>Resources</li>
                <li>Docs</li>
                <li>Learn</li>
                <li>Previews</li>
            </List>
            <List>
                <li>Explore</li>
                <li>Commerce</li>
                <li>Github</li>
                <li>Releases</li>
                <li>Contact Sales</li>
            </List>
            <List>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Cookie Preferences</li>
            </List>
            <IconContainer>
                <p>© 2023 Fabric, Inc.</p>
                <IconWrapper>
                    <FaGithub />
                    <Divider>|</Divider>
                    <FaLinkedin />
                </IconWrapper>
            </IconContainer>
        </FooterWrapper>
    )
}

export default Footer;