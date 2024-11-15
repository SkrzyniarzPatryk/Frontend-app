import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../src/p1.jpg';
import logo2 from '../src/p2.jpg';
import logo3 from '../src/p3.jpg';
import { Navbar, Nav, Carousel, Card, Col, Row, Container } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Labolatorium 1</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Strona Główna</Nav.Link>
              <Nav.Link href="#features">Funkcje</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo1}
            alt="Pierwszy obraz"
          />
          <Carousel.Caption>
            <h3>Pierwszy obraz</h3>
            <p>Opis pierwszego obrazu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo2}
            alt="Drugi obraz"
          />
          <Carousel.Caption>
            <h3>Drugi obraz</h3>
            <p>Opis drugiego obrazu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo3}
            alt="Trzeci obraz"
          />
          <Carousel.Caption>
            <h3>Trzeci obraz</h3>
            <p>Opis trzeciego obrazu.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Karty */}
      <Container className="my-5">
        <h2>Nasze Karty</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Karta 1</Card.Title>
                <Card.Text>
                  Krótkie informacje o karcie 1.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Karta 2</Card.Title>
                <Card.Text>
                  Krótkie informacje o karcie 2.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Karta 3</Card.Title>
                <Card.Text>
                  Krótkie informacje o karcie 3.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Stopka */}
      <footer className="bg-dark text-light text-center py-3">
        <Container>
          <p>Wszelkie prawa nie sa zastrzeżone.</p>
        </Container>
      </footer>
    </div>
  );
};

export default App;
