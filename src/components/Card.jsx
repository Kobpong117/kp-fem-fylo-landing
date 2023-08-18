import { StyledCard } from "./styles/Card.styled"
import { Flex } from "./styles/Flex.styled"
import { FlexTestimonial } from "./styles/FlexTestimonial.styled"

const Card = () => {
  return (
    <StyledCard>
        <img src="../images/icon-quotes.svg" alt="" style={{width: '40px', marginBottom: '1.5rem'}}/>
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine</p>
        <FlexTestimonial>
            <img src="../images/avatar-testimonial.jpg" alt="" style={{width: '6rem', borderRadius: '50%'}}/>
            <div style={{textAlign: 'start'}}>
                <h4>Kyle Burton</h4>
                <small>Founder & CEO, Huddle</small>
            </div>
        </FlexTestimonial>
    </StyledCard>
  )
}
export default Card