import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TokenEditor from './components/token-editor';
import RoomList, { EmptyRoomList } from './components/room-list';
import RoomFetchButton from './components/room-fetch-button';

const API_ROOMS_ENDPOINT = 'https://api.gitter.im/v1/rooms';

class App extends React.Component {
  state = {
    token: '',
    roomList: null,
    roomListFetching: false,
    roomListFetchingError: null,
  }

  changeToken = token => this.setState({ token });

  fetchRooms = () => {
    this.setState({
      roomListFetching: true,
      roomListFetchingError: null,
    });
    
    const { token } = this.state;
    
    fetch(API_ROOMS_ENDPOINT, { 
      headers: {               
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {  
        if (!response.ok) {
          throw Error(response.statusText); 
        } 

        return response.json(); 
      })
      .then(this.fetchRoomsSuccess) 
      .catch(this.fetchRoomsFailure); 
  }
  
  fetchRoomsSuccess = roomList => this.setState({  
    roomList,
    roomListFetching: false,
  });

  fetchRoomsFailure = error => this.setState({
    roomListFetching: false,
    roomListFetchingError: error,
  });

  render() {
    const { token, roomList, roomListFetching, roomListFetchingError } = this.state;
    const hasRooms = !!roomList && roomList.length > 0;

    return (
      <div className="center">
        <TokenEditor
          token={token}
          handleChange={this.changeToken}
        />
        {hasRooms
          ? <RoomList list={roomList} />
          : <EmptyRoomList />
        }
        <RoomFetchButton
          fetching={roomListFetching}
          error={roomListFetchingError}
          action={this.fetchRooms}
        />
        {roomListFetchingError && (
          <div className="error">
            Fetch rooms failure
          </div>
        )}
    	</div>
    );
  }
};

export default Application;
