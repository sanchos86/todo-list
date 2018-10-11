import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { todosActions } from '../../../state/modules/todos';
import Main from '../Main';
import Modal from '../Modal';

class App extends React.Component {
  state = {
    isModalOpened: false,
    text: '',
    error: false
  };

  toggleModal = (openModal = true) => {
    this.setState({
      isModalOpened: openModal,
      text: '',
      error: false
    });
  };

  handleInput = (e) => {
    const text = e.target.value;
    this.setState({
      text
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    if (text.trim() === '') {
      this.setState({
        error: true
      });
      return;
    }
    this.props.addTodo(text);
    this.toggleModal(false);
  };

  render() {
    const { isModalOpened, text, error } = this.state;
    return (
      <>
        <Main toggleModal={this.toggleModal} />
        <Modal
          isModalOpened={isModalOpened}
          text={text}
          error={error}
          toggleModal={this.toggleModal}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: text => dispatch(todosActions.addTodo(text))
});

App.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(App);
