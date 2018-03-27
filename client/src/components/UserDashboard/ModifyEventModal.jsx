import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Modal11 from './Modal.jsx';

class ModifyEventModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading1</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>test</h4>
            <Modal11 />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModifyEventModal;
