import React from 'react'
import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import brandLogo from './images/Untitled.png'
import albums from './images/albums.png'
import rewind from './images/REWIND.png'
import play from './images/PLAY.png'
import ffwd from './images/FFWD.png'
import social from './images/social_button.png'

function MyModal(props) {
  return (
    <Modal {...props} size="sm" aria-labelledby="example-modal-sizes-title-sm" centered>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">Social Media</Modal.Title>
      </Modal.Header>
      <Modal.Body>Wegen einer technischen Störung stehen unsere Social Media - Kanäle derzeit leider nicht zur Verfügung. Wir bitten um Entschuldigung.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function App() {
  const [modalShow, setModalShow] = React.useState(false)
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
                  <Form.Control type="range" value="12" readOnly />
                </Form.Group>
              </Form>
              <Container
                style={{ backgroundColor: 'white', borderRadius: '5px', display: 'flex', alignItems: 'center' }}
              >
                <Form.Label style={{ margin: '0 0 0 20px' }}>0:42</Form.Label>
                <img src={rewind} style={{ width: '50px', height: 'auto', margin: '0 20px 0 120px' }} alt="rewind" />
                <img src={play} style={{ width: '50px', height: 'auto', margin: '0 20px 0 20px' }} alt="play" />
                <img src={ffwd} style={{ width: '50px', height: 'auto', margin: '0 20px 0 20px' }} alt="fastforward" />
                <img
                  src={social}
                  style={{ width: '50px', height: 'auto', margin: '0 20px 0 95px' }}
                  alt="socialshare"
                  onClick={() => setModalShow(true)}
                />
              </Container>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <MyModal show={modalShow} onHide={() => setModalShow(false)} />

      <Navbar bg="light" variant="light" fixed="bottom" style={{ textAlign: 'center', justifyContent: 'center' }}>
        <Navbar.Text style={{ display: 'inline-block' }}>
          <small>&copy;2019 Rosita GmbH - Paderborn/Schloss Neuhaus, Germany</small>{' '}
        </Navbar.Text>
      </Navbar>
    </div>
  )
}

export default App
