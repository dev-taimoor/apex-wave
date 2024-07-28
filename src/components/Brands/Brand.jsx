import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import { brandsData } from "../../utils/products";

const Brand = () => {
  return (
      <section className='brand background'>
        <Container>
          <h3>YOUR FAVOURITE BRANDS</h3>
          <Row>
          {brandsData.map((val, index) => {
            return (
              <Col md={3} sm={5} xs={9} className='feature' key={index}>
                <div className="image-wrapper">
                  <img loading="lazy" src={val} alt="" className="image"/>
                </div>
              </Col>
            )
          })}
          </Row>
        </Container>
      </section>
  )
}

export default Brand;
