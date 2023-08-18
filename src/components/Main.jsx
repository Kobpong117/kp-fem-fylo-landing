import Card from "./Card"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Image } from "./styles/Image.styled"
import { StyledMain } from "./styles/Main.styled"


const Main = () => {
  return (
    <StyledMain>
        <Container>
            <Flex>
                <div style={{paddingBottom: '2rem'}}>
                    <h2>Stay productive, wherever you are</h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
                    <article>
                        <a>See how Fylo works <img src="../images/icon-arrow.svg" alt="" /></a>
                    </article>
                    <Card />
                </div>
                <Image src="../images/illustration-2.svg" alt="" />
            </Flex>
        </Container>
    </StyledMain>
  )
}
export default Main