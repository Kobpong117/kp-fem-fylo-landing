import SocialIcons from "./SocialIcons"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"

const Footer = () => {
  return (
    <StyledFooter>
        <Container>
            <img src="../images/logo.svg" alt="logo" style={{marginBottom: '2rem'}}/>
            <section>
                <ul>
                    <li><img src="../images/icon-phone.svg" alt="" />  Phone: +1-543-123-4567</li>
                    <li><img src="../images/icon-email.svg" alt="" />  example@fylo.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>Job</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
                <SocialIcons />
            </section>
        </Container>
    </StyledFooter>
  )
}
export default Footer