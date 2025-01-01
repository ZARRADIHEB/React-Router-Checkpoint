import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-warning text-white mb-5 ">
      <Container>
        <Navbar.Brand href="#">Movies Kingdom</Navbar.Brand>
        <Navbar.Toggle aria-controls="Movies Kingdom" />
        <Navbar.Collapse id="navbar">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
