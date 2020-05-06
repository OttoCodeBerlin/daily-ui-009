import React from 'react'
import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import brandLogo from './images/Untitled.png'
import albums from './images/albums.png'
import rewind from './images/rewind.svg'
import play from './images/play.svg'
import ffwd from './images/ffwd.svg'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          {' '}
          <img alt="" src={brandLogo} width="30" height="auto" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Rosita Music</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">OttoCodeBerlin</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid style={{ backgroundColor: 'lightslategrey', height: '90vh' }}>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Container
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '2vw',
              }}
            >
              <img src={albums} alt="" />
              <p style={{ margin: '10px 0 0 0 ' }}>Concorde '79 Theme</p>
              <p style={{ margin: ' 0 0 14px 0 ' }}>Lalo Schifrin - My Life In Movies</p>
              <Form>
                <Form.Group style={{ width: '50vw' }}>
                  <Form.Control type="range" value="12" /> <Form.Label>0:42</Form.Label>
                </Form.Group>
              </Form>
              <Container>
                <img src={rewind} style={{ width: '50px', height: 'auto', margin: "0 20px 0 20px" }} alt="rewind"/>
                <img src={play} style={{ width: '50px', height: 'auto', margin: "0 20px 0 20px" }} alt="play" />
                <img src={ffwd} style={{ width: '50px', height: 'auto', margin: "0 20px 0 20px" }} alt="fastforward" />
              </Container>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Navbar bg="light" variant="light" fixed="bottom" style={{ textAlign: 'center', justifyContent: 'center' }}>
        <Navbar.Text style={{ display: 'inline-block' }}>
          <small>&copy;2019 Rosita GmbH - Paderborn/Schloss Neuhaus, Germany</small>{' '}
        </Navbar.Text>
      </Navbar>
    </div>
  )
}

export default App
