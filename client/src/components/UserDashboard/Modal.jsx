
import React, { Component } from 'react';
import { OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';


class TestModal extends Component {
  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
            very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    return (
      <div>
        <h4>Text in a modal</h4>
        <p>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>

        <h4>Popover in a modal</h4>
        <p>
    there is a{' '}
          <OverlayTrigger overlay={popover}>
            <a href="#popover">popover</a>
          </OverlayTrigger>{' '}
    here
        </p>

        <h4>Tooltips in a modal</h4>
        <p>
    there is a{' '}
          <OverlayTrigger overlay={tooltip}>
            <a href="#tooltip">tooltip</a>
          </OverlayTrigger>{' '}
    here
        </p>

        <hr />

        <h4>Overflowing text to show scroll behavior</h4>
        <p>
    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
    ac consectetur ac, vestibulum at eros.
        </p>
        <p>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur
    et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
    auctor.
        </p>
      </div>
    );
  }
}
export default TestModal;

