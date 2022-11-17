import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imgWebinar from './images/promoWebinar.jpg';
import Image from 'react-bootstrap/Image'
function Launch(){

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <h1 className='text-center'>Suscribete a nuestro WEBINAR</h1>
        <Button variant="primary" onClick={handleShow}>
          WEBINAR XTNEGOCIO
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>WEBINAR XTNEGOCIO</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <img fluid src={imgWebinar} className='img-fluid'/>
         
          </Offcanvas.Body>
          <div className="d-grid gap-2">
      <Button variant="primary" size="md">
       !Quiero asistir!
      </Button>
    
    </div>
        </Offcanvas>
        
      </>
    );
}
export default Launch;