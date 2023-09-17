import { Trans } from "react-i18next";
import {Row, Col, Container} from 'react-bootstrap'


const Home = ()=>{
    const index = 11;
    return(
        <>
        <Container>
            <Row>
                <Col lg={12}> 
        <div className="mt-5 text-center">
        <h3 className=" text-success homepage-heading">Indian tourist advisor</h3>
        <p  className=" text-success">
        The top best places in India are listed below
      </p>
         
        { [1,2,3].map((item, index)=>{
            return(
                <div className="cards">
                <h5><Trans i18nKey={`Place${index+1}`}>trans</Trans></h5>
                <p> <Trans i18nKey={`State${index+1}`}>trans</Trans></p>
                <p> <Trans i18nKey={`Time${index+1}`}>trans</Trans></p>
                </div>
            )

         })}

        
       
      </div>
      </Col>
      </Row>
      </Container>
      </>
    )
}

export default Home