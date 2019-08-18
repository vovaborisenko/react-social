import React from 'react';
import s from './Modal.module.css';

const Modal = () => {
    return (
        <div id="settingsmodal" className="modal fade text-center">
            <div className={s.modal__dialog}>
                <div className="modal-content">
                </div>
            </div>
        </div>
    );
}

export default Modal;