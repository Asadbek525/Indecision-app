import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    ariaHideApp={false}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel='Selected Option'
    closeTimeoutMS={1000}
    className='modal'
  >
    <h3 className='modal__title'>Selected Option</h3>
    <div>
      {props.selectedOption && (
        <p className='modal__body'>{props.selectedOption}</p>
      )}
      <button className='button' onClick={props.handleClearSelectedOption}>
        Okay
      </button>
    </div>
  </Modal>
);

export default OptionModal;
