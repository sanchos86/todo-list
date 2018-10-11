import React from 'react';
import PropTypes from 'prop-types';

import {
  Overlay,
  ModalForm,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Heading,
  Cross,
  Button,
  TextArea,
  Error
} from './style';

const Modal = ({
  isModalOpened,
  text,
  error,
  toggleModal,
  handleSubmit,
  handleInput
}) => (
  <Overlay isModalOpened={isModalOpened}>
    <ModalForm onSubmit={e => handleSubmit(e)}>
      <ModalHeader>
        <Heading>Add Todo</Heading>
        <Cross onClick={() => toggleModal(false)}>&times;</Cross>
      </ModalHeader>
      <ModalBody>
        <TextArea onChange={e => handleInput(e)} value={text} />
        <Error error={error}>Todo text is required!</Error>
      </ModalBody>
      <ModalFooter>
        <Button isSubmit={false} onClick={() => toggleModal(false)}>
          Cancel
        </Button>
        <Button isSubmit={true}>Add todo</Button>
      </ModalFooter>
    </ModalForm>
  </Overlay>
);

Modal.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired
};

export default Modal;
