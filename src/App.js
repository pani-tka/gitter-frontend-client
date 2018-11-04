import React, { Component } from 'react';
import Wrapper from './components/wrapper';
import Authorization from './components/authorization';
import MainLayout from './components/main-layout';
import Api from './api';

class App extends Component {
  state = {
    tokenField: '011c376dcb352c7a30ae8ec3b9a212f58339c013', // value for authorization component
    tokenVerificationError: null,
    verifiedToken: '',

    dataLoaded: false,
    dataLoading: false,
    dataLoadingError: null,
  
    user: null,
    rooms: null,

    selectedRoomId: null,
  }

  constructor(...args) {
    super(...args);

    this.api = new Api();
  }

  changeToken = (event) => {
    event.preventDefault();

    const tokenField = event.target.value;

    this.setState({ tokenField });
  }

  applyToken = () => {
    const { tokenField } = this.state;

    const regexp = /(([0-9])|([a-f])){40}/;

    if (regexp.test(tokenField)) {
      this.setState({
        tokenVerificationError: null,
        verifiedToken: tokenField,
      });

      this.api.setToken(tokenField);

      this.loadData();
    } else {
      this.setState({
        tokenVerificationError: 'Your token invalid',
      });
    }
  }

  loadData = () => {
    this.setState({
      dataLoading: true,
      dataLoadingError: null,
    });

    this.api.fetchData()
      .then(this.fetchDataSuccess)
      .catch(this.fetchDataFailure);
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

  selectRoom = (roomId) => {
    this.setState({ selectedRoomId: roomId });
  }

  getSelectedRoom = () => {
    const { rooms, selectedRoomId } = this.state;

    if (selectedRoomId) {
      return rooms.find(item => item.id === selectedRoomId);
    }

    return null;
  }

  render() {
    const {
      tokenField,
      tokenVerificationError,
      dataLoaded,
      dataLoading,
      dataLoadingError,
    } = this.state;

    if (!dataLoaded) {
      return (
        <Wrapper>
          <Authorization
            loading={dataLoading}
            token={tokenField}
            tokenVerificationError={tokenVerificationError || dataLoadingError}
            changeToken={this.changeToken}
            applyToken={this.applyToken}
          />
        </Wrapper>
      );
    }

    const {
      user,
      rooms,
    } = this.state;

    return (
      <Wrapper>
        <MainLayout
          user={user}
          rooms={rooms}
          selectedRoom={this.getSelectedRoom()}
          selectRoom={this.selectRoom}
        />
      </Wrapper>
    );
  }
};

export default App;
