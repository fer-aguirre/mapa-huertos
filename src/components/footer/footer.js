import './footer.css';
import React from 'react';
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import icon from './sprout.svg'

const Footer = () => {
    return (

      <MDBFooter color="blue" className="footer-text font-small pt-3 mt-0">
        <MDBContainer fluid className="text-center">
          <MDBRow>

            <h5 className="title"><img className="logo" alt="mapeo-huertos" src={icon} width="30px" height="30px" /> ¡Construyamos una red de huertos! <img className="logo" alt="mapeo-huertos" src={icon} width="30px" height="30px" /></h5>
            <hr></hr>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3" id="contacto">
          <MDBContainer fluid>
            <h6><b>Elaborado por <a href="https://www.instagram.com/huertolaluchita" target="_blank" rel='noreferrer noopener'> La Luchita </a></b></h6>
            <p>huertolaluchita@gmail.com</p>
          </MDBContainer>
        </div>
      </MDBFooter>

    );
  }
  
export default Footer;