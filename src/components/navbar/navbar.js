import './navbar.css'
import {React, useState} from 'react';
import {Nav, Navbar, Container, Modal} from 'react-bootstrap';
import logo from './planet-earth.svg'
import icon1 from './harvest.svg'
import icon2 from './spinach.svg'
import icon3 from './earthworm.svg'


const Menu = () => {

    const [lgShow, setLgShow] = useState(false);

    return(
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><img className="logo" alt="mapeo-huertos" src={logo} width="40px" height="40px" /> Mapeo de Huertos</Navbar.Brand>
            <Nav className="menu-items">
            <Nav.Link href="/">Home<img className="logo" alt="mapeo-huertos" src={icon1} width="30px" height="30px" /></Nav.Link>
            <Nav.Link onClick={() => setLgShow(true)}>Info<img className="logo" alt="mapeo-huertos" src={icon2} width="27px" height="30px" /></Nav.Link>
            <Nav.Link href="#contacto">Contacto <img className="logo" alt="mapeo-huertos" src={icon3} width="27px" height="30px" /></Nav.Link>
            
            <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                {''}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br></br>
                <h5>Acerca de</h5>
                <p>El propósito de este mapeo es identificar huertos para crear una red autónoma 
                de la que surjan colaboraciones en torno a la agricultura urbana y la soberanía 
                alimentaria.</p>
                <br></br>
                <hr></hr>
                <br></br>
                <h5>¿Cómo agregar un huerto?</h5>
                <p>Ingresa al <a href="https://ee.humanitarianresponse.info/x/ku1aSCSv" target="_blank" rel='noreferrer noopener' >formulario</a> y registra los datos de tu huerto.</p>
            </Modal.Body>
            </Modal>
            
            </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;
