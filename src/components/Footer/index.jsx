import { Row } from "../styles"
import { Cootels, Cootels1, FooterCol, FooterWrapper, ListTitle, Title } from "./styles"



function Footer() {
    return (
        <FooterWrapper>
            <div>
                <FooterCol>
                    
                       <Title>Cootels</Title>
                   
                    <p>
                    Your Best Private Hideway From Crowd. Back to Nature.
                    </p>
                    <Row>
                        <img src="./assets/logo1.png" />
                        <img src="./assets/logo2.png" />
                        <img src="./assets/logo3.png" />
                    </Row>
                    

                    </FooterCol>
                   
                    <FooterCol>
                        <ListTitle>Rooms</ListTitle>
                         <div> Single Room</div>
                        <div>Double Room</div>
                        <div>Cabin</div>
                        <div>Custom Room</div>
                        </FooterCol>
                    
                    <FooterCol>
                    <ListTitle> Reservation</ListTitle>
                       <div> See the Steps</div>
                       <div> Best Time</div>
                    
                       </FooterCol>

                       
                       <FooterCol>
                    
                    
                       <ListTitle> Contact</ListTitle>
                       <div> Our Number</div>
                       <div> Our Email</div>
                       <div> Our Location</div>
                       </FooterCol>
                   
                    
                
            </div>
        </FooterWrapper>
    )
}

export default Footer