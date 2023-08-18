import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Image } from "./styles/Image.styled"
import { Nav, NavLinks, StyledHeader } from "./styles/Header.styles"

const Header = ({ handleEmailInput, setEmail, email, alert }) => {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <img src="../images/logo.svg" alt="logo" />
                <NavLinks>
                    <a>Features</a>
                    <a>Team</a>
                    <a>Sign in</a>
                </NavLinks>
            </Nav>
            <Flex>
                <div>
                    <h2>All your files in one secure location, accessible anywhere</h2>
                    <p>Fylo stores your most important files in one secure location. Access them whenever you need, share and collaborate with friends, family, and co-worker</p>
                    <form onSubmit={handleEmailInput}>
                        <div style={{position:'relative'}}>
                            <input 
                                type="text" 
                                placeholder="Enter your email..." 
                                style={{borderColor: alert ? 'red' : 'none'}}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <small style={{color:'red', fontSize:'.8rem', position:'absolute', left:'0',top:'2.7rem'}}>{alert}</small>
                            <button type="submit">Get Started</button>
                        </div>
                    </form>
                </div>
                <Image src="../images/illustration-1.svg" alt="" />
            </Flex>
        </Container>
    </StyledHeader>
  )
}
export default Header