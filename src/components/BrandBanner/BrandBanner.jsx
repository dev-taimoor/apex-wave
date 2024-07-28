import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import bannerLogo from './../../Images/icons/brand5white.svg';
import bannerLogo1 from './../../Images/icons/brand6white.svg';
import bannerLogo2 from './../../Images/icons/brand7white.svg';

import bannerDeskLogo from './../../Images/icons/desk-icon.svg';
import chairImage from './../../Images/black-chair.png'
import conferenceTableImage from './../../Images/conference-table.png'

const BrandBanner = () => {
  return (
      <section className='brand-banner background'>
        <Container className="brand-banner-container">
          <div className="brand-text">
            <img src={bannerLogo} alt=""/>
            <h3><span>35% OFF</span> ON ALL OUR MULTIPLE-UNIT DESK RANGE.</h3>
          </div>
          <div className="brand-image-wrapper">
            <img className="brand-image" src={bannerDeskLogo} alt=""/>
          </div>
        </Container>
        <Container className="sub-brands">
          <div className="brand-banner-container">
            <div className="brand-text">
              <img src={bannerLogo1} alt=""/>
              <h3 className="brand-text-title"><span>35% OFF</span> ON ALL OUR OFFICE CHAIRS RANGE.</h3>
            </div>
            <div className="brand-image-wrapper brand-image-wrapper-chair">
              <img className="brand-image image-chair" src={chairImage} alt=""/>
            </div>
          </div>
          <div className="basset-brand">
            <div className="brand-text">
              <img src={bannerLogo2} alt=""/>
              <div className="title">SALE ON CONFERENCE ROOM FURNITURE.</div>
            </div>
            <div className="brand-image-wrapper">
              <img className="brand-image" src={conferenceTableImage} alt=""/>
            </div>
          </div>

        </Container>
      </section>
  )
}

export default BrandBanner;
