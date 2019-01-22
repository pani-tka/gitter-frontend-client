import React, { Component } from 'react';
import { connect } from 'react-redux';
import Wrapper from './components/wrapper';
import Authorization from './components/authorization';
import MainLayout from './components/main-layout';
import Api from './api';
import './App.scss';

class App extends Component {
  state = {
    dataLoaded: false,
    dataLoading: false,
    dataLoadingError: null,

    rooms: null,

    messages: null,
    messagesLoading: false,
    messagesLoadingError: null,

    selectedRoomID: null,

  }

  constructor(...args) {
    super(...args);
    
    this.api = new Api();
  }

  render() {
    const { authSuccess } = this.props;

    const {
      dataLoading,
    } = this.state;

    if (!authSuccess) {
      return (
        <Wrapper>
          <Authorization loading={dataLoading} />
        </Wrapper>
      );
    }

    const {
      rooms,
      messages,
      messagesLoading,
    } = this.state;

    return (
      <Wrapper>
        <MainLayout
          rooms={rooms}
          messages={messages}
          messagesLoading={messagesLoading}
          selectedRoom={this.selectedRoom}
          selectRoom={this.selectRoom}
          loadMessages={this.loadMessages}
        />
      </Wrapper>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    authSuccess: !!state.verifiedToken && !!state.user,
  };
}

export default connect(mapStateToProps)(App);
