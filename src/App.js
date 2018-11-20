import React, { Component } from 'react';
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

    user: null,
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

  loadData = () => {
    // this.setState({
    //   dataLoading: true,
    //   dataLoadingError: null,
    // });

    // dispatch({
    //   type: LOAD_DATA_STARTED,
    // });

    // this.api.fetchData()
    //   .then(() => {
    //     dispatch({
    //       type: LOAD_DATA_SUCCESS,
    //       sdfdsfas,
    //     })
    //   })
    //   .then(this.fetchDataSuccess)
    //   .catch(this.fetchDataFailure);
  }

  fetchDataSuccess = ([userResponse, roomsResponse]) => {
    this.setState({
      dataLoaded: true,
      dataLoading: false,
      user: userResponse[0],
      rooms: roomsResponse,
    });
  }

  fetchDataFailure = (error) => {
    this.setState({
      dataLoading: false,
      dataLoadingError: error.message,
    });
  }

  loadMessages = (roomId) => {
    this.setState({
      messagesLoading: true,
      messagesLoadingError: null,
    });

    this.api.fetchMessages(roomId)
      .then(this.fetchMessagesSuccess)
      .catch(this.fetchMessagesFailure);
  }

  fetchMessagesSuccess = (messages) => {
    this.setState({
      messagesLoading: false,
      messages,
    });
  }

  fetchMessagesFailure = (error) => {
    this.setState({
      messagesLoading: false,
      messagesLoadingError: error.message,
    });
  }

  selectRoom = (roomID) => {
    this.setState({
      selectedRoomID: roomID,
    });
  }

  getSelectedRoom = () => {
    const {rooms, selectedRoomID} = this.state;

    if (selectedRoomID) {
      return rooms.find(item => item.id === selectedRoomID);
    }

    return null;
  }

  render() {
    const {
      tokenVerificationError,
      dataLoaded,
      dataLoading,
      dataLoadingError,
    } = this.state;

    if (!dataLoaded) {
      return (
        <Wrapper>
          <Authorization loading={dataLoading} />
        </Wrapper>
      );
    }

    const {
      user,
      rooms,
      messages,
      messagesLoading,
    } = this.state;

    return (
      <Wrapper>
        <MainLayout
          user={user}
          rooms={rooms}
          // if you want to have messages in MainLayout you should pass the props with messages
          messages={messages}
          messagesLoading={messagesLoading}
          selectedRoom={this.getSelectedRoom()}
          selectRoom={this.selectRoom}
          loadMessages={this.loadMessages}
        />
      </Wrapper>
    );
  }
};

export default App;
