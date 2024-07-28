import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap";
import gmailLogo from "../../Images/icons/gmail-icon.png";
import facebookLogo from "../../Images/icons/facebook-icon.png";
import whatsappLogo from "../../Images/icons/whatsapp-icon.png";
import instaLogo from "../../Images/icons/instagram-icon.png";


const BudgetFind = () => {
  const budgetRange = ['$150', '$200', '$250'];

  const handleFacebookRedirect = () => {
    window.location.href = 'https://www.facebook.com/';
  }

  const handleInstagramRedirect = () => {
    window.location.href = 'https://www.instagram.com/';
  }

  const handleWhatsappRedirect = () => {
    const phoneNumber = '1234567890'; // Replace with the target phone number
    const url = `https://wa.me/${phoneNumber}`;
    window.location.href = url;

  }

  const handleEmailClick = () => {
    // email of Apex Wave
    const email = 'your-email@example.com';
    window.location.href = `mailto:${email}}`;
  };

  return (
      <section className='budget background'>
        <Container>
          <h3>BUDGET FINDS</h3>
          <Row>
          {budgetRange.map((val, index) => {
            return (
              <Col md={4} sm={4} xs={12} className='feature' key={index}>
                <div className="image-wrapper">
                  <h3>UNDER <br /><span>{val}</span></h3>
                </div>
              </Col>
            )
          })}
          </Row>
        </Container>
        <Container className="money-back">
          <div className="money-back-text">
            <div className="title">15 DAYS</div>
            <div className="sub-title">MONEY-BACK GUARANTEE</div>
          </div>
        </Container>
        <Container className="contact-us">
          <div className="contact-us-title">GOT QUESTIONS? WE'D LOVE TO HEAR FROM YOU</div>
          <Row className="social-media">
            <Col md={3} sm={5} xs={6} className='wrapper'>
              <img src={facebookLogo} alt="facebook logo" />
              <div className="media-link" onClick={handleFacebookRedirect}>Facebook</div>
            </Col>
            <Col md={3} sm={5} xs={6} className='wrapper'>
              <img src={instaLogo} alt="facebook logo" />
              <div className="media-link" onClick={handleInstagramRedirect}>Instagram</div>
            </Col>
            <Col md={3} sm={5} xs={6} className='wrapper'>
              <img src={whatsappLogo} alt="facebook logo" />
              <div className="media-link" onClick={handleWhatsappRedirect}>Whatsapp</div>
            </Col>
            <Col md={3} sm={5} xs={6} className='wrapper'>
              <img src={gmailLogo} alt="facebook logo" />
              <div className="media-link" onClick={handleEmailClick}>Email</div>
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default BudgetFind;
