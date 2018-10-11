import styled from 'styled-components';
import { darken } from 'polished';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 15px;
  background-color: rgba(0, 0, 0, .5);
  display: ${props => props.isModalOpened ? 'block' : 'none'};
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  max-width: 750px;
  min-height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 15px 25px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 6px 15px rgba(207, 211, 218, 0.35);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h3`
  margin: 10px 0;
  font-size: 1.625rem;
`;

export const Cross = styled.span`
  font-size: 2rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  flex-grow: 1;
  margin: 25px 0 35px;
`;

export const TextArea = styled.textarea.attrs({
  placeholder: 'Enter todo text'
})`
  display: block;
  width: 100%;
  height: 12.5rem;
  padding: 15px;
  resize: none;
  border: 1px solid #3e434f;
  color: #3e434f;
  font-family: inherit;
  font-size: inherit;
  border-radius: 5px;
  &:focus {
    border-color: #50e3a4;
    outline: 0;
  }
`;

export const ModalFooter = styled.div`
  text-align: right;
`;

export const Button = styled.button.attrs({
  type: props => props.isSubmit ? 'submit' : 'button'
})`
  margin-left: 0.75rem;
  background-color: ${props => props.isSubmit ? '#50e3a4' : '#eef0f5'};
  color: ${props => props.isSubmit ? '#fff' : '#3e434f'};
  border: 0;
  border-radius: 3px;
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: .15s background-color ease-in-out;
  &:hover {
    background-color: ${props => props.isSubmit ? darken(0.15, '#50e3a4') : darken(0.15, '#eef0f5')};
  }
`;

export const Error = styled.p`
  display: ${props => props.error ? 'block' : 'none'};
  color: #ff0000;
`;

