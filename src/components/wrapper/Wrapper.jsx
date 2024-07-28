import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import { serviceData } from "../../utils/products";

const Wrapper = () => {
  return (
      <section className='wrapper background'>
        <Container>
          <Row>
          {serviceData.map((val, index) => {
            return (
              <Col md={3} sm={5} xs={9} className='feature' key={index}>
                <img loading="lazy" src={val.bg} alt="" className="image"/>
                <h3>{val.title}</h3>
              </Col>
            )
          })}
          </Row>
        </Container>
      </section>
  )
}

export default Wrapper;
