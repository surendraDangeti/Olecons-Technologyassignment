import { Trans } from "react-i18next";
import {Row, Col, Container} from 'react-bootstrap'



const Home = ()=>{
    const index = 11;
    return(
        <>
        <Container>
            <Row>
                <Col lg={12}> 
        <div className="mt-5 aboutpage-contant">
        <h3 className="about-title">About Us</h3>
        <Trans i18nKey="About">trans</Trans>
      </div>
      </Col>
      </Row>
      </Container>
      </>
    )
}

export default Home