import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalBox = () => {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const handleShow = (breakpoint) => {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <FontAwesomeIcon className='offcanvasBtn' icon={faBars} onClick={handleShow} />
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    );
}

export default ModalBox;


