import { StyledAction } from "./styles/Action.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"

const Action = ({ handleEmailInput, setEmail, email, alert }) => {
    console.log(alert)
  return (
    <StyledAction>
        <Container>
            <section>
                <div>
                    <h3>Get early access today</h3>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team team would be happy to help you</p>
                </div>
                <form onSubmit={handleEmailInput}>
                    <div style={{position:'relative'}}>
                        <input 
                            type="text" 
                            placeholder="email@example.com"
                            style={{borderColor: alert ? 'red' : 'none'}}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        {!!alert && <small style={{color:'#fff', fontSize:'.8rem', position:'absolute', left:'0',top:'2.7rem'}}>{alert}</small>}
                        <button type="submit">Get Started For Free</button>
                    </div>                  
                </form>
            </section>
        </Container>
    </StyledAction>
  )
}
export default Action