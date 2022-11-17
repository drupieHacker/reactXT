import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Menu(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">XTNEGOCIO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Inicio</Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
                <NavDropdown title="Certificaciones" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Agile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                   Scrum
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">ISO 27001</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    ISO 9001
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown title="Más" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">PMP</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Agile</NavDropdown.Item>

                </NavDropdown>
               
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Podcast</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                 Blog
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
}
export default Menu;