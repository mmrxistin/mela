// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">Ferhenga Mela</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Malper</Nav.Link>
            <NavDropdown title="Tefsîr" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmavahi/mmmweb">.....</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmavahi/mmmobile">
                
             .....
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmavahi/mmmdesktop">.....</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmavahi/mmmai">
                
                .....
              </NavDropdown.Item>





              <NavDropdown.Item href="/malper/mmavahi/mmmhealth">
                .....
              </NavDropdown.Item>
            </NavDropdown>




            <NavDropdown title="Kelam" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmhewcedari/mmmweb">.....</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmhewcedari/mmmobile">
                
                
.....
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmhewcedari/mmmai">.....</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmhewcedari/mmmcp">
                
                .....
              </NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="Hedis" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmkargeh/mmmweb">..... </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkargeh/mmmobile">
                .....
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkargeh/mmmai">.....</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmkargeh/mmmcp">
                .....
              </NavDropdown.Item>
            </NavDropdown>












          


            <NavDropdown title="Fikih" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmkedkar/mmmapp">.....</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkedkar/mmmothr">
                
                .....
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkedkar/mmmad"> .....</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmkedkar/mmmadvanced">
                .....
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Erebî" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmwesayit">.....</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmwesayit/mmmdocs">
               .....
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmwesayit/mmmopns">.....</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmwesayit/mmmmm">
                .....
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/malper/mmmmm">Derbare </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;